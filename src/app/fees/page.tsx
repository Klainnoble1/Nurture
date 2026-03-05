import Link from 'next/link';
import PageLayout from '@/app/PageLayout';

export const metadata = {
  title: 'School Fees',
  description: 'Fees and funding information for Nurture Nest Multilingual Nursery.',
};

export default function FeesPage() {
  return (
    <PageLayout>
      <div className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1.5 bg-nest-100 text-nest-700 rounded-lg text-sm font-semibold mb-6">Admissions</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">School Fees</h1>
          <p className="text-xl text-slate-600 mb-10">Clear, transparent fees for our nursery provision.</p>
          <section className="space-y-6 text-slate-600 leading-relaxed">
            <p>We offer full-day and session-based places. Our fees are competitive for central London and reflect our high staff ratios, multilingual provision, and inclusive environment.</p>
            <p>For current fee schedules, funding options (including 15- and 30-hour entitlements where applicable), and any discounts, please contact us. We are happy to arrange a visit and provide a detailed fee sheet.</p>
          </section>
          <div className="mt-14">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-nest-600 text-white font-semibold rounded-xl hover:bg-nest-700 transition-colors">Contact us for fees</Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
