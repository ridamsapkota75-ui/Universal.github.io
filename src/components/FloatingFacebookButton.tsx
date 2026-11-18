import React, { useState, useEffect } from 'react';

export default function FloatingFacebookButton() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !visible) return null;

  return (
    <aside
      aria-label="Social connection"
      className="fixed bottom-5 right-5 z-40 flex items-center group animate-fade-in-up"
    >
      <div className="relative flex items-center bg-deepNavy/95 border border-electricBlue/40 hover:border-blue-400 rounded-full p-1.5 shadow-2xl backdrop-blur-md transition-all duration-300 hover:shadow-blue-600/30">
        <a
          href="https://www.facebook.com/ufichitwan/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Universal Furniture Industries on Facebook (opens in new tab)"
          className="flex items-center space-x-2.5 px-3 py-1.5 rounded-full bg-[#1877F2] hover:bg-[#166FE5] text-white transition duration-200"
        >
          <svg
            className="w-4 h-4 fill-current group-hover:scale-110 transition-transform"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
          </svg>
          <span className="text-xs font-semibold tracking-wide hidden sm:inline">
            Follow UFI on Facebook
          </span>
          <span className="text-xs font-semibold tracking-wide sm:hidden">
            Follow UFI
          </span>
        </a>

        {/* Small dismiss button so user can hide it if desired */}
        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Dismiss floating button"
          className="ml-1.5 p-1 text-metallicSilver/60 hover:text-white rounded-full hover:bg-darkBlue transition text-xs"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
