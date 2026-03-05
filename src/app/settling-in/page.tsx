import Link from 'next/link';
import PageLayout from '@/app/PageLayout';

export const metadata = {
  title: 'Settling In',
  description: 'How we help your child settle into Nurture Nest Multilingual Nursery.',
};

export default function SettlingInPage() {
  return (
    <PageLayout>
      <div className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1.5 bg-nest-100 text-nest-700 rounded-lg text-sm font-semibold mb-6">
            Curriculum
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Settling In
          </h1>
          <p className="text-xl text-slate-600 mb-10">
            We work closely with families to make the transition into nursery calm and positive for every child.
          </p>

          <section className="space-y-8">
            <p className="text-slate-600 leading-relaxed text-lg">
              Starting nursery is a big step. At Nurture Nest we take settling in seriously. We offer a gradual settling-in process so your child can get to know our staff, the environment, and other children at their own pace.
            </p>
            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">Our approach</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex gap-3"><span className="text-nest-600 font-bold">•</span> Short initial visits with a parent or carer present</li>
                <li className="flex gap-3"><span className="text-nest-600 font-bold">•</span> Gradually increasing time at nursery as your child feels ready</li>
                <li className="flex gap-3"><span className="text-nest-600 font-bold">•</span> A key person assigned to your child for continuity and reassurance</li>
                <li className="flex gap-3"><span className="text-nest-600 font-bold">•</span> Regular communication with you about how your child is doing</li>
              </ul>
            </div>
            <p className="text-slate-600 leading-relaxed">
              We encourage you to share your child&apos;s routines, likes, and any needs so we can support them well from day one. For more detail on our settling-in policy, please <Link href="/contact" className="text-nest-600 font-medium hover:underline">contact us</Link>.
            </p>
          </section>

          <div className="mt-14 flex flex-wrap gap-4">
            <Link href="/nutrition" className="inline-flex items-center justify-center px-6 py-3 bg-nest-600 text-white font-semibold rounded-xl hover:bg-nest-700 transition-colors">
              Our Nutrition
            </Link>
            <Link href="/policies" className="inline-flex items-center justify-center px-6 py-3 border-2 border-nest-600 text-nest-700 font-semibold rounded-xl hover:bg-nest-50 transition-colors">
              Policies & FAQs
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
