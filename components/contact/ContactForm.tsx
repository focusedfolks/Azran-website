"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const INITIAL: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.name.trim()) errors.name = "Enter your full name.";
  if (!values.phone.trim() || values.phone.replace(/\D/g, "").length < 7) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!values.email.trim()) errors.email = "Enter your email address.";
  else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.service) errors.service = "Select a service.";
  if (!values.message.trim()) errors.message = "Enter a message.";

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [statusMessage, setStatusMessage] = useState("");

  const setField = (field: keyof FormState, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      const order: Array<keyof FormState> = [
        "name",
        "phone",
        "email",
        "service",
        "message",
      ];
      const first = order.find((field) => nextErrors[field]);
      if (first) {
        document.getElementById(`contact-${first}`)?.focus();
      }
      return;
    }

    // Requires a Web3Forms access key — get client's email to set this up, or swap for Formspree/EmailJS if preferred.
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      setStatusMessage(
        "The form is not connected yet. Call or WhatsApp us, or email us directly.",
      );
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          botcheck: false,
          subject: "New enquiry from Azran Technical Services website",
          name: values.name.trim(),
          phone: values.phone.trim(),
          email: values.email.trim(),
          service: values.service,
          message: values.message.trim(),
        }),
      });

      const result = (await response.json()) as { success?: boolean };

      if (!response.ok || !result.success) {
        throw new Error("Submit failed");
      }

      setStatus("success");
      setStatusMessage(
        "Thank you. Your message has been sent. We will get back to you shortly.",
      );
      setValues(INITIAL);
    } catch {
      setStatus("error");
      setStatusMessage(
        "Something went wrong. Please try again, or reach us by phone or WhatsApp.",
      );
    }
  };

  return (
    <div className="flex h-full flex-col border border-navy/10 bg-offwhite p-6 sm:p-8">
      <SectionHeading eyebrow="Enquire" heading="Send a message" />

      <form
        className="mt-8 flex flex-1 flex-col gap-5"
        onSubmit={onSubmit}
        noValidate
      >
        <div>
          <label htmlFor="contact-name" className="form-label">
            Full name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            className="form-control"
            value={values.name}
            onChange={(event) => setField("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
          />
          {errors.name ? (
            <p id="contact-name-error" className="mt-1.5 text-sm text-navy" role="alert">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-phone" className="form-label">
            Phone number
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            className="form-control"
            value={values.phone}
            onChange={(event) => setField("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "contact-phone-error" : undefined}
          />
          {errors.phone ? (
            <p id="contact-phone-error" className="mt-1.5 text-sm text-navy" role="alert">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-email" className="form-label">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            className="form-control"
            value={values.email}
            onChange={(event) => setField("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
          />
          {errors.email ? (
            <p id="contact-email-error" className="mt-1.5 text-sm text-navy" role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-service" className="form-label">
            Service of interest
          </label>
          <select
            id="contact-service"
            name="service"
            className="form-control"
            value={values.service}
            onChange={(event) => setField("service", event.target.value)}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "contact-service-error" : undefined}
          >
            <option value="">Select a service</option>
            <option value="Tiling">Tiling</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Other">Other</option>
          </select>
          {errors.service ? (
            <p id="contact-service-error" className="mt-1.5 text-sm text-navy" role="alert">
              {errors.service}
            </p>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col">
          <label htmlFor="contact-message" className="form-label">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            className="form-control min-h-[8rem] flex-1 resize-y"
            value={values.message}
            onChange={(event) => setField("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
          />
          {errors.message ? (
            <p id="contact-message-error" className="mt-1.5 text-sm text-navy" role="alert">
              {errors.message}
            </p>
          ) : null}
        </div>

        {status === "success" || status === "error" ? (
          <p
            role="status"
            className={`border px-4 py-3 text-sm ${
              status === "success"
                ? "border-gold-500 bg-gold-400/10 text-navy"
                : "border-navy/20 bg-offwhite text-navy"
            }`}
          >
            {statusMessage}
          </p>
        ) : null}

        <Button
          type="submit"
          className="w-full sm:w-auto"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
