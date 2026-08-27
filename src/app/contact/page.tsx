"use client";

import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-dark-900 mb-4">Get in Touch</h1>
        <p className="text-dark-600 max-w-2xl mx-auto">Have a question or feedback? We&apos;d love to hear from you.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {submitted ? (
          <div className="lg:col-span-2 text-center py-20">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-dark-900 mb-2">Message Sent!</h2>
            <p className="text-dark-600">We&apos;ll get back to you within 24 hours.</p>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-700 mb-1">Full Name</label>
                <input type="text" id="name" className="input" placeholder="John Doe" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-700 mb-1">Email Address</label>
                <input type="email" id="email" className="input" placeholder="john@example.com" required />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dark-700 mb-1">Subject</label>
                <input type="text" id="subject" className="input" placeholder="How can we help?" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-700 mb-1">Message</label>
                <textarea id="message" rows={5} className="input resize-none" placeholder="Tell us more..." required />
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>

            <div className="space-y-8">
              <div className="bg-dark-50 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4">Contact Info</h3>
                <div className="space-y-4">
                  {[
                    { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", label: "123 Commerce Street, New York, NY 10001" },
                    { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "support@shopverse.com" },
                    { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", label: "+91 9989115552" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                      <span className="text-dark-600">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-dark-50 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Business Hours</h3>
                <div className="space-y-1 text-dark-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
