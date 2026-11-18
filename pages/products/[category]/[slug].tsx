import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';
import NavBar from '../../../src/components/NavBar';
import Footer from '../../../src/components/Footer';
import Product3DViewer from '../../../src/components/Product3DViewer';
import { products, Product, CATEGORIES } from '../../../src/data/products';

interface Props {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailPage({ product, relatedProducts }: Props) {
  const [viewMode, setViewMode] = useState<'3d' | 'photo'>('3d');
  const [selectedTier, setSelectedTier] = useState<string>(product.options?.tiers?.[0] || '');
  const [selectedFinish, setSelectedFinish] = useState<string>(product.options?.finishes?.[0] || '');
  const [selectedSize, setSelectedSize] = useState<string>(product.options?.sizes?.[0] || '');

  const whatsappMessage = encodeURIComponent(
    `Hello UFI Chitwan, I am inquiring about factory pricing and specifications for the "${product.name}" (${product.categoryTitle}).`
  );

  return (
    <>
      <Head>
        <title>{product.name} | Universal Furniture Industries (UFI)</title>
        <meta name="description" content={product.description} />
      </Head>

      <NavBar />

      <main className="min-h-screen bg-deepNavy text-steelWhite pt-24 sm:pt-28 pb-20">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-xs font-mono text-metallicSilver/70">
            <Link href="/" className="hover:text-iceBlue">
              Home
            </Link>
            <span>/</span>
            <Link href={`/products/${product.category}`} className="hover:text-iceBlue">
              {product.categoryTitle}
            </Link>
            <span>/</span>
            <span className="text-electricBlue font-semibold truncate max-w-xs">
              {product.name}
            </span>
          </nav>
        </div>

        {/* Product Showcase Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Interactive 3D / Real Product Photo Viewport */}
            <div className="lg:col-span-7 space-y-4">
              {/* View Switcher Controls */}
              <div className="flex items-center justify-between bg-darkBlue/80 border border-electricBlue/20 rounded-2xl p-2">
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => setViewMode('3d')}
                    className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider transition ${
                      viewMode === '3d'
                        ? 'bg-electricBlue text-white shadow-md'
                        : 'text-metallicSilver hover:text-iceBlue hover:bg-deepNavy'
                    }`}
                  >
                    Interactive 3D View
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('photo')}
                    className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider transition ${
                      viewMode === 'photo'
                        ? 'bg-electricBlue text-white shadow-md'
                        : 'text-metallicSilver hover:text-iceBlue hover:bg-deepNavy'
                    }`}
                  >
                    Reference Photo
                  </button>
                </div>
                <span className="text-[11px] font-mono text-metallicSilver/60 hidden sm:inline-block pr-2">
                  Manufactured in Chitwan
                </span>
              </div>

