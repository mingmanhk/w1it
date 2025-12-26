'use client';

import { useState } from 'react';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';

export default function Contact() {
  const [result, setResult] = useState('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch('/api/contact/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult('Form Submitted Successfully');
        event.currentTarget.reset();
      } else {
        setResult('Error: ' + (data.message || 'Submission failed'));
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setResult('Error: Network or server issue');
    }
  };

  return (
    <Container>
      <div className="py-20 md:py-32">
        <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6 text-center">
          Contact & Availability
        </h1>
        <p className="text-lg md:text-xl text-gray-medium max-w-2xl mx-auto mb-8 font-inter text-center">
          Get in touch for IT consulting, project inquiries, or technical support. I typically respond within 2 hours during business hours.
        </p>

        {/* Availability Information */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 text-center">
              <div className="text-rose mb-3">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-charcoal mb-2">Business Hours</h3>
              <p className="font-inter text-gray-medium">
                Monday - Friday<br />
                9:00 AM - 6:00 PM PST
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-rose mb-3">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-charcoal mb-2">Response Time</h3>
              <p className="font-inter text-gray-medium">
                Within 2 hours during business hours<br />
                24/7 emergency support for clients
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-rose mb-3">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-charcoal mb-2">Consultation Slots</h3>
              <p className="font-inter text-gray-medium">
                Available within 24-48 hours<br />
                Virtual or in-person (Seattle area)
              </p>
            </Card>
          </div>

          <div className="bg-gray-bg rounded-xl p-6 mb-8">
            <h3 className="font-display font-bold text-2xl text-charcoal mb-4">Best Ways to Reach Me</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-display font-semibold text-lg text-charcoal mb-2">For Project Inquiries</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-rose mr-2">•</span>
                    <span className="font-inter text-gray-medium">Use the form below with project details</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-rose mr-2">•</span>
                    <span className="font-inter text-gray-medium">Include timeline and budget if available</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-rose mr-2">•</span>
                    <span className="font-inter text-gray-medium">Attach relevant documents/specifications</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-display font-semibold text-lg text-charcoal mb-2">For Existing Clients</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-rose mr-2">•</span>
                    <span className="font-inter text-gray-medium">Use your dedicated support channel</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-rose mr-2">•</span>
                    <span className="font-inter text-gray-medium">Emergency: Call/text provided number</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-rose mr-2">•</span>
                    <span className="font-inter text-gray-medium">Schedule meetings via calendar link</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Card className="max-w-2xl mx-auto">
          <form onSubmit={onSubmit}>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-charcoal font-inter font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-rose focus:border-rose"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-charcoal font-inter font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-rose focus:border-rose"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-charcoal font-inter font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-rose focus:border-rose"
                  required
                ></textarea>
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
              {result && (
                <p
                  className={`text-center font-inter font-medium ${
                    result === 'Form Submitted Successfully'
                      ? 'text-green-600'
                      : result === 'Error'
                      ? 'text-red-600'
                      : 'text-gray-medium'
                  }`}
                >
                  {result}
                </p>
              )}
            </div>
          </form>
        </Card>
      </div>
    </Container>
  );
}
