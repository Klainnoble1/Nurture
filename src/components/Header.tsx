'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-18">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-nest-600 flex items-center justify-center text-white font-display font-bold text-lg shadow-soft group-hover:bg-nest-700 transition-colors">
              N
            </div>
            <span className="font-display text-lg font-semibold text-slate-800 group-hover:text-nest-600 transition-colors">
              Nurture Nest
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group/nav">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-nest-600 rounded-lg hover:bg-nest-50/80 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <span className="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-nest-600 rounded-lg hover:bg-nest-50/80 transition-colors cursor-default">
                      {item.label}
                    </span>
                    {item.submenu && (
                      <div className="absolute left-0 top-full pt-1 w-52 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-200">
                        <div className="bg-white rounded-xl border border-slate-200/90 shadow-soft-lg py-1.5">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.label}
                              href={subitem.href}
                              className="block px-4 py-2.5 text-sm text-slate-600 hover:text-nest-600 hover:bg-nest-50/60 transition-colors first:rounded-t-lg last:rounded-b-lg"
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
            className="md:hidden p-2.5 text-slate-600 hover:text-nest-600 hover:bg-nest-50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-6 pt-2 space-y-1 animate-slide-up border-t border-slate-100">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block py-3 px-3 text-slate-700 font-medium hover:text-nest-600 hover:bg-nest-50 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <p className="py-2 px-3 text-sm font-semibold text-slate-500 uppercase tracking-wider">
                      {item.label}
                    </p>
                    {item.submenu?.map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        className="block py-2.5 pl-6 pr-3 text-slate-600 hover:text-nest-600 rounded-lg"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
