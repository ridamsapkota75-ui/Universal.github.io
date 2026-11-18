import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import NavBar from '../src/components/NavBar';
import Footer from '../src/components/Footer';

export default function ContactPage() {
  const router = useRouter();
  const { category: queryCategory, product: queryProduct } = router.query;

  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    phone: '',
    email: '',
    category: '',
    quantity: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState<string>('');
  const [inquiryRef, setInquiryRef] = useState<string>('');

  useEffect(() => {
    if (queryCategory && typeof queryCategory === 'string') {
      setFormData((prev) => ({ ...prev, category: queryCategory }));
    }
    if (queryProduct && typeof queryProduct === 'string') {
      const formattedModel = queryProduct.replace(/-/g, ' ').toUpperCase();
      setFormData((prev) => ({
        ...prev,
        message: prev.message || `Inquiry for model: ${formattedModel}. Please provide pricing, lead time, and specifications.`,
      }));
    }
  }, [queryCategory, queryProduct]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setFeedback('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setFeedback(data.message || 'Inquiry registered successfully.');
        setInquiryRef(data.inquiryId || '');
        setFormData({
          fullName: '',
          organization: '',
          phone: '',
          email: '',
          category: '',
          quantity: '',
          message: '',
        });
      } else {
        setStatus('error');
        setFeedback(data.error || 'Failed to submit inquiry. Please check your inputs.');
      }
    } catch (err) {
      setStatus('error');
      setFeedback('Network connection error. Please call +977-9855053857 directly.');
    }
  };

  return (
    <>
      <Head>
        <title>Contact &amp; Quotation | Universal Furniture Industries (UFI) Chitwan</title>
        <meta
          name="description"
          content="Request a quotation for supermarket gondola racks, school desks, hospital beds, and office furniture from UFI Chitwan, Nepal. Phone: +977-9855053857."
        />
      </Head>

      <NavBar />

      <main className="min-h-screen bg-deepNavy text-steelWhite pt-24 sm:pt-28 pb-20">
        {/* Header */}
        <section className="relative py-16 sm:py-20 border-b border-electricBlue/20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/backgrounds/modern-office.jpg"
              alt="Modern workspace"
              fill
              className="object-cover opacity-20"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-deepNavy/60 via-deepNavy/80 to-deepNavy pointer-events-none" />
          </div>
          <div className="relative max-w-5xl mx-auto px-4 text-center">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-electricBlue/20 border border-electricBlue/40 text-electricBlue font-mono text-xs font-semibold uppercase tracking-widest mb-4">
              CHITWAN WORKS &bull; ESTIMATION DESK
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              LET&apos;S BUILD SOMETHING BETTER.
            </h1>
            <p className="mt-4 text-base sm:text-xl text-metallicSilver max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re outfitting a single office or fitting out an entire hospital ward or supermarket, our engineering team in Chitwan is ready to provide precise factory estimates.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Contact & Factory Verification */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-darkBlue/70 border border-electricBlue/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
                <h3 className="text-xl font-bold text-steelWhite mb-6 flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-electricBlue" />
                  <span>Factory &amp; Works Office</span>
                </h3>

                <div className="space-y-6 text-sm text-metallicSilver">
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-electricBlue mb-1">
                      Manufacturer
                    </span>
                    <p className="text-steelWhite font-medium text-base">
                      Universal Furniture Industries (UFI)
                    </p>
                  </div>

                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-electricBlue mb-1">
                      Factory Address
                    </span>
                    <p className="text-steelWhite leading-snug">
                      Bharatpur-07, Srijana Tole,<br />
                      Chitwan, Bagmati Province, Nepal
                    </p>
                  </div>

                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-electricBlue mb-1">
                      Direct Telephone
                    </span>
                    <a
                      href="tel:+9779855053857"
                      className="text-lg font-mono font-bold text-iceBlue hover:text-electricBlue transition"
                    >
                      +977-9855053857
                    </a>
                  </div>

                  <div className="pt-2 flex flex-col gap-2.5">
                    <a
                      href="https://wa.me/9779855053857"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-semibold text-sm transition shadow-lg shadow-green-600/30"
                    >
                      <span>Chat on WhatsApp (+977-9855053857)</span>
                    </a>

                    <a
                      href="https://www.facebook.com/ufichitwan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Connect with UFI on Facebook (opens in new tab)"
                      className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-[#1877F2]/90 hover:bg-[#1877F2] text-white font-semibold text-sm transition shadow-lg shadow-blue-600/30 group"
                    >
                      <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                      <span>Follow on Facebook (@ufichitwan)</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Information / Directions Box */}
              <div className="bg-darkBlue/70 border border-electricBlue/20 rounded-3xl p-6 shadow-xl">
                <h4 className="text-sm font-mono uppercase tracking-wider text-iceBlue font-bold mb-3">
                  Location &amp; Delivery Logistics
                </h4>
                <p className="text-xs text-metallicSilver/80 leading-relaxed mb-4">
                  Strategically located in Bharatpur, Chitwan — Nepal&apos;s central commercial hub. We manage secure freight delivery for departmental stores, universities, and hospitals across East, Central, and Western Nepal.
                </p>
                <div className="rounded-xl overflow-hidden border border-electricBlue/20 bg-deepNavy h-40 flex items-center justify-center text-center p-4">
                  <div>
                    <span className="block font-mono text-xs text-electricBlue font-bold">
                      GPS: 27.6668721° N, 84.4262832° E
                    </span>
                    <span className="text-xs text-metallicSilver/60 mt-1 block">
                      Bharatpur-07, Srijana Tole, Chitwan
                    </span>
                    <a
                      href="https://maps.google.com/?q=27.6668721,84.4262832"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-xs font-mono text-iceBlue underline hover:text-electricBlue"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Complete Quotation Form */}
            <div className="lg:col-span-7">
              <div className="bg-darkBlue/80 border border-electricBlue/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-steelWhite">
                    Official Quotation &amp; Project Inquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-metallicSilver mt-1">
                    Fill out the specifications below. All submissions are directly assigned to an estimation engineer in Chitwan.
                  </p>
                </div>

                {status === 'success' ? (
                  <div className="bg-deepNavy/90 border border-green-500/50 rounded-2xl p-8 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center mx-auto text-green-400 text-2xl font-bold">
                      ✓
                    </div>
                    <h4 className="text-xl font-bold text-steelWhite">
                      Inquiry Registered Successfully
                    </h4>
                    <p className="text-sm text-metallicSilver max-w-md mx-auto leading-relaxed">
                      {feedback}
                    </p>
                    {inquiryRef && (
                      <div className="inline-block px-4 py-2 rounded-lg bg-darkBlue font-mono text-xs text-electricBlue border border-electricBlue/30">
                        REFERENCE CODE: {inquiryRef}
                      </div>
                    )}
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => setStatus('idle')}
                        className="px-6 py-2.5 rounded-xl bg-electricBlue text-white text-xs font-mono font-semibold uppercase tracking-wider"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {status === 'error' && (
                      <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/50 text-red-300 text-xs sm:text-sm">
                        {feedback}
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono uppercase text-metallicSilver mb-1.5">
                          Full Name <span className="text-electricBlue">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Ramesh Adhikari"
                          className="w-full bg-deepNavy border border-electricBlue/30 focus:border-electricBlue rounded-xl px-4 py-3 text-sm text-steelWhite focus:outline-none transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase text-metallicSilver mb-1.5">
                          Organization / Company <span className="text-metallicSilver/40">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          placeholder="e.g. Chitwan Mart / School / Hospital"
                          className="w-full bg-deepNavy border border-electricBlue/30 focus:border-electricBlue rounded-xl px-4 py-3 text-sm text-steelWhite focus:outline-none transition"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono uppercase text-metallicSilver mb-1.5">
                          Phone Number <span className="text-electricBlue">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +977-98XXXXXXXX"
                          className="w-full bg-deepNavy border border-electricBlue/30 focus:border-electricBlue rounded-xl px-4 py-3 text-sm text-steelWhite focus:outline-none transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase text-metallicSilver mb-1.5">
                          Email Address <span className="text-electricBlue">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. procurement@domain.com"
                          className="w-full bg-deepNavy border border-electricBlue/30 focus:border-electricBlue rounded-xl px-4 py-3 text-sm text-steelWhite focus:outline-none transition"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono uppercase text-metallicSilver mb-1.5">
                          Product Category <span className="text-electricBlue">*</span>
                        </label>
                        <select
                          name="category"
                          required
                          value={formData.category}
                          onChange={handleChange}
                          className="w-full bg-deepNavy border border-electricBlue/30 focus:border-electricBlue rounded-xl px-4 py-3 text-sm text-steelWhite focus:outline-none transition"
                        >
                          <option value="">Select Category...</option>
                          <option value="store">Store &amp; Supermarket Furniture (Retail Systems)</option>
                          <option value="school">School &amp; Institutional Furniture (Education Systems)</option>
                          <option value="hospital">Hospital &amp; Clinical Furniture (Healthcare Systems)</option>
                          <option value="office">Office &amp; Corporate Furniture (Workspace Systems)</option>
                          <option value="home">Home &amp; Residential Furniture (Home Collection)</option>
                          <option value="custom">Custom Metal Fabrication / Project Specification</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase text-metallicSilver mb-1.5">
                          Estimated Quantity / Scope
                        </label>
                        <input
                          type="text"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          placeholder="e.g. 20 Gondolas / 100 Desks"
                          className="w-full bg-deepNavy border border-electricBlue/30 focus:border-electricBlue rounded-xl px-4 py-3 text-sm text-steelWhite focus:outline-none transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-metallicSilver mb-1.5">
                        Inquiry &amp; Dimensions Details <span className="text-electricBlue">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe your space requirements, shelf tier needs, required delivery date or project location in Nepal..."
                        className="w-full bg-deepNavy border border-electricBlue/30 focus:border-electricBlue rounded-xl p-4 text-sm text-steelWhite focus:outline-none transition"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-electricBlue to-royalBlue hover:from-royalBlue hover:to-electricBlue text-white font-semibold text-sm tracking-wider uppercase transition duration-300 shadow-xl shadow-electricBlue/30 disabled:opacity-50"
                      >
                        {status === 'loading' ? 'Recording Inquiry in Chitwan...' : 'Send Inquiry to Factory'}
                      </button>
                    </div>

                    <p className="text-[11px] font-mono text-metallicSilver/60 text-center">
                      Direct factory quotation &bull; No middleman markups &bull; Verified response within 24 business hours
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
