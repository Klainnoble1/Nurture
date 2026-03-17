'use client';

import { useState } from 'react';

export default function JoinNurseryPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [hasMultipleChildren, setHasMultipleChildren] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      parent_name: formData.get('parent_name'),
      parent_dob: formData.get('parent_dob'),
      mobile: formData.get('mobile'),
      email: formData.get('email'),
      child_name: formData.get('child_name'),
      child_dob: formData.get('child_dob'),
      child_age: formData.get('child_age'),
      start_date: formData.get('start_date'),
      has_multiple_children: hasMultipleChildren,
      additional_children: hasMultipleChildren ? [{
        child_name: formData.get('child2_name'),
        child_dob: formData.get('child2_dob'),
        child_age: formData.get('child2_age'),
        start_date: formData.get('child2_start_date'),
      }] : [],
      formType: 'join',
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
        setHasMultipleChildren(false);
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
    <div className="min-h-screen bg-nest-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-joy-100 text-joy-700 font-bold text-sm tracking-wide">
            <span>✨</span>
            <span>APPLY TODAY</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-tight tracking-tight">
            Join our <span className="text-nest-600">nursery!</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Take the first step to giving your child a nurturing, educational, and fun start by completing our registration form.
          </p>
        </div>

        <div className="bg-white p-8 md:p-14 rounded-[3rem] shadow-2xl border-2 border-white/50 relative">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <div className="w-32 h-32 rounded-full border-[12px] border-joy-500" />
          </div>

          {submitStatus === 'success' ? (
            <div className="text-center py-16 space-y-6">
              <div className="w-24 h-24 bg-joy-100 text-joy-600 rounded-full flex items-center justify-center mx-auto text-5xl shadow-inner">
                🌟
              </div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900">Application Received!</h2>
              <p className="text-slate-600 max-w-lg mx-auto text-lg leading-relaxed">
                Thank you for choosing The Nurture Nest. We have received your application and our team will be in touch with you shortly to discuss the next steps.
              </p>
              <button 
                onClick={() => setSubmitStatus('idle')}
                className="mt-8 px-10 py-4 bg-nest-50 text-nest-700 font-bold rounded-2xl hover:bg-nest-100 transition-colors"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
              {submitStatus === 'error' && (
                <div className="p-5 bg-red-50 text-red-700 rounded-2xl text-sm font-medium border border-red-100 flex items-center gap-3">
                  <span className="text-xl">⚠️</span>
                  There was an error submitting your form. Please check your connection and try again.
                </div>
              )}

              {/* Parent Details Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-display font-bold text-slate-800 border-b-2 border-slate-100 pb-4">
                  Parent/Carer Details
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="parent_name" className="block text-sm font-bold text-slate-700">Parent's Full Name *</label>
                    <input type="text" id="parent_name" name="parent_name" required className="form-input" placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="parent_dob" className="block text-sm font-bold text-slate-700">Date of Birth *</label>
                    <input type="date" id="parent_dob" name="parent_dob" required className="form-input" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="mobile" className="block text-sm font-bold text-slate-700">Mobile Number *</label>
                    <input type="tel" id="mobile" name="mobile" required className="form-input" placeholder="Your mobile number" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700">Email Address *</label>
                    <input type="email" id="email" name="email" required className="form-input" placeholder="your.email@example.com" />
                  </div>
                </div>
              </div>

              {/* Child Details Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-display font-bold text-slate-800 border-b-2 border-slate-100 pb-4">
                  Child Details
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2 lg:col-span-2">
                    <label htmlFor="child_name" className="block text-sm font-bold text-slate-700">Name of Child *</label>
                    <input type="text" id="child_name" name="child_name" required className="form-input" placeholder="Child's full name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="child_dob" className="block text-sm font-bold text-slate-700">Date of Birth of Child *</label>
                    <input type="date" id="child_dob" name="child_dob" required className="form-input" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="child_age" className="block text-sm font-bold text-slate-700">Child's Age *</label>
                    <input type="text" id="child_age" name="child_age" required className="form-input" placeholder="e.g. 2 years, 3 months" />
                  </div>
                  <div className="space-y-2 lg:col-span-2">
                    <label htmlFor="start_date" className="block text-sm font-bold text-slate-700">When would you like them to start? *</label>
                    <input type="text" id="start_date" name="start_date" required className="form-input" placeholder="e.g. September 2026 or Immediate" />
                  </div>
                </div>
              </div>

              {/* Multiple Children Check */}
              <div className="space-y-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <label className="block text-base font-bold text-slate-800">Do you have more than 1 child you wish to register? *</label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input 
                        type="radio" 
                        name="multiple_children" 
                        value="yes" 
                        required 
                        onChange={() => setHasMultipleChildren(true)}
                        className="peer sr-only" 
                      />
                      <div className="w-6 h-6 rounded-full border-2 border-slate-300 peer-checked:border-nest-500 peer-checked:bg-white transition-all group-hover:border-nest-400"></div>
                      <div className="absolute w-3 h-3 rounded-full bg-nest-500 scale-0 peer-checked:scale-100 transition-transform"></div>
                    </div>
                    <span className="font-bold text-slate-700 group-hover:text-nest-600 transition-colors">Yes</span>
                  </label>
                  
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input 
                        type="radio" 
                        name="multiple_children" 
                        value="no" 
                        required 
                        onChange={() => setHasMultipleChildren(false)}
                        className="peer sr-only" 
                      />
                      <div className="w-6 h-6 rounded-full border-2 border-slate-300 peer-checked:border-nest-500 peer-checked:bg-white transition-all group-hover:border-nest-400"></div>
                      <div className="absolute w-3 h-3 rounded-full bg-nest-500 scale-0 peer-checked:scale-100 transition-transform"></div>
                    </div>
                    <span className="font-bold text-slate-700 group-hover:text-nest-600 transition-colors">No</span>
                  </label>
                </div>
              </div>

              {/* Additional Child Conditional Section */}
              {hasMultipleChildren && (
                <div className="space-y-6 pt-6 animate-fade-in border-t-2 border-dashed border-nest-200">
                  <h3 className="text-xl font-display font-bold text-nest-700 flex items-center gap-2">
                    <span>👶</span> Second Child Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 bg-nest-50/50 p-6 rounded-3xl border border-nest-100">
                    <div className="space-y-2 lg:col-span-2">
                      <label htmlFor="child2_name" className="block text-sm font-bold text-slate-700">Name of Second Child *</label>
                      <input type="text" id="child2_name" name="child2_name" required={hasMultipleChildren} className="form-input bg-white" placeholder="Child's full name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="child2_dob" className="block text-sm font-bold text-slate-700">Date of Birth *</label>
                      <input type="date" id="child2_dob" name="child2_dob" required={hasMultipleChildren} className="form-input bg-white" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="child2_age" className="block text-sm font-bold text-slate-700">Child's Age *</label>
                      <input type="text" id="child2_age" name="child2_age" required={hasMultipleChildren} className="form-input bg-white" placeholder="e.g. 1 year, 2 months" />
                    </div>
                    <div className="space-y-2 lg:col-span-2">
                      <label htmlFor="child2_start_date" className="block text-sm font-bold text-slate-700">When would you like them to start? *</label>
                      <input type="text" id="child2_start_date" name="child2_start_date" required={hasMultipleChildren} className="form-input bg-white" placeholder="e.g. September 2026 or Immediate" />
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-8 flex flex-col items-center">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-12 py-5 bg-nest-500 hover:bg-nest-600 text-white rounded-[2rem] font-bold text-lg transition-all shadow-xl shadow-nest-500/30 hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed flex items-center justify-center min-w-[250px] group"
                >
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <span className="flex items-center gap-2">
                      Submit Application
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  )}
                </button>
                <p className="mt-6 text-sm text-slate-500 flex items-center gap-2 text-center max-w-sm">
                  <span>🔒</span> Your information is secure and will only be used by The Nurture Nest for admissions.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Adding custom styling for inputs within this page component for reusability without polluting global css immediately */}
      <style dangerouslySetInnerHTML={{__html: `
        .form-input {
          width: 100%;
          padding: 1rem 1.25rem;
          border-radius: 1rem;
          border: 2px solid #f1f5f9;
          background-color: #f8fafc;
          transition: all 0.2s;
          outline: none;
        }
        .form-input:focus {
          border-color: #14b8a6;
          background-color: white;
          box-shadow: 0 0 0 4px rgba(20, 184, 166, 0.1);
        }
      `}} />
    </div>
  );
}
