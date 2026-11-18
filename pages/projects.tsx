import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from '../src/components/NavBar';
import Footer from '../src/components/Footer';

const projectSectors = [
  {
    title: 'Modern Retail & Supermarkets',
    category: 'Retail Systems',
    headline: 'High-Density Merchandising for Departmental Stores',
    description:
      'Engineered for maximum weight capacity and visual clarity. UFI gondola systems and shopping trolleys allow grocery chains, departmental marts, and retail stores to optimize floor layout and inventory flow.',
    image: '/Universal.github.io/images/store/double-sided-gondola-rack.png',
    bgImage: '/Universal.github.io/images/backgrounds/supermarket-interior.jpg',
    link: '/products/store',
    highlights: ['100kg per tier load capacity', 'Modular aisle reconfiguration', 'Impact-resistant powder coating'],
  },
  {
    title: 'Schools, Colleges & Training Institutes',
    category: 'Education Systems',
    headline: 'Ergonomic Classrooms Built for Academic Longevity',
    description:
      'Campuses demand furniture that survives heavy daily student traffic without wobbling or surface degradation. Our welded steel benches and lockable student lockers deliver durability across generations of learners.',
    image: '/Universal.github.io/images/school/two-seater-classroom-bench.png',
    bgImage: '/Universal.github.io/images/backgrounds/classroom-modern.jpg',
    link: '/products/school',
    highlights: ['Posture-correct ergonomic wood curves', 'Integrated book and mesh racks', 'Heavy-gauge steel frames'],
  },
  {
    title: 'Hospitals, Clinics & Maternity Centers',
    category: 'Healthcare Systems',
    headline: 'Clinical Hygiene and Dependable Patient Support',
    description:
      'Healthcare settings demand absolute cleanliness and corrosion resistance. Our 9-step passivated obstetric beds and stainless medicine carts withstand chemical disinfectants and daily sanitization.',
    image: '/Universal.github.io/images/hospital/obstetric-delivery-bed.png',
    bgImage: '/Universal.github.io/images/backgrounds/hospital-room.jpg',
    link: '/products/hospital',
    highlights: ['Chemical passivation barrier', 'Smooth caster mobility with locks', 'Multi-section adjustments'],
  },
  {
    title: 'Corporate Offices & Workspaces',
    category: 'Workspace Systems',
    headline: 'Functional Executive Desks and Archival Security',
    description:
      'Balancing professional elegance with industrial stability. UFI provides corporate headquarters, banks, and legal offices with executive desks, ergonomic mesh task seating, and lockable storage cabinets.',
    image: '/Universal.github.io/images/office/executive-office-desk.png',
    bgImage: '/Universal.github.io/images/backgrounds/modern-office.jpg',
    link: '/products/office',
    highlights: ['Scratch-resistant laminate work surfaces', 'Perforated acoustic modesty panels', 'Three-point gang locks'],
  },
  {
    title: 'Contemporary Residential Spaces',
    category: 'Home Collection',
    headline: 'Durable Metal Craft for the Modern Home',
    description:
      'Bringing the durability of commercial metal manufacturing into living spaces. Termite-proof, humidity-proof, and designed with sleek industrial geometry that outlasts conventional wood furniture.',
    image: '/Universal.github.io/images/home/metal-sofa-set.png',
    bgImage: '/Universal.github.io/images/backgrounds/modern-living.jpg',
    link: '/products/home',
    highlights: ['100% termite and moisture-proof', 'Electrostatic satin blue/graphite finish', 'Easy-clean cushion integration'],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Sectors & Environments | Universal Furniture Industries (UFI)</title>
        <meta
          name="description"
          content="Explore the five specialized industrial furniture sectors served by UFI Chitwan: retail supermarkets, educational campuses, healthcare clinics, corporate offices, and modern homes."
        />
      </Head>

      <NavBar />

      <main className="min-h-screen bg-deepNavy text-steelWhite pt-24 sm:pt-28">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 border-b border-electricBlue/20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/Universal.github.io/images/backgrounds/factory-interior.jpg"
              alt="Industrial furniture manufacturing"
              fill
              className="object-cover opacity-25"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-deepNavy/60 via-deepNavy/80 to-deepNavy pointer-events-none" />
          </div>
          <div className="relative max-w-5xl mx-auto px-4 text-center">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-electricBlue/20 border border-electricBlue/40 text-electricBlue font-mono text-xs font-semibold uppercase tracking-widest mb-4">
              COMMERCIAL &amp; INSTITUTIONAL SECTORS
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              MADE FOR THE SPACES THAT MATTER.
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-metallicSilver max-w-2xl mx-auto leading-relaxed">
              One manufacturing standard, five specialized sectors — proven across thousands of institutions throughout Nepal since 1990.
            </p>
          </div>
        </section>

        {/* Sectors Grid / Editorial Showcase */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
          {projectSectors.map((sector, idx) => (
            <div
              key={sector.category}
              className={`relative flex flex-col ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } items-center gap-12 bg-darkBlue/40 border border-electricBlue/20 hover:border-electricBlue/40 p-8 sm:p-12 rounded-3xl transition duration-300 shadow-xl overflow-hidden`}
            >
              {/* Sector Background */}
              <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
                <Image
                  src={sector.bgImage}
                  alt={sector.title}
                  fill
                  className="object-cover opacity-15"
                  sizes="100vw"
                />
              </div>

              {/* Product Visual Presentation */}
              <div className="relative z-10 w-full lg:w-1/2 flex items-center justify-center bg-deepNavy/80 border border-electricBlue/25 rounded-2xl p-8 overflow-hidden group">
                <div className="absolute top-3 left-4 text-[10px] font-mono uppercase text-electricBlue tracking-wider">
                  SECTOR REF: 0{idx + 1}
                </div>
                <div className="relative w-full h-64 sm:h-80 flex items-center justify-center">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Sector Content */}
              <div className="relative z-10 w-full lg:w-1/2 space-y-4">
                <div className="inline-block px-3 py-1 rounded bg-deepNavy border border-electricBlue/30 text-electricBlue text-xs font-mono font-semibold uppercase">
                  {sector.category}
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-steelWhite">
                  {sector.title}
                </h2>
                <h3 className="text-sm sm:text-base font-semibold text-iceBlue">
                  {sector.headline}
                </h3>
                <p className="text-sm sm:text-base text-metallicSilver leading-relaxed">
                  {sector.description}
                </p>

                {/* Key Sector Highlights */}
                <ul className="space-y-2 pt-2">
                  {sector.highlights.map((h, i) => (
                    <li key={i} className="flex items-center space-x-2 text-xs sm:text-sm text-metallicSilver/90 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-electricBlue" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 flex items-center space-x-4">
                  <Link
                    href={sector.link}
                    className="px-6 py-2.5 rounded-xl bg-electricBlue hover:bg-royalBlue text-white text-xs font-semibold tracking-wider uppercase transition shadow-md"
                  >
                    Explore {sector.category}
                  </Link>
                  <Link
                    href="/contact"
                    className="px-6 py-2.5 rounded-xl bg-deepNavy border border-electricBlue/30 hover:border-electricBlue text-iceBlue text-xs font-semibold tracking-wider uppercase transition"
                  >
                    Inquire for Sector
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Bottom Note on Verification */}
          <div className="text-center bg-deepNavy/80 border border-electricBlue/20 rounded-2xl p-6 max-w-3xl mx-auto">
            <p className="text-xs font-mono text-metallicSilver/70">
              UFI manufactures to customer-specified dimensional floor plans. All photos represent actual production lines manufactured at our Bharatpur, Chitwan plant.
            </p>
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
