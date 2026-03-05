import Link from 'next/link';
import PageLayout from '@/app/PageLayout';

export const metadata = {
  title: 'Term Dates & Hours',
  description: 'Term dates and opening hours for Nurture Nest Multilingual Nursery.',
};

const hours = [
  { day: 'Mon', hours: '09:00 – 17:00' },
  { day: 'Tue', hours: '09:00 – 17:00' },
  { day: 'Wed', hours: '09:00 – 17:00' },
  { day: 'Thu', hours: '09:00 – 17:00' },
  { day: 'Fri', hours: '09:00 – 17:00' },
  { day: 'Sat', hours: 'Closed' },
  { day: 'Sun', hours: 'Closed' },
];

export default function TermDatesPage() {
  return (
    <PageLayout>
      <div className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1.5 bg-nest-100 text-nest-700 rounded-lg text-sm font-semibold mb-6">Admissions</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Term Dates & Hours</h1>
          <p className="text-xl text-slate-600 mb-10">When we are open and our term structure.</p>

          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Opening Hours</h2>
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left py-4 px-6 font-semibold text-slate-900">Day</th>
                    <th className="text-left py-4 px-6 font-semibold text-slate-900">Hours</th>
                  </tr>
                </thead>
                <tbody>
                  {hours.map((row) => (
                    <tr key={row.day} className="border-b border-slate-100 last:border-0">
                      <td className="py-4 px-6 text-slate-700">{row.day}</td>
                      <td className="py-4 px-6 text-slate-600">{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="text-slate-600 leading-relaxed">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">Term Dates</h2>
            <p>We follow a term-time structure aligned with the academic year. For exact term dates and inset days, please <Link href="/contact" className="text-nest-600 font-medium hover:underline">contact us</Link> or request a registration pack. We are closed on bank holidays and during the Christmas break.</p>
          </section>

          <div className="mt-14 flex flex-wrap gap-4">
            <Link href="/registration" className="inline-flex items-center justify-center px-6 py-3 bg-nest-600 text-white font-semibold rounded-xl hover:bg-nest-700 transition-colors">Registration</Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border-2 border-nest-600 text-nest-700 font-semibold rounded-xl hover:bg-nest-50 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
