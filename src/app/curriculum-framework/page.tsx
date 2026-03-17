import Link from 'next/link';
import PageLayout from '@/app/PageLayout';

export const metadata = {
  title: 'Our Curriculum',
  description: 'Our curriculum at The Nurture Nest is designed around the seven areas of learning, promoting British Values and a child-led approach.',
};

export default function CurriculumFrameworkPage() {
  return (
    <PageLayout>
      <div className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1.5 bg-nest-100 text-nest-700 rounded-lg text-sm font-semibold mb-6">Curriculum</span>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Our Curriculum
          </h1>
          <p className="text-xl text-slate-600 mb-10 font-semibold">
            Birth – 5 Matters: <a href="https://birthto5matters.org.uk/wp-content/uploads/2021/04/Birthto5Matters-download.pdf" target="_blank" className="text-nest-600 hover:underline">Download Birthto5Matters.pdf</a>
          </p>
          
          <section className="space-y-12">
            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">A Broad and Inspiring Start to Learning</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our curriculum is designed to provide children with a broad, engaging and nurturing start to their learning journey. It is carefully planned around the seven areas of learning and development, ensuring every child is supported to grow, explore and thrive.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4 font-semibold">These areas include:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700 font-medium bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <li className="flex items-center gap-2"><span className="text-nest-500">❖</span> Communication and Language</li>
                <li className="flex items-center gap-2"><span className="text-nest-500">❖</span> Physical Development</li>
                <li className="flex items-center gap-2"><span className="text-nest-500">❖</span> Personal, Social and Emotional Development</li>
                <li className="flex items-center gap-2"><span className="text-nest-500">❖</span> Literacy</li>
                <li className="flex items-center gap-2"><span className="text-nest-500">❖</span> Mathematics</li>
                <li className="flex items-center gap-2"><span className="text-nest-500">❖</span> Understanding the World</li>
                <li className="flex items-center gap-2"><span className="text-nest-500">❖</span> Expressive Arts and Design</li>
              </ul>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Through meaningful play and exploration, we support children to develop confidence, curiosity and a lifelong love of learning.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">British Values and Inclusion</h2>
                <p className="text-slate-600 leading-relaxed mb-3">
                  We promote British Values throughout our curriculum, encouraging children to develop respect, understanding and kindness towards others.
                </p>
                <p className="text-slate-600 leading-relaxed mb-3">
                  Through daily experiences and discussions, children learn about respect for others, inclusion and diversity making choices, understanding rules and fairness.
                </p>
                <p className="text-slate-600 leading-relaxed font-medium">
                  We celebrate the uniqueness of every child and ensure our environment is inclusive, welcoming and supportive for all families.
                </p>
              </div>

              <div className="bg-nest-50 p-6 rounded-2xl border border-nest-100 shadow-sm">
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">A Child-Led Approach</h2>
                <p className="text-slate-600 leading-relaxed mb-3">
                  At the heart of our setting is a child-led environment, where children’s interests guide the experiences we provide. Our practitioners carefully observe children’s interests and use these to plan exciting activities and learning opportunities.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  We encourage independence in every area of learning and development, supporting children to make choices, solve problems and develop confidence in their own abilities.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">Cultural Capital and Learning Beyond the Classroom</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We believe that learning extends far beyond the nursery environment. Our location offers wonderful opportunities to enrich children’s experiences and develop their cultural capital. Children benefit from exploring the local community and visiting nearby landmarks such as:
              </p>
              <ul className="flex flex-wrap gap-3 mb-4">
                {['Tower Bridge', 'The Shard', 'Borough Market', 'Southwark Bridge', 'Elephant Park', 'Local animal farms and green spaces'].map(landmark => (
                  <li key={landmark} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold">{landmark}</li>
                ))}
              </ul>
              <p className="text-slate-600 leading-relaxed">
                These experiences help children develop an understanding of the world around them and build meaningful connections with their community.
              </p>
            </div>

            <div className="border-t border-slate-200 pt-8">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">Tracking & Our Key Worker System</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Each child’s learning and development is supported and monitored through observations, milestone tracking and next steps planning. These are carefully completed by your child’s key worker, who monitors progress and ensures learning experiences are tailored to support each child.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                We operate a key worker system, where each child is assigned a dedicated member of staff who will support their development, wellbeing and learning. Your child’s key worker will build a strong and trusting relationship with your child.
              </p>
              <p className="bg-amber-50 text-amber-900 p-4 rounded-xl border border-amber-100/50 text-sm font-medium">
                To ensure children always feel secure and supported, we also operate a buddy system. If a key worker is absent, the buddy staff member steps in to support the child, ensuring continuity of care.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-soft border border-slate-100">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4 text-center">Sharing Your Child’s Day with Tapestry</h2>
              <p className="text-slate-600 leading-relaxed text-center mb-6 max-w-2xl mx-auto">
                We use Tapestry, an interactive online learning journal that allows parents to stay connected with their child’s day at nursery. By working together, we create a supportive environment where children can grow, learn and flourish.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Through Tapestry, parents can:</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>✓ View daily photos and updates</li>
                    <li>✓ See observations and learning moments</li>
                    <li>✓ Read about activities and experiences</li>
                    <li>✓ View your child’s next steps</li>
                    <li>✓ Share comments and observations from home</li>
                    <li>✓ Download nursery menus</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">We also upload daily info:</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>✓ Food intake</li>
                    <li>✓ Sleep times</li>
                    <li>✓ Nappy changes</li>
                    <li>✓ Daily routines and activities</li>
                  </ul>
                </div>
              </div>
            </div>

          </section>

          <div className="mt-14 flex flex-wrap gap-4 pt-10 border-t border-slate-100">
            <Link href="/typical-day" className="inline-flex items-center justify-center px-6 py-3 bg-nest-600 text-white font-semibold rounded-xl hover:bg-nest-700 transition-colors">A typical day</Link>
            <Link href="/nutrition" className="inline-flex items-center justify-center px-6 py-3 border-2 border-nest-600 text-nest-700 font-semibold rounded-xl hover:bg-nest-50 transition-colors">Our Nutrition</Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
