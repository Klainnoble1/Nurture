'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GALLERY_FILES = [
  'rs=w_719,h_959.webp',
  'rs=w_719,h_959 (1).webp',
  'rs=w_719,h_959 (2).webp',
  'rs=w_719,h_959 (3).webp',
  'rs=w_719,h_959 (4).webp',
  'rs=w_719,h_959 (5).webp',
  'rs=w_719,h_959 (6).webp',
  'rs=w_719,h_959 (7).webp',
  'rs=w_719,h_959 (8).webp',
];

const GALLERY_IMAGES = [
  { alt: 'Outdoor play area with wooden gazebo and balance beams', caption: 'Learning dome & balance play' },
  { alt: 'Tricycles and scooter on wood chips', caption: 'Wheeled play' },
  { alt: 'Trampolines and tire obstacle course on green turf', caption: 'Active play area' },
  { alt: 'Wooden hexagonal gazebo with bench seating', caption: 'Outdoor shelter' },
  { alt: 'Wooden play structure on safety surface', caption: 'Climbing & play structure' },
  { alt: 'Water play stations and sensory tubs', caption: 'Water & sensory play' },
  { alt: 'Wooden play structure with target panels', caption: 'Play platform' },
  { alt: 'Play tunnel, trampolines and tires', caption: 'Tunnel & trampolines' },
  { alt: 'Outdoor seating and play equipment on turf', caption: 'Garden area' },
];

function getGallerySrc(filename: string) {
  return `/gallery/${encodeURIComponent(filename)}`;
}

export default function GalleryClient() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {GALLERY_FILES.map((filename, index) => {
              const item = GALLERY_IMAGES[index] ?? { alt: 'Outdoor learning', caption: 'Our garden' };
              const src = getGallerySrc(filename);
              return (
                <button
                  key={filename}
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 border border-slate-200/80 shadow-soft hover:shadow-soft-lg hover:border-nest-200/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-nest-500 focus:ring-offset-2"
                >
                  <Image
                    src={src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white font-display font-semibold text-sm drop-shadow">{item.caption}</p>
                  </div>
                  <div data-placeholder className="absolute inset-0 hidden items-center justify-center bg-nest-100 text-nest-600 text-sm font-medium">
                    {item.caption}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-nest-600 text-nest-700 font-semibold rounded-xl hover:bg-nest-50 transition-colors"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <button
          type="button"
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-slate-900/95 flex items-center justify-center p-4 focus:outline-none"
          aria-label="Close lightbox"
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] aspect-[4/3]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={getGallerySrc(GALLERY_FILES[lightboxIndex])}
              alt={GALLERY_IMAGES[lightboxIndex]?.alt ?? 'Gallery'}
              fill
              className="object-contain rounded-xl"
              sizes="90vw"
            />
            <p className="text-white text-center mt-4 font-display font-semibold">
              {GALLERY_IMAGES[lightboxIndex]?.caption ?? 'Outdoor learning'}
            </p>
          </div>
        </button>
      )}
    </>
  );
}
