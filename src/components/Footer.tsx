import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="w-10 h-10 rounded-xl bg-nest-500 flex items-center justify-center text-white font-display font-bold text-lg mb-4">
              N
            </div>
            <h3 className="font-display text-lg font-semibold text-white mb-2">Nurture Nest</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              A multilingual, inclusive nursery rooted in British values. Nurturing confident, curious, and resilient learners.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Register', href: '/registration' },
                { label: 'Contact', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-slate-400 hover:text-warm-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Curriculum</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Framework', href: '/curriculum-framework' },
                { label: 'Nutrition', href: '/nutrition' },
                { label: 'Settling In', href: '/settling-in' },
                { label: 'Policies', href: '/policies' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-slate-400 hover:text-warm-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Contact</h4>
            <address className="text-sm not-italic space-y-2 text-slate-400">
              <p>61 Great Dover Street</p>
              <p>London, SE1</p>
              <p>United Kingdom</p>
              <p className="pt-2">
                <a href="tel:+447956176257" className="hover:text-warm-400 transition-colors">
                  +44 7956 176 257
                </a>
              </p>
              <p>
                <a href="mailto:contact@nurture-nest.co.uk" className="hover:text-warm-400 transition-colors">
                  contact@nurture-nest.co.uk
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {currentYear} Nurture Nest. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-warm-400 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-warm-400 transition-colors">
              Terms
            </Link>
            <Link href="/privacy-policy#cookies" className="hover:text-warm-400 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
