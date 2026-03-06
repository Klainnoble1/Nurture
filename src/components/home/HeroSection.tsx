import Image from 'next/image';
import Button from '@/components/Button';

const HERO_IMAGE = '/patricianitzc-balance-2194880_1920.jpg';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Sunny, cheerful gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-curiosity-50 via-white to-kindness-50" />
      
      {/* Playful blobs */}
      <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-joy-200/40 blur-3xl animate-blob" />
      <div className="absolute bottom-20 left-[5%] w-80 h-80 rounded-full bg-curiosity-300/30 blur-3xl animate-blob [animation-delay:2s]" />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-wonder-300/30 blur-2xl animate-blob [animation-delay:4s]" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-joy-100 text-joy-700 font-bold text-sm md:text-base shadow-sm animate-bounce-soft">
              <span>🌟</span>
              <span>Welcome to Nurture Nest</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] tracking-tight">
              Where every child <span className="text-nest-500">belongs</span>, learns, and grows
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              A caring, inclusive nursery in the heart of London—multilingual, EYFS-aligned, and rooted in British values. We nurture curiosity, kindness, and confidence in every child.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <Button href="/registration" size="lg" variant="primary" className="rounded-2xl shadow-nest-lg">
                Join our nursery
              </Button>
              <Button href="/about" size="lg" variant="outline" className="rounded-2xl border-slate-200">
                Learn more
              </Button>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-joy-400 to-wonder-400 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative aspect-[4/3] lg:aspect-square max-w-xl mx-auto lg:max-w-none rounded-[2.5rem] overflow-hidden shadow-2xl ring-8 ring-white/50 border-4 border-white transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src={HERO_IMAGE}
                alt="Children playing and learning at Nurture Nest"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
