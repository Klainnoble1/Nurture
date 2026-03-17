import Link from 'next/link';
import PageLayout from '@/app/PageLayout';

export const metadata = {
  title: 'Our Nutrition',
  description: 'Healthy eating and nutrition at The Nurture Nest Multilingual Nursery.',
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
              At our nursery, we strongly believe in supporting healthy eating habits from the very start of a child’s journey. Good nutrition plays an important role in children’s growth, wellbeing and development.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              That is why our meals are provided by Nursery Kitchen, a specialist catering company that focuses on creating meals with carefully planned nutritional value for young children. All meals are prepared using no added salt and no added sugar, ensuring that children receive balanced, wholesome food that supports healthy development in every aspect.
            </p>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm mt-8">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">View our Menu</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Parents can view the weekly menus directly on our website, allowing you to see what meals are planned for the week ahead. Menus can also be downloaded for your convenience if you would like to keep a copy at home.
              </p>
              <a href="/menu-download.pdf" target="_blank" className="inline-flex items-center justify-center px-6 py-3 bg-nest-600 text-white font-semibold rounded-xl hover:bg-nest-700 transition-colors">
                Download Nursery Menu
              </a>
            </div>
          </section>

          <div className="mt-14 flex flex-wrap gap-4 border-t border-slate-100 pt-10">
            <Link href="/curriculum-framework" className="inline-flex items-center justify-center px-6 py-3 bg-nest-100 text-nest-700 font-semibold rounded-xl hover:bg-nest-200 transition-colors">
              Our Curriculum
            </Link>
            <Link href="/typical-day" className="inline-flex items-center justify-center px-6 py-3 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors">
              A typical day
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
