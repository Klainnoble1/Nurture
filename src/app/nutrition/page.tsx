import Link from 'next/link';
import PageLayout from '@/app/PageLayout';

export const metadata = {
  title: 'Our Nutrition',
  description: 'Healthy eating and nutrition at Nurture Nest Multilingual Nursery.',
};

export default function NutritionPage() {
  return (
    <PageLayout>
      <div className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1.5 bg-nest-100 text-nest-700 rounded-lg text-sm font-semibold mb-6">
            Curriculum
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Our Nutrition
          </h1>
          <p className="text-xl text-slate-600 mb-10">
            We support healthy eating and positive attitudes to food as part of children&apos;s development.
          </p>

          <section className="space-y-8">
            <p className="text-slate-600 leading-relaxed text-lg">
              At Nurture Nest we believe good nutrition is part of a child&apos;s overall wellbeing and learning. We provide balanced meals and snacks that support growth, energy, and concentration, and we follow dietary guidance suitable for early years.
            </p>
            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">What we offer</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex gap-3"><span className="text-nest-600 font-bold">•</span> Balanced meals and snacks in line with healthy eating guidelines</li>
                <li className="flex gap-3"><span className="text-nest-600 font-bold">•</span> Accommodation of allergies, intolerances, and cultural or religious dietary needs</li>
                <li className="flex gap-3"><span className="text-nest-600 font-bold">•</span> Positive mealtime experiences and social eating</li>
                <li className="flex gap-3"><span className="text-nest-600 font-bold">•</span> Information for parents about menus and food policy on request</li>
              </ul>
            </div>
            <p className="text-slate-600 leading-relaxed">
              If your child has specific dietary requirements, please discuss these with us when you <Link href="/contact" className="text-nest-600 font-medium hover:underline">register or get in touch</Link>. We are happy to share our full food and nutrition policy on request.
            </p>
          </section>

          <div className="mt-14 flex flex-wrap gap-4">
            <Link href="/curriculum-framework" className="inline-flex items-center justify-center px-6 py-3 bg-nest-600 text-white font-semibold rounded-xl hover:bg-nest-700 transition-colors">
              Curriculum Framework
            </Link>
            <Link href="/settling-in" className="inline-flex items-center justify-center px-6 py-3 border-2 border-nest-600 text-nest-700 font-semibold rounded-xl hover:bg-nest-50 transition-colors">
              Settling In
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
