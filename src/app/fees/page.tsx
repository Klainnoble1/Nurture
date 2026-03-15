import Link from 'next/link';
import PageLayout from '@/app/PageLayout';

export const metadata = {
  title: 'Nursery Fees',
  description: 'Fees and funding information for The Notchernest Multilingual Nursery.',
};

export default function FeesPage() {
  return (
    <PageLayout>
      <div className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1.5 bg-nest-100 text-nest-700 rounded-lg text-sm font-semibold mb-6">Admissions</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Nursery Fees</h1>
          <p className="text-xl text-slate-600 mb-10">We aim to provide high-quality childcare with flexible options for families while maintaining a consistent routine.</p>
          
          <section className="space-y-12">
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-nest-50 rounded-bl-full flex items-start justify-end p-4 text-3xl">💷</div>
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-6 relative z-10">Daily Fees</h2>
                <ul className="space-y-4 relative z-10">
                  <li className="flex justify-between items-center border-b border-slate-100 pb-2">
                    <span className="text-slate-600 font-medium">3 Days per Week</span>
                    <span className="text-nest-700 font-bold text-xl">£95 <span className="text-sm text-slate-400 font-normal">/ day</span></span>
                  </li>
                  <li className="flex justify-between items-center border-b border-slate-100 pb-2">
                    <span className="text-slate-600 font-medium">4 or 5 Days per Week</span>
                    <span className="text-nest-700 font-bold text-xl">£90 <span className="text-sm text-slate-400 font-normal">/ day</span></span>
                  </li>
                </ul>
                <p className="text-sm text-slate-500 mt-6 relative z-10">Children attending four- or five-days benefit from our reduced daily rate.</p>
              </div>

              <div className="space-y-8">
                <div className="bg-nest-50 p-6 rounded-3xl border border-nest-100">
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Minimum Attendance</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    To support children’s development, routine and strong relationships with staff and peers, we operate with a minimum attendance of <strong>three days per week</strong>.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Opening Hours</h3>
                  <p className="text-slate-600 font-medium mb-1">Monday to Friday</p>
                  <p className="text-nest-600 font-bold text-2xl mb-4">07:00 – 19:00</p>
                  <p className="text-slate-500 text-sm">The nursery operates all year round, providing consistent care and support for families.</p>
                </div>
              </div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600 text-sm leading-relaxed border-t border-slate-200 pt-8 mt-8">
              <p>
                <strong>Holidays & Closures:</strong> Please note that the nursery is closed on all Bank Holidays and for one week during the Christmas holidays. The nursery will be closed for three additional days each year for staff training and in-service development as part of regulations. These training days allow our team to continue developing their knowledge and skills to ensure we provide the highest standard of care and education for all children.
              </p>
            </div>

          </section>

          <div className="mt-14 flex flex-wrap gap-4 pt-10 border-t border-slate-100">
            <Link href="/funding" className="inline-flex items-center justify-center px-6 py-3 bg-nest-600 text-white font-semibold rounded-xl hover:bg-nest-700 transition-colors">Funding Support</Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border-2 border-nest-600 text-nest-700 font-semibold rounded-xl hover:bg-nest-50 transition-colors">Contact us for availability</Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
