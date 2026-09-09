'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Maximize2, X } from 'lucide-react';

interface VisualStudy {
  frame: string;
  title: string;
  subtitle: string;
  image: string;
  specs: string;
  observation: string;
  width: number;
  height: number;
  aspectRatio: string;
  aspectDesc: string;
}

export default function Photography() {
  const [selectedPhoto, setSelectedPhoto] = useState<VisualStudy | null>(null);

  // Close modal on Escape key press
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSelectedPhoto(null);
    }
  }, []);

  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPhoto, handleKeyDown]);

  const studies: VisualStudy[] = [
    {
      frame: '01',
      title: 'Architectural Brutalism',
      subtitle: 'GEOMETRIC PERSPECTIVE',
      image: '/photos/architectural.jpg',
      specs: '50mm &bull; f/2.8 &bull; 1/500s &bull; ISO 100',
      observation:
        'Observing structural load lines, monolithic concrete, and negative space parallels how software engineers establish decoupled system boundaries.',
      width: 1080,
      height: 1350,
      aspectRatio: '4 / 5',
      aspectDesc: '4:5 PORTRAIT',
    },
    {
      frame: '02',
      title: 'Low-Light Sensor Dynamics',
      subtitle: 'CHROMA & NOISE TAXONOMY',
      image: '/photos/low%20light.webp',
      specs: '35mm &bull; f/1.4 &bull; 1/60s &bull; ISO 800',
      observation:
        'Pushing digital sensor limits reveals mathematical noise distributions—directly informing computer vision spatial filtering and edge preservation.',
      width: 1771,
      height: 1771,
      aspectRatio: '1 / 1',
      aspectDesc: '1:1 SQUARE',
    },
    {
      frame: '03',
      title: 'Aeronautical Vectors & Trajectory',
      subtitle: 'AIRCRAFT KINEMATICS',
      image: '/photos/plane%20(1%20of%201).jpg',
      specs: '70mm &bull; f/5.6 &bull; 1/1000s &bull; ISO 200',
      observation:
        'Capturing high-velocity airframes in flight emphasizes trajectory stability, aerodynamic silhouette, and precision spatial telemetry.',
      width: 5184,
      height: 3456,
      aspectRatio: '3 / 2',
      aspectDesc: '3:2 HORIZONTAL',
    },
  ];

  return (
    <section id="visual" className="py-24 md:py-32 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-800">
          <div className="space-y-3">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block">
              04 // VISUAL STUDIES & PERSPECTIVE
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-100 uppercase">
              The Visual Eye
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-500 max-w-sm md:text-right leading-relaxed">
            Photography as an empirical laboratory for spatial discipline, exposure latitude, and structural restraint.
          </div>
        </div>

        {/* 3 Plates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studies.map((study) => (
            <div
              key={study.frame}
              id={`photo-plate-${study.frame}`}
              className="p-6 border border-neutral-800 bg-[#111113] space-y-6 flex flex-col justify-between hover:border-neutral-700 transition-colors group"
            >
              {/* Card Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-500 pb-2 border-b border-neutral-800/80">
                  <span className="text-neutral-400 font-medium">PLATE [{study.frame}]</span>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-wider">{study.subtitle}</span>
                </div>
                <h3 className="text-lg font-bold text-neutral-100 uppercase tracking-tight group-hover:text-neutral-300 transition-colors">
                  {study.title}
                </h3>
              </div>

              {/* Viewfinder Graphic Plate with Real Image */}
              <div
                id={`photo-viewfinder-${study.frame}`}
                className="aspect-[3/2] border border-neutral-800 bg-neutral-950 relative overflow-hidden group/plate"
                title={`Inspect ${study.title}`}
              >
                {/* Background Photography Image */}
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover/plate:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Cinematic Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/45 pointer-events-none" />

                {/* Background Interaction Hitbox (Layered above image, below HUD) */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedPhoto(study)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedPhoto(study);
                    }
                  }}
                  className="absolute inset-0 z-10 cursor-pointer focus:outline-hidden focus:ring-1 focus:ring-neutral-400"
                  aria-label={`Inspect ${study.title}`}
                />

                {/* Viewfinder Corner Brackets */}
                <div className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t border-l border-neutral-300 z-10 pointer-events-none opacity-60 group-hover/plate:opacity-100 transition-opacity" />
                <div className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t border-r border-neutral-300 z-10 pointer-events-none opacity-60 group-hover/plate:opacity-100 transition-opacity" />
                <div className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b border-l border-neutral-300 z-10 pointer-events-none opacity-60 group-hover/plate:opacity-100 transition-opacity" />
                <div className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b border-r border-neutral-300 z-10 pointer-events-none opacity-60 group-hover/plate:opacity-100 transition-opacity" />

                {/* Top Plate HUD */}
                <div className="absolute top-2.5 inset-x-3 flex items-center justify-between text-[9px] font-mono text-neutral-300 z-20 pointer-events-none">
                  <span className="bg-black/80 backdrop-blur-xs px-1.5 py-0.5 border border-neutral-800 tracking-wider">
                    RAW // {study.aspectDesc}
                  </span>
                  <button
                    type="button"
                    id={`btn-inspect-${study.frame}`}
                    onClick={(e) => {
                      console.log('Button clicked, Event:', e);
                      console.log('Target Study:', study.title);
                      setSelectedPhoto(study);
                    }}
                    className="pointer-events-auto flex items-center gap-1.5 bg-black/90 hover:bg-neutral-800 text-neutral-200 hover:text-white px-2 py-1 border border-neutral-700 hover:border-neutral-400 transition-all cursor-pointer shadow-md active:scale-95"
                    >
                    <Maximize2 className="w-2.5 h-2.5" />
                      <span className="font-semibold tracking-wider">INSPECT FULL</span>
                  </button>
                </div>

                {/* Center Reticle Crosshairs */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30 group-hover/plate:opacity-75 transition-opacity z-10">
                  <div className="relative w-8 h-8">
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-neutral-200" />
                    <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-neutral-200" />
                    <div className="w-8 h-8 border border-neutral-400/80" />
                  </div>
                </div>

                {/* Bottom Viewfinder Telemetry */}
                <div className="absolute bottom-2.5 inset-x-3 flex items-center justify-center z-10 pointer-events-none">
                  <span
                    className="font-mono text-[9px] text-neutral-200 tracking-wider bg-black/80 backdrop-blur-xs px-2 py-0.5 border border-neutral-800/90 text-center"
                    dangerouslySetInnerHTML={{ __html: study.specs }}
                  />
                </div>
              </div>

              {/* Engineering Observation Caption */}
              <p className="text-xs text-neutral-400 font-sans leading-relaxed pt-2 border-t border-neutral-800/60">
                {study.observation}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Optical Lightbox Modal */}
      {selectedPhoto && (
        <div
          id="photo-modal-backdrop"
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-3 sm:p-6 md:p-8"
        >
          {/* Top Floating Telemetry & Controls Bar */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-6xl flex items-center justify-between pb-3 border-b border-neutral-800 font-mono text-xs text-neutral-400 shrink-0"
          >
            <div className="flex items-center gap-3">
              <span className="text-neutral-100 font-bold uppercase tracking-wider text-xs sm:text-sm">
                PLATE [{selectedPhoto.frame}] // {selectedPhoto.title}
              </span>
              <span className="text-[10px] text-neutral-500 hidden sm:inline border border-neutral-800 px-1.5 py-0.5">
                {selectedPhoto.aspectDesc} &bull; {selectedPhoto.width}&times;{selectedPhoto.height}PX
              </span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={selectedPhoto.image}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:flex items-center gap-1 px-2 py-1 text-[11px] border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-neutral-100 transition-colors"
                title="Open raw image file in new tab"
              >
                <span>OPEN RAW</span>
              </a>
              <button
                type="button"
                id="btn-close-lightbox"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close optical inspection modal"
                className="flex items-center gap-1 px-2 py-1 border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
                <span className="text-[11px] tracking-wider font-semibold">CLOSE [ESC]</span>
              </button>
            </div>
          </div>

          {/* Expanded Optical Viewport */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex-1 w-full max-w-6xl my-3 sm:my-4 flex items-center justify-center overflow-hidden"
          >
            <div
              className="relative max-h-full max-w-full border border-neutral-800 bg-black shadow-2xl overflow-hidden flex items-center justify-center"
              style={{
                aspectRatio: selectedPhoto.aspectRatio,
                height: '100%',
                maxHeight: 'calc(100vh - 160px)',
              }}
            >
              <Image
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain"
                referrerPolicy="no-referrer"
              />

              <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-neutral-400/80 pointer-events-none" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-neutral-400/80 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-neutral-400/80 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-neutral-400/80 pointer-events-none" />
            </div>
          </div>

          {/* Modal Telemetry Footer */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-6xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-3 border-t border-neutral-800 text-xs font-mono text-neutral-400 shrink-0"
          >
            <div className="flex items-center gap-2">
              <span className="text-neutral-500 text-[10px] uppercase">EXIF TELEMETRY:</span>
              <span
                className="text-[11px] text-neutral-300"
                dangerouslySetInnerHTML={{ __html: selectedPhoto.specs }}
              />
            </div>
            <p className="text-[11px] text-neutral-400 max-w-xl sm:text-right font-sans leading-relaxed">
              {selectedPhoto.observation}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}