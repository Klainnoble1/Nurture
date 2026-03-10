'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function TourPopOut() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isOpen = searchParams.get('tour') === 'true';

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const closePopOut = () => {
    router.push(window.location.pathname, { scroll: false });
    setSubmitStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      contact_number: formData.get('contact'),
      preferred_type: formData.get('tourType'),
      marketing_opt_in: formData.get('marketing') === 'yes',
      formType: 'tour',
    };

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
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
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
        onClick={closePopOut}
        aria-hidden="true"
      />
      
      {/* Side Panel */}
      <div className="relative w-full max-w-md h-full bg-white shadow-2xl flex flex-col animate-slide-left">
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <h2 className="text-2xl font-display font-bold text-slate-800">Book a Tour</h2>
          <button 
            onClick={closePopOut}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="prose prose-slate prose-sm mb-8">
            <p>
              Choosing the right nursery is an important decision, and we would love to show you what makes our setting so special. Would you like to see our nursery in person?
            </p>
            <p>
              We would love to welcome you for a tour so you can explore our learning spaces, meet our team, and see what a typical day at our nursery looks like.
            </p>
            <p>
              You can book a viewing to visit us, or if you prefer, you can take a virtual look around our nursery by exploring the tour on our website. Please fill in information below if you would like a tour in person and one of our team members will get back to you as soon as possible.
            </p>
          </div>

          {submitStatus === 'success' ? (
            <div className="bg-nest-50 text-nest-600 p-6 rounded-2xl flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-nest-100 text-nest-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Request Received!</h3>
              <p className="text-sm">Thank you for your interest. One of our team members will get back to you as soon as possible to confirm your tour.</p>
              <button
                onClick={closePopOut}
                className="mt-6 px-6 py-2 bg-nest-500 text-white rounded-xl font-bold hover:bg-nest-600 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
                  There was an error submitting your request. Please try again.
                </div>
              )}

              <div className="space-y-1">
                <label htmlFor="name" className="block text-sm font-bold text-slate-700">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nest-500 focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-bold text-slate-700">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nest-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="contact" className="block text-sm font-bold text-slate-700">Contact number *</label>
                <input 
                  type="tel" 
                  id="contact" 
                  name="contact" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nest-500 focus:border-transparent transition-all"
                  placeholder="Your phone number"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-bold text-slate-700">Preferred type of tour *</label>
                <div className="space-y-2">
                  {[
                    'Online video call (Teams, Zoom or WhatsApp)',
                    'In person',
                    'Open day'
                  ].map((type) => (
                    <label key={type} className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-nest-500 has-[:checked]:bg-nest-50">
                      <input 
                        type="radio" 
                        name="tourType" 
                        value={type} 
                        required 
                        className="w-4 h-4 text-nest-600 focus:ring-nest-500" 
                      />
                      <span className="text-sm font-medium text-slate-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <label className="block text-sm font-bold text-slate-700">Would you like to be part of our marketing list? *</label>
                <div className="flex gap-4">
                  <label className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-nest-500 has-[:checked]:bg-nest-50">
                    <input type="radio" name="marketing" value="yes" required className="w-4 h-4 text-nest-600 focus:ring-nest-500" />
                    <span className="text-sm font-medium text-slate-700">Yes please</span>
                  </label>
                  <label className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-nest-500 has-[:checked]:bg-nest-50">
                    <input type="radio" name="marketing" value="no" required className="w-4 h-4 text-nest-600 focus:ring-nest-500" />
                    <span className="text-sm font-medium text-slate-700">No thanks</span>
                  </label>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-nest-500 hover:bg-nest-600 text-white rounded-xl font-bold transition-colors shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Request...
                    </>
                  ) : (
                    'Request Tour'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
