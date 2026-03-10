'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import TourPopOut from './forms/TourPopOut';

type SubMenuItem = {
  label: string;
  href: string;
  scroll?: boolean;
  external?: boolean;
};

type NavItem = {
  label: string;
  href?: string;
  submenu?: SubMenuItem[];
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    {
      label: 'About Us',
      submenu: [
        { label: 'About', href: '/about' },
        { label: 'Join our nursery!', href: '/join' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'Visit our nursery', href: '?tour=true', scroll: false },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Enquiries', href: '/enquiries' },
        { label: 'Careers / Join our team', href: '/careers' },
      ],
    },
    {
      label: 'Curriculum',
      submenu: [
        { label: 'Our Curriculum', href: '/curriculum-framework' },
        { label: 'Tapestry', href: 'https://tapestryjournal.com/', external: true },
        { label: 'Our nutrition', href: '/nutrition' },
        { label: 'A typical day at nursery', href: '/typical-day' },
        { label: 'Settling in', href: '/settling-in' },
        { label: 'Our policies', href: '/policies' },
      ],
    },
    {
      label: 'Admissions & Fees',
      submenu: [
        { label: 'Funding and Childcare Support', href: '/funding' },
        { label: 'Fees', href: '/fees' },
      ],
    },
  ];

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm' : 'bg-transparent border-b border-white/10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18 md:h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 flex items-center justify-center transition-all group-hover:scale-105">
                <img src="/logo.jpeg" alt="Nurture Nest Logo" className="w-full h-full object-contain rounded-xl" />
              </div>
              <span className="font-display text-xl md:text-2xl font-bold tracking-tight transition-colors text-slate-800 group-hover:text-nest-600">
                Nurture Nest
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.label} className="relative group/nav">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="px-4 py-2 text-sm font-bold rounded-xl transition-all font-display text-slate-600 hover:text-nest-600 hover:bg-nest-50"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <span className="block px-4 py-2 text-sm font-bold rounded-xl transition-all cursor-default font-display text-slate-600 hover:text-nest-600 hover:bg-nest-50">
                        {item.label}
                      </span>
                      {item.submenu && (
                        <div className="absolute left-0 top-full pt-2 w-72 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 translate-y-2 group-hover/nav:translate-y-0">
                          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-2xl py-3 overflow-hidden">
                            {item.submenu.map((subitem) => (
                              subitem.external ? (
                                <a
                                  key={subitem.label}
                                  href={subitem.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block px-6 py-3 text-sm font-bold text-slate-600 hover:text-nest-600 hover:bg-nest-50 transition-colors"
                                >
                                  {subitem.label}
                                </a>
                              ) : (
                                <Link
                                  key={subitem.label}
                                  href={subitem.href}
                                  scroll={subitem.scroll}
                                  className="block px-6 py-3 text-sm font-bold text-slate-600 hover:text-nest-600 hover:bg-nest-50 transition-colors"
                                >
                                  {subitem.label}
                                </Link>
                              )
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
        </div> {/* Added missing closing div for max-w-7xl */}
      </header>

      {/* Mobile Menu - Moved outside header to avoid sticky/fixed conflicts */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] z-[60] md:hidden">
          <div 
            className="absolute inset-0 bg-white/95 backdrop-blur-xl animate-fade-in" 
            onClick={() => setMobileMenuOpen(false)}
          />
          <nav className="relative h-full overflow-y-auto px-6 py-10 space-y-8 animate-slide-up bg-white">
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
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] font-display">
                      {item.label}
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                      {item.submenu?.map((subitem) => (
                        subitem.external ? (
                          <a
                            key={subitem.label}
                            href={subitem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-bold text-slate-700 hover:text-nest-600"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subitem.label}
                          </a>
                        ) : (
                          <Link
                            key={subitem.label}
                            href={subitem.href}
                            scroll={subitem.scroll}
                            className="text-lg font-bold text-slate-700 hover:text-nest-600"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subitem.label}
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}

      {/* Render Tour PopOut safely inside Suspense because it uses useSearchParams() */}
      <Suspense fallback={null}>
        <TourPopOut />
      </Suspense>
    </>
  );
}
