export default function InternationalCommunity() {
  const flags = [
    { code: 'ng', name: 'Nigeria' },
    { code: 'gh', name: 'Ghana' },
    { code: 'sl', name: 'Sierra Leone' },
    { code: 'gb', name: 'United Kingdom' },
    { code: 'fr', name: 'France' },
    { code: 'es', name: 'Spain' },
    { code: 'it', name: 'Italy' },
    { code: 'br', name: 'Brazil' },
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-100" aria-label="Our international community">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-10 animate-fade-in">
          WE CELEBRATE OUR DIVERSE COMMUNITY
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-opacity duration-500">
          {flags.map(({ code, name }, i) => (
            <div key={code} className="group relative animate-slide-up" style={{ animationDelay: `${i * 80}ms` }}>
              <img
                src={`https://flagcdn.com/w80/${code}.png`}
                alt={`${name} flag`}
                className="h-10 md:h-12 w-auto object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-125 group-hover:drop-shadow-md"
              />
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
