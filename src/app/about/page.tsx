import Link from 'next/link';
import PageLayout from '@/app/PageLayout';

export const metadata = {
  title: 'About',
  description: 'The Nurture Nest Multilingual Nursery.',
};

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="bg-slate-50 min-h-[70vh] p-4 md:p-8">
        <div className="bg-white p-8 md:p-14 rounded-[2.5rem] shadow-soft max-w-4xl w-full mx-auto border border-slate-100">
          <div className="inline-block px-4 py-1.5 bg-nest-100 text-nest-700 rounded-full text-sm font-bold tracking-wide mb-6">
            Our Community
          </div>

          <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            About The Nurture Nest
          </h1>

          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-3xl">
            A multilingual, inclusive nursery rooted in British values, where every child flourishes.
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-4">
                Our Vision
              </h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  At The Nurture Nest Multilingual Nursery, we believe every child is unique, capable, and full of potential. Our curriculum is designed to nurture confident, curious, kind, and resilient learners through a rich, inclusive, and culturally responsive environment.
                </p>
                <p className="font-medium text-slate-900">
                  We celebrate diversity, promote equality, and ensure every child feels valued, respected, and empowered to succeed.
                </p>
              </div>
            </section>

            <section>
              <img
                src="/Nurture nest/WhatsApp Image 2026-03-07 at 10.34.08 (2).jpeg"
                alt="Happy child at nursery"
                className="w-full h-auto rounded-3xl border border-slate-100"
              />
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-4">
                Our Approach
              </h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Our approach is child-centred, strength-based, inclusive, multilingual, and community connected. We employ different learning frameworks, theories, tools and models, including the EYFS, Jean Piaget, and Lev Vygotsky, to guide educators in developing an enabling environment that supports all areas of a child&apos;s growth: cognitive, social, and emotional development.
                </p>
                <p>
                  Lev Vygotsky&apos;s Sociocultural Theory posits that social interaction, culture, and language are fundamental to cognitive development. He argued that children learn through guided social interactions. We put this into practice every day at The Nurture Nest.
                </p>
              </div>
            </section>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mt-10">
            <Link
              href="/curriculum-framework"
              className="w-full sm:w-auto px-8 py-4 bg-nest-600 text-white font-semibold rounded-2xl hover:bg-nest-700 transition-colors shadow-lg shadow-nest-600/20"
            >
              Explore Our Curriculum
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-slate-100 text-slate-700 font-semibold rounded-2xl hover:bg-slate-200 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
