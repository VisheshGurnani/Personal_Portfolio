'use client';

import { useState } from 'react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'visheshgurnani25@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-36 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-16">
        {/* Section Tag */}
        <div className="flex items-center justify-between pb-6 border-b border-neutral-800 text-xs font-mono text-neutral-500 uppercase tracking-widest">
          <span>05 // INITIATE DIALOGUE</span>
          <span>LOCATION: BENGALURU &bull; INDIA</span>
        </div>

        {/* Monumental Headline */}
        <div className="space-y-6 max-w-5xl">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.88] text-neutral-100 uppercase">
            Let&apos;s Build
            <br />
            <span className="text-neutral-500 font-light hover:text-neutral-100 transition-colors duration-500">
              Something
            </span>
            <br />
            Interesting.
          </h2>

          <p className="text-lg sm:text-xl text-neutral-400 font-normal leading-relaxed max-w-2xl pt-4">
            Currently open to discussing artificial intelligence research, engineering internships, and collaborative software systems. My inbox is open.
          </p>
        </div>

        {/* Direct Channels */}
        <div className="pt-8 border-t border-neutral-800 grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline font-mono text-xs">
          {/* Email Channel */}
          <div className="md:col-span-6 space-y-2">
            <span className="text-neutral-500 uppercase tracking-widest block text-[10px]">
              PRIMARY INBOX
            </span>
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href={`mailto:${emailAddress}`}
                className="text-lg sm:text-2xl font-sans font-medium text-neutral-100 hover:text-neutral-400 transition-colors"
              >
                {emailAddress}
              </a>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-neutral-700 hover:border-neutral-300 text-neutral-300 hover:text-white transition-all uppercase text-[11px]"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-neutral-300" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="md:col-span-6 flex flex-wrap md:justify-end gap-8 pt-2 md:pt-0">
            <div>
              <span className="text-neutral-500 uppercase tracking-widest block text-[10px] mb-2">
                CODE
              </span>
              <a
                href="https://github.com/VisheshGurnani"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-sans font-medium text-neutral-200 hover:text-neutral-400 transition-colors uppercase"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div>
              <span className="text-neutral-500 uppercase tracking-widest block text-[10px] mb-2">
                NETWORK
              </span>
              <a
                href="https://linkedin.com/in/visheshgurnani"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-sans font-medium text-neutral-200 hover:text-neutral-400 transition-colors uppercase"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
