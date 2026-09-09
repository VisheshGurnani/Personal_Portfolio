'use client';

import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0c0c0d] text-neutral-500 py-12 border-t border-neutral-900 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-baseline justify-between gap-6">
        {/* Identity & Location */}
        <div className="space-y-1">
          <div className="text-neutral-200 font-sans font-medium uppercase tracking-tight text-sm">
            Vishesh Gurnani
          </div>
          <div className="text-[11px] text-neutral-500">
            Bengaluru, India &bull; Alliance University &bull; &copy; {new Date().getFullYear()}
          </div>
        </div>

        {/* Minimal Links & Back to Top */}
        <div className="flex items-center gap-6 uppercase tracking-wider text-[11px]">
          <a
            href="https://github.com/VisheshGurnani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/visheshgurnani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-100 transition-colors"
          >
            LinkedIn
          </a>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-neutral-100 transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
