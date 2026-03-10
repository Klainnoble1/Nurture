'use client';

import { useState } from 'react';

export default function EnquiriesPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      contact_number: formData.get('contact'),
      enquiry_text: formData.get('enquiry'),
      formType: 'enquiry',
    };

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
            General Enquiries
          </h1>
          <p className="text-lg text-slate-600">
            Have a question about our nursery? We&apos;d love to help. Please fill in the details below.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-soft-xl border border-slate-100">
          {submitStatus === 'success' ? (
            <div className="text-center py-12 space-y-6">
              <div className="w-20 h-20 bg-nest-100 text-nest-600 rounded-full flex items-center justify-center mx-auto text-4xl">
                ✓
              </div>
              <h2 className="text-3xl font-display font-bold text-slate-900">Message Sent!</h2>
              <p className="text-slate-600 max-w-md mx-auto">
                Thank you for your enquiry. Our team will review your message and get back to you as soon as possible.
              </p>
              <button 
                onClick={() => setSubmitStatus('idle')}
                className="mt-8 px-8 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
                  There was an error submitting your enquiry. Please try again later.
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-bold text-slate-700">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 focus:border-nest-500 focus:ring-4 focus:ring-nest-500/20 transition-all outline-none bg-slate-50 focus:bg-white"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 focus:border-nest-500 focus:ring-4 focus:ring-nest-500/20 transition-all outline-none bg-slate-50 focus:bg-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact" className="block text-sm font-bold text-slate-700">Contact number *</label>
                  <input 
                    type="tel" 
                    id="contact" 
                    name="contact" 
                    required 
                    className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 focus:border-nest-500 focus:ring-4 focus:ring-nest-500/20 transition-all outline-none bg-slate-50 focus:bg-white"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="enquiry" className="block text-sm font-bold text-slate-700">Enquiry *</label>
                <textarea 
                  id="enquiry" 
                  name="enquiry" 
                  required 
                  rows={5}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 focus:border-nest-500 focus:ring-4 focus:ring-nest-500/20 transition-all outline-none bg-slate-50 focus:bg-white resize-none"
                  placeholder="How can we help you today?"
                />
              </div>

              <div className="pt-6">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-10 py-4 bg-nest-500 hover:bg-nest-600 text-white rounded-2xl font-bold transition-all shadow-xl shadow-nest-500/30 hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed flex items-center justify-center min-w-[200px]"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
