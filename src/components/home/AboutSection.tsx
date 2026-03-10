import Image from 'next/image';
import Button from '@/components/Button';

const ABOUT_IMAGE = '/gallery/garden/21.jpeg';

export default function AboutSection() {
  return (
    <section className="py-24 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-kindness-50 rounded-full blur-3xl" />
      <div className="absolute -bottom-28 -right-16 w-80 h-80 bg-nest-50 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="space-y-7 animate-slide-up">
            <span className="inline-block px-4 py-1.5 bg-nest-100 text-nest-700 rounded-full text-sm font-bold tracking-wide">
              ABOUT NURTURE NEST
            </span>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
              Where every child <span className="text-kindness-500">flourishes</span>
            </h2>

            <div className="space-y-5 text-slate-600 text-lg leading-relaxed max-w-xl">
              <p>
                At Nurture Nest, we provide a warm and safe learning environment where children feel welcomed and inspired every day.
              </p>
              <p>
                We nurture confidence, kindness, curiosity and resilience, while celebrating every child&apos;s culture, language and strengths.
              </p>
            </div>

            <div className="pt-2">
              <Button
                href="/about"
                variant="secondary"
                className="rounded-2xl bg-kindness-500 hover:bg-kindness-600 text-white border-none shadow-lg shadow-kindness-500/20"
              >
                Discover our approach
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in [animation-delay:120ms]">
            <div className="relative aspect-[5/4] rounded-[2rem] overflow-hidden shadow-soft-lg ring-8 ring-white">
              <Image
                src={ABOUT_IMAGE}
                alt="Children learning together at nursery"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="absolute -bottom-8 left-6 right-6 md:left-10 md:right-10 bg-white rounded-3xl border border-slate-100 shadow-soft p-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-kindness-100 flex items-center justify-center text-xl shrink-0">
                  💡
                </div>
                <div>
                  <p className="text-xs font-bold text-kindness-500 uppercase tracking-[0.2em] mb-1">
                    Child-Centred Learning
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Daily routines blend play, language and guided interaction so children grow socially, emotionally and cognitively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
