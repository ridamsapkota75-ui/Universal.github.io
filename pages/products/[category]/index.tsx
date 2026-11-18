import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';
import NavBar from '../../../src/components/NavBar';
import Footer from '../../../src/components/Footer';
import Product3DViewer from '../../../src/components/Product3DViewer';
import { products, CATEGORIES, Product } from '../../../src/data/products';

interface Props {
  categoryInfo: {
    slug: string;
    name: string;
    shortName: string;
    headline: string;
    description: string;
    featuredProduct: string;
    image: string;
  };
  categoryProducts: Product[];
}

export default function CategoryOverviewPage({ categoryInfo, categoryProducts }: Props) {
  return (
    <>
      <Head>
        <title>{categoryInfo.name} | Universal Furniture Industries (UFI)</title>
        <meta name="description" content={categoryInfo.description} />
      </Head>

      <NavBar />

      <main className="min-h-screen bg-deepNavy text-steelWhite pt-24 sm:pt-28 pb-20">
        {/* Category Hero Banner */}
        <section className="relative py-14 sm:py-20 border-b border-electricBlue/20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-darkBlue via-deepNavy to-deepNavy pointer-events-none" />
          <div className="relative max-w-5xl mx-auto px-4 text-center">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-electricBlue/20 border border-electricBlue/40 text-electricBlue font-mono text-xs font-semibold uppercase tracking-widest mb-4">
              <span>SPECIALIZED SECTOR</span>
              <span>&bull;</span>
              <span>{categoryInfo.shortName}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              {categoryInfo.name}
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-iceBlue font-medium">
              {categoryInfo.headline}
            </p>
            <p className="mt-4 text-sm sm:text-base text-metallicSilver max-w-2xl mx-auto leading-relaxed">
              {categoryInfo.description}
            </p>
          </div>
        </section>

        {/* 5-Category Fast Navigation Switcher Tabs */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 py-2 px-2 bg-darkBlue/90 border border-electricBlue/30 rounded-2xl shadow-xl backdrop-blur-md">
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                href={`/products/${c.slug}`}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                  c.slug === categoryInfo.slug
                    ? 'bg-electricBlue text-white shadow-md shadow-electricBlue/30'
                    : 'text-metallicSilver hover:text-iceBlue hover:bg-deepNavy/60'
                }`}
              >
                {c.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Interactive 3D Showcase for this Category */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
          <div className="grid lg:grid-cols-12 gap-8 items-center bg-darkBlue/50 border border-electricBlue/20 rounded-3xl p-6 sm:p-10">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-electricBlue font-semibold">
                3D INTERACTIVE SHOWROOM
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-steelWhite">
                Inspect Real Geometry &amp; Structure
              </h2>
              <p className="text-sm text-metallicSilver leading-relaxed">
                Experience the structural steel framework, shelf placement, and powder-coated finish of UFI {categoryInfo.shortName} products in full 3D.
              </p>
              <div className="pt-2">
                <Link
                  href={`/contact?category=${categoryInfo.slug}`}
                  className="inline-block px-6 py-2.5 rounded-xl bg-electricBlue hover:bg-royalBlue text-white text-xs font-mono uppercase font-semibold tracking-wider transition shadow-md"
                >
                  Request Bulk Quotation
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Product3DViewer
                category={categoryInfo.slug}
                autoRotate={true}
                className="w-full h-80 sm:h-96"
              />
            </div>
          </div>
        </section>

        {/* Product Cards Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 border-b border-electricBlue/20 pb-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-steelWhite">
                Manufactured Catalog Models
              </h3>
              <p className="text-xs font-mono text-metallicSilver/70 mt-1">
                Standard UFI configurations built to order in Chitwan
              </p>
            </div>
            <span className="text-xs font-mono text-electricBlue bg-darkBlue px-3 py-1 rounded border border-electricBlue/20">
              {categoryProducts.length} Models Verified
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts.map((product) => (
              <div
                key={product.slug}
                className="group flex flex-col bg-darkBlue/60 hover:bg-darkBlue/90 border border-electricBlue/25 hover:border-electricBlue/60 rounded-3xl overflow-hidden transition-all duration-300 shadow-xl hover:-translate-y-1"
              >
                {/* Product Image Stage */}
                <div className="relative h-64 bg-deepNavy/80 flex items-center justify-center p-6 border-b border-electricBlue/15 overflow-hidden">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {product.featured && (
                    <span className="absolute top-3 left-4 text-[10px] font-mono uppercase font-bold tracking-wider bg-electricBlue text-white px-2.5 py-0.5 rounded-full shadow-md">
                      Flagship Model
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-electricBlue tracking-wider block mb-1">
                      {product.tagline}
                    </span>
                    <h4 className="text-lg font-bold text-steelWhite group-hover:text-electricBlue transition">
                      {product.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-metallicSilver/80 mt-2 line-clamp-3 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Top Spec Snippet */}
                  {product.specs && (
                    <div className="bg-deepNavy/90 border border-electricBlue/15 rounded-xl p-3 text-[11px] font-mono text-metallicSilver space-y-1">
                      {Object.entries(product.specs).slice(0, 2).map(([k, v]) => (
                        <div key={k} className="flex justify-between">
                          <span className="text-metallicSilver/60">{k}:</span>
                          <span className="text-iceBlue font-semibold truncate ml-2 max-w-[180px]">{v}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="pt-2 flex items-center gap-3">
                    <Link
                      href={`/products/${product.category}/${product.slug}`}
                      className="flex-1 text-center py-2.5 rounded-xl bg-electricBlue hover:bg-royalBlue text-white text-xs font-semibold tracking-wider uppercase transition shadow-md"
                    >
                      View Specs &amp; 3D
                    </Link>
                    <Link
                      href={`/contact?category=${product.category}&product=${product.slug}`}
                      className="py-2.5 px-3 rounded-xl bg-deepNavy border border-electricBlue/30 hover:border-electricBlue text-iceBlue text-xs font-semibold transition"
                    >
                      Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = CATEGORIES.map((cat) => ({ params: { category: cat.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const categorySlug = params?.category as string;
  const categoryInfo = CATEGORIES.find((c) => c.slug === categorySlug);
  const categoryProducts = products.filter((p) => p.category === categorySlug);

  if (!categoryInfo) {
    return { notFound: true };
  }

  return {
    props: {
      categoryInfo,
      categoryProducts,
    },
  };
};
