"use client";

import { useRef, useState } from "react";
import { FORM_ENDPOINT, SITE, waLink } from "@/lib/site";

/**
 * Premium contact form. Submits over FormSubmit.co's AJAX endpoint (no backend
 * required) so the page never navigates away; the relayed mail lands in
 * {@link SITE.supportEmail}. Includes a honeypot, inline validation, and
 * loading / success / error states.
 *
 * NOTE: FormSubmit sends a one-time activation email to the support inbox on
 * the first real submission — click its link once and every later message
 * flows straight through.
 */

type Status = "idle" | "sending" | "success" | "error";
type Field = "name" | "phone" | "email" | "business" | "message";
type Errors = Partial<Record<Field, string>>;

const BUSINESS_OPTIONS = [
  "Distributor",
  "Wholesaler",
  "Retailer / Kirana",
  "Pharma",
  "Other",
];

export default function ContactForm({
  subjectPrefix = "New Vrikso enquiry",
}: {
  subjectPrefix?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [name, setName] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  function validate(data: Record<Field, string>): Errors {
    const next: Errors = {};
    if (!data.name.trim()) next.name = "Please tell us your name.";
    const phone = data.phone.replace(/[^\d]/g, "");
    if (!data.phone.trim()) next.phone = "A phone number lets us call you back.";
    else if (phone.length < 10) next.phone = "That doesn't look like a full number.";
    if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      next.email = "Please check the email address.";
    if (!data.message.trim()) next.message = "Tell us a little about your business.";
    return next;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // honeypot — bots fill hidden fields; humans don't.
    if ((fd.get("_honey") as string)?.trim()) {
      setStatus("success"); // silently swallow
      return;
    }

    const data: Record<Field, string> = {
      name: (fd.get("name") as string) ?? "",
      phone: (fd.get("phone") as string) ?? "",
      email: (fd.get("email") as string) ?? "",
      business: (fd.get("business") as string) ?? "",
      message: (fd.get("message") as string) ?? "",
    };

    const found = validate(data);
    if (Object.keys(found).length) {
      setErrors(found);
      form.querySelector<HTMLElement>(`[data-field="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }

    setErrors({});
    setName(data.name.trim());
    setStatus("sending");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Name: data.name,
          Phone: data.phone,
          Email: data.email || "(not provided)",
          Business: data.business || "(not specified)",
          Message: data.message,
          _subject: `${subjectPrefix} — ${data.name}`,
          _template: "table",
          _captcha: "false",
          // reply straight to the sender when they left an email
          ...(data.email ? { _replyto: data.email } : {}),
        }),
      });
      // FormSubmit replies HTTP 200 even on rejection, so trust only the
      // `success` flag in the body — never res.ok.
      const json: { success?: boolean | string; message?: string } = await res
        .json()
        .catch(() => ({}));
      const ok = json.success === true || json.success === "true";
      if (!ok) throw new Error(json.message || "Submission rejected");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <SuccessPanel name={name} onReset={() => setStatus("idle")} />;
  }

  const sending = status === "sending";

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="relative">
      {/* honeypot — visually hidden, off the tab order */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          field="name"
          label="Your name"
          required
          placeholder="Ramesh Traders"
          autoComplete="name"
          error={errors.name}
          onClear={() => clearError(setErrors, "name")}
        />
        <Input
          field="phone"
          label="Phone / WhatsApp"
          required
          type="tel"
          inputMode="tel"
          placeholder="+91 98765 43210"
          autoComplete="tel"
          error={errors.phone}
          onClear={() => clearError(setErrors, "phone")}
        />
        <Input
          field="email"
          label="Email"
          optional
          type="email"
          inputMode="email"
          placeholder="you@business.com"
          autoComplete="email"
          error={errors.email}
          onClear={() => clearError(setErrors, "email")}
        />
        <div>
          <label htmlFor="cf-business" className="field-label">
            What do you run?
          </label>
          <select
            id="cf-business"
            name="business"
            data-field="business"
            defaultValue=""
            className="field-input field-select"
          >
            <option value="" disabled>
              Choose your trade…
            </option>
            {BUSINESS_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="cf-message" className="field-label">
          How can we help? <span className="field-req">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          data-field="message"
          placeholder="Tell us about your business — number of shops, salesmen, what software you use today…"
          className={`field-input ${errors.message ? "is-invalid" : ""}`}
          onChange={() => clearError(setErrors, "message")}
        />
        {errors.message && (
          <p className="field-error" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="mt-5 flex items-start gap-3 rounded-[var(--radius-ctrl)] border border-[#e9c4c0] bg-[#fbf0ef] px-4 py-3 text-sm text-[#a33329]"
        >
          <span aria-hidden className="mt-0.5">⚠</span>
          <span>
            Something went wrong sending that. Please try again, or reach us on{" "}
            <a href={waLink("Hi! I tried the contact form on vrikso.com.")} className="font-semibold underline">
              WhatsApp
            </a>{" "}
            /{" "}
            <a href={`mailto:${SITE.supportEmail}`} className="font-semibold underline">
              email
            </a>
            .
          </span>
        </div>
      )}

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" disabled={sending} className="btn-primary group disabled:opacity-70">
          {sending ? (
            <>
              <Spinner />
              Sending…
            </>
          ) : (
            <>
              Send message
              <Arrow className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
        </button>
        <p className="text-xs leading-relaxed text-ink-faint">
          A real person replies, usually within the hour. <br className="hidden sm:block" />
          No spam, ever.
        </p>
      </div>
    </form>
  );
}

function clearError(setErrors: React.Dispatch<React.SetStateAction<Errors>>, field: Field) {
  setErrors((prev) => {
    if (!prev[field]) return prev;
    const next = { ...prev };
    delete next[field];
    return next;
  });
}

function Input({
  field,
  label,
  required,
  optional,
  error,
  onClear,
  ...rest
}: {
  field: Field;
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  onClear: () => void;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={`cf-${field}`} className="field-label">
        {label} {required && <span className="field-req">*</span>}
        {optional && <span className="font-normal text-ink-faint">(optional)</span>}
      </label>
      <input
        id={`cf-${field}`}
        name={field}
        data-field={field}
        aria-invalid={!!error}
        className={`field-input ${error ? "is-invalid" : ""}`}
        onChange={onClear}
        {...rest}
      />
      {error && (
        <p className="field-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function SuccessPanel({ name, onReset }: { name: string; onReset: () => void }) {
  return (
    <div className="flex flex-col items-center py-6 text-center">
      <div className="check-pop grid h-20 w-20 place-items-center rounded-full bg-lilac ring-1 ring-lilac-line">
        <svg width="40" height="40" viewBox="0 0 52 52" fill="none" aria-hidden>
          <circle
            cx="26"
            cy="26"
            r="24"
            stroke="var(--violet)"
            strokeWidth="2.5"
            className="ring-draw"
          />
          <path
            d="M16 27.5 23 34.5 37 19"
            stroke="var(--violet)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tick-draw"
          />
        </svg>
      </div>
      <h3 className="font-display mt-6 text-2xl font-medium">
        Thank you{name ? `, ${name.split(" ")[0]}` : ""}!
      </h3>
      <p className="mt-2 max-w-sm text-[0.95rem] leading-relaxed text-ink-soft">
        Your message is on its way to our team. A real person will reply — usually
        within the hour. Need it faster?
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <a href={waLink("Hi! I just sent an enquiry on vrikso.com.")} className="btn-primary">
          Chat on WhatsApp
        </a>
        <button
          type="button"
          onClick={onReset}
          className="text-sm font-semibold text-violet-deep hover:underline"
        >
          Send another message
        </button>
      </div>
    </div>
  );
}

function Spinner() {
  return (
    <svg className="mr-2 animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.3" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path
        d="M3 8h9M8.5 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
