import Link from 'next/link';
import PageLayout from '@/app/PageLayout';

export const metadata = {
  title: 'A Typical Day at Nursery',
  description: 'Explore a typical day filled with learning, play, healthy meals, and rest at The Nurture Nest.',
};

export default function TypicalDayPage() {
  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1.5 bg-nest-100 text-nest-700 rounded-lg text-sm font-semibold mb-6">
            Curriculum
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            A Typical Day at Our Nursery
          </h1>
          <p className="text-xl text-slate-600 mb-12">
            Every day at our nursery is filled with learning, laughter and discovery. While each day is slightly different as we follow children’s interests, our routine provides a balance of play, learning, rest and care to support every child’s wellbeing.
          </p>

          <div className="space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-nest-200 before:to-transparent">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-nest-500 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10 text-xl">🌅</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold font-display text-slate-900 mb-2">Morning Drop-Off</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Our day begins with a warm welcome as children arrive at nursery. Each child is greeted by their key worker, helping them settle into the day. We understand that saying goodbye can sometimes be difficult for children and families. Our experienced staff make this transition as calm and reassuring as possible, helping children feel safe, secure and ready to start their day.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-curiosity-500 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10 text-xl">🧩</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold font-display text-slate-900 mb-2">Learning Through Play</h3>
                <p className="text-slate-600 text-sm leading-relaxed">At our nursery, learning is fun, engaging and child-led. We plan activities around children’s interests, curiosity and developmental needs, allowing them to explore, play with friends and build new skills naturally. Practitioners observe children closely and extend their play through meaningful activities.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-joy-500 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10 text-xl">🍎</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold font-display text-slate-900 mb-2">Healthy Meals Times</h3>
                <p className="text-slate-600 text-sm leading-relaxed">We are proud to provide six nutritious meals and snacks throughout the day, supplied by Nursery Kitchen. Children enjoy breakfast, morning snack, a freshly prepared lunch, afternoon snack, tea, and a late snack. All meals are carefully planned with dishes including the recommended five-a-day.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-indigo-400 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10 text-xl">🌙</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold font-display text-slate-900 mb-2">Rest and Relaxation</h3>
                <p className="text-slate-600 text-sm leading-relaxed">During the afternoon we provide a calm and relaxing rest time. Soft music is played and the environment becomes quieter to help children unwind. Sleeping mats are provided for those who sleep, while others can take part in quiet activities like reading or puzzles.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-emerald-500 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10 text-xl">🌳</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold font-display text-slate-900 mb-2">Outdoor & Self-Care</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Outdoor learning is an important part of our daily routine through our Nature Nest experiences. We also support children at every stage of their self-care and hygiene development, from nappy changing routines to supporting older children build independence with hand washing and personal care.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-kindness-500 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10 text-xl">👋</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold font-display text-slate-900 mb-2">Collection Time</h3>
                <p className="text-slate-600 text-sm leading-relaxed">At the end of the day, parents ring the nursery buzzer. A member of staff, usually your child’s key worker, ensures a safe handover. It&apos;s a great opportunity to ask questions. Parents also view a full summary of the day on Tapestry.</p>
              </div>
            </div>

          </div>

          <div className="mt-16 text-center">
            <Link href="/gallery" className="inline-flex items-center justify-center px-8 py-4 bg-nest-600 text-white text-lg font-semibold rounded-2xl hover:bg-nest-700 shadow-lg shadow-nest-600/20 transition-all hover:-translate-y-1">
              View our Gallery
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
