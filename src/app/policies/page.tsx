import Link from 'next/link';
import PageLayout from '@/app/PageLayout';

export const metadata = {
  title: 'Our Policies & FAQs',
  description: 'Policies, procedures, and frequently asked questions at Nurture Nest.',
};

const faqs = [
  { q: 'What are your opening hours?', a: 'We are open Monday to Friday, 09:00 – 17:00. We are closed on weekends and bank holidays.' },
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
            Key policies and answers to common questions about Nurture Nest.
          </p>

          <section className="space-y-10">
            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">Policies</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                We maintain clear policies on safeguarding, inclusion, behaviour, health and safety, and confidentiality. Full policy documents are available on request. Our approach is inclusive and aligned with the EYFS and British values.
              </p>
              <p className="text-slate-600 leading-relaxed">
                For detailed policy documents or to discuss any aspect of our practice, please <Link href="/contact" className="text-nest-600 font-medium hover:underline">contact us</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
              <ul className="space-y-6">
                {faqs.map((faq, i) => (
                  <li key={i} className="bg-white p-6 rounded-xl border border-slate-200">
                    <h3 className="font-display font-semibold text-slate-900 mb-2">{faq.q}</h3>
                    <p className="text-slate-600">{faq.a}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <div className="mt-14 flex flex-wrap gap-4">
            <Link href="/settling-in" className="inline-flex items-center justify-center px-6 py-3 bg-nest-600 text-white font-semibold rounded-xl hover:bg-nest-700 transition-colors">
              Settling In
            </Link>
            <Link href="/curriculum-framework" className="inline-flex items-center justify-center px-6 py-3 border-2 border-nest-600 text-nest-700 font-semibold rounded-xl hover:bg-nest-50 transition-colors">
              Curriculum Framework
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
