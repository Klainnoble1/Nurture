'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import { submitWebsiteForm } from '@/lib/submitWebsiteForm';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await submitWebsiteForm({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        formType: 'contact',
      });

      form.reset();
      setStatus('sent');
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Unable to send your message right now.'
      );
    }
  };

  if (status === 'sent') {
    return (
      <div className="bg-nest-50 border-2 border-nest-100 rounded-3xl p-12 text-center space-y-4 animate-scale-in">
        <div className="w-20 h-20 bg-nest-500 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold shadow-lg shadow-nest-500/20">
          OK
        </div>
        <h3 className="text-2xl font-display font-bold text-slate-900">Message Sent</h3>
        <p className="text-slate-600">Thank you for reaching out. We will get back to you within 24 hours.</p>
        <button
          onClick={() => {
            setStatus('idle');
            setErrorMessage(null);
          }}
          className="text-nest-600 font-bold hover:underline pt-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {status === 'error' && errorMessage && (
        <div className="rounded-2xl border border-red-100 bg-red-50 px-5 py-4 text-sm font-medium text-red-700">
          {errorMessage}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="contact-name" className="block text-sm font-bold text-slate-700 ml-1">
            Full Name
          </label>
          <input
            id="contact-name"
            name="name"
            required
            type="text"
            className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-nest-500/10 focus:border-nest-500 transition-all placeholder:text-slate-400"
            placeholder="Jane Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="contact-email" className="block text-sm font-bold text-slate-700 ml-1">
            Email Address
          </label>
          <input
            id="contact-email"
            name="email"
            required
            type="email"
            className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-nest-500/10 focus:border-nest-500 transition-all placeholder:text-slate-400"
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-message" className="block text-sm font-bold text-slate-700 ml-1">
          Your Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-nest-500/10 focus:border-nest-500 transition-all placeholder:text-slate-400 resize-none"
          placeholder="How can we help you?"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        className="w-full rounded-2xl py-4 shadow-xl shadow-nest-500/20 text-lg"
        disabled={status === 'sending'}
      >
        <span>{status === 'sending' ? 'Sending...' : 'Send message'}</span>
      </Button>
    </form>
  );
}
