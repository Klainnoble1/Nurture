import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy', external: false },
    { label: 'Terms of Service', href: '/terms', external: false },
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@nurturenestmultil?_r=1&_t=ZN-94lWpdLvziI',
      external: true,
    },
    {
      label: 'Facebook',
      href: 'https://web.facebook.com/people/Nurture-Nest/pfbid02pinp2dr9nJpZfsySf5CForAPHFjMrzA9YdUiAJ5E8eayJssM5doqf1sRrzHkfx96l/?mibextid',
      external: true,
    },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-nest-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-joy-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 relative z-10">
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-8 text-sm text-slate-500">
          <p className="text-white text-center md:text-left leading-relaxed max-w-md mx-auto md:mx-0">
            &copy; {currentYear} The Nurture Nest Nursery. All rights reserved.
          </p>
          <div className="w-full md:w-auto grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center md:justify-end sm:gap-4">
            {footerLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-11 px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-center text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="min-h-11 px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-center text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
