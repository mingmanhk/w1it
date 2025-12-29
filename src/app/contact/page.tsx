'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { saveContact } from '@/app/contact/actions';
import { Phone, Mail, MapPin } from 'lucide-react';
import Button from '@/components/Button';
import Image from 'next/image';

/**
 * W1IT Contact Page - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} variant="primary" className="w-full">
      {pending ? 'Submitting...' : 'Send Message'}
    </Button>
  );
}

export default function ContactPage() {
  const [state, formAction] = useFormState(saveContact, null)

  return (
    <div className="bg-[#FFFFFF]">
      {/* Section / Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/optimized/hero-graphic.webp"
            alt="Contact W1IT Solutions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/60 to-[#050816]/80" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-[42px] font-bold text-white mb-6">
              Ready to Get Started?
            </h1>
            <p className="text-[17px] text-white/90">
              Contact us today and let&apos;s build your success story together.
            </p>
          </div>
        </div>
      </section>

      {/* Section / ContactForm */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-[28px] font-bold text-[#050816] mb-6">Get in Touch</h2>
              <p className="text-[16px] text-[#4A4A4A] leading-relaxed mb-8">
                Have questions about our services? Need help with a tech challenge? Fill out the form below and we&apos;ll respond within 24 hours.
              </p>
              <form action={formAction} className="bg-[#FFFFFF] p-8">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[16px] font-bold text-[#050816] mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="block w-full px-4 py-3 border border-[#D9D9D9] focus:ring-[#3A81F7] focus:border-[#3A81F7] text-[16px] text-[#050816]"
                      required
                    />
                    {state?.errors?.name && <p className="text-[16px] text-red-500 mt-2">{state.errors.name[0]}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[16px] font-bold text-[#050816] mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="block w-full px-4 py-3 border border-[#D9D9D9] focus:ring-[#3A81F7] focus:border-[#3A81F7] text-[16px] text-[#050816]"
                      required
                    />
                    {state?.errors?.email && <p className="text-[16px] text-red-500 mt-2">{state.errors.email[0]}</p>}
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-[16px] font-bold text-[#050816] mb-2">Company (Optional)</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="block w-full px-4 py-3 border border-[#D9D9D9] focus:ring-[#3A81F7] focus:border-[#3A81F7] text-[16px] text-[#050816]"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[16px] font-bold text-[#050816] mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="block w-full px-4 py-3 border border-[#D9D9D9] focus:ring-[#3A81F7] focus:border-[#3A81F7] text-[16px] text-[#050816]"
                      required
                    ></textarea>
                    {state?.errors?.message && <p className="text-[16px] text-red-500 mt-2">{state.errors.message[0]}</p>}
                  </div>
                </div>
                <div className="mt-6">
                  <SubmitButton />
                </div>
                {state?.message && <p className="text-[16px] text-[#00A878] mt-4">{state.message}</p>}
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-[28px] font-bold text-[#050816] mb-6">Contact Information</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 bg-[#FFFFFF] p-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#3A81F7] flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-[#050816] mb-2">Phone</h3>
                    <p className="text-[16px] text-[#4A4A4A]">(832) 472-7991</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-[#FFFFFF] p-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#3A81F7] flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-[#050816] mb-2">Email</h3>
                    <p className="text-[16px] text-[#4A4A4A]">contact@w1it.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-[#FFFFFF] p-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#3A81F7] flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-[#050816] mb-2">Service Area</h3>
                    <p className="text-[16px] text-[#4A4A4A]">Seattle Metropolitan Area & Remote Nationwide</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#FFFFFF] p-8 border-2 border-[#3A81F7]">
                <h3 className="text-[20px] font-semibold text-[#050816] mb-3">Your Local IT Partner</h3>
                <p className="text-[16px] text-[#4A4A4A] mb-4">
                  Based in Bellevue, WA, we proudly serve small businesses throughout the Seattle Metro Area with on-site support and remote assistance nationwide.
                </p>
                <p className="text-[14px] text-[#4A4A4A]">
                  <strong className="text-[#050816]">Service Areas:</strong> Bellevue, Seattle, Redmond, Kirkland, Issaquah, Sammamish, and surrounding communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
