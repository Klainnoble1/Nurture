import Image from 'next/image';
import Button from '@/components/Button';

const ABOUT_IMAGE = '/kidsplaying1.jpeg';

export default function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-kindness-50 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-curiosity-50 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 bg-nest-100 text-nest-700 rounded-full text-sm font-bold tracking-wide">
              ABOUT NURTURE NEST
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
              Where every child <br/><span className="text-kindness-500">flourishes</span>
            </h2>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                We believe every child is unique, capable, and full of potential. Our curriculum nurtures confident, curious, kind, and resilient learners through a rich, inclusive, and culturally responsive environment.
              </p>
              <p className="font-medium text-slate-900">
                We celebrate diversity, promote equality, and ensure every child feels valued, respected, and empowered to succeed.
              </p>
            </div>
            
            <div className="pt-4">
              <Button href="/about" variant="secondary" className="rounded-2xl bg-kindness-500 hover:bg-kindness-600 text-white border-none shadow-lg shadow-kindness-500/20">
                Discover our approach
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl ring-8 ring-kindness-50/50">
              <Image
                src={ABOUT_IMAGE}
                alt="Children playing and learning at nursery"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            <div className="absolute -bottom-8 -left-8 right-8 md:right-0 bg-white border-2 border-kindness-100 rounded-3xl shadow-xl p-6 transform hover:-translate-y-1 transition-transform">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-kindness-100 flex items-center justify-center text-2xl shrink-0">
                  💡
                </div>
                <div>
                  <p className="text-xs font-bold text-kindness-600 uppercase tracking-widest mb-1">
                    Did you know?
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    The first five years of life shape 90% of a child&apos;s brain development. Quality early years provision has lasting effects.
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
