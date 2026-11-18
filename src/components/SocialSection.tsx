import React from 'react';

export default function SocialSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-deepNavy via-darkBlue/40 to-deepNavy border-t border-electricBlue/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-electricBlue font-semibold block mb-3">
          OFFICIAL SOCIAL MEDIA
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-steelWhite tracking-tight">
          STAY CONNECTED WITH UFI
        </h2>
        <p className="mt-4 text-sm sm:text-base text-metallicSilver max-w-xl mx-auto leading-relaxed">
          Follow our latest products, projects and company updates on our official Facebook page.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.facebook.com/ufichitwan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow UFI on Facebook (opens in new tab)"
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-2xl bg-[#1877F2] hover:bg-[#166FE5] text-white font-semibold text-sm tracking-wide transition-all duration-300 shadow-xl shadow-blue-900/40 hover:shadow-blue-800/50 hover:-translate-y-0.5 group"
          >
            <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
            <span>Follow UFI on Facebook</span>
          </a>

          <a
            href="https://wa.me/9779855053857"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with UFI on WhatsApp"
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-2xl bg-green-700 hover:bg-green-600 text-white font-semibold text-sm tracking-wide transition-all duration-300 shadow-xl shadow-green-900/30 hover:-translate-y-0.5"
          >
            <span>WhatsApp: +977-9855053857</span>
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center space-x-4 text-xs font-mono text-metallicSilver/60">
          <span>@ufichitwan</span>
          <span className="text-electricBlue/40">&bull;</span>
          <span>Bharatpur, Chitwan</span>
          <span className="text-electricBlue/40">&bull;</span>
          <span>Est. 1990</span>
        </div>
      </div>
    </section>
  );
}
