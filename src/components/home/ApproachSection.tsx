export default function ApproachSection() {
  const approaches = [
    {
      icon: '👶',
      title: 'Child-centred',
      description:
        "We follow children's interests and support learning through play, creativity, and guided exploration.",
      tip: 'Play-based learning builds confidence, agency, and self-regulation.',
      bg: 'bg-curiosity-50',
      border: 'border-curiosity-100',
      iconBg: 'bg-curiosity-100',
      tipBg: 'bg-white/75 text-curiosity-700',
    },
    {
      icon: '🌍',
      title: 'Multilingual',
      description:
        "Language is central to thinking. We support home languages and naturally develop English in daily interactions.",
      tip: 'Bilingual environments support cognitive flexibility and communication skills.',
      bg: 'bg-nest-50',
      border: 'border-nest-100',
      iconBg: 'bg-nest-100',
      tipBg: 'bg-white/75 text-nest-700',
    },
    {
      icon: '❤️',
      title: 'Inclusive',
      description:
        'Every child is valued and respected. We celebrate diversity, promote equality, and adapt practice for all learners.',
      tip: 'Inclusive classrooms benefit every child socially and emotionally.',
      bg: 'bg-kindness-50',
      border: 'border-kindness-100',
      iconBg: 'bg-kindness-100',
      tipBg: 'bg-white/75 text-kindness-700',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-10 right-0 w-72 h-72 bg-nest-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-8 w-64 h-64 bg-curiosity-100/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900">Our approach</h2>
          <p className="text-xl text-slate-600">
            Child-centred, strength-based, inclusive and multilingual, with strong links to families and community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {approaches.map((item, i) => (
            <div
              key={item.title}
              className={`${item.bg} ${item.border} p-8 md:p-10 rounded-[2.5rem] border-2 shadow-soft hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden animate-slide-up`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-60 bg-white/40 transition-transform duration-700 group-hover:scale-150" />

              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm ring-1 ring-white/60 text-4xl transform group-hover:rotate-12 transition-transform ${item.chip}`}>
                  {item.icon}
                </div>

                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">{item.title}</h3>

                <p className="text-slate-600 leading-relaxed mb-8">{item.description}</p>

                <div className={`${item.tipBg} rounded-2xl px-5 py-4 text-sm font-medium border border-white/60`}>
                  <span className="mr-2">💡</span>
                  {item.tip}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
