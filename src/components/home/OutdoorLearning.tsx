import Image from 'next/image';
import Button from '@/components/Button';

const OUTDOOR_IMAGE = '/gallery/preschool-room/16.jpeg';

export default function OutdoorLearning() {
  const features = [
    {
      emoji: '🎡',
      title: 'Climbing frames',
      desc: 'Build strength, balance, and confidence',
    },
    {
      emoji: '🏐',
      title: 'Football area',
      desc: 'Develop teamwork and coordination',
    },
    {
      emoji: '💧',
      title: 'Water and sand play',
      desc: 'Support sensory exploration and creativity',
    },
    {
      emoji: '📚',
      title: 'Learning dome',
      desc: 'Calm spaces for reading and group time',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative order-2 lg:order-1 animate-slide-up">
            <div className="absolute -inset-4 bg-nest-100 rounded-[3rem] -rotate-3" />
            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl ring-8 ring-white/80">
              <Image
                src={OUTDOOR_IMAGE}
                alt="Children playing outdoors in nature"
                fill
                className="object-cover hover:scale-110 transition-transform duration-1000"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="absolute -bottom-10 -right-6 md:right-0 bg-nest-500 text-white rounded-3xl shadow-2xl p-6 max-w-xs border-4 border-white animate-float">
              <p className="text-xs font-bold text-nest-100 uppercase tracking-widest mb-2">Learning tip</p>
              <p className="font-medium leading-relaxed">
                Outdoor play improves physical health, concentration, and connection to nature.
              </p>
            </div>
          </div>

          <div className="space-y-10 order-1 lg:order-2 animate-slide-up [animation-delay:120ms]">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 bg-curiosity-100 text-curiosity-700 rounded-full text-sm font-bold tracking-wide">
                LEARNING SPACES
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                Spacious outdoor <span className="text-nest-500">learning</span>
              </h2>
              <p className="text-xl text-slate-600">
                Our nursery has a spacious outdoor garden where every child can play, explore and learn freely and safely.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map(({ emoji, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-4 p-4 rounded-2xl border border-slate-100 hover:border-nest-200 hover:bg-nest-50 transition-all duration-300 group hover:-translate-y-1"
                >
                  <span className="text-3xl shrink-0 group-hover:scale-125 transition-transform">
                    {emoji}
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900">{title}</h4>
                    <p className="text-sm text-slate-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button
                href="/gallery"
                variant="secondary"
                className="rounded-2xl border-none bg-joy-500 hover:bg-joy-600 text-white shadow-lg shadow-joy-500/20"
              >
                View gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
