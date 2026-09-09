"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Check } from "@/components/ui/icons";

/**
 * Newsletter signup. This is a front-end-only placeholder — wire the submit
 * handler to Mailchimp / Klaviyo / a form endpoint when ready.
 */
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | done | error

  const onSubmit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    // TODO: POST `email` to your email provider here.
    setStatus("done");
    setEmail("");
  };

  return (
    <section className="border-y border-ink/10 bg-ivory-deep text-ink">
      <div className="container-luxe grid gap-8 py-16 md:grid-cols-2 md:items-center lg:py-20">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-luxe text-gold-light">
            Newsletter
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
            {siteConfig.newsletter.heading}
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
            {siteConfig.newsletter.subheading}
          </p>
        </div>

        <form onSubmit={onSubmit} className="md:justify-self-end md:w-full md:max-w-md">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="newsletter-email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status !== "idle") setStatus("idle");
              }}
              placeholder="Your email address"
              aria-invalid={status === "error"}
              aria-describedby="newsletter-msg"
              className="w-full border border-ink/25 bg-ivory/40 px-4 py-3.5 text-sm text-ink placeholder:text-ink-muted focus:border-gold focus:outline-none"
            />
            <button type="submit" className="btn bg-ink text-ivory hover:bg-ink-soft whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p id="newsletter-msg" aria-live="polite" className="mt-3 min-h-[1.25rem] text-xs">
            {status === "done" && (
              <span className="inline-flex items-center gap-1.5 text-gold-light">
                <Check className="h-3.5 w-3.5" /> You&apos;re on the list. Welcome.
              </span>
            )}
            {status === "error" && (
              <span className="text-red-300">Please enter a valid email address.</span>
            )}
          </p>
        </form>
      </div>
    </section>
  );
}
