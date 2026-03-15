import Button from '@/components/Button';
import ContactForm from './ContactForm';

const contactItems = [
  {
    label: 'Location',
    value: '61 Great Dover Street, London, SE1 4YF',
    emoji: '📍',
    bg: 'bg-slate-50',
  },
  {
    label: 'Phone',
    value: '0204 642 1388',
    emoji: '📞',
    href: 'tel:02046421388',
    bg: 'bg-slate-50',
  },
  {
    label: 'Email',
    value: 'admin@nurturenestmultilingualnursery.com',
    emoji: '✉️',
    href: 'mailto:admin@nurturenestmultilingualnursery.com',
    bg: 'bg-slate-50',
  },
  {
    label: 'Hours',
    value: 'Mon-Fri: 07:00-19:00',
    emoji: '⏰',
    bg: 'bg-slate-50',
  },
];

export default function ContactPanel() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
          <div className="lg:col-span-2 space-y-12 animate-slide-up">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                Get in <span className="text-wonder-500">touch</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We are in central London, minutes from London Bridge. Come and see our space and meet our team.
              </p>
            </div>

            <div className="space-y-8">
              {contactItems.map((item) => (
                <div key={item.label} className="flex gap-5">
                  <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center text-2xl shrink-0 shadow-sm ring-1 ring-slate-100`}>
                    {item.emoji}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm uppercase tracking-widest">{item.label}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-slate-600 hover:text-nest-600 font-medium transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-600 font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button href="/contact" variant="outline" className="rounded-2xl border-slate-200 hover:bg-slate-50">
                View on map
              </Button>
            </div>
          </div>

          <div className="lg:col-span-3 animate-slide-up [animation-delay:120ms]">
            <div className="bg-white p-8 md:p-12 rounded-[3rem] border-2 border-slate-50 shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
              <div className="mb-10 text-center md:text-left">
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Send a message</h3>
                <p className="text-slate-500">Fill out the form below and we will be in touch.</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
