import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-nest-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-joy-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-nest-500 flex items-center justify-center text-white font-display font-bold text-xl shadow-lg ring-4 ring-white/5">
                N
              </div>
              <span className="font-display text-2xl font-bold text-white tracking-tight">
                Nurture Nest
              </span>
            </Link>
            <p className="text-base leading-relaxed text-slate-400 max-w-xs">
              A multilingual, inclusive nursery rooted in British values. Nurturing confident, curious, and resilient learners for a brighter future.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Register', href: '/registration' },
                { label: 'Contact', href: '/contact' },
                { label: 'Parent Portal', href: 'https://tapestryjournal.com/', external: true },
              ].map(({ label, href, external }) => (
                <li key={label}>
                  {external ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-joy-400 transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-joy-500/50" />
                      {label}
                    </a>
                  ) : (
                    <Link href={href} className="hover:text-joy-400 transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-joy-500/50" />
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-lg mb-6">Curriculum</h4>
            <ul className="space-y-4 text-slate-400">
              {[
                { label: 'Our Framework', href: '/curriculum-framework' },
                { label: 'Nutrition & Health', href: '/nutrition' },
                { label: 'Settling In Guide', href: '/settling-in' },
                { label: 'School Policies', href: '/policies' },
                { label: 'Term Dates', href: '/term-dates' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-nest-400 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-nest-500/50" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-lg mb-6">Contact Us</h4>
            <address className="not-italic space-y-4 text-slate-400">
              <div className="flex gap-3">
                <span className="text-xl">📍</span>
                <p>61 Great Dover Street<br />London, SE1, UK</p>
              </div>
              <div className="flex gap-3">
                <span className="text-xl">📞</span>
                <a href="tel:+447956176257" className="hover:text-white transition-colors">
                  +44 7956 176 257
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-xl">✉️</span>
                <a href="mailto:contact@nurture-nest.co.uk" className="hover:text-white transition-colors">
                  contact@nurture-nest.co.uk
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <p>&copy; {currentYear} Nurture Nest Nursery. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy-policy#cookies" className="hover:text-white transition-colors">Cookie settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
