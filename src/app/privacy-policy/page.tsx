import Link from 'next/link';
import PageLayout from '@/app/PageLayout';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for The Notchernest Multilingual Nursery.',
};

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <div className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Privacy Policy</h1>
          <p className="text-slate-600 mb-10">Last updated: 2026. The Notchernest (&quot;we&quot;, &quot;us&quot;) is committed to protecting your privacy.</p>
          <section className="prose prose-slate max-w-none space-y-6 text-slate-600">
            <h2 className="text-xl font-display font-bold text-slate-900">Information we collect</h2>
            <p>We may collect your name, contact details, and any information you provide when you enquire, register, or contact us. We use this to respond to you, manage placements, and improve our service.</p>
            <h2 className="text-xl font-display font-bold text-slate-900">How we use it</h2>
            <p>We use your information only for the purposes of running the nursery, communicating with families, and complying with legal obligations. We do not sell your data to third parties.</p>
            <h2 className="text-xl font-display font-bold text-slate-900">Data security</h2>
            <p>We take appropriate measures to keep your data secure and retain it only as long as necessary.</p>
            <h2 className="text-xl font-display font-bold text-slate-900">Your rights</h2>
            <p>You have the right to access, correct, or request deletion of your personal data. Contact us to exercise these rights.</p>
            <h2 className="text-xl font-display font-bold text-slate-900">Cookies</h2>
            <p>We use cookies to improve your experience and analyse site traffic. You can decline non-essential cookies via our cookie banner.</p>
          </section>
          <div className="mt-14">
            <Link href="/contact" className="text-nest-600 font-medium hover:underline">Contact us</Link>
            {' · '}
            <Link href="/terms" className="text-nest-600 font-medium hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
