'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [timeString, setTimeString] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Bengaluru / IST (UTC+5:30)
      const istTime = now.toLocaleTimeString('en-GB', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setTimeString(`${istTime} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0c0c0d]/95 backdrop-blur-sm border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between text-xs">
        {/* Name / Mark */}
        <div className="flex items-baseline gap-3">
          <a
            href="#hero"
            className="font-medium tracking-tight text-neutral-100 hover:text-neutral-400 transition-colors uppercase text-sm"
          >
            Vishesh Gurnani
          </a>
          <span className="hidden sm:inline-block text-neutral-500 font-mono text-[11px]">
            / AI & Systems Engineer
          </span>
        </div>

        {/* Location & Time Stamp */}
        <div className="hidden md:flex items-center gap-2 font-mono text-[11px] text-neutral-500 tracking-wider">
          <span>BLR, IN</span>
          <span className="text-neutral-700">•</span>
          <span className="tabular-nums text-neutral-400">{timeString || '12:00:00 IST'}</span>
        </div>

        {/* Minimal Editorial Links */}
        <nav className="flex items-center gap-6 sm:gap-8 font-mono text-[11px] uppercase tracking-widest">
          <a
            href="#work"
            className="text-neutral-400 hover:text-neutral-100 transition-colors"
          >
            <span className="text-neutral-600 mr-1">01</span>Work
          </a>
          <a
            href="#about"
            className="text-neutral-400 hover:text-neutral-100 transition-colors"
          >
            <span className="text-neutral-600 mr-1">02</span>About
          </a>
          <a
            href="#leadership"
            className="text-neutral-400 hover:text-neutral-100 transition-colors hidden sm:inline"
          >
            <span className="text-neutral-600 mr-1">03</span>Leadership
          </a>
          <a
            href="#contact"
            className="text-neutral-400 hover:text-neutral-100 transition-colors"
          >
            <span className="text-neutral-600 mr-1">04</span>Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
