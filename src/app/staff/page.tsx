import Link from 'next/link';
import PageLayout from '@/app/PageLayout';

export const metadata = {
  title: 'Our Staff',
  description: 'Meet the team at The Notchernest Multilingual Nursery.',
};

export default function StaffPage() {
  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-warm-50 via-white to-nest-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1.5 bg-nest-200 text-nest-800 rounded-lg text-sm font-semibold mb-6">Our Community</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Our Staff</h1>
          <p className="text-xl text-slate-600 mb-10">A dedicated, qualified team who put children at the heart of everything we do.</p>
          <section className="space-y-6 text-slate-600 leading-relaxed bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">Careers at The Notchernest</h2>
            <p className="text-lg">
              We hire staff who care and are compassionate, qualified and do their best to ensure children feel like nursery is a home away from home!
            </p>
            <p>
              At our nursery, we are proud to have a team of highly qualified, caring and passionate professionals who are dedicated to supporting children in their early years of development.
            </p>
            <div className="mt-8">
              <Link href="/careers" className="inline-flex items-center justify-center px-6 py-3 bg-nest-600 text-white font-semibold rounded-xl hover:bg-nest-700 transition-colors shadow-sm">
                Join our team
              </Link>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