              {/* Viewport Display */}
              <div className="relative">
                {viewMode === '3d' ? (
                  <Product3DViewer
                    slug={product.slug}
                    category={product.category}
                    autoRotate={true}
                    className="w-full h-[400px] sm:h-[480px]"
                  />
                ) : (
                  <div className="relative w-full h-[400px] sm:h-[480px] bg-darkBlue/60 border border-electricBlue/30 rounded-2xl flex items-center justify-center p-8 overflow-hidden shadow-2xl">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-contain p-6"
                      priority
                    />
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-metallicSilver/70 px-2">
                <span>9-Step Chemical Powder Coated Steel</span>
                <span>Chitwan Factory Direct</span>
              </div>
            </div>

            {/* Right Column: Product Information & Quotation Configurator */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-darkBlue/70 border border-electricBlue/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
                <div>
                  <div className="inline-block px-3 py-1 rounded bg-deepNavy border border-electricBlue/30 text-electricBlue text-xs font-mono font-semibold uppercase mb-2">
                    {product.categoryTitle}
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-steelWhite">
                    {product.name}
                  </h1>
                  <p className="text-xs font-mono text-iceBlue mt-1 uppercase tracking-wide">
                    {product.tagline}
                  </p>
                </div>

                <p className="text-sm text-metallicSilver leading-relaxed">
                  {product.description}
                </p>

                {/* Optional Configuration Selectors (Tier, Finish, Size) */}
                {product.options && (
                  <div className="space-y-4 pt-2 border-t border-electricBlue/15">
                    {product.options.tiers && (
                      <div>
                        <label className="block text-xs font-mono uppercase text-metallicSilver mb-2">
                          Tier Configuration
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {product.options.tiers.map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setSelectedTier(t)}
                              className={`px-3 py-2 rounded-xl text-xs font-mono text-left transition border ${
                                selectedTier === t
                                  ? 'bg-electricBlue text-white border-electricBlue font-bold shadow'
                                  : 'bg-deepNavy/80 text-metallicSilver border-electricBlue/20 hover:border-electricBlue/50'
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {product.options.finishes && (
                      <div>
                        <label className="block text-xs font-mono uppercase text-metallicSilver mb-2">
                          Electrostatic Finish
                        </label>
                        <div className="space-y-1.5">
                          {product.options.finishes.map((f) => (
                            <button
                              key={f}
                              type="button"
                              onClick={() => setSelectedFinish(f)}
                              className={`w-full px-3 py-2 rounded-xl text-xs font-mono text-left transition border ${
                                selectedFinish === f
                                  ? 'bg-electricBlue text-white border-electricBlue font-bold shadow'
                                  : 'bg-deepNavy/80 text-metallicSilver border-electricBlue/20 hover:border-electricBlue/50'
                              }`}
                            >
                              {f}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {product.options.sizes && (
                      <div>
                        <label className="block text-xs font-mono uppercase text-metallicSilver mb-2">
                          Standard Dimensions
                        </label>
                        <div className="space-y-1.5">
                          {product.options.sizes.map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => setSelectedSize(s)}
                              className={`w-full px-3 py-2 rounded-xl text-xs font-mono text-left transition border ${
                                selectedSize === s
                                  ? 'bg-electricBlue text-white border-electricBlue font-bold shadow'
                                  : 'bg-deepNavy/80 text-metallicSilver border-electricBlue/20 hover:border-electricBlue/50'
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Primary CTA Buttons */}
                <div className="space-y-3 pt-4 border-t border-electricBlue/15">
                  <Link
                    href={`/contact?category=${product.category}&product=${product.slug}`}
                    className="w-full block text-center py-3.5 rounded-xl bg-gradient-to-r from-electricBlue to-royalBlue hover:from-royalBlue hover:to-electricBlue text-white font-semibold text-xs font-mono tracking-wider uppercase transition shadow-xl shadow-electricBlue/30"
                  >
                    Request Official Price Quote
                  </Link>

                  <a
                    href={`https://wa.me/9779855053857?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-green-700 hover:bg-green-600 text-white font-semibold text-xs font-mono tracking-wider uppercase transition shadow-md"
                  >
                    <span>WhatsApp Factory Inquiry</span>
                  </a>
                </div>

                <div className="text-[11px] font-mono text-metallicSilver/60 text-center">
                  Factory delivery across all provinces of Nepal &bull; Phone: +977-9855053857
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="bg-darkBlue/60 border border-electricBlue/25 rounded-3xl p-6 sm:p-10 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-steelWhite mb-6 flex items-center space-x-3">
              <span className="w-2.5 h-2.5 rounded-full bg-electricBlue" />
              <span>Technical Engineering Specifications</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(product.specs).map(([label, value]) => (
                <div
                  key={label}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-deepNavy/80 border border-electricBlue/15"
                >
                  <span className="text-xs font-mono text-metallicSilver/70 uppercase">
                    {label}
                  </span>
                  <span className="text-sm font-mono text-iceBlue font-semibold mt-1 sm:mt-0">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Products in this Category */}
        {relatedProducts.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <div className="flex items-center justify-between mb-8 border-b border-electricBlue/20 pb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-steelWhite">
                Related {product.categoryTitle}
              </h3>
              <Link
                href={`/products/${product.category}`}
                className="text-xs font-mono text-electricBlue hover:underline"
              >
                View Category Catalog →
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/products/${rel.category}/${rel.slug}`}
                  className="group bg-darkBlue/50 hover:bg-darkBlue border border-electricBlue/20 hover:border-electricBlue/50 rounded-2xl p-5 transition duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-48 w-full bg-deepNavy/60 rounded-xl mb-4 p-4 flex items-center justify-center">
                    <Image
                      src={rel.images[0]}
                      alt={rel.name}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-electricBlue uppercase block mb-1">
                      {rel.categoryTitle}
                    </span>
                    <h4 className="text-base font-bold text-steelWhite group-hover:text-electricBlue transition">
                      {rel.name}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map((p) => ({
    params: { category: p.category, slug: p.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return { notFound: true };
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return {
    props: {
      product,
      relatedProducts,
    },
  };
};
