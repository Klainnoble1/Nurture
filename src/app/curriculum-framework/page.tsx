import Link from 'next/link';
import PageLayout from '@/app/PageLayout';

export const metadata = {
  title: 'Curriculum Framework',
  description: 'Our EYFS-based curriculum and the 7 areas of child development at Nurture Nest.',
};

const areas = [
  'Communication and Language',
  'Physical Development',
  'Personal, Social and Emotional Development',
  'Literacy',
  'Mathematics',
  'Understanding the World',
  'Expressive Arts and Design',
];

export default function CurriculumFrameworkPage() {
  return (
    <PageLayout>
      <div className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1.5 bg-nest-100 text-nest-700 rounded-lg text-sm font-semibold mb-6">Curriculum</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Our Curriculum Framework</h1>
          <p className="text-xl text-slate-600 mb-10">We focus on the 7 areas of child development through play, creativity, and child-led learning.</p>
          <section className="space-y-8">
            <p className="text-slate-600 leading-relaxed text-lg">As a nursery, we focus on the 7 areas of child development. We do this through nurturing the children&apos;s interests and allowing them to lead their own learning through their own creativity. We encourage independence in all aspects of children&apos;s learning and development, and track this through a set of key milestones and observations.</p>
            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">The 7 Areas of Learning and Development</h2>
              <ul className="space-y-3">
                {areas.map((area, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-nest-100 text-nest-700 flex items-center justify-center text-sm font-bold">{i + 1}</span>
                    <span className="text-slate-700 font-medium">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-slate-600 leading-relaxed">Our approach is informed by the Early Years Foundation Stage (EYFS) and by theorists such as Jean Piaget and Lev Vygotsky, supporting an enabling environment for cognitive, social, and emotional development.</p>
          </section>
          <div className="mt-14 flex flex-wrap gap-4">
            <Link href="/policies" className="inline-flex items-center justify-center px-6 py-3 bg-nest-600 text-white font-semibold rounded-xl hover:bg-nest-700 transition-colors">Our Policies & FAQs</Link>
            <Link href="/about" className="inline-flex items-center justify-center px-6 py-3 border-2 border-nest-600 text-nest-700 font-semibold rounded-xl hover:bg-nest-50 transition-colors">About Us</Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
