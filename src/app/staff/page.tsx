import Link from 'next/link';
import PageLayout from '@/app/PageLayout';

export const metadata = {
  title: 'Our Staff',
  description: 'Meet the team at Nurture Nest Multilingual Nursery.',
};

export default function StaffPage() {
  return (
    <PageLayout>
      <div className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1.5 bg-nest-100 text-nest-700 rounded-lg text-sm font-semibold mb-6">Our Community</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Our Staff</h1>
          <p className="text-xl text-slate-600 mb-10">A dedicated, qualified team who put children at the heart of everything we do.</p>
          <section className="space-y-6 text-slate-600 leading-relaxed">
            <p>Our educators are experienced in early years practice, multilingual development, and inclusive education. We maintain high staff-to-child ratios and support continuous professional development so our team can offer the best for every child.</p>
            <p>Want to join us? See our <Link href="/careers" className="text-nest-600 font-medium hover:underline">Join Our Team</Link> page for current vacancies.</p>
          </section>
          <div className="mt-14">
            <Link href="/careers" className="inline-flex items-center justify-center px-6 py-3 bg-nest-600 text-white font-semibold rounded-xl hover:bg-nest-700 transition-colors">Join our team</Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
