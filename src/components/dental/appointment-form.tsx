"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { CircleAlert, Info, Phone, Send } from "lucide-react";
import { clinic } from "@/data/clinic";
import { cn } from "@/lib/utils";

type Values = {
  name: string;
  phone: string;
  day: string;
  time: string;
  reason: string;
  consent: boolean;
};

type Errors = Partial<Record<"name" | "phone" | "consent", string>>;

const empty: Values = { name: "", phone: "", day: "", time: "", reason: "", consent: false };

const reasons = [
  "Check-up or consultation",
  "Tooth pain or sensitivity",
  "Teeth cleaning",
  "Braces consultation",
  "Cosmetic or whitening consultation",
  "Something else",
];

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your full name.";
  const digits = values.phone.replace(/\D/g, "").replace(/^(91|0)(?=\d{10}$)/, "");
  if (!values.phone.trim()) errors.phone = "Please enter your phone number.";
  else if (!/^[6-9]\d{9}$/.test(digits)) errors.phone = "Please enter a valid 10-digit Indian mobile number.";
  if (!values.consent) errors.consent = "Please confirm you agree to be contacted about your request.";
  return errors;
}

/**
 * Appointment request UI. Phase 1 is a prototype: nothing is sent or stored,
 * and the form says so before and after submitting. See docs/pages/contact.md.
 */
