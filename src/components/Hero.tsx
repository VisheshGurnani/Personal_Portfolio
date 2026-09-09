'use client';

import { useState, useRef } from 'react';
import { ArrowDownRight, ArrowRight, Camera } from 'lucide-react';

export default function Hero() {
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('vishesh_portfolio_portrait');
        if (saved) return saved;
      } catch {
        // Ignore localStorage access restrictions in sandboxed iframes
      }
    }
    return '/profile.jpg';
  });
  const [hasError, setHasError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setPhotoUrl(result);
          setHasError(false);
          try {
            localStorage.setItem('vishesh_portfolio_portrait', result);
          } catch {
            // Quota or sandbox safety
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsHovered(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setPhotoUrl(result);
          setHasError(false);
          try {
            localStorage.setItem('vishesh_portfolio_portrait', result);
          } catch {
            // Quota or sandbox safety
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full pt-16 pb-20 md:pt-24 md:pb-32 border-b border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-12 md:space-y-20">
        {/* Top Metadata Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-neutral-500 uppercase tracking-widest pb-6 border-b border-neutral-800/80">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-neutral-300" />
            <span>AI / ML &bull; SOFTWARE ARCHITECTURE</span>
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>ALLIANCE UNIVERSITY &bull; BENGALURU</span>
          </div>
        </div>

        {/* Monumental Typographic Headline + Optical Portrait Viewfinder */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12">
          {/* Headline Typography */}
          <div className="space-y-2 flex-1">
            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] font-bold tracking-tighter leading-[0.85] text-neutral-100 uppercase select-none">
              Vishesh
              <br />
              <span className="text-neutral-400 font-light hover:text-neutral-100 transition-colors duration-500">
                Gurnani
              </span>
            </h1>
          </div>

          {/* Photographic Portrait Frame (The Visual Eye Viewfinder Style) */}
          <div className="w-full sm:w-64 md:w-72 lg:w-80 flex-shrink-0">
            <div
              id="hero-portrait-frame"
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => {
                e.preventDefault();
                setIsHovered(true);
              }}
              onDragLeave={() => setIsHovered(false)}
              onDrop={handleDrop}
              title="Click or drop your photo here (or place profile.jpg in public/)"
              className={`relative aspect-[3/4] w-full border border-neutral-800 bg-[#111113] overflow-hidden group cursor-pointer transition-all duration-300 ${
                isHovered ? 'border-neutral-400 ring-1 ring-neutral-400' : 'hover:border-neutral-600'
              }`}
            >
              {/* Hidden File Input for Direct Interactive Upload */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />

              {/* Corner Viewfinder Marks */}
              <div className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t border-l border-neutral-500 z-20 pointer-events-none" />
              <div className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t border-r border-neutral-500 z-20 pointer-events-none" />
              <div className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b border-l border-neutral-500 z-20 pointer-events-none" />
              <div className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b border-r border-neutral-500 z-20 pointer-events-none" />

              {/* Top Viewfinder Telemetry */}
              <div className="absolute top-3 inset-x-3 flex items-center justify-between text-[9px] font-mono text-neutral-300 z-20 pointer-events-none">
                <span className="tracking-wider bg-black/70 backdrop-blur-xs px-1.5 py-0.5 border border-neutral-800/90 text-neutral-300 font-semibold">
                  PORTRAIT // V. GURNANI
                </span>
                <span className="bg-black/70 backdrop-blur-xs px-1.5 py-0.5 border border-neutral-800/90 text-neutral-400">
                  REC &bull; 24FPS
                </span>
              </div>

              {/* Center Focus Crosshair */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity z-20">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-neutral-400" />
                  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-neutral-400" />
                  <div className="w-8 h-8 border border-neutral-600/70" />
                </div>
              </div>

              {/* Bottom Viewfinder Telemetry */}
              <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-[9px] font-mono text-neutral-400 z-20 pointer-events-none">
                <span className="bg-black/70 backdrop-blur-xs px-1.5 py-0.5 border border-neutral-800/90">
                  50MM &bull; F/1.8
                </span>
                <span className="bg-black/70 backdrop-blur-xs px-1.5 py-0.5 border border-neutral-800/90">
                  ISO 100 &bull; 1/250s
                </span>
              </div>

              {/* Actual Image / Fallback View */}
              {!hasError ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={photoUrl}
                  alt="Vishesh Gurnani Portrait"
                  referrerPolicy="no-referrer"
                  onError={() => setHasError(true)}
                  className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700 select-none"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-3 z-10 bg-[#111113]">
                  <div className="w-12 h-12 rounded-full border border-neutral-800 bg-neutral-900/60 flex items-center justify-center text-neutral-400 group-hover:text-neutral-200 group-hover:border-neutral-700 transition-colors">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 font-mono text-xs">
                    <div className="text-neutral-300 uppercase tracking-wider text-[11px] font-bold">
                      Add Portrait
                    </div>
                    <p className="text-[10px] text-neutral-500 max-w-[180px] leading-relaxed">
                      Click or drop your photo here, or place <span className="text-neutral-400">profile.jpg</span> in public/
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between pt-2 px-1 text-[10px] font-mono text-neutral-500">
              <span>OPTICAL SENSOR // 35MM FF</span>
              <span className="text-neutral-400">RAW &bull; 14-BIT</span>
            </div>
          </div>
        </div>

        {/* Asymmetrical Editorial Thesis & Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-end pt-4">
          {/* Thesis Statement */}
          <div className="lg:col-span-7 space-y-4">
            <p className="text-lg sm:text-2xl text-neutral-300 font-normal leading-relaxed tracking-tight max-w-2xl">
              Building intelligent systems, embedded sensor hardware, and resilient software architectures at the intersection of machine learning, data pipelines, and physical computing.
            </p>
          </div>

          {/* Actions & Meta notes */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-6 lg:items-end font-mono text-xs">
            <div className="space-y-1 text-neutral-500 lg:text-right">
              <div className="text-neutral-300 font-medium uppercase">CURRENT COMMITMENTS</div>
              <div>PRESIDENT &bull; ISACA ALLIANCE CHAPTER</div>
              <div>SYSTEMS LEAD &bull; EDGECROP ZERO &bull; SENTRY</div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-3 border border-neutral-700 bg-neutral-900 text-neutral-200 hover:bg-neutral-100 hover:text-neutral-900 transition-all uppercase tracking-wider text-xs"
              >
                <span>Selected Work</span>
                <ArrowDownRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 border border-transparent text-neutral-400 hover:text-neutral-100 transition-colors uppercase tracking-wider text-xs"
              >
                <span>Contact</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
