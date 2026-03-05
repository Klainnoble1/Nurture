import Link from 'next/link';
import PageLayout from '@/app/PageLayout';
import Button from '@/components/Button';

export const metadata = {
  title: 'Join Our Team',
  description: 'Careers and vacancies at Nurture Nest Multilingual Nursery.',
};

export default function CareersPage() {
  return (
    <PageLayout>
      <div className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1.5 bg-nest-100 text-nest-700 rounded-lg text-sm font-semibold mb-6">Our Community</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Join Our Team</h1>
          <p className="text-xl text-slate-600 mb-10">Help us nurture the next generation. We are always interested in passionate early years educators.</p>
          <section className="space-y-6 text-slate-600 leading-relaxed">
            <p>We look for team members who share our values: child-centred practice, inclusion, and a commitment to multilingual and culturally responsive provision. We offer a supportive environment and opportunities for professional development.</p>
            <p>If you would like to work with us, please send your CV and a short covering letter. We will get back to you when a suitable role is available.</p>
          </section>
          <div className="mt-14">
            <Button href="mailto:contact@nurture-nest.co.uk?subject=Career enquiry" variant="primary">Email us to apply</Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
