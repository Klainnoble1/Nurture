import Link from 'next/link';
import PageLayout from '@/app/PageLayout';

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Nurture Nest Multilingual Nursery.',
};

export default function TermsPage() {
  return (
    <PageLayout>
      <div className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Terms of Service</h1>
          <p className="text-slate-600 mb-10">By using our website and services you agree to these terms.</p>
          <section className="prose prose-slate max-w-none space-y-6 text-slate-600">
            <h2 className="text-xl font-display font-bold text-slate-900">Use of website</h2>
            <p>This website is for information about Nurture Nest Multilingual Nursery. You may use it for lawful purposes only and must not misuse or attempt to gain unauthorised access to our systems or data.</p>
            <h2 className="text-xl font-display font-bold text-slate-900">Services</h2>
            <p>Nursery places and services are subject to availability and our registration and fee terms, which will be provided when you register.</p>
            <h2 className="text-xl font-display font-bold text-slate-900">Limitation of liability</h2>
            <p>We do not exclude or limit liability for death or personal injury caused by our negligence, or for fraud. Otherwise, our liability is limited to the extent permitted by law.</p>
            <h2 className="text-xl font-display font-bold text-slate-900">Changes</h2>
            <p>We may update these terms from time to time. Continued use of the site after changes constitutes acceptance.</p>
          </section>
          <div className="mt-14">
            <Link href="/privacy-policy" className="text-nest-600 font-medium hover:underline">Privacy Policy</Link>
            {' · '}
            <Link href="/contact" className="text-nest-600 font-medium hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
