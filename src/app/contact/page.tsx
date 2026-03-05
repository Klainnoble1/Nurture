import PageLayout from '@/app/PageLayout';
import Button from '@/components/Button';

export const metadata = {
  title: 'Contact Us',
  description: 'Visit or get in touch with Nurture Nest Multilingual Nursery, central London SE1.',
};

const hours = [
  { day: 'Mon', hours: '09:00 – 17:00' },
  { day: 'Tue', hours: '09:00 – 17:00' },
  { day: 'Wed', hours: '09:00 – 17:00' },
  { day: 'Thu', hours: '09:00 – 17:00' },
  { day: 'Fri', hours: '09:00 – 17:00' },
  { day: 'Sat', hours: 'Closed' },
  { day: 'Sun', hours: 'Closed' },
];

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-xl text-slate-600 mb-12">Better yet, see us in person. We would love to meet you.</p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="text-slate-600 leading-relaxed mb-8">
                We have the luxury of a very central location, with our nursery based in the heart of central London (SE1)—local to the Shard, Borough Market, South Bank, London Bridge and Tower Bridge, and just a few minutes walk from London Bridge tube station.
              </p>
              <div className="space-y-6">
                <div>
                  <h2 className="font-display font-bold text-slate-900 mb-2">Nurture Nest</h2>
                  <p className="text-slate-600">61 Great Dover Street<br />London, UK</p>
                </div>
                <div>
                  <p className="text-slate-600">
                    <a href="tel:+447956176257" className="text-nest-600 font-medium hover:underline">+44 7956 176 257</a>
                  </p>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-slate-900 mb-4">Hours</h3>
                  <table className="w-full text-slate-600">
                    <tbody>
                      {hours.map((row) => (
                        <tr key={row.day}>
                          <td className="py-1 pr-4">{row.day}</td>
                          <td className="py-1">{row.hours}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <a
                  href="https://www.google.com/maps/search/61+Great+Dover+Street+London+SE1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-nest-600 text-white font-semibold rounded-xl hover:bg-nest-700 transition-colors"
                >
                  Get directions
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-soft">
              <h3 className="font-display font-bold text-slate-900 mb-6">Send a message</h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-nest-500 focus:border-nest-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-nest-500 focus:border-nest-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-nest-500 focus:border-nest-500 resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <Button type="submit" variant="primary" className="w-full">Send</Button>
              </form>
              <p className="text-xs text-slate-500 mt-4">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
