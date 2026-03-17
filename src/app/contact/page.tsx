import PageLayout from '@/app/PageLayout';
import Link from 'next/link';
import Button from '@/components/Button';

export const metadata = {
  title: 'Contact Us',
  description: 'Visit or get in touch with The Nurture Nest Multilingual Nursery, central London SE1.',
};

export default function ContactPage() {
  const hours = [
    { day: 'Monday', hours: '07:00 – 19:00' },
    { day: 'Tuesday', hours: '07:00 – 19:00' },
    { day: 'Wednesday', hours: '07:00 – 19:00' },
    { day: 'Thursday', hours: '07:00 – 19:00' },
    { day: 'Friday', hours: '07:00 – 19:00' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: '📸', href: 'https://instagram.com/nurturenestmultilingualnursery' },
    { name: 'Facebook', icon: '👤', href: 'https://web.facebook.com/people/Nurture-Nest/pfbid02pinp2dr9nJpZfsySf5CForAPHFjMrzA9YdUiAJ5E8eayJssM5doqf1sRrzHkfx96l/?mibextid' },
    { name: 'TikTok', icon: '🎵', href: 'https://www.tiktok.com/@nurturenestmultil?_r=1&_t=ZN-94lWpdLvziI' },
    { name: 'WhatsApp', icon: '💬', href: 'https://wa.me/442046421388' },
  ];

  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-nest-50 via-white to-warm-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6">Contact Us</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We&apos;re located in central London, offering a safe, inclusive environment for your child. Reach out to us using any of the methods below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-soft-lg space-y-10">
              <div>
                <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Our Details</h2>
                <div className="space-y-4 text-slate-700 font-medium">
                  <p className="flex items-center gap-3">
                    <span className="text-2xl">📍</span> 
                    <span>61 Great Dover Street, London, SE1 4YF</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-2xl">📞</span> 
                    <a href="tel:02046421388" className="hover:text-nest-600 transition-colors">0204 642 1388</a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-2xl">✉️</span> 
                    <a href="mailto:admin@nurturenestmultilingualnursery.com" className="hover:text-nest-600 transition-colors">admin@nurturenestmultilingualnursery.com</a>
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Connect With Us</h2>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:border-nest-300 hover:bg-nest-50 transition-all group"
                    >
                      <span className="text-xl group-hover:scale-110 transition-transform">{social.icon}</span>
                      <span className="font-bold text-slate-700 group-hover:text-nest-700">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                <Button href="/enquiries" variant="primary" className="flex-1 justify-center rounded-xl bg-nest-500 hover:bg-nest-600 shadow-nest-lg">
                  Send an Enquiry
                </Button>
                <Button href="?tour=true" variant="outline" className="flex-1 justify-center rounded-xl border-nest-200 text-nest-700 hover:bg-nest-50">
                  Book a Tour
                </Button>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-soft-lg flex flex-col">
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Opening Hours</h2>
              <div className="flex-1">
                <table className="w-full text-slate-700 font-medium mb-8">
                  <tbody>
                    {hours.map((row) => (
                      <tr key={row.day} className="border-b border-slate-50 last:border-0">
                        <td className="py-4">{row.day}</td>
                        <td className="py-4 text-right">{row.hours}</td>
                      </tr>
                    ))}
                    <tr className="border-b border-slate-50 last:border-0">
                      <td className="py-4 text-slate-400">Saturday & Sunday</td>
                      <td className="py-4 text-right text-slate-400">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-auto">
                <a
                  href="https://www.google.com/maps/search/61+Great+Dover+Street+London+SE1+4YF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
