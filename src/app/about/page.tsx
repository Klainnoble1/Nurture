import Link from 'next/link';
import PageLayout from '@/app/PageLayout';

export const metadata = {
  title: 'About Us',
  description: 'Learn about Nurture Nest Multilingual Nursery: our vision, approach, and commitment to every child.',
};

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1.5 bg-nest-100 text-nest-700 rounded-lg text-sm font-semibold mb-6">
            Our Community
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            About Nurture Nest
          </h1>
          <p className="text-xl text-slate-600 mb-10">
            A multilingual, inclusive nursery rooted in British values—where every child flourishes.
          </p>

          <section className="prose prose-slate prose-lg max-w-none space-y-10">
            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed">
                At Nurture Nest Multilingual Nursery, we believe every child is unique, capable, and full of potential. Our curriculum is designed to nurture confident, curious, kind, and resilient learners through a rich, inclusive, and culturally responsive environment.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We celebrate diversity, promote equality, and ensure every child feels valued, respected, and empowered to succeed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-4">Our Approach</h2>
              <p className="text-slate-600 leading-relaxed">
                Our approach is child-centred, strength-based, inclusive, multilingual, and community connected. We employ different learning frameworks, theories, tools and models—including the EYFS, Jean Piaget, and Lev Vygotsky—to guide educators in developing an enabling environment that supports all areas of a child&apos;s growth: cognitive, social, and emotional development.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Lev Vygotsky&apos;s Sociocultural Theory posits that social interaction, culture, and language are fundamental to cognitive development. He argued that children learn through guided social interactions. We put this into practice every day at Nurture Nest.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-4">Our Curriculum Framework</h2>
              <p className="text-slate-600 leading-relaxed">
                As a nursery, we focus on the 7 areas of child development: Communication and Language, Physical Development, Personal Social and Emotional Development, Literacy, Mathematics, Understanding the World, and Expressive Arts and Design. We do this through nurturing the children&apos;s interests and allowing them to lead their own learning through creativity. We encourage independence and track progress through key milestones and observations.
              </p>
            </div>
          </section>

          <div className="mt-14 flex flex-wrap gap-4">
            <Link href="/curriculum-framework" className="inline-flex items-center justify-center px-6 py-3 bg-nest-600 text-white font-semibold rounded-xl hover:bg-nest-700 transition-colors">
              Curriculum Framework
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border-2 border-nest-600 text-nest-700 font-semibold rounded-xl hover:bg-nest-50 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
