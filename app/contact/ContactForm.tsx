"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "./actions";

const initialState: ContactFormState = {};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  if (state.success) {
    return (
      <div className="glass-card p-10 text-center">
        <span className="text-5xl mb-4 block">✅</span>
        <h3 className="text-2xl font-bold text-[#333a3f] mb-3">Message Sent!</h3>
        <p className="text-gray-500">
          Thanks for reaching out. Our team will get back to you within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="glass-card p-8 space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-semibold text-[#333a3f] mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#20a396] focus:border-transparent bg-white"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-semibold text-[#333a3f] mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#20a396] focus:border-transparent bg-white"
          />
        </div>
        <div>
          <label htmlFor="contact-company" className="block text-sm font-semibold text-[#333a3f] mb-2">
            Company Name
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            placeholder="Your company"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#20a396] focus:border-transparent bg-white"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-semibold text-[#333a3f] mb-2">
            Phone Number
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#20a396] focus:border-transparent bg-white"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-sm font-semibold text-[#333a3f] mb-2">
          Subject
        </label>
        <select
          id="contact-subject"
          name="subject"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#20a396] bg-white"
        >
          <option value="">Select a topic...</option>
          <option value="sales">Sales Enquiry</option>
          <option value="vendor">Vendor Registration Help</option>
          <option value="support">Technical Support</option>
          <option value="billing">Billing</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-[#333a3f] mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Tell us how we can help..."
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#20a396] focus:border-transparent bg-white resize-none"
        />
      </div>

      {state.error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
          {state.error}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="btn-teal w-full justify-center py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? (
          <>
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
