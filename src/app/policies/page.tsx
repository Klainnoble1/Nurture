import Link from 'next/link';
import PageLayout from '@/app/PageLayout';

export const metadata = {
  title: 'Our Policies & FAQs',
  description: 'Policies, procedures, and frequently asked questions at The Nurture Nest.',
};

const faqs = [
  { q: 'What are your opening hours?', a: 'We are open Monday to Friday, 07:00 – 19:00. We are closed on weekends and bank holidays.' },
  { q: 'Where are you located?', a: 'We are at 61 Great Dover Street, London SE1—minutes from London Bridge station, the Shard, Borough Market, South Bank, and Tower Bridge.' },
  { q: 'Do you follow the EYFS?', a: 'Yes. Our curriculum is aligned with the Early Years Foundation Stage and we use recognised frameworks and theories to support each child\'s development.' },
  { q: 'How can I register my child?', a: 'Registration for 2026 is open. Please visit our Registration page or contact us to request a place and arrange a visit.' },
];

export default function PoliciesPage() {
  return (
    <PageLayout>
      <div className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1.5 bg-nest-100 text-nest-700 rounded-lg text-sm font-semibold mb-6">
            Curriculum
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Our Policies & FAQs
          </h1>
          <p className="text-xl text-slate-600 mb-10">
            Key policies and answers to common questions about The Nurture Nest.
          </p>

          <section className="space-y-10">
            <div className="prose prose-slate prose-lg max-w-none">
              <p>
                At our nursery, we follow a comprehensive set of policies and procedures to ensure the safety, wellbeing and high-quality care of every child in our setting.
              </p>
              <p>
                These policies guide how we operate daily and help us maintain a safe, secure and supportive environment for all children, families and staff.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-nest-50 rounded-bl-full flex items-start justify-end p-6"><span className="text-nest-500 text-4xl">📄</span></div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-6 relative z-10">Reviewing Our Policies</h2>
              <div className="space-y-4 relative z-10 text-slate-600 leading-relaxed">
                <p>
                  Parents who secure a place at the nursery will receive a copy of our policies and procedures as part of the registration process. We ask parents to read through these carefully and sign to confirm that they have understood and agreed to the nursery’s policies.
                </p>
                <p>
                  If parents would like to review any of our policies, we are always happy to provide them upon request.
                </p>
                <p>
                  Our policies ensure that we maintain clear standards, transparency and strong partnerships with families, supporting the best possible care and learning experience for every child.
                </p>
              </div>
              <div className="mt-8 relative z-10">
                <Link href="/policies/download" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-nest-600 text-white font-semibold rounded-xl hover:bg-nest-700 transition-colors shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                  Request Full Policy Document
                </Link>
              </div>
            </div>
          </section>

          <div className="mt-14 flex flex-wrap gap-4 pt-10 border-t border-slate-100">
            <Link href="/settling-in" className="inline-flex items-center justify-center px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-colors">
              Settling In
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
