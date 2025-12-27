'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { saveContact } from '@/app/contact/actions';
import Container from '@/components/Container';
import { Phone, Mail, MapPin } from 'lucide-react';
import Button from '@/components/Button';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Submitting...' : 'Send Message'}
    </Button>
  );
}

export default function ContactPage() {
  const [state, formAction] = useFormState(saveContact, null)

  return (
    <div className="overflow-hidden py-20 md:py-32 bg-white">
      <section className="relative pt-28 pb-24 md:pt-40 md:pb-32 bg-gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight animate-fade-in-up">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-10 max-w-3xl mx-auto leading-relaxed font-inter animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              We&apos;re here to help. Get in touch with us to discuss your IT needs.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="animate-fade-in-up">
              <h2 className="font-display font-bold text-4xl text-neutral-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-neutral-600 font-inter leading-relaxed mb-8">
                Have a question or need a quote? Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
              <form action={formAction}>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 font-inter mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="block w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 font-inter"
                      required
                    />
                    {state?.errors?.name && <p className="text-sm text-red-500 mt-2">{state.errors.name[0]}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 font-inter mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="block w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 font-inter"
                      required
                    />
                    {state?.errors?.email && <p className="text-sm text-red-500 mt-2">{state.errors.email[0]}</p>}
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-neutral-700 font-inter mb-2">Company (Optional)</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="block w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 font-inter"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 font-inter mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="block w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 font-inter"
                      required
                    ></textarea>
                    {state?.errors?.message && <p className="text-sm text-red-500 mt-2">{state.errors.message[0]}</p>}
                  </div>
                </div>
                <div className="mt-6">
                  <SubmitButton />
                </div>
                {state?.message && <p className="text-sm text-green-500 mt-4">{state.message}</p>}
              </form>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h2 className="font-display font-bold text-4xl text-neutral-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 font-inter">Phone</h3>
                    <p className="text-neutral-600 font-inter">(206) 555-1234</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 font-inter">Email</h3>
                    <p className="text-neutral-600 font-inter">hello@w1it.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 font-inter">Address</h3>
                    <p className="text-neutral-600 font-inter">1234 First Ave, Seattle, WA 98101</p>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    title="Google Maps location of Pike Place Market in Seattle"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.626573523732!2d-122.340072!3d47.609714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab2d3f0f0f3%3A0x8a3d4e4b5e7d4d4f!2sPike%20Place%20Market!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
