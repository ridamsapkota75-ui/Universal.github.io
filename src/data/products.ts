export interface Product {
  slug: string;
  name: string;
  category: 'store' | 'school' | 'hospital' | 'office' | 'home';
  categoryTitle: string;
  tagline: string;
  description: string;
  featured?: boolean;
  specs: Record<string, string>;
  options?: {
    finishes?: string[];
    tiers?: string[];
    sizes?: string[];
  };
  images: string[];
}

export const CATEGORIES = [
  {
    slug: 'store',
    name: 'Retail Systems',
    shortName: 'Store & Supermarket',
    headline: 'Designed for Retail. Engineered for Performance.',
    description:
      'High-capacity modular supermarket gondola racks, wall racks, heavy-duty storage, and shopping systems built with high-grade steel and finished with UFI signature 9-step powder coating.',
    featuredProduct: 'double-sided-gondola-rack',
    image: '/images/store/double-sided-gondola-rack.png',
  },
  {
    slug: 'school',
    name: 'Education Systems',
    shortName: 'School & Institutional',
    headline: 'Where Young Minds Find Their Place.',
    description:
      'Ergonomic, heavy-gauge steel classroom double benches, student desks, and multi-tier institutional storage lockers engineered to withstand decades of rigorous daily school use.',
    featuredProduct: 'two-seater-classroom-bench',
    image: '/images/school/two-seater-classroom-bench.png',
  },
  {
    slug: 'hospital',
    name: 'Healthcare Systems',
    shortName: 'Hospital & Clinical',
    headline: 'Designed for Care. Built for Comfort.',
    description:
      'Clinical-grade adjustable patient and delivery beds, stainless medicine trolleys, and hygienic waiting benches treated with anti-corrosion chemical passivation for medical environments.',
    featuredProduct: 'obstetric-delivery-bed',
    image: '/images/hospital/obstetric-delivery-bed.png',
  },
  {
    slug: 'office',
    name: 'Workspace Systems',
    shortName: 'Office & Corporate',
    headline: 'Furniture That Works. Spaces That Inspire.',
    description:
      'Architectural executive desks, breathable ergonomic mesh chairs, and reinforced steel filing cabinets designed for daily corporate performance and aesthetic distinction.',
    featuredProduct: 'executive-office-desk',
    image: '/images/office/executive-office-desk.png',
  },
  {
    slug: 'home',
    name: 'Home Collection',
    shortName: 'Home & Living',
    headline: 'Furniture That Works. Wherever You Call Home.',
    description:
      'Industrial metal sofas, dining tables, and minimalist center tables bringing the same precision engineering and 9-step powder coating trusted by hospitals into modern residential spaces.',
    featuredProduct: 'metal-sofa-set',
    image: '/images/home/metal-sofa-set.png',
  },
];

