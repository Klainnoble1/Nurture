import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero — welcoming, educational (not SaaS) */}
        <section className="relative bg-gradient-to-b from-warm-50/80 via-white to-nest-50/50 pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, var(--color-nest-400) 1px, transparent 1px), radial-gradient(circle at 80% 70%, var(--color-warm-400) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-nest-700 font-medium text-sm md:text-base mb-4">
              Welcome to Nurture Nest
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-800 leading-tight tracking-tight">
              Where every child belongs, learns, and grows
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              A caring, inclusive nursery in the heart of London—multilingual, EYFS-aligned, and rooted in British values. We nurture curiosity, kindness, and confidence in every child.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/registration" size="lg" variant="primary">
                Join our nursery
              </Button>
              <Button href="/about" size="lg" variant="outline">
                Learn more
              </Button>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <div className="space-y-6">
                <span className="inline-block px-3 py-1.5 bg-nest-100 text-nest-700 rounded-lg text-sm font-semibold">
                  About Nurture Nest
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
                  Where every child flourishes
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  We believe every child is unique, capable, and full of potential. Our curriculum nurtures confident, curious, kind, and resilient learners through a rich, inclusive, and culturally responsive environment.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  We celebrate diversity, promote equality, and ensure every child feels valued, respected, and empowered to succeed.
                </p>
                <Button href="/about" variant="secondary">
                  Discover our approach →
                </Button>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-nest-100 to-warm-100 rounded-2xl overflow-hidden border border-nest-200/50 flex items-center justify-center">
                  <span className="text-7xl opacity-90">🌱</span>
                </div>
                <div className="absolute -bottom-4 -left-4 right-4 md:right-0 bg-white rounded-xl border border-slate-200 shadow-soft p-4">
                  <p className="text-xs font-semibold text-nest-600 uppercase tracking-wider mb-1">
                    Did you know?
                  </p>
                  <p className="text-sm text-slate-600">
                    The first five years of life shape 90% of a child&apos;s brain development. Quality early years provision has lasting effects on learning and wellbeing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-20 md:py-28 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-3">
                Our approach
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Child-centred, strength-based, inclusive, and multilingual—with strong links to community and research.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  icon: '👶',
                  title: 'Child-centred learning',
                  description: "We follow children's interests and let them lead through creativity and exploration—supporting agency and intrinsic motivation.",
                  tip: 'Play-based learning supports executive function and self-regulation.',
                },
                {
                  icon: '🌍',
                  title: 'Multilingual development',
                  description: "We draw on Vygotsky's sociocultural theory: language is central to thinking. We support home languages and add English naturally.",
                  tip: 'Bilingualism is linked to cognitive flexibility and metalinguistic awareness.',
                },
                {
                  icon: '❤️',
                  title: 'Inclusive environment',
                  description: 'Every child is valued and respected. We celebrate diversity, promote equality, and adapt so everyone can participate and thrive.',
                  tip: 'Inclusion benefits all children, not only those with additional needs.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-soft hover:shadow-soft-lg hover:border-nest-200/80 transition-all duration-300 animate-scale-in group"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <p className="text-xs font-medium text-nest-600 bg-nest-50 rounded-lg px-3 py-2 border border-nest-100/80">
                    💡 {item.tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outdoor learning */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <div className="relative order-2 md:order-1">
                <div className="aspect-[4/3] bg-gradient-to-br from-warm-100 to-nest-100 rounded-2xl overflow-hidden border border-warm-200/50 flex items-center justify-center">
                  <span className="text-7xl opacity-90">🌳</span>
                </div>
                <div className="absolute -bottom-4 -right-4 left-4 md:left-auto md:right-0 bg-nest-600 text-white rounded-xl shadow-soft p-4 max-w-xs">
                  <p className="text-xs font-semibold text-nest-200 uppercase tracking-wider mb-1">
                    Learning tip
                  </p>
                  <p className="text-sm text-nest-50">
                    Outdoor play improves physical health, concentration, and connection to nature—key for early years development.
                  </p>
                </div>
              </div>

              <div className="space-y-6 order-1 md:order-2">
                <span className="inline-block px-3 py-1.5 bg-nest-100 text-nest-700 rounded-lg text-sm font-semibold">
                  Learning spaces
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
                  Outdoor learning environment
                </h2>
                <p className="text-slate-600 text-lg">
                  Our nursery has a spacious outdoor garden where every child can play, explore, and learn without feeling crowded.
                </p>
                <ul className="space-y-4">
                  {[
                    { emoji: '🎡', title: 'Climbing frames', desc: 'Build strength, balance, and confidence through active play' },
                    { emoji: '🏐', title: 'Football area', desc: 'Develop teamwork and coordination' },
                    { emoji: '💧', title: 'Water & sand play', desc: 'Sensory exploration and creativity' },
                    { emoji: '📚', title: 'Learning dome', desc: 'Calm space for reading and group activities' },
                  ].map(({ emoji, title, desc }) => (
                    <li key={title} className="flex gap-4">
                      <span className="text-2xl shrink-0">{emoji}</span>
                      <div>
                        <h4 className="font-semibold text-slate-900">{title}</h4>
                        <p className="text-sm text-slate-600">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Button href="/gallery" variant="secondary" className="mt-6">
                  View gallery
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* International community / Flags */}
        <section className="py-10 md:py-14 bg-slate-400" aria-label="Our international community">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {[
                { code: 'ng', name: 'Nigeria' },
                { code: 'gh', name: 'Ghana' },
                { code: 'sl', name: 'Sierra Leone' },
                { code: 'gb', name: 'United Kingdom' },
                { code: 'fr', name: 'France' },
                { code: 'es', name: 'Spain' },
              ].map(({ code, name }) => (
                <img
                  key={code}
                  src={`https://flagcdn.com/w80/${code}.png`}
                  alt={`${name} flag`}
                  title={name}
                  className="h-14 w-auto max-w-[80px] object-contain drop-shadow-md rounded-sm"
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-slate-900 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              Ready to join our community?
            </h2>
            <p className="text-lg text-slate-300">
              Registration for 2026 is open. Give your child an inclusive, nurturing start.
            </p>
            <Button href="/registration" size="lg" variant="secondary">
              Register now
            </Button>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 md:py-28 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-14">
              <div>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
                  Visit us
                </h2>
                <p className="text-slate-600 text-lg mb-8">
                  We&apos;re in central London, minutes from London Bridge. Come and see our space and meet our team.
                </p>
                <div className="space-y-5">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Location</h3>
                    <p className="text-slate-600">
                      61 Great Dover Street<br />
                      London, SE1<br />
                      United Kingdom
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                    <p className="text-slate-600">
                      <a href="tel:+447956176257" className="text-nest-600 hover:text-nest-700 font-medium">
                        +44 7956 176 257
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Hours</h3>
                    <p className="text-slate-600">
                      Mon–Fri: 09:00–17:00<br />
                      Sat & Sun: Closed
                    </p>
                  </div>
                </div>
                <Button href="/contact" variant="primary" className="mt-8">
                  Get in touch
                </Button>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-soft">
                <h3 className="font-display font-bold text-slate-900 mb-6">Send a message</h3>
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-nest-500 focus:border-nest-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-nest-500 focus:border-nest-500 transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-nest-500 focus:border-nest-500 transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <Button type="submit" variant="primary" className="w-full">
                    Send message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
