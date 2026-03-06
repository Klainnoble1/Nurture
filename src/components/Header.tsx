'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Home', href: '/' },
    {
      label: 'Curriculum',
      submenu: [
        { label: 'Framework', href: '/curriculum-framework' },
        { label: 'Policies & FAQs', href: '/policies' },
        { label: 'Settling In', href: '/settling-in' },
        { label: 'Nutrition', href: '/nutrition' },
      ],
    },
    {
      label: 'Admissions',
      submenu: [
        { label: 'School Fees', href: '/fees' },
        { label: 'Registration', href: '/registration' },
        { label: 'Term Dates', href: '/term-dates' },
      ],
    },
    {
      label: 'Community',
      submenu: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Staff', href: '/staff' },
        { label: 'Join Our Team', href: '/careers' },
        { label: 'Gallery', href: '/gallery' },
      ],
    },
    { label: 'Contact', href: '/contact' },
    { label: 'Log in', href: 'https://tapestryjournal.com/', external: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 md:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-nest-500 flex items-center justify-center text-white font-display font-bold text-xl shadow-lg group-hover:bg-nest-600 transition-all group-hover:scale-110 group-hover:rotate-3">
              N
            </div>
            <span className="font-display text-xl md:text-2xl font-bold text-slate-800 tracking-tight group-hover:text-nest-600 transition-colors">
              Nurture Nest
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group/nav">
                {item.href ? (
                  item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-nest-600 rounded-xl hover:bg-nest-50 transition-all"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-nest-600 rounded-xl hover:bg-nest-50 transition-all"
                    >
                      {item.label}
                    </Link>
                  )
                ) : (
                  <>
                    <span className="block px-4 py-2 text-sm font-bold text-slate-600 hover:text-nest-600 rounded-xl hover:bg-nest-50 transition-all cursor-default">
                      {item.label}
                    </span>
                    {item.submenu && (
                      <div className="absolute left-0 top-full pt-2 w-64 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 translate-y-2 group-hover/nav:translate-y-0">
                        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-2xl py-3 overflow-hidden">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.label}
                              href={subitem.href}
                              className="block px-6 py-3 text-sm font-bold text-slate-600 hover:text-nest-600 hover:bg-nest-50 transition-colors"
                            >
                              {subitem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>

          <button
            className="md:hidden p-3 text-slate-600 hover:text-nest-600 hover:bg-nest-50 rounded-2xl transition-all active:scale-90"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-[72px] z-[60] md:hidden">
            <div className="absolute inset-0 bg-white/95 backdrop-blur-xl animate-fade-in" />
            <nav className="relative h-full overflow-y-auto px-6 py-10 space-y-8 animate-slide-up">
              {navItems.map((item) => (
                <div key={item.label} className="space-y-4">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block text-2xl font-display font-bold text-slate-900 border-b border-slate-100 pb-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div className="space-y-4">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
                        {item.label}
                      </p>
                      <div className="grid grid-cols-1 gap-4">
                        {item.submenu?.map((subitem) => (
                          <Link
                            key={subitem.label}
                            href={subitem.href}
                            className="text-lg font-bold text-slate-700 hover:text-nest-600"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
