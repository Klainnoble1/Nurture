'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

const ROOM_CATEGORIES = [
  { id: 'all', label: 'All Spaces' },
  { id: 'baby-room', label: 'Baby Room' },
  { id: 'toddler-room', label: 'Toddler Room' },
  { id: 'preschool-room', label: 'Preschool Room' },
  { id: 'garden', label: 'Garden Area' },
] as const;

type RoomId = Exclude<(typeof ROOM_CATEGORIES)[number]['id'], 'all'>;
type GalleryImage = { filename: string; room: RoomId; url: string; alt: string };
type GalleryMap = Record<RoomId, GalleryImage[]>;

export default function GalleryClient() {
  const [activeTab, setActiveTab] = useState<(typeof ROOM_CATEGORIES)[number]['id']>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [galleryImages, setGalleryImages] = useState<GalleryMap>({
    'baby-room': [],
    'toddler-room': [],
    'preschool-room': [],
    garden: [],
  });
  const [loading, setLoading] = useState(true);

  const fetchGallery = useCallback(async () => {
    try {
      const res = await fetch('/api/gallery', { cache: 'no-store' });
      if (!res.ok) throw new Error('Failed to fetch gallery');
      const data = await res.json();
      setGalleryImages(data.images ?? {});
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGallery();
  }, [fetchGallery]);

  // Refresh when changing tabs so admin edits show quickly without full page reload.
  useEffect(() => {
    if (!loading) {
      fetchGallery();
    }
  }, [activeTab, fetchGallery, loading]);

  const allImages = useMemo(
    () => [
      ...(galleryImages['baby-room'] ?? []),
      ...(galleryImages['toddler-room'] ?? []),
      ...(galleryImages['preschool-room'] ?? []),
      ...(galleryImages.garden ?? []),
    ],
    [galleryImages]
  );

  const filteredImages = useMemo(() => {
    if (activeTab === 'all') return allImages;
    return galleryImages[activeTab] ?? [];
  }, [activeTab, allImages, galleryImages]);

  return (
    <>
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {ROOM_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeTab === category.id
                    ? 'bg-nest-600 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-nest-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="text-center py-20 text-slate-400">
              <div className="w-8 h-8 border-4 border-nest-400 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              Loading gallery...
            </div>
          ) : filteredImages.length === 0 ? (
            <div className="text-center py-20 text-slate-400 border-2 border-dashed border-slate-200 rounded-2xl bg-white">
              No images available in this section yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredImages.map((item) => (
                <button
                  key={`${item.room}-${item.filename}`}
                  type="button"
                  onClick={() => setLightboxIndex(allImages.findIndex((img) => img.url === item.url))}
                  className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-200 border border-slate-200/80 shadow-soft hover:shadow-lg hover:border-nest-200/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-nest-500 focus:ring-offset-2"
                >
                  <Image
                    src={item.url}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {lightboxIndex !== null && allImages[lightboxIndex] && (
        <button
          type="button"
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-slate-900/95 flex items-center justify-center p-4 focus:outline-none"
          aria-label="Close lightbox"
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] aspect-[4/3] flex flex-col" onClick={(e) => e.stopPropagation()}>
            <Image
              src={allImages[lightboxIndex].url}
              alt={allImages[lightboxIndex].alt}
              fill
              className="object-contain rounded-xl"
              sizes="90vw"
            />
          </div>
        </button>
      )}
    </>
  );
}

