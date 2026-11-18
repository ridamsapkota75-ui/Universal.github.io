import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from '../src/components/NavBar';
import Footer from '../src/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Universal Furniture Industries (UFI) Chitwan</title>
        <meta
          name="description"
          content="Universal Furniture Industries has been manufacturing metal furniture in Chitwan, Nepal since 1990. Learn about our 34+ years of industrial precision, values, and manufacturing heritage."
        />
      </Head>

      <NavBar />

      <main className="min-h-screen bg-deepNavy text-steelWhite pt-24 sm:pt-28">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 border-b border-electricBlue/20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/Universal.github.io/images/backgrounds/team-industrial.jpg"
              alt="Industrial manufacturing team"
              fill
              className="object-cover opacity-30"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-deepNavy/60 via-deepNavy/80 to-deepNavy pointer-events-none" />
          </div>
          <div className="relative max-w-5xl mx-auto px-4 text-center">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-electricBlue/20 border border-electricBlue/40 text-electricBlue font-mono text-xs font-semibold uppercase tracking-widest mb-4">
              CHITWAN, NEPAL • ESTABLISHED 1990
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              BUILT ON EXPERIENCE.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-iceBlue via-electricBlue to-metallicSilver">
                DRIVEN BY ENGINEERING.
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-xl text-metallicSilver max-w-2xl mx-auto leading-relaxed">
              Universal Furniture Industries has manufactured metal furniture from a single Chitwan facility for over three decades — every piece built to the same 9-step durability standard.
            </p>
          </div>
        </section>

        {/* Verified Heritage Metrics Bar */}
        <section className="bg-darkBlue/80 border-b border-electricBlue/20 py-12">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-electricBlue/20">
            <div className="pt-4 md:pt-0">
              <span className="block text-4xl sm:text-5xl font-mono font-extrabold text-electricBlue">
                1990
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-metallicSilver mt-2 block">
                Established in Chitwan, Nepal
              </span>
              <p className="text-xs text-metallicSilver/60 mt-1">Operating continuously for 34+ years</p>
            </div>

            <div className="pt-4 md:pt-0">
              <span className="block text-4xl sm:text-5xl font-mono font-extrabold text-electricBlue">
                34+
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-metallicSilver mt-2 block">
                Years of Manufacturing
              </span>
              <p className="text-xs text-metallicSilver/60 mt-1">Specialized cold-rolled steel fabrication</p>
            </div>

            <div className="pt-4 md:pt-0">
              <span className="block text-4xl sm:text-5xl font-mono font-extrabold text-electricBlue">
                10,000+
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-metallicSilver mt-2 block">
                Institutional Installations
              </span>
              <p className="text-xs text-metallicSilver/60 mt-1">Marts, schools, wards &amp; offices across Nepal</p>
            </div>
          </div>
        </section>

        {/* Company Story & Manufacturing Philosophy */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-electricBlue font-semibold">
                OUR HERITAGE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-steelWhite mt-1 mb-4">
                Furniture That Works. Solutions That Drive Your Business.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-metallicSilver/90 leading-relaxed">
                <p>
                  Founded in 1990 in Bharatpur-07, Chitwan, Universal Furniture Industries began with a commitment to solve a persistent problem across Nepal: furniture that rusted quickly in the monsoon climate and buckled under heavy institutional use.
                </p>
                <p>
                  By establishing our own in-house 9-step chemical dip pre-treatment and electrostatic powder-coating facility, we transformed metal furniture from temporary fixtures into multi-decade investments for departmental stores, schools, clinical centers, and workplaces.
                </p>
                <p>
                  Today, UFI remains rooted in Chitwan, serving customers from local businesses in Narayangarh to government hospitals and nationwide retail chains across all provinces.
                </p>
              </div>
            </div>

            {/* Technical Factory Factsheet Box */}
            <div className="bg-darkBlue/70 border border-electricBlue/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-lg font-bold text-iceBlue mb-4 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-electricBlue" />
                <span>Verified Manufacturing Facts</span>
              </h3>
              <div className="space-y-3.5 text-xs sm:text-sm font-mono text-metallicSilver divide-y divide-electricBlue/15">
                <div className="pt-2 flex justify-between">
                  <span className="text-metallicSilver/60">Business Name</span>
                  <span className="text-steelWhite font-medium">Universal Furniture Industries (UFI)</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-metallicSilver/60">Facility Location</span>
                  <span className="text-steelWhite font-medium">Bharatpur-07, Srijana Tole, Chitwan</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-metallicSilver/60">Specialization</span>
                  <span className="text-steelWhite font-medium">Precision Metal Furniture</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-metallicSilver/60">Coating Process</span>
                  <span className="text-steelWhite font-medium">9-Step Phosphated Powder Coat</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-metallicSilver/60">Primary Market</span>
                  <span className="text-steelWhite font-medium">Nepal Nationwide</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-metallicSilver/60">Telephone</span>
                  <span className="text-electricBlue font-bold">+977-9855053857</span>
                </div>
              </div>
            </div>
          </div>

          {/* Four Core Values */}
          <div className="mt-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-electricBlue">
                OUR CORE COMMITMENTS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-steelWhite mt-1">
                Four Pillars of UFI Craftsmanship
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-darkBlue/70 border border-electricBlue/20 rounded-2xl p-6 hover:border-electricBlue/50 transition duration-300">
                <div className="w-10 h-10 rounded-xl bg-deepNavy border border-electricBlue/40 flex items-center justify-center text-electricBlue font-mono font-bold mb-4">
                  01
                </div>
                <h4 className="text-lg font-bold text-steelWhite mb-2">BUILT TO LAST</h4>
                <p className="text-xs sm:text-sm text-metallicSilver/80 leading-relaxed">
                  High-quality cold-rolled steel and chemical passivated finishes engineered for long-lasting structural performance.
                </p>
              </div>

              <div className="bg-darkBlue/70 border border-electricBlue/20 rounded-2xl p-6 hover:border-electricBlue/50 transition duration-300">
                <div className="w-10 h-10 rounded-xl bg-deepNavy border border-electricBlue/40 flex items-center justify-center text-electricBlue font-mono font-bold mb-4">
                  02
                </div>
                <h4 className="text-lg font-bold text-steelWhite mb-2">SMART DESIGN</h4>
                <p className="text-xs sm:text-sm text-metallicSilver/80 leading-relaxed">
                  Functional, modular, and space-saving engineering tailored to real departmental store aisles and institutional rooms.
                </p>
              </div>

              <div className="bg-darkBlue/70 border border-electricBlue/20 rounded-2xl p-6 hover:border-electricBlue/50 transition duration-300">
                <div className="w-10 h-10 rounded-xl bg-deepNavy border border-electricBlue/40 flex items-center justify-center text-electricBlue font-mono font-bold mb-4">
                  03
                </div>
                <h4 className="text-lg font-bold text-steelWhite mb-2">PREMIUM QUALITY</h4>
                <p className="text-xs sm:text-sm text-metallicSilver/80 leading-relaxed">
                  Finely crafted welding, rounded safety corners, and electrostatic curing for maximum safety, strength, and reliability.
                </p>
              </div>

              <div className="bg-darkBlue/70 border border-electricBlue/20 rounded-2xl p-6 hover:border-electricBlue/50 transition duration-300">
                <div className="w-10 h-10 rounded-xl bg-deepNavy border border-electricBlue/40 flex items-center justify-center text-electricBlue font-mono font-bold mb-4">
                  04
                </div>
                <h4 className="text-lg font-bold text-steelWhite mb-2">TRUSTED PARTNER</h4>
                <p className="text-xs sm:text-sm text-metallicSilver/80 leading-relaxed">
                  Committed to straightforward factory pricing, honest lead times, on-time delivery, and long-term customer satisfaction.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Band */}
          <div className="mt-20 text-center bg-gradient-to-r from-darkBlue via-deepNavy to-darkBlue p-10 rounded-3xl border border-electricBlue/30">
            <h3 className="text-2xl font-bold text-steelWhite mb-2">
              Equip Your Facility with Proven Metal Furniture
            </h3>
            <p className="text-metallicSilver text-sm max-w-lg mx-auto mb-6">
              Connect with our Chitwan works office for product catalogs, custom dimensional orders, and volume quotation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 rounded-xl bg-electricBlue hover:bg-royalBlue text-white font-semibold text-sm transition shadow-lg shadow-electricBlue/30"
              >
                Request Quotation
              </Link>
              <a
                href="tel:+9779855053857"
                className="px-8 py-3 rounded-xl bg-deepNavy border border-electricBlue/40 text-iceBlue hover:text-white text-sm font-semibold transition"
              >
                Call: +977-9855053857
              </a>
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
