import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '../src/components/NavBar';
import Footer from '../src/components/Footer';
import { manufacturingSteps } from '../src/components/ManufacturingTimeline';

export default function ManufacturingPage() {
  return (
    <>
      <Head>
        <title>The 9-Step Powder Coating Process | Universal Furniture Industries</title>
        <meta
          name="description"
          content="Explore UFI's 9-step chemical metal surface pre-treatment process in Chitwan, Nepal. Degreasing, pickling, phosphating, and passivation for anti-corrosion furniture."
        />
      </Head>

      <NavBar />

      <main className="min-h-screen bg-deepNavy text-steelWhite pt-24 sm:pt-28">
        {/* Hero Banner */}
        <section className="relative py-16 sm:py-24 border-b border-electricBlue/20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/backgrounds/factory-welding.jpg"
              alt="Metal welding and fabrication"
              fill
              className="object-cover opacity-25"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-deepNavy/60 via-deepNavy/80 to-deepNavy pointer-events-none" />
          </div>
          <div className="relative max-w-5xl mx-auto px-4 text-center">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-electricBlue/20 border border-electricBlue/40 text-electricBlue font-mono text-xs font-semibold uppercase tracking-widest mb-4">
              PRECISION MANUFACTURING • CHITWAN FACILITY
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              PRECISION IN EVERY PROCESS.
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-metallicSilver max-w-2xl mx-auto leading-relaxed">
              Quality isn&apos;t an accident. It is engineered into every single metal surface through our rigorous chemical immersion pre-treatment facility.
            </p>
          </div>
        </section>

        {/* Technical Process Overview Introduction */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-darkBlue/70 border border-electricBlue/20 rounded-2xl p-6">
              <span className="text-electricBlue font-mono text-sm block mb-2 font-bold">01 / SUBSTRATE CLEANSING</span>
              <h3 className="text-xl font-bold mb-2">Total Degreasing &amp; Scale Removal</h3>
              <p className="text-sm text-metallicSilver/80">
                Alkaline baths strip away rolling lubricants, followed by controlled acid pickling to eliminate surface rust down to the bare molecular iron matrix.
              </p>
            </div>
            <div className="bg-darkBlue/70 border border-electricBlue/20 rounded-2xl p-6">
              <span className="text-electricBlue font-mono text-sm block mb-2 font-bold">02 / CRYSTALLINE BONDING</span>
              <h3 className="text-xl font-bold mb-2">Phosphate Conversion Layer</h3>
              <p className="text-sm text-metallicSilver/80">
                Immersed in a chemical phosphating conversion bath, bare metal grows a micro-crystalline coating that mechanically anchors the powder coat.
              </p>
            </div>
            <div className="bg-darkBlue/70 border border-electricBlue/20 rounded-2xl p-6">
              <span className="text-electricBlue font-mono text-sm block mb-2 font-bold">03 / CORROSION SEAL</span>
              <h3 className="text-xl font-bold mb-2">Chemical Passivation</h3>
              <p className="text-sm text-metallicSilver/80">
                A non-chromic passivation rinse seals microscopic grain boundaries, locking out humidity, sweat, detergents, and hospital sterilizers.
              </p>
            </div>
          </div>

          {/* Detailed 9 Steps Cards Sequence */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-electricBlue">
                THE 9 STAGES IN DETAIL
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-steelWhite mt-1">
                From Raw Sheet Metal to Lasting Protection
              </h2>
            </div>

            <div className="grid gap-6">
              {manufacturingSteps.map((step) => (
                <div
                  key={step.step}
                  className="bg-darkBlue/60 hover:bg-darkBlue/90 border border-electricBlue/25 hover:border-electricBlue/50 rounded-2xl p-6 sm:p-8 transition duration-300 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-deepNavy border border-electricBlue/40 flex items-center justify-center">
                      <span className="text-2xl font-mono font-extrabold text-electricBlue">
                        {step.step}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-3">
                        <h3 className="text-xl sm:text-2xl font-bold text-steelWhite">
                          {step.name}
                        </h3>
                        <span className="text-xs font-mono uppercase bg-deepNavy px-2.5 py-0.5 rounded text-iceBlue border border-electricBlue/20">
                          {step.chemical}
                        </span>
                      </div>
                      <p className="mt-2 text-sm sm:text-base text-metallicSilver max-w-3xl leading-relaxed">
                        {step.purpose}
                      </p>
                    </div>
                  </div>

                  <div className="md:text-right flex-shrink-0 bg-deepNavy/80 px-4 py-3 rounded-xl border border-electricBlue/20">
                    <span className="block text-[11px] font-mono uppercase text-electricBlue">
                      Process Parameters
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-iceBlue block">
                      {step.specs.temp} • {step.specs.duration}
                    </span>
                    <span className="text-[11px] font-mono text-metallicSilver/70 block mt-0.5">
                      {step.specs.ph}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Comparison Table */}
          <div className="mt-20 bg-darkBlue/80 border border-electricBlue/30 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-steelWhite mb-6 text-center">
              Manufacturing Durability Standard Comparison
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-electricBlue/20 text-xs font-mono uppercase text-metallicSilver/70">
                    <th className="py-3 px-4">Evaluation Metric</th>
                    <th className="py-3 px-4 text-red-400">Ordinary Untreated Spray Painting</th>
                    <th className="py-3 px-4 text-electricBlue font-bold">UFI 9-Step Powder Coating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-electricBlue/10 text-metallicSilver">
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-steelWhite">Pre-Treatment</td>
                    <td className="py-3.5 px-4 text-red-300">Dry rag wipe or single wash</td>
                    <td className="py-3.5 px-4 text-iceBlue font-medium">Full 9-step chemical immersion sequence</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-steelWhite">Paint Adhesion</td>
                    <td className="py-3.5 px-4 text-red-300">Surface peel with light scuffing</td>
                    <td className="py-3.5 px-4 text-iceBlue font-medium">Micro-crystalline phosphate chemical anchor</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-steelWhite">Humidity &amp; Rust Resistance</td>
                    <td className="py-3.5 px-4 text-red-300">Rust blooms within 6–12 months in monsoon</td>
                    <td className="py-3.5 px-4 text-iceBlue font-medium">Chemical passivation resists decades of monsoon</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-steelWhite">Cleanability &amp; Hygiene</td>
                    <td className="py-3.5 px-4 text-red-300">Attacked by disinfectant solvents</td>
                    <td className="py-3.5 px-4 text-iceBlue font-medium">Compatible with hospital and clinical cleaning protocols</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom Action CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-steelWhite mb-4">
              Need Institutional or Bulk Metal Furniture?
            </h3>
            <p className="text-metallicSilver max-w-xl mx-auto mb-6 text-sm">
              Talk directly with our manufacturing engineers in Chitwan to discuss custom dimensions, load ratings, and project lead times.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 rounded-xl bg-electricBlue hover:bg-royalBlue text-white font-semibold text-sm tracking-wide shadow-lg shadow-electricBlue/30 transition"
            >
              Request Factory Pricing &amp; Specs
            </Link>
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
