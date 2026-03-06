import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '@/app/PageLayout';

const ABOUT_HERO_IMAGE = '/papazachariasa-park-4836077_1920.jpg';
const ABOUT_SECOND_IMAGE = '/stocksnap-swing-2563691_1920.jpg';

export const metadata = {
  title: 'About Us',
  description: 'Learn about Nurture Nest Multilingual Nursery: our vision, approach, and commitment to every child.',
};

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-warm-50 via-white to-nest-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-12 shadow-soft-lg ring-2 ring-nest-200/60">
            <Image
              src={ABOUT_HERO_IMAGE}
              alt="Diverse families and children at Nurture Nest"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end">
              <div className="p-6 md:p-8 text-white">
                <span className="inline-block px-3 py-1.5 bg-nest-400 text-nest-900 rounded-lg text-sm font-semibold mb-3">
                  Our Community
                </span>
                <h1 className="text-3xl md:text-5xl font-display font-bold">
                  About Nurture Nest
                </h1>
                <p className="text-lg text-white/90 mt-2 max-w-xl">
                  A multilingual, inclusive nursery rooted in British values—where every child flourishes.
                </p>
              </div>
            </div>
          </div>

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

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft ring-2 ring-warm-200">
                <Image src={ABOUT_SECOND_IMAGE} alt="Happy child at nursery" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">Our Approach</h2>
                <p className="text-slate-600 leading-relaxed">
                  Our approach is child-centred, strength-based, inclusive, multilingual, and community connected. We employ different learning frameworks, theories, tools and models—including the EYFS, Jean Piaget, and Lev Vygotsky—to guide educators in developing an enabling environment that supports all areas of a child&apos;s growth: cognitive, social, and emotional development.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Lev Vygotsky&apos;s Sociocultural Theory posits that social interaction, culture, and language are fundamental to cognitive development. He argued that children learn through guided social interactions. We put this into practice every day at Nurture Nest.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mt-12 mb-4">Our Curriculum Framework</h2>
              <p className="text-slate-600 leading-relaxed">
                As a nursery, we focus on the 7 areas of child development: Communication and Language, Physical Development, Personal Social and Emotional Development, Literacy, Mathematics, Understanding the World, and Expressive Arts and Design. We do this through nurturing the children&apos;s interests and allowing them to lead their own learning through creativity. We encourage independence and track progress through key milestones and observations.
              </p>
            </div>
          </section>

          <div className="mt-14 flex flex-wrap gap-4">
            <Link href="/curriculum-framework" className="inline-flex items-center justify-center px-6 py-3 bg-nest-500 text-white font-semibold rounded-xl hover:bg-nest-600 shadow-soft transition-colors">
              Curriculum Framework
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border-2 border-nest-500 text-nest-700 font-semibold rounded-xl hover:bg-nest-50 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
