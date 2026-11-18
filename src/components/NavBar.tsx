import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const categories = [
  {
    name: 'Retail Systems',
    desc: 'Supermarket gondolas, wall racks & store fixtures',
    href: '/products/store',
    tag: 'Flagship',
  },
  {
    name: 'Education Systems',
    desc: 'Classroom benches, student desks & institutional lockers',
    href: '/products/school',
    tag: 'Campus',
  },
  {
    name: 'Healthcare Systems',
    desc: 'Adjustable delivery beds, medicine trolleys & seating',
    href: '/products/hospital',
    tag: 'Clinical',
  },
  {
    name: 'Workspace Systems',
    desc: 'Executive desks, mesh chairs & archive cabinets',
    href: '/products/office',
    tag: 'Corporate',
  },
  {
    name: 'Home Collection',
    desc: 'Modern metal sofas, dining sets & center tables',
    href: '/products/home',
    tag: 'Living',
  },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [router.asPath]);

  const isActive = (path: string) => {
    if (path === '/') return router.pathname === '/';
    return router.asPath.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-deepNavy/95 backdrop-blur-md border-b border-electricBlue/20 shadow-xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-electricBlue/40 bg-darkBlue shadow-md flex items-center justify-center p-0.5 group-hover:border-electricBlue transition">
              <Image
                src="/images/logo/ufi-logo.png"
                alt="Universal Furniture Industries"
                width={38}
                height={38}
                className="object-cover rounded-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-steelWhite group-hover:text-electricBlue transition">
                UNIVERSAL FURNITURE
              </span>
              <span className="text-[10px] font-mono tracking-widest text-metallicSilver/70 uppercase">
                INDUSTRIES • CHITWAN
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium tracking-wide transition ${
                isActive('/') && router.pathname === '/'
                  ? 'text-electricBlue font-semibold'
                  : 'text-metallicSilver hover:text-iceBlue'
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`text-sm font-medium tracking-wide transition ${
                isActive('/about')
                  ? 'text-electricBlue font-semibold'
                  : 'text-metallicSilver hover:text-iceBlue'
              }`}
            >
              About
            </Link>

            {/* Collections Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center space-x-1 text-sm font-medium tracking-wide transition ${
                  isActive('/products')
                    ? 'text-electricBlue font-semibold'
                    : 'text-metallicSilver hover:text-iceBlue'
                }`}
                aria-expanded={dropdownOpen}
              >
                <span>Collections</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    dropdownOpen ? 'rotate-180 text-electricBlue' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mega Menu Dropdown */}
              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[460px]">
                  <div className="bg-darkBlue/95 border border-electricBlue/30 rounded-2xl p-4 shadow-2xl backdrop-blur-xl grid gap-2">
                    <div className="px-3 py-1.5 border-b border-electricBlue/10 flex items-center justify-between text-[11px] font-mono text-metallicSilver/70 uppercase tracking-wider">
                      <span>Manufactured Categories</span>
                      <span className="text-electricBlue">9-Step Treated Steel</span>
                    </div>

                    {categories.map((cat) => (
                      <Link
                        key={cat.href}
                        href={cat.href}
                        className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-deepNavy/80 border border-transparent hover:border-electricBlue/30 transition"
                      >
                        <div className="w-2 h-2 mt-1.5 rounded-full bg-electricBlue/60 group-hover:bg-electricBlue transition" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-iceBlue group-hover:text-electricBlue transition">
                              {cat.name}
                            </span>
                            <span className="text-[10px] font-mono uppercase bg-deepNavy px-2 py-0.5 rounded text-metallicSilver border border-electricBlue/20">
                              {cat.tag}
                            </span>
                          </div>
                          <p className="text-xs text-metallicSilver/80 mt-0.5 leading-snug">
                            {cat.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/manufacturing"
              className={`text-sm font-medium tracking-wide transition ${
                isActive('/manufacturing')
                  ? 'text-electricBlue font-semibold'
                  : 'text-metallicSilver hover:text-iceBlue'
              }`}
            >
              Manufacturing
            </Link>

            <Link
              href="/projects"
              className={`text-sm font-medium tracking-wide transition ${
                isActive('/projects')
                  ? 'text-electricBlue font-semibold'
                  : 'text-metallicSilver hover:text-iceBlue'
              }`}
            >
              Projects
            </Link>

            <Link
              href="/contact"
              className={`text-sm font-medium tracking-wide transition ${
                isActive('/contact')
                  ? 'text-electricBlue font-semibold'
                  : 'text-metallicSilver hover:text-iceBlue'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://www.facebook.com/ufichitwan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow UFI on Facebook (opens in new tab)"
              className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-darkBlue/80 hover:bg-[#1877F2] border border-electricBlue/30 hover:border-[#1877F2] text-iceBlue hover:text-white transition-all duration-300 shadow-md group"
            >
              <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
              <span className="text-xs font-medium tracking-wide">Follow Us</span>
            </a>

            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-electricBlue to-royalBlue hover:from-royalBlue hover:to-electricBlue text-white font-semibold text-xs tracking-wider uppercase shadow-lg shadow-electricBlue/25 hover:shadow-electricBlue/40 transition duration-300 transform hover:-translate-y-0.5"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-metallicSilver hover:text-white hover:bg-darkBlue focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 px-3 bg-darkBlue/95 border border-electricBlue/30 rounded-2xl shadow-2xl backdrop-blur-xl">
            <div className="space-y-1">
              <Link
                href="/"
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-iceBlue hover:bg-deepNavy"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-iceBlue hover:bg-deepNavy"
              >
                About UFI
              </Link>

              <div className="py-2 border-y border-electricBlue/10 my-2">
                <span className="px-3 text-xs font-mono uppercase tracking-wider text-metallicSilver/60 block mb-1">
                  Product Collections
                </span>
                {categories.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="block px-3 py-2 text-sm text-metallicSilver hover:text-white hover:bg-deepNavy rounded-lg"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>

              <Link
                href="/manufacturing"
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-iceBlue hover:bg-deepNavy"
              >
                9-Step Manufacturing
              </Link>
              <Link
                href="/projects"
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-iceBlue hover:bg-deepNavy"
              >
                Projects & Spaces
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-iceBlue hover:bg-deepNavy"
              >
                Contact & Inquiry
              </Link>

              <div className="pt-3 space-y-2">
                <a
                  href="https://www.facebook.com/ufichitwan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-xl bg-deepNavy border border-electricBlue/30 text-iceBlue hover:text-white text-xs font-semibold"
                >
                  <svg className="w-4 h-4 fill-current text-electricBlue" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                  <span>Follow on Facebook (@ufichitwan)</span>
                </a>
                <Link
                  href="/contact"
                  className="block w-full text-center py-3 rounded-xl bg-electricBlue text-white font-semibold text-sm shadow-md"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
