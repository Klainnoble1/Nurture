import Link from 'next/link';
import PageLayout from '@/app/PageLayout';
import GalleryClient from './GalleryClient';

export const metadata = {
  title: 'Gallery',
  description: 'Our outdoor learning environment: play structures, sensory areas, and garden spaces at Nurture Nest.',
};

export default function GalleryPage() {
  return (
    <PageLayout>
      <div className="bg-slate-50 min-h-screen">
        <section className="pt-20 pb-12 md:pt-24 md:pb-16 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-3 py-1.5 bg-nest-100 text-nest-700 rounded-lg text-sm font-semibold mb-4">
              Our spaces
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-4">
              Our Learning Environments
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A glimpse into our baby room, toddler room, preschool room, and beautiful garden area.
            </p>
          </div>
        </section>
        <GalleryClient />
      </div>
    </PageLayout>
  );
}
