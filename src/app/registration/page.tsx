import Link from 'next/link';
import PageLayout from '@/app/PageLayout';
import Button from '@/components/Button';

export const metadata = {
  title: 'Registration',
  description: 'Register your child at The Notchernest Multilingual Nursery. Registration for 2026 now open.',
};

export default function RegistrationPage() {
  return (
    <PageLayout>
      <div className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1.5 bg-warm-100 text-warm-700 rounded-lg text-sm font-semibold mb-6">Admissions</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Registration</h1>
          <div className="bg-nest-600 text-white p-6 md:p-8 rounded-2xl mb-10">
            <h2 className="text-2xl font-display font-bold mb-2">Registration for 2026 now open</h2>
            <p className="text-nest-100">Secure a place for your child. Give them the gift of an inclusive, nurturing start at The Notchernest.</p>
          </div>
          <section className="space-y-6 text-slate-600 leading-relaxed">
            <p>We welcome families who share our values of inclusion, multilingualism, and child-centred learning. To register your interest or secure a place:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Get in touch to request a visit and a registration pack</li>
              <li>Come and see our setting and meet the team</li>
              <li>Complete the registration form and return it with any required documents</li>
              <li>We will confirm your place and discuss start dates and settling in</li>
            </ul>
            <p><strong>Parents:</strong> Once your child is with us, you can view their learning journal and stay in touch via our platform. <a href="https://tapestryjournal.com/" target="_blank" rel="noopener noreferrer" className="text-nest-600 font-medium hover:underline">Log in to Tapestry</a>.</p>
          </section>
          <div className="mt-14 flex flex-wrap gap-4">
            <Button href="/contact" size="lg" variant="primary">Contact us to register</Button>
            <Button href="/term-dates" variant="outline">Term dates & hours</Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
