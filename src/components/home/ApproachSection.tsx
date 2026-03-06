export default function ApproachSection() {
  const approaches = [
    {
      icon: '👶',
      title: 'Child-centred',
      description: "We follow children's interests and let them lead through creativity and exploration—supporting agency and intrinsic motivation.",
      tip: 'Play-based learning supports executive function and self-regulation.',
      color: 'curiosity',
      bg: 'bg-curiosity-50',
      border: 'border-curiosity-100',
      iconBg: 'bg-curiosity-100',
      tipBg: 'bg-white/60 text-curiosity-700',
    },
    {
      icon: '🌍',
      title: 'Multilingual',
      description: "We draw on Vygotsky's sociocultural theory: language is central to thinking. We support home languages and add English naturally.",
      tip: 'Bilingualism is linked to cognitive flexibility and metalinguistic awareness.',
      color: 'nest',
      bg: 'bg-nest-50',
      border: 'border-nest-100',
      iconBg: 'bg-nest-100',
      tipBg: 'bg-white/60 text-nest-700',
    },
    {
      icon: '❤️',
      title: 'Inclusive',
      description: 'Every child is valued and respected. We celebrate diversity, promote equality, and adapt so everyone can participate and thrive.',
      tip: 'Inclusion benefits all children, not only those with additional needs.',
      color: 'kindness',
      bg: 'bg-kindness-50',
      border: 'border-kindness-100',
      iconBg: 'bg-kindness-100',
      tipBg: 'bg-white/60 text-kindness-700',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900">
            Our approach
          </h2>
          <p className="text-xl text-slate-600">
            Child-centred, strength-based, inclusive, and multilingual—with strong links to community and research.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {approaches.map((item, i) => (
            <div
              key={i}
              className={`${item.bg} ${item.border} p-8 md:p-10 rounded-[2.5rem] border-2 shadow-soft hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Decorative circle */}
              <div className={`absolute -top-12 -right-12 w-32 h-32 ${item.iconBg} rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700`} />
              
              <div className="relative z-10">
                <div className={`${item.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-8 transform group-hover:rotate-12 transition-transform`}>
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-8">
                  {item.description}
                </p>
                
                <div className={`${item.tipBg} rounded-2xl px-5 py-4 text-sm font-medium border border-white/50`}>
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
