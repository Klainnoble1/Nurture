import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-nest-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-joy-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <p className="text-white">&copy; {currentYear} Nurture Nest Nursery. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy-policy#cookies" className="hover:text-white transition-colors">
              Cookie settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
