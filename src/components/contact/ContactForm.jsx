"use client";

import { useState } from "react";
import { Check } from "@/components/ui/icons";

/**
 * Contact form — front-end only. Wire `onSubmit` to an email service,
 * Formspree, or a Next.js route handler / server action when ready.
 */
export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email.";
    if (values.message.trim().length < 10) next.message = "Please add a little more detail.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // TODO: send `values` to your endpoint here.
    setSent(true);
    setValues({ name: "", email: "", message: "" });
  };

  if (sent) {
    return (
      <div className="border border-ink/15 bg-ivory-deep p-8 text-center">
        <Check className="mx-auto h-8 w-8 text-gold" />
        <h3 className="mt-3 font-serif text-2xl">Message received</h3>
        <p className="mt-2 text-sm text-ink-muted">
          Thank you — we reply within one business day. For anything urgent, message us on WhatsApp.
        </p>
        <button onClick={() => setSent(false)} className="btn-outline mt-6">
          Send another
        </button>
      </div>
    );
  }

  const field =
    "w-full border border-ink/25 bg-transparent px-4 py-3 text-sm focus:border-ink focus:outline-none";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="c-name" className="kicker mb-2 block">
          Name <span className="text-gold">*</span>
        </label>
        <input
          id="c-name"
          value={values.name}
          onChange={set("name")}
          autoComplete="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "c-name-err" : undefined}
          className={field}
        />
        {errors.name && (
          <p id="c-name-err" role="alert" className="mt-1.5 text-xs text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="c-email" className="kicker mb-2 block">
          Email <span className="text-gold">*</span>
        </label>
        <input
          id="c-email"
          type="email"
          value={values.email}
          onChange={set("email")}
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "c-email-err" : undefined}
          className={field}
        />
        {errors.email && (
          <p id="c-email-err" role="alert" className="mt-1.5 text-xs text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="c-message" className="kicker mb-2 block">
          Message <span className="text-gold">*</span>
        </label>
        <textarea
          id="c-message"
          rows={5}
          value={values.message}
          onChange={set("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "c-message-err" : undefined}
          className={`${field} resize-y`}
        />
        {errors.message && (
          <p id="c-message-err" role="alert" className="mt-1.5 text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send message
      </button>
    </form>
  );
}
