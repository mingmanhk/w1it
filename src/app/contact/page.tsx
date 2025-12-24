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
    formData.append('access_key', '0a8f22a3-c584-4df6-9086-72255fabdcf9');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult('Form Submitted Successfully');
      event.currentTarget.reset();
    } else {
      setResult('Error');
    }
  };

  return (
    <Container>
      <div className="py-20 md:py-32">
        <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-gray-medium max-w-2xl mx-auto mb-8 font-inter text-center">
          We&apos;d love to hear from you. Drop us a line and we&apos;ll get back to you as soon as
          possible.
        </p>
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
