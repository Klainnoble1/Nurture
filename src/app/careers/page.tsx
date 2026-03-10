import PageLayout from '@/app/PageLayout';
import Button from '@/components/Button';

export const metadata = {
  title: 'Join Our Team | Careers',
  description: 'Careers, vacancies, and opportunities at Nurture Nest Multilingual Nursery.',
};

export default function CareersPage() {
  const perks = [
    {
      icon: '🌟',
      title: 'Why Work With Us',
      description: 'We believe that happy, supported staff create the best environment for children. We offer a positive, collaborative, and rewarding workplace where your contributions are highly valued and your voice is heard.',
    },
    {
      icon: '📚',
      title: 'Staff Development & Training',
      description: 'Your growth is important to us. We provide continuous professional development, ongoing training opportunities, and support for further early years qualifications to help you advance your career.',
    },
    {
      icon: '🛡️',
      title: 'Safeguarding Commitment',
      description: 'Nurture Nest is committed to safeguarding and promoting the welfare of children. All successful applicants will be subject to an enhanced DBS check and rigorous safer recruitment procedures.',
    },
  ];

  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-6">
            <span className="inline-block px-4 py-1.5 bg-nest-100 text-nest-700 rounded-full text-sm font-bold tracking-widest uppercase">
              Join Our Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-tight">
              Build your career with <span className="text-nest-600">Nurture Nest</span>
            </h1>
          </div>

          <div className="prose prose-slate prose-lg md:prose-xl mx-auto text-slate-600 mb-20 leading-relaxed font-medium">
            <p>
              At our nursery, we are proud to have a team of highly qualified, caring and passionate professionals who are dedicated to supporting children in their early years of development.
            </p>
            <p>
              We are always interested in hearing from individuals who are enthusiastic about working with children, committed to providing high-quality care and learning, and who hold the relevant qualifications, training and safeguarding requirements needed to work in an early years setting.
            </p>
            <p>
              If you believe you would be a great addition to our team, we would love to hear from you.
            </p>
            <p className="p-8 bg-nest-50 rounded-3xl border border-nest-100 text-slate-800 shadow-inner">
              Please feel free to send your CV to our email address or contact us by telephone, and a member of our team will be happy to discuss any current or future opportunities with you. Explore the wonders of helping children bloom.
            </p>
            <p>
              We look forward to welcoming passionate and dedicated professionals who share our commitment to creating a safe, nurturing and inspiring environment for children to grow and thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {perks.map((perk) => (
              <div key={perk.title} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-soft-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm border border-slate-100">
                  {perk.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">{perk.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{perk.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-10 border-t border-slate-100">
            <Button 
              href="mailto:admin@nurturenestmultilingualnursery.com?subject=Career%20Enquiry%20-%20CV%20Attached" 
              variant="primary" 
              className="py-4 px-10 text-lg rounded-2xl shadow-nest-lg bg-nest-500 hover:bg-nest-600"
            >
              Email us your CV
            </Button>
            <Button 
              href="tel:02046421388" 
              variant="outline" 
              className="py-4 px-10 text-lg rounded-2xl border-slate-200 hover:bg-slate-50"
            >
              Call to discuss
            </Button>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}
