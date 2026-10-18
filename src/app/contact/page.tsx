'use client';

import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Button from '@/components/Button';
import Hero from '@/components/Hero';
import { useLanguage } from '@/components/LanguageProvider';

/**
 * W1IT Contact Page - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const { dict } = useLanguage();
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus('submitting');

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      console.error('Contact form: NEXT_PUBLIC_WEB3FORMS_KEY is not configured');
      setStatus('error');
      return;
    }

    // Web3Forms is designed to be called directly from the browser (its access
    // key is meant to be public/client-safe). Server-to-server proxying of this
    // call is explicitly unsupported on non-Pro plans and was the root cause of
    // a prior outage, so submit straight to Web3Forms instead of our own API route.
    const payload = new FormData();
    payload.set('access_key', accessKey);
    payload.set('subject', 'New inquiry from w1it.com');
    payload.set('from_name', 'W1IT Website');
    payload.set('name', String(formData.get('name') ?? ''));
    payload.set('email', String(formData.get('email') ?? ''));
    const company = formData.get('company');
    if (company) payload.set('company', String(company));
    payload.set('message', String(formData.get('message') ?? ''));

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: payload,
      });
      const data = await response.json().catch(() => null);

      if (response.ok && data?.success !== false) {
        setStatus('success');
        form.reset();
      } else {
        console.error('Web3Forms rejected submission:', data);
        setStatus('error');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setStatus('error');
    }
  }

  return (
    <div className="bg-surface-0">
        <Hero
            title={dict.contact.hero.title}
            subtitle={dict.contact.hero.subtitle}
            imageAlt="Contact W1IT"
        />

      {/* Section / ContactForm */}
      <section className="py-16 bg-surface-1">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-[28px] font-bold text-fg mb-6">{dict.contact.form.heading}</h2>
              <p className="text-[16px] text-fg-muted leading-relaxed mb-8">
                {dict.contact.form.intro}
              </p>
              <form onSubmit={handleSubmit} className="bg-surface-0 p-8">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[16px] font-bold text-fg mb-2">{dict.contact.form.name}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      minLength={2}
                      className="block w-full px-4 py-3 border border-line focus:ring-[#3A81F7] focus:border-[#3A81F7] text-[16px] text-fg"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[16px] font-bold text-fg mb-2">{dict.contact.form.email}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="block w-full px-4 py-3 border border-line focus:ring-[#3A81F7] focus:border-[#3A81F7] text-[16px] text-fg"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-[16px] font-bold text-fg mb-2">{dict.contact.form.company}</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="block w-full px-4 py-3 border border-line focus:ring-[#3A81F7] focus:border-[#3A81F7] text-[16px] text-fg"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[16px] font-bold text-fg mb-2">{dict.contact.form.message}</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      minLength={10}
                      className="block w-full px-4 py-3 border border-line focus:ring-[#3A81F7] focus:border-[#3A81F7] text-[16px] text-fg"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="mt-6">
                  <Button type="submit" disabled={status === 'submitting'} variant="primary" className="w-full">
                    {status === 'submitting' ? dict.contact.form.submitting : dict.contact.form.submit}
                  </Button>
                </div>
                {status === 'success' && <p className="text-[16px] text-[#00A878] mt-4">{dict.contact.form.success}</p>}
                {status === 'error' && <p className="text-[16px] text-red-500 mt-4">{dict.contact.form.error}</p>}
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-[28px] font-bold text-fg mb-6">{dict.contact.info.heading}</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 bg-surface-0 p-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#3A81F7] flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-fg mb-2">{dict.contact.info.phoneLabel}</h3>
                    <p className="text-[16px] text-fg-muted">(832) 472-7991</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-surface-0 p-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#3A81F7] flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-fg mb-2">{dict.contact.info.emailLabel}</h3>
                    <p className="text-[16px] text-fg-muted">contact@w1it.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-surface-0 p-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#3A81F7] flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-fg mb-2">{dict.contact.info.serviceAreaLabel}</h3>
                    <p className="text-[16px] text-fg-muted">{dict.contact.info.serviceAreaValue}</p>
                  </div>
                </div>
              </div>
              <div className="bg-surface-0 p-8 border-2 border-[#3A81F7]">
                <h3 className="text-[20px] font-semibold text-fg mb-3">{dict.contact.info.partnerHeading}</h3>
                <p className="text-[16px] text-fg-muted mb-4">
                  {dict.contact.info.partnerBody}
                </p>
                <p className="text-[14px] text-fg-muted">
                  <strong className="text-fg">{dict.contact.info.serviceAreasLabel}</strong> {dict.contact.info.serviceAreasValue}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
