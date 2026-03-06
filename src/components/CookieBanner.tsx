'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookies_accepted');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookies_accepted', 'true');
    setIsVisible(false);
  };

  const declineCookies = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-[100] animate-slide-up">
      <div className="max-w-4xl mx-auto bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <h3 className="text-white text-lg font-display font-semibold mb-2">Cookies & Privacy</h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            We use cookies to improve your experience and analyse site traffic. By continuing, you accept our{' '}
            <Link href="/privacy-policy" className="text-nest-400 hover:text-nest-300 underline font-medium underline-offset-4">
              cookie policy
            </Link>.
          </p>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={declineCookies}
            className="px-6 py-2.5 rounded-xl border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="px-6 py-2.5 rounded-xl bg-nest-500 text-white text-sm font-semibold hover:bg-nest-600 shadow-lg shadow-nest-500/20 transition-all hover:scale-105 active:scale-95"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
