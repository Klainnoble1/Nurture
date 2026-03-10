import Image from 'next/image';

const FAMILIES_STRIP_1 = '/gallery/home/family-10.jpg';
const FAMILIES_STRIP_2 = '/gallery/home/family-18.jpg';
const FAMILIES_STRIP_3 = '/gallery/home/family-25.jpg';

export default function FamilyStrip() {
  const images = [
    { src: FAMILIES_STRIP_1, alt: "Children playing together", rotate: "-rotate-2" },
    { src: FAMILIES_STRIP_2, alt: "Kids playing at nursery", rotate: "rotate-2" },
    { src: FAMILIES_STRIP_3, alt: "Happy children learning", rotate: "-rotate-1" },
  ];

  return (
    <section className="py-24 bg-joy-50 relative overflow-hidden" aria-label="Our families">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
            Happy families, happy <span className="text-joy-500 underline decoration-joy-200 decoration-8 underline-offset-8">little ones</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Families from all backgrounds trust Nurture Nest to provide a loving and safe start for their children.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
          {images.map((img, i) => (
            <div 
              key={i} 
              className={`relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white transition-all duration-500 hover:scale-105 hover:rotate-0 animate-slide-up ${img.rotate}`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className="object-cover" 
                sizes="(max-width: 640px) 100vw, 33vw"
                quality={65}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