export function AppointmentForm() {
  const id = useId();
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [demoComplete, setDemoComplete] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  const update = <K extends keyof Values>(key: K, value: Values[K]) => {
    const next = { ...values, [key]: value };
    setValues(next);
    if (submitted) setErrors(validate(next));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    // Demo only: discard the details instead of sending them anywhere.
    setValues(empty);
    setSubmitted(false);
    setDemoComplete(true);
    requestAnimationFrame(() => statusRef.current?.focus());
  };

  const errorList = Object.entries(errors) as [keyof Errors, string][];
  const fieldId = (name: string) => `${id}-${name}`;
  const errorId = (name: string) => `${id}-${name}-error`;

  return (
    <div className="rounded-(--radius-card) border border-border bg-surface p-6 shadow-soft sm:p-8">
      {!clinic.appointmentFormConnected && (
        <p className="flex gap-3 rounded-xl bg-warning-bg p-4 text-[0.9375rem] text-warning">
          <Info aria-hidden className="mt-0.5 size-5 shrink-0" />
          <span>
            <strong className="font-semibold">Demo form: no request is sent.</strong> To book, please call{" "}
            <a href={clinic.phone.href} className="font-semibold underline underline-offset-4">
              {clinic.phone.display}
            </a>
            .
          </span>
        </p>
      )}

      {demoComplete && (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="status"
          className="mt-5 rounded-xl border border-primary/30 bg-mint p-4 text-[0.9375rem] text-primary-deep"
        >
          <p className="font-semibold">This is a demo. Your details were not sent.</p>
          <p className="mt-1">
            Please call{" "}
            <a href={clinic.phone.href} className="font-semibold underline underline-offset-4">
              {clinic.phone.display}
            </a>{" "}
            to book your appointment.
          </p>
        </div>
      )}

      {errorList.length > 0 && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          aria-labelledby={`${id}-summary-title`}
          className="mt-5 rounded-xl border border-error/30 bg-error-bg p-4 text-[0.9375rem] text-error"
        >
          <p id={`${id}-summary-title`} className="flex items-center gap-2 font-semibold">
            <CircleAlert aria-hidden className="size-5" />
            Please check {errorList.length === 1 ? "1 field" : `${errorList.length} fields`}:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-9">
            {errorList.map(([name, message]) => (
              <li key={name}>
                <a href={`#${fieldId(name)}`} className="underline underline-offset-4">
                  {message}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <form noValidate onSubmit={onSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label="Full name" required htmlFor={fieldId("name")} error={errors.name} errorId={errorId("name")}>
          <input
            id={fieldId("name")}
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? errorId("name") : undefined}
            className={inputClass(Boolean(errors.name))}
          />
        </Field>

        <Field
          label="Phone number"
          required
          htmlFor={fieldId("phone")}
          hint="10-digit mobile number"
          hintId={`${id}-phone-hint`}
          error={errors.phone}
          errorId={errorId("phone")}
        >
          <input
            id={fieldId("phone")}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={cn(`${id}-phone-hint`, errors.phone && errorId("phone"))}
            className={inputClass(Boolean(errors.phone))}
          />
        </Field>

        <Field label="Preferred day" htmlFor={fieldId("day")}>
          <input
            id={fieldId("day")}
            name="day"
            type="date"
            value={values.day}
            onChange={(e) => update("day", e.target.value)}
            className={inputClass(false)}
          />
        </Field>

        <Field label="Preferred time" htmlFor={fieldId("time")}>
          <select
            id={fieldId("time")}
            name="time"
            value={values.time}
            onChange={(e) => update("time", e.target.value)}
            className={inputClass(false)}
          >
            <option value="">No preference</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
        </Field>

        <Field label="Reason for visit" htmlFor={fieldId("reason")} className="sm:col-span-2">
          <select
            id={fieldId("reason")}
            name="reason"
            value={values.reason}
            onChange={(e) => update("reason", e.target.value)}
            className={inputClass(false)}
          >
            <option value="">Prefer to discuss on the phone</option>
            {reasons.map((reason) => (
              <option key={reason}>{reason}</option>
            ))}
          </select>
        </Field>

        <div className="sm:col-span-2">
          <div className="flex gap-3">
            <input
              id={fieldId("consent")}
              name="consent"
              type="checkbox"
              checked={values.consent}
              onChange={(e) => update("consent", e.target.checked)}
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? errorId("consent") : undefined}
              className="mt-1 size-5 shrink-0 accent-primary"
            />
            <label htmlFor={fieldId("consent")} className="text-[0.9375rem] leading-relaxed text-ink">
              I agree to be contacted by the clinic about this request. Read our{" "}
              <Link href="/privacy-policy" className="font-semibold text-primary-deep underline underline-offset-4">
                privacy policy
              </Link>
              . <span className="text-muted">(required)</span>
            </label>
          </div>
          {errors.consent && <FieldError id={errorId("consent")} message={errors.consent} />}
          <p className="mt-3 text-sm text-muted">Please don&apos;t include detailed medical information in this form.</p>
        </div>

        <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
          <button
            type="submit"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-(--radius-button) bg-primary px-6 font-semibold text-white shadow-soft transition-colors hover:bg-primary-deep active:scale-[0.98]"
          >
            <Send aria-hidden className="size-4" />
            {clinic.appointmentFormConnected ? "Send request" : "Try the demo request"}
          </button>
          <a
            href={clinic.phone.href}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-(--radius-button) border border-primary/40 px-6 font-semibold text-primary-deep transition-colors hover:bg-mint"
          >
            <Phone aria-hidden className="size-4" />
            Call to book
          </a>
        </div>
      </form>
    </div>
  );
}

function inputClass(invalid: boolean) {
  return cn(
    "mt-2 block min-h-12 w-full rounded-xl border bg-surface px-4 text-base text-ink transition-colors",
    "focus-visible:border-primary focus-visible:outline-2 focus-visible:outline-offset-0",
    invalid ? "border-error" : "border-border hover:border-primary/40",
  );
}

function Field({
  label,
  htmlFor,
  required,
  hint,
  hintId,
  error,
  errorId,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  hint?: string;
  hintId?: string;
  error?: string;
  errorId?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="text-[0.9375rem] font-semibold text-ink">
        {label} {required ? <span className="font-normal text-muted">(required)</span> : <span className="font-normal text-muted">(optional)</span>}
      </label>
      {hint && (
        <p id={hintId} className="mt-0.5 text-sm text-muted">
          {hint}
        </p>
      )}
      {children}
      {error && errorId && <FieldError id={errorId} message={error} />}
    </div>
  );
}

function FieldError({ id, message }: { id: string; message: string }) {
  return (
    <p id={id} className="mt-2 flex items-center gap-1.5 text-sm font-medium text-error">
      <CircleAlert aria-hidden className="size-4 shrink-0" />
      {message}
    </p>
  );
}
