import Image from 'next/image';
import Button from '@/components/Button';

const LOGO = '/logo-removebg-preview.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-slate-100">
        <Image src={LOGO} alt="" fill className="object-cover" sizes="100vw" priority aria-hidden="true" />
      </div>

      <div className="absolute inset-0 bg-nest-900/55" />

      <div className="absolute top-16 right-[15%] w-72 h-72 rounded-full bg-nest-400/15 blur-3xl animate-blob" />
      <div className="absolute bottom-16 left-[10%] w-96 h-96 rounded-full bg-curiosity-400/10 blur-3xl animate-blob [animation-delay:2s]" />

      <div className="relative z-20 max-w-3xl mx-auto px-6 sm:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white font-semibold text-sm mb-8 shadow-lg">
          <span className="text-joy-300">🌟</span>
          <span>Welcome to Nurture Nest Multilingual Nursery</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.08] tracking-tight mb-6 drop-shadow-lg">
          Where every child <span className="text-joy-300">belongs</span>, learns, and grows
        </h1>

        <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed font-medium mb-10">
          A caring, inclusive nursery in the heart of London, multilingual, EYFS-aligned, and rooted in British
          values. We nurture curiosity, kindness, and confidence in every child.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button href="/join" size="lg" variant="primary" className="rounded-2xl shadow-2xl">
            Join our nursery
          </Button>
          <Button
            href="/about"
            size="lg"
            variant="outline"
            className="rounded-2xl !border-white/60 !text-white !bg-transparent hover:!bg-white/15 backdrop-blur-sm"
          >
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
}
