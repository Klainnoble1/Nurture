import Image from 'next/image';
import Button from '@/components/Button';

const CTA_IMAGE = '/kidsplaying2.jpeg';

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-nest-500 relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 border-8 border-white rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 border-8 border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-[3rem] p-8 md:p-16 border border-white/20 shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                Ready to join <br/>our <span className="text-joy-300">community</span>?
              </h2>
              <p className="text-xl text-nest-50 leading-relaxed font-medium">
                Registration for September 2026 is now open. <br className="hidden lg:block" />
                Give your child an inclusive and nurturing start.
              </p>
              <div className="pt-4">
                <Button href="/registration" size="lg" variant="secondary" className="bg-white text-nest-600 hover:bg-nest-50 border-none rounded-2xl px-10 shadow-xl shadow-black/10">
                  Register now
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square max-w-sm mx-auto rounded-[2rem] overflow-hidden shadow-2xl ring-8 ring-white/20 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src={CTA_IMAGE}
                  alt="Happy children at nursery"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 40vw"
                />
              </div>
              {/* Decorative tags */}
              <div className="absolute -top-6 -right-6 bg-joy-500 text-white px-6 py-3 rounded-2xl shadow-xl font-bold -rotate-12 animate-bounce-soft">
                Enroll Now!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