export const products: Product[] = [
  // ----------------- STORE & SUPERMARKET -----------------
  {
    slug: 'double-sided-gondola-rack',
    name: 'Double-Sided Gondola Rack',
    category: 'store',
    categoryTitle: 'Retail Systems',
    tagline: 'Flagship Center-Aisle Supermarket Display Solution',
    description:
      'Our flagship retail display solution. Engineered with high-grade cold-rolled steel and finished with our signature 9-step pre-treatment powder coating for maximum scuff and corrosion resistance in high-traffic department stores and marts.',
    featured: true,
    specs: {
      'Load Capacity': '100 kg per tier (uniformly distributed)',
      'Structure': 'Slotted heavy-gauge steel uprights with center panel',
      'Finish': '9-step industrial electrostatic powder coating',
      'Configurability': 'Adjustable shelf heights and modular bay extensions',
      'Standard Colorway': 'Industrial Signal Blue uprights & Pure White shelves',
    },
    options: {
      tiers: ['4 Tiers per side', '5 Tiers per side', '6 Tiers per side'],
      finishes: ['Signal Blue / White (Standard)', 'Anthracite Dark Graphite', 'Custom RAL on Contract Order'],
      sizes: ['900mm Width x 1500mm Height', '1200mm Width x 1800mm Height', '1200mm Width x 2100mm Height'],
    },
    images: ['/images/store/double-sided-gondola-rack.png'],
  },
  {
    slug: 'supermarket-trolley',
    name: 'Supermarket Shopping Trolley',
    category: 'store',
    categoryTitle: 'Retail Systems',
    tagline: 'Heavy-Duty Zinc-Plated Retail Cart',
    description:
      'Durable shopping cart built with high-tensile wire mesh, reinforced undercarriage tray, and 360-degree smooth-rolling caster wheels for effortless customer navigation in department stores.',
    featured: false,
    specs: {
      'Basket Capacity': '100L / 125L volume options',
      'Material': 'High-tensile zinc-plated wire with clear protective coating',
      'Wheel System': '4x heavy-duty polyurethane ball-bearing casters',
      'Handle': 'Ergonomic blue composite handle bar with logo slot',
    },
    images: ['/images/store/supermarket-trolley.png'],
  },
  {
    slug: 'two-door-storage-cabinet',
    name: 'Heavy-Duty Two-Door Storage Cabinet',
    category: 'store',
    categoryTitle: 'Retail Systems',
    tagline: 'Secure Industrial Storage & Inventory Almirah',
    description:
      'All-steel welded storage cabinet featuring double reinforced doors, three-point locking mechanism, and heavy-gauge shelves built to secure back-office inventory and high-value retail merchandise.',
    featured: false,
    specs: {
      'Locking': 'Three-point cam lock with dual keys',
      'Shelving': '4 adjustable internal steel tiers',
      'Construction': 'Cold-rolled mild steel sheet 0.8mm - 1.2mm',
      'Corrosion Protection': 'Phosphated and electrostatic powder coated',
    },
    images: ['/images/store/two-door-storage-cabinet.png'],
  },

  // ----------------- SCHOOL & INSTITUTIONAL -----------------
  {
    slug: 'two-seater-classroom-bench',
    name: 'Two-Seater Classroom Bench & Desk',
    category: 'school',
    categoryTitle: 'Education Systems',
    tagline: 'Ergonomic Dual-Student Campus Workstation',
    description:
      'Ergonomic design for comfort that lasts a full school day — and a full school career. Solid wood-finish composite top mounted onto a welded powder-coated blue steel tube frame built to handle a generation of students.',
    featured: true,
    specs: {
      'Frame': 'Heavy-gauge welded tubular steel with blue powder coating',
      'Worktop': 'High-density scratch-resistant wood-finish laminate',
      'Book Storage': 'Integrated full-width steel wire/mesh under-desk shelf',
      'Safety': 'Rounded safety corners and protective floor leveling glides',
    },
    options: {
      tiers: ['Standard Dual Desk', 'Desk with Attached Bench', 'Separate Bench & Desk Unit'],
      finishes: ['Royal Blue Frame / Natural Teak Top', 'Black Frame / Walnut Top'],
      sizes: ['Primary School (Grades 1-5)', 'Secondary / College (Grades 6+)'],
    },
    images: ['/images/school/two-seater-classroom-bench.png'],
  },
  {
    slug: 'student-desk-chair-set',
    name: 'Single Student Desk & Chair Set',
    category: 'school',
    categoryTitle: 'Education Systems',
    tagline: 'Individual Ergonomic Examination Workstation',
    description:
      'Modular individual student desk paired with a matching ergonomic chair. Features a recessed steel book compartment and posture-supporting curved wooden seat and backrest.',
    featured: false,
    specs: {
      'Configuration': 'Individual single desk + independent matching chair',
      'Steel Frame': '25mm x 25mm box-section steel with anti-scratch coating',
      'Top Surface': 'Laminated wood core with PVC edge banding',
    },
    images: ['/images/school/student-desk-chair-set.png'],
  },
  {
    slug: 'steel-storage-locker',
    name: '9-Door Steel Storage Locker',
    category: 'school',
    categoryTitle: 'Education Systems',
    tagline: 'Multi-Compartment Secure Institutional Locker',
    description:
      'Nine-compartment steel storage system (3x3 grid) engineered for schools, universities, labs, and sports facilities. Each locker includes independent ventilation louvers and padlock hasps.',
    featured: false,
    specs: {
      'Compartments': '9 individual lockable doors with label holders',
      'Ventilation': 'Laser-cut ventilation louvers per compartment',
      'Sheet Gauge': 'Prime cold-rolled steel sheet, 0.8mm gauge',
      'Finish': 'Industrial metallic silver / light grey powder coat',
    },
    images: ['/images/school/steel-storage-locker.png'],
  },

  // ----------------- HOSPITAL & HEALTHCARE -----------------
  {
    slug: 'obstetric-delivery-bed',
    name: 'Obstetric Delivery Bed',
    category: 'hospital',
    categoryTitle: 'Healthcare Systems',
    tagline: 'Clinical Multi-Position Medical Patient Bed',
    description:
      'Built for modern maternity wards and patient rooms. Features multi-position adjustable backrest, collapsible safety rails, easy-clean medical upholstery, and the signature 9-step passivated coating for clinical anti-corrosion hygiene.',
    featured: true,
    specs: {
      'Adjustment': 'Manual mechanical crank and gas-spring position assist',
      'Safety Rails': 'Dual collapsible fold-down side rails with positive latches',
      'Mobility': '4x heavy-duty 125mm medical casters with diagonal locking brakes',
      'Mattress Deck': '3-section waterproof, high-density hospital-grade mattress',
      'Hygiene': 'Full chemical passivation ahead of medical antimicrobial finish',
    },
    options: {
      finishes: ['Clinical White & Hospital Blue', 'Stainless Steel Trim'],
      tiers: ['Manual Crank Mechanism', 'Dual Mechanism with Trendelenburg Support'],
    },
    images: ['/images/hospital/obstetric-delivery-bed.png'],
  },
  {
    slug: 'medicine-trolley',
    name: 'Medicine & Dressing Trolley (MS)',
    category: 'hospital',
    categoryTitle: 'Healthcare Systems',
    tagline: '2-Tier Stainless / Mild Steel Mobile Clinic Cart',
    description:
      'Precision utility trolley engineered for surgical wards, pharmacies, and treatment rooms. Two deep tray shelves with three-sided safety guard rails prevent bottles and surgical instruments from sliding off during transit.',
    featured: false,
    specs: {
      'Trays': 'Two-tier pressed stainless steel sheets with rim lips',
      'Frame': 'Seamless tubular steel handle rails with mirror polish',
      'Wheels': '100mm silent swivel casters (2 with directional locks)',
    },
    images: ['/images/hospital/medicine-trolley.png'],
  },
  {
    slug: 'hospital-bench-4-seater',
    name: 'Hospital Waiting Bench (4-Seater)',
    category: 'hospital',
    categoryTitle: 'Healthcare Systems',
    tagline: 'Heavy-Traffic Clinic & OPD Reception Seating',
    description:
      'Designed for hospital waiting halls and high-traffic diagnostic lobbies. Features four ergonomically contoured padded seats on a heavy-duty chrome-plated steel crossbeam.',
    featured: false,
    specs: {
      'Seating Capacity': '4 individuals (approx. 2200mm overall length)',
      'Beam': 'Heavy-duty rectangular steel tube, black powder coated',
      'Arms & Legs': 'Die-cast steel with high-gloss chrome plating',
      'Upholstery': 'Easy-disinfect commercial blue vinyl with foam padding',
    },
    images: ['/images/hospital/hospital-bench-4-seater.png'],
  },

  // ----------------- OFFICE & WORKSPACE -----------------
  {
    slug: 'executive-office-desk',
    name: 'Executive Office Desk',
    category: 'office',
    categoryTitle: 'Workspace Systems',
    tagline: 'Architectural Corporate Executive Workstation',
    description:
      'The anchor piece for modern executive workspaces. Heavy-gauge powder-coated steel frame beneath a durable warm walnut laminate work surface, featuring a perforated steel modesty panel and an integrated lockable 3-drawer pedestal unit.',
    featured: true,
    specs: {
      'Worktop': '1600mm x 800mm premium scratch-resistant melamine surface',
      'Steel Frame': 'Welded box-section steel with graphite powder finish',
      'Storage': '3-drawer side pedestal with central gang lock',
      'Modesty Panel': 'Perforated pressed steel with geometric acoustic venting',
    },
    options: {
      sizes: ['1400mm Executive Compact', '1600mm Executive Standard', '1800mm Director Size'],
      finishes: ['Graphite Steel & Warm Walnut', 'Anthracite Steel & Natural Oak'],
    },
    images: ['/images/office/executive-office-desk.png'],
  },
  {
    slug: 'ergonomic-mesh-chair',
    name: 'Ergonomic Mesh Office Chair',
    category: 'office',
    categoryTitle: 'Workspace Systems',
    tagline: 'High-Performance Lumbar Support Task Chair',
    description:
      'Engineered for 8+ hours of continuous corporate productivity. Features high-elasticity breathable back mesh, adjustable lumbar pad, height-adjustable headrest, and chrome-plated steel 5-star swivel base.',
    featured: false,
    specs: {
      'Backrest': 'Breathable high-tensile polyester mesh with lumbar curve',
      'Mechanism': 'Tilt-lock synchro mechanism with tension knob',
      'Gas Lift': 'Class 4 heavy-duty pneumatic height cylinder',
      'Base': '350mm chrome-plated steel 5-star base with nylon castors',
    },
    images: ['/images/office/ergonomic-mesh-chair.png'],
  },
  {
    slug: 'two-door-office-cabinet',
    name: 'Executive Office File Cabinet',
    category: 'office',
    categoryTitle: 'Workspace Systems',
    tagline: 'Lockable Document & Archive Storage Almirah',
    description:
      'Reinforced steel storage unit designed for corporate legal files, audit binders, and corporate stationery. 9-step electrostatic powder coat ensures silence and longevity.',
    featured: false,
    specs: {
      'Height': '1800mm tall cabinet with 4 adjustable shelves',
      'Locking': 'Concealed hinge steel doors with recessed locking cylinder',
      'Finish': 'Dual-tone office grey and deep navy powder coat',
    },
    images: ['/images/office/two-door-storage-cabinet.png'],
  },

  // ----------------- HOME & LIVING -----------------
  {
    slug: 'metal-sofa-set',
    name: 'Architectural Metal Sofa Set',
    category: 'home',
    categoryTitle: 'Home Collection',
    tagline: 'Industrial Steel Living Room Suite',
    description:
      'The same precision manufacturing and 9-step powder coating trusted by hospitals and institutions, brought into the contemporary living room. A precision steel-framed sofa built to outlast wooden alternatives by decades.',
    featured: true,
    specs: {
      'Frame': 'Welded precision steel tubing with electrostatic coating',
      'Cushions': 'High-density resilient foam with removable washable covers',
      'Configuration': 'Available in 3-seater, 2-seater, or complete suite',
      'Durability': '100% termite-proof, warp-proof, and humidity-resistant',
    },
    options: {
      sizes: ['2-Seater Loveseat', '3-Seater Living Sofa', 'Complete 3+2+1 Suite'],
      finishes: ['Satin Navy Steel / Charcoal Cushions', 'Matte Black / Slate Grey Cushions'],
    },
    images: ['/images/home/metal-sofa-set.png'],
  },
  {
    slug: 'metal-dining-table',
    name: 'Industrial Metal Dining Table',
    category: 'home',
    categoryTitle: 'Home Collection',
    tagline: 'Modern Minimalist Steel Dining Table',
    description:
      'Minimalist industrial dining table pairing heavy-duty trapezoidal steel legs with an easy-clean architectural surface. Engineered for family dining and multi-purpose hosting.',
    featured: false,
    specs: {
      'Base': 'Trapezoid welded steel box-section with matte powder coat',
      'Top': 'Solid engineered wood with waterproof edging',
      'Seating': 'Comfortably seats 6 adults',
    },
    images: ['/images/home/metal-dining-table.png'],
  },
  {
    slug: 'metal-coffee-table',
    name: 'Geometric Metal Coffee Table',
    category: 'home',
    categoryTitle: 'Home Collection',
    tagline: 'Architectural Center Table with Steel Frame',
    description:
      'Modern geometric accent center table featuring dual-tier circular surfaces supported by an architectural steel hairpin frame. Ideal for contemporary living spaces and office executive lounges.',
    featured: false,
    specs: {
      'Frame': 'Solid steel rod and tube welded assembly',
      'Diameter': '800mm diameter round top with lower magazine ring',
      'Finish': 'Signature electric blue / graphite powder finish',
    },
    images: ['/images/home/metal-coffee-table.png'],
  },
];
