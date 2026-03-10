import Link from 'next/link';
import PageLayout from '@/app/PageLayout';
import Button from '@/components/Button';

export const metadata = {
  title: 'Funding and Childcare Support',
  description: 'Explore the government funding schemes and childcare support options available at Nurture Nest.',
};

export default function FundingPage() {
  const schemes = [
    { title: '15 Hours Government Funded Childcare', icon: '🕒' },
    { title: '30 Hours Government Funded Childcare', icon: '⏰' },
    { title: 'Tax-Free Childcare', icon: '💷' },
    { title: 'Student Finance Childcare Support', icon: '🎓' },
    { title: 'Local Authority Funded Childcare', icon: '🏛️' },
  ];

  return (
    <PageLayout>
      <div className="bg-slate-50 py-16 md:py-24 min-h-[80vh]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1.5 bg-nest-100 text-nest-700 rounded-lg text-sm font-semibold mb-6">
            Admissions
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Funding and Childcare Support
          </h1>
          <p className="text-xl text-slate-600 mb-12">
            We understand that childcare costs are an important consideration for families.
          </p>

          <section className="space-y-12">
            <div className="prose prose-slate prose-lg max-w-none text-slate-600">
              <p>
                Our nursery accepts a range of government funding schemes and childcare support options to help make high-quality childcare more accessible.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">We currently accept:</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {schemes.map((scheme) => (
                  <div key={scheme.title} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center hover:border-nest-300 hover:shadow-md transition-all">
                    <span className="text-4xl mb-4 bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center">{scheme.icon}</span>
                    <h3 className="font-bold text-slate-800">{scheme.title}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-nest-50 p-8 rounded-3xl border border-nest-100">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">Need Guidance?</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you are eligible for any of these schemes, our team will be happy to guide you through the process and explain how the funding can be applied to your child’s place at the nursery.
              </p>
              <p className="text-slate-600 leading-relaxed">
                If you are unsure about what funding you may be entitled to, please feel free to speak with a member of our team. We are always happy to support families by exploring available options and helping you access the childcare support that works best for you.
              </p>
              <p className="font-semibold text-slate-800 mt-6">
                Our goal is to ensure that families receive the support they need while their children benefit from a nurturing and high-quality early years environment.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary" className="py-3 px-8 text-lg rounded-xl bg-nest-600 hover:bg-nest-700">
                  Discuss Funding Options
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
