import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const { fullName, organization, phone, email, category, quantity, message } = req.body || {};

    // Strict Server-Side Validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return res.status(400).json({ success: false, error: 'Please provide a valid full name.' });
    }

    if (!phone || typeof phone !== 'string' || phone.trim().length < 7) {
      return res.status(400).json({ success: false, error: 'Please provide a valid contact phone number.' });
    }

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ success: false, error: 'Please provide a valid email address.' });
    }

    if (!category || typeof category !== 'string') {
      return res.status(400).json({ success: false, error: 'Please select a product category.' });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return res.status(400).json({ success: false, error: 'Please provide inquiry message details.' });
    }

    const inquiryRecord = {
      id: `INQ-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      timestamp: new Date().toISOString(),
      fullName: fullName.trim(),
      organization: (organization || 'N/A').toString().trim(),
      phone: phone.trim(),
      email: email.trim(),
      category: category.trim(),
      quantity: (quantity || 'Not specified').toString().trim(),
      message: message.trim(),
      status: 'pending',
      emailDelivered: false,
    };

    // 1. Secure Local Storage Persistence in data/inquiries.json
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'inquiries.json');

    try {
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      let existingInquiries: any[] = [];
      if (fs.existsSync(filePath)) {
        try {
          const fileData = fs.readFileSync(filePath, 'utf-8');
          existingInquiries = JSON.parse(fileData) || [];
        } catch (e) {
          existingInquiries = [];
        }
      }

      existingInquiries.push(inquiryRecord);
      fs.writeFileSync(filePath, JSON.stringify(existingInquiries, null, 2), 'utf-8');
    } catch (fsErr) {
      console.error('Failed to write inquiry to local storage:', fsErr);
      return res.status(500).json({
        success: false,
        error: 'Database storage error. Failed to record your inquiry. Please call +977-9855053857 directly.',
      });
    }

    // 2. Optional Email Dispatch via EmailJS (if configured via env vars)
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const userId = process.env.EMAILJS_USER_ID;

    if (serviceId && templateId && userId) {
      try {
        const emailjs = await import('emailjs-com');
        await emailjs.send(
          serviceId,
          templateId,
          {
            full_name: inquiryRecord.fullName,
            organization: inquiryRecord.organization,
            phone: inquiryRecord.phone,
            email: inquiryRecord.email,
            category: inquiryRecord.category,
            quantity: inquiryRecord.quantity,
            message: inquiryRecord.message,
          },
          userId
        );
        inquiryRecord.emailDelivered = true;
      } catch (emailErr) {
        console.warn('Email dispatch warning (stored securely to database regardless):', emailErr);
      }
    }

    // Genuinely recorded response
    return res.status(200).json({
      success: true,
      inquiryId: inquiryRecord.id,
      message: 'Inquiry securely received and registered in our Chitwan production queue.',
      details: {
        reference: inquiryRecord.id,
        contact: '+977-9855053857',
        location: 'Bharatpur-07, Chitwan, Nepal',
      },
    });
  } catch (err: any) {
    console.error('Contact API Error:', err);
    return res.status(500).json({
      success: false,
      error: 'An unexpected server error occurred while processing your inquiry.',
    });
  }
}
