'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1500);
  };

  if (status === 'sent') {
    return (
      <div className="bg-nest-50 border-2 border-nest-100 rounded-3xl p-12 text-center space-y-4 animate-scale-in">
        <div className="w-20 h-20 bg-nest-500 text-white rounded-full flex items-center justify-center mx-auto text-4xl shadow-lg shadow-nest-500/20">
          ✓
        </div>
        <h3 className="text-2xl font-display font-bold text-slate-900">Message Sent!</h3>
        <p className="text-slate-600">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-nest-600 font-bold hover:underline pt-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-bold text-slate-700 ml-1">Full Name</label>
          <input
            required
            type="text"
            className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-nest-500/10 focus:border-nest-500 transition-all placeholder:text-slate-400"
            placeholder="Jane Doe"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-bold text-slate-700 ml-1">Email Address</label>
          <input
            required
            type="email"
            className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-nest-500/10 focus:border-nest-500 transition-all placeholder:text-slate-400"
            placeholder="jane@example.com"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label className="block text-sm font-bold text-slate-700 ml-1">Your Message</label>
        <textarea
          required
          rows={5}
          className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-nest-500/10 focus:border-nest-500 transition-all placeholder:text-slate-400 resize-none"
          placeholder="How can we help you?"
        />
      </div>
      
      <Button 
        type="submit" 
        variant="primary" 
        className="w-full rounded-2xl py-4 shadow-xl shadow-nest-500/20 text-lg group"
        disabled={status === 'sending'}
      >
        <span>{status === 'sending' ? 'Sending...' : 'Send message'}</span>
        <span className="hidden group-hover:inline ml-2 transition-all">→</span>
      </Button>
    </form>
  );
}
