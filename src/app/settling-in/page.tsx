import Link from 'next/link';
import PageLayout from '@/app/PageLayout';

export const metadata = {
  title: 'Settling In',
  description: 'How we help your child settle into The Notchernest Multilingual Nursery.',
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

          <section className="space-y-10">
            <div className="prose prose-slate prose-lg max-w-none">
              <p>
                Starting nursery is an important milestone for both children and their families. We understand that this stage can feel exciting, emotional and sometimes a little overwhelming. That is why we place great importance on creating a gentle and supportive settling-in process.
              </p>
              <p>
                Our aim is to make this transition as smooth and reassuring as possible, allowing children to become familiar with their new environment while maintaining the strong attachment they have with their parents and carers.
              </p>
              <p>
                It is completely natural for children to feel unsure at first. Even when they are enjoying themselves, they may still miss their parents at drop-off. Our experienced staff support children through this stage by building warm, trusting relationships, helping the nursery become a home away from home.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Our Settling-In Process</h2>
              <p className="text-slate-600 leading-relaxed mb-6">We follow a gradual settling-in approach to help children feel comfortable, confident and secure.</p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-nest-50 rounded-bl-full flex items-start justify-end p-3"><span className="text-nest-500 font-bold">1</span></div>
                  <h3 className="font-display font-bold text-slate-900 mb-2">Day 1 – One Hour Visit</h3>
                  <p className="text-sm text-slate-500 font-semibold mb-3">Parent Present</p>
                  <p className="text-slate-600 text-sm leading-relaxed">Your child will stay at the nursery for one hour, supported by you and their key worker. This allows your little one to explore the environment, meet their key worker and begin to feel comfortable while you are nearby.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-curiosity-50 rounded-bl-full flex items-start justify-end p-3"><span className="text-curiosity-500 font-bold">2</span></div>
                  <h3 className="font-display font-bold text-slate-900 mb-2">Day 2 – Two Hour Visit</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Your child will stay for two hours. For the first 20 minutes, you and your child spend time together with their key worker. After this, we will ask you to quietly step away. Your child will enjoy morning snack time and begin building independence.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-joy-50 rounded-bl-full flex items-start justify-end p-3"><span className="text-joy-500 font-bold">3</span></div>
                  <h3 className="font-display font-bold text-slate-900 mb-2">Day 3 – Half Day Session</h3>
                  <p className="text-sm text-slate-500 font-semibold mb-3">No parents and carers present</p>
                  <p className="text-slate-600 text-sm leading-relaxed">Your child will stay for half a day. They will be dropped off at the door and join us for: morning snack, lunch time, and rest/relaxation time. Your child will then be collected after this session.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-kindness-50 rounded-bl-full flex items-start justify-end p-3"><span className="text-kindness-500 font-bold">4</span></div>
                  <h3 className="font-display font-bold text-slate-900 mb-2">Day 4 – Full Day</h3>
                  <p className="text-sm text-slate-500 font-semibold mb-3">No parents and carers present</p>
                  <p className="text-slate-600 text-sm leading-relaxed">Your child will stay for a full day at nursery, allowing them to experience the full routine and become familiar with all parts of the day. Children usually begin their regular schedule the following week.</p>
                </div>
              </div>
            </div>

            <div className="bg-nest-50 p-8 rounded-3xl border border-nest-100">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">Every Child is Unique</h2>
              <p className="text-slate-600 leading-relaxed">
                While this is our general settling-in structure, we understand that every child is different. Some children settle quickly, while others may need a little more time and reassurance. We always work closely with parents to ensure the settling process meets the individual needs of each child. If adjustments are needed, we will adapt to make sure your child feels safe, supported and happy.
              </p>
            </div>
          </section>

          <div className="mt-14 flex flex-wrap gap-4 pt-10 border-t border-slate-100">
            <Link href="/typical-day" className="inline-flex items-center justify-center px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-colors">
              A typical day
            </Link>
            <Link href="/policies" className="inline-flex items-center justify-center px-6 py-3 border-2 border-nest-600 text-nest-700 font-semibold rounded-xl hover:bg-nest-50 transition-colors">
              Policies
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
