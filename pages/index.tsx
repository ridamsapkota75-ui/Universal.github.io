import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from '../src/components/NavBar';
import Hero3D from '../src/components/Hero3D';
import VideoShowcase from '../src/components/VideoShowcase';
import ManufacturingTimeline from '../src/components/ManufacturingTimeline';
import Footer from '../src/components/Footer';
import { CATEGORIES, products } from '../src/data/products';

const categoryBackgrounds: Record<string, string> = {
  store: '/images/backgrounds/supermarket-interior.jpg',
  school: '/images/backgrounds/classroom-modern.jpg',
  hospital: '/images/backgrounds/hospital-room.jpg',
  office: '/images/backgrounds/modern-office.jpg',
  home: '/images/backgrounds/modern-living.jpg',
};

export default function HomePage() {
  const flagshipProducts = products.filter((p) => p.featured);

  return (
    <>
      <Head>
        <title>Universal Furniture Industries | Metal Furniture Manufacturer Chitwan, Nepal</title>
        <meta
          name="description"
          content="Precision metal furniture manufacturer in Chitwan, Nepal since 1990. Supermarket gondola racks, school desks, hospital beds, executive office furniture, and home furniture with 9-step powder coating."
        />
        <meta
          name="keywords"
          content="furniture manufacturer Nepal, metal furniture Chitwan, supermarket rack Nepal, school bench Nepal, hospital bed Nepal, office desk Nepal, powder coated furniture"
        />
      </Head>

      <NavBar />

      <main className="min-h-screen bg-deepNavy text-steelWhite">
        {/* 1. Cinematic 3D Hero Section */}
        <Hero3D />

        {/* 2. Verified Manufacturing Metrics Strip */}
        <section className="bg-darkBlue/90 border-y border-electricBlue/20 py-10 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-electricBlue/20">
              <div className="pt-4 sm:pt-0">
                <span className="block text-4xl sm:text-5xl font-mono font-extrabold text-steelWhite">
                  1990
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-electricBlue font-bold mt-2 block">
                  Established in Chitwan
                </span>
                <p className="text-xs text-metallicSilver/70 mt-1">Over three decades of manufacturing continuity</p>
              </div>

              <div className="pt-4 sm:pt-0">
                <span className="block text-4xl sm:text-5xl font-mono font-extrabold text-steelWhite">
                  34+
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-electricBlue font-bold mt-2 block">
                  Years of Engineering
                </span>
                <p className="text-xs text-metallicSilver/70 mt-1">Specialized cold-rolled steel &amp; electrostatic coating</p>
              </div>

              <div className="pt-4 sm:pt-0">
                <span className="block text-4xl sm:text-5xl font-mono font-extrabold text-steelWhite">
                  10,000+
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-electricBlue font-bold mt-2 block">
                  Institutional Installations
                </span>
                <p className="text-xs text-metallicSilver/70 mt-1">Marts, schools, hospitals &amp; offices across Nepal</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Five Specialized Industry Environments */}
        <section id="collections" className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-electricBlue font-semibold">
              FIVE SPECIALIZED CATEGORIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-steelWhite mt-2 tracking-tight">
              ENGINEERED FOR EVERY SPACE.
            </h2>
            <p className="text-base sm:text-lg text-metallicSilver mt-4 leading-relaxed">
              One manufacturing standard, five specialized categories — from high-traffic supermarket retail floors to hygienic hospital wards and modern residences.
            </p>
          </div>

          <div className="space-y-12">
            {CATEGORIES.map((cat, idx) => {
              const catProds = products.filter((p) => p.category === cat.slug);
              return (
                <div
                  key={cat.slug}
                  className="relative bg-darkBlue/40 border border-electricBlue/20 hover:border-electricBlue/40 rounded-3xl p-6 sm:p-10 transition duration-300 shadow-xl overflow-hidden group"
                >
                  {/* Category Environmental Photographic Background */}
                  <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image
                      src={categoryBackgrounds[cat.slug] || '/images/backgrounds/factory-interior.jpg'}
                      alt={cat.name}
                      fill
                      className="object-cover opacity-10 group-hover:opacity-15 transition-opacity duration-500"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-deepNavy/80 via-deepNavy/85 to-deepNavy/95" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-8 justify-between border-b border-electricBlue/15 pb-8 mb-8">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-xs font-mono font-bold text-electricBlue bg-deepNavy px-2.5 py-0.5 rounded border border-electricBlue/30">
                            CATEGORY 0{idx + 1}
                          </span>
                          <span className="text-xs font-mono text-metallicSilver/70 uppercase">
                            {cat.shortName}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-steelWhite">
                          {cat.name}
                        </h3>
                        <p className="text-sm sm:text-base text-iceBlue font-medium mt-1">
                          &ldquo;{cat.headline}&rdquo;
                        </p>
                        <p className="text-xs sm:text-sm text-metallicSilver mt-2 max-w-2xl leading-relaxed">
                          {cat.description}
                        </p>
                      </div>

                      <Link
                        href={`/products/${cat.slug}`}
                        className="flex-shrink-0 px-6 py-3 rounded-xl bg-electricBlue hover:bg-royalBlue text-white text-xs font-mono font-semibold uppercase tracking-wider transition shadow-md"
                      >
                        Explore {cat.name} →
                      </Link>
                    </div>

                    {/* Horizontal Product Showcase Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {catProds.map((prod) => (
                        <Link
                          key={prod.slug}
                          href={`/products/${prod.category}/${prod.slug}`}
                          className="group bg-deepNavy/80 hover:bg-darkBlue/90 border border-electricBlue/20 hover:border-electricBlue/60 rounded-2xl p-5 transition duration-300 flex flex-col justify-between"
                        >
                          <div className="relative h-44 w-full bg-deepNavy/90 rounded-xl mb-4 p-4 flex items-center justify-center overflow-hidden">
                            <Image
                              src={prod.images[0]}
                              alt={prod.name}
                              fill
                              className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono uppercase text-electricBlue tracking-wider block mb-1">
                              {prod.tagline}
                            </span>
                            <h4 className="text-base font-bold text-steelWhite group-hover:text-electricBlue transition">
                              {prod.name}
                            </h4>
                            <span className="text-xs text-metallicSilver/80 font-mono mt-2 inline-flex items-center space-x-1">
                              <span>Inspect 3D &amp; Specs</span>
                              <span>&rarr;</span>
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. Official Company Advertisement Video */}
        <VideoShowcase
          title="DISCOVER THE UFI DIFFERENCE"
          subtitle="OFFICIAL COMPANY FILM"
          description="Watch how Universal Furniture Industries engineers precision metal furniture from raw steel to finished product in our Chitwan manufacturing facility."
          videoSrc="/videos/ufi-advertisement.mp4"
          posterSrc="/videos/ufi-video-poster.jpg"
        />

        {/* 5. Interactive 9-Step Manufacturing Process */}
        <section className="py-20 relative overflow-hidden border-y border-electricBlue/20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/backgrounds/metal-fabrication.jpg"
              alt="Metal fabrication process"
              fill
              className="object-cover opacity-20"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-deepNavy/85" />
          </div>
          <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ManufacturingTimeline />
            </div>
          </div>
        </section>

        {/* 5. Company Introduction & Heritage */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Editorial Showcase with Large Factory Photography */}
            <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-electricBlue/20 border border-electricBlue/40 text-electricBlue font-mono text-xs font-semibold uppercase tracking-widest">
                  <span>ESTABLISHED 1990</span>
                  <span>&bull;</span>
                  <span>BHARATPUR-07, CHITWAN</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-steelWhite leading-tight">
                  Engineered in Chitwan.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-iceBlue via-electricBlue to-metallicSilver">
                    Trusted Since 1990.
                  </span>
                </h2>
                <p className="text-base sm:text-lg text-metallicSilver leading-relaxed">
                  Universal Furniture Industries (UFI) has operated from our central Bharatpur, Chitwan manufacturing facility for over 34 years. Every piece of steel furniture leaves our plant chemically degreased, phosphated, passivated, and electrostatic powder coated to withstand Nepal&apos;s harshest monsoons and decades of institutional use.
                </p>

                {/* Verified Metrics Counter Strip */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-electricBlue/20">
                  <div>
                    <span className="block text-2xl sm:text-3xl font-mono font-extrabold text-steelWhite">1990</span>
                    <span className="text-[11px] font-mono uppercase text-electricBlue block mt-0.5">Founded</span>
                  </div>
                  <div>
                    <span className="block text-2xl sm:text-3xl font-mono font-extrabold text-steelWhite">34+</span>
                    <span className="text-[11px] font-mono uppercase text-electricBlue block mt-0.5">Years Active</span>
                  </div>
                  <div>
                    <span className="block text-2xl sm:text-3xl font-mono font-extrabold text-steelWhite">10k+</span>
                    <span className="text-[11px] font-mono uppercase text-electricBlue block mt-0.5">Institutions</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-block px-7 py-3.5 rounded-xl bg-electricBlue hover:bg-royalBlue text-white text-xs font-mono uppercase tracking-wider font-semibold transition shadow-lg shadow-electricBlue/30"
                  >
                    Explore Our Company Story →
                  </Link>
                </div>
              </div>

              {/* Large Factory Editorial Photography Card */}
              <div className="lg:col-span-6">
                <div className="relative h-80 sm:h-[420px] rounded-3xl overflow-hidden border border-electricBlue/30 shadow-2xl shadow-deepNavy/80 group">
                  <Image
                    src="/images/backgrounds/factory-interior.jpg"
                    alt="UFI Chitwan Metal Furniture Manufacturing Plant"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deepNavy/90 via-deepNavy/30 to-transparent" />

                  {/* Floating Caption Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-deepNavy/85 border border-electricBlue/30 backdrop-blur-md flex items-center justify-between text-xs font-mono">
                    <div>
                      <span className="text-steelWhite font-bold block">UFI Industrial Manufacturing Plant</span>
                      <span className="text-metallicSilver/70">Bharatpur-07, Srijana Tole, Chitwan, Nepal</span>
                    </div>
                    <span className="text-electricBlue font-semibold px-2.5 py-1 rounded bg-darkBlue border border-electricBlue/30">
                      Active Facility
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Four Core Pillars */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-darkBlue/70 border border-electricBlue/25 rounded-2xl p-6">
                <div className="w-8 h-8 rounded-lg bg-deepNavy border border-electricBlue/40 text-electricBlue font-mono font-bold flex items-center justify-center text-xs mb-3">
                  01
                </div>
                <h4 className="text-base font-bold text-steelWhite mb-1">BUILT TO LAST</h4>
                <p className="text-xs text-metallicSilver/80 leading-relaxed">
                  High-quality cold-rolled steel materials for long-lasting structural performance across all seasons.
                </p>
              </div>

              <div className="bg-darkBlue/70 border border-electricBlue/25 rounded-2xl p-6">
                <div className="w-8 h-8 rounded-lg bg-deepNavy border border-electricBlue/40 text-electricBlue font-mono font-bold flex items-center justify-center text-xs mb-3">
                  02
                </div>
                <h4 className="text-base font-bold text-steelWhite mb-1">SMART DESIGN</h4>
                <p className="text-xs text-metallicSilver/80 leading-relaxed">
                  Functional, modular, and space-saving engineering for real retail aisles, wards, and study halls.
                </p>
              </div>

              <div className="bg-darkBlue/70 border border-electricBlue/25 rounded-2xl p-6">
                <div className="w-8 h-8 rounded-lg bg-deepNavy border border-electricBlue/40 text-electricBlue font-mono font-bold flex items-center justify-center text-xs mb-3">
                  03
                </div>
                <h4 className="text-base font-bold text-steelWhite mb-1">PREMIUM QUALITY</h4>
                <p className="text-xs text-metallicSilver/80 leading-relaxed">
                  Finely crafted welding, rounded safety corners, and rigorous quality inspection before dispatch.
                </p>
              </div>

              <div className="bg-darkBlue/70 border border-electricBlue/25 rounded-2xl p-6">
                <div className="w-8 h-8 rounded-lg bg-deepNavy border border-electricBlue/40 text-electricBlue font-mono font-bold flex items-center justify-center text-xs mb-3">
                  04
                </div>
                <h4 className="text-base font-bold text-steelWhite mb-1">TRUSTED PARTNER</h4>
                <p className="text-xs text-metallicSilver/80 leading-relaxed">
                  Direct factory relationship, honest lead times, on-time freight dispatch, and dependable after-sales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Partner Feedback (Verified website records attribution) */}
        <section className="py-20 relative overflow-hidden border-t border-electricBlue/20">
          <div className="absolute inset-0 bg-gradient-to-br from-darkBlue/60 via-deepNavy to-darkBlue/40" />
          <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-mono uppercase tracking-widest text-electricBlue">
                  INSTITUTIONAL PARTNERSHIP
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-steelWhite mt-1">
                  Trusted by Nepal Industry &amp; Institutions
                </h2>
                <p className="text-xs text-metallicSilver/70 mt-2 font-mono">
                  Archival partner feedback preserved from ufichitwan.com
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-deepNavy/90 border border-electricBlue/25 rounded-2xl p-6 flex flex-col justify-between">
                  <p className="text-sm text-metallicSilver leading-relaxed italic">
                    &ldquo;UFI&apos;s gondola racks have been in our stores for over five years with no rust or wear. The powder coating holds up beautifully even in harsh weather.&rdquo;
                  </p>
                  <div className="pt-4 mt-4 border-t border-electricBlue/15 text-xs font-mono">
                    <span className="text-iceBlue font-bold block">Rajesh K.C.</span>
                    <span className="text-metallicSilver/60">Procurement Manager, Central Department Store</span>
                  </div>
                </div>

                <div className="bg-deepNavy/90 border border-electricBlue/25 rounded-2xl p-6 flex flex-col justify-between">
                  <p className="text-sm text-metallicSilver leading-relaxed italic">
                    &ldquo;The school desks they supplied are still in perfect condition after three years of heavy daily use. Best investment we made for our campus.&rdquo;
                  </p>
                  <div className="pt-4 mt-4 border-t border-electricBlue/15 text-xs font-mono">
                    <span className="text-iceBlue font-bold block">Sita Tamang</span>
                    <span className="text-metallicSilver/60">Principal, Green Valley School</span>
                  </div>
                </div>

                <div className="bg-deepNavy/90 border border-electricBlue/25 rounded-2xl p-6 flex flex-col justify-between">
                  <p className="text-sm text-metallicSilver leading-relaxed italic">
                    &ldquo;Professional, reliable, and on-time delivery. UFI&apos;s hospital beds meet all our durability requirements and then some.&rdquo;
                  </p>
                  <div className="pt-4 mt-4 border-t border-electricBlue/15 text-xs font-mono">
                    <span className="text-iceBlue font-bold block">Dr. Manish Shrestha</span>
                    <span className="text-metallicSilver/60">Medical Director, Regional Hospital</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Bottom Quotation & Direct Contact Banner */}
        <section className="py-20 bg-gradient-to-b from-darkBlue to-deepNavy border-t border-electricBlue/30 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <span className="text-xs font-mono uppercase tracking-widest text-electricBlue font-bold block mb-2">
              START YOUR PROJECT IN CHITWAN
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-steelWhite tracking-tight">
              LET&apos;S BUILD SOMETHING BETTER.
            </h2>
            <p className="text-metallicSilver text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed">
              Contact our engineering and sales office in Bharatpur-07, Srijana Tole, Chitwan for volume estimation, custom drawings, and delivery timelines.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-electricBlue hover:bg-royalBlue text-white font-semibold text-xs font-mono tracking-wider uppercase transition shadow-xl shadow-electricBlue/30"
              >
                Request a Quote
              </Link>
              <a
                href="https://wa.me/9779855053857"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-green-700 hover:bg-green-600 text-white font-semibold text-xs font-mono tracking-wider uppercase transition shadow-md"
              >
                WhatsApp: +977-9855053857
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
