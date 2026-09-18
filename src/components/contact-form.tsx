"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary-type";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({
  locale,
  form,
  defaultProduct,
}: {
  locale: Locale;
  form: Dictionary["contactPage"]["form"];
  defaultProduct?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      product: formData.get("product"),
      message: formData.get("message"),
      honeypot: formData.get("website"),
      locale,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("request_failed");

      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-14 text-center">
        <CheckCircle2 className="size-10 text-emerald-500" />
        <h3 className="text-lg font-bold text-emerald-900">{form.successTitle}</h3>
        <p className="max-w-sm text-sm text-emerald-800/80">{form.successMessage}</p>
      </div>
    );
  }

  const inputClass =
    "mt-1.5 w-full rounded-xl border border-brand-900/12 bg-white px-4 py-2.5 text-sm text-brand-950 placeholder:text-brand-900/35 outline-none transition-colors focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-brand-900">
          {form.name} <span className="text-accent-500">*</span>
          <input name="name" type="text" required placeholder={form.namePlaceholder} className={inputClass} />
        </label>

        <label className="block text-sm font-medium text-brand-900">
          {form.company}
          <input name="company" type="text" placeholder={form.companyPlaceholder} className={inputClass} />
        </label>

        <label className="block text-sm font-medium text-brand-900">
          {form.email} <span className="text-accent-500">*</span>
          <input name="email" type="email" dir="ltr" required placeholder={form.emailPlaceholder} className={inputClass} />
        </label>

        <label className="block text-sm font-medium text-brand-900">
          {form.phone}
          <input name="phone" type="tel" dir="ltr" placeholder={form.phonePlaceholder} className={inputClass} />
        </label>
      </div>

      <label className="block text-sm font-medium text-brand-900">
        {form.product}
        <select name="product" defaultValue={defaultProduct ?? ""} className={inputClass}>
          <option value="" disabled>
            {form.productPlaceholder}
          </option>
          {form.productOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-sm font-medium text-brand-900">
        {form.message} <span className="text-accent-500">*</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder={form.messagePlaceholder}
          className={`${inputClass} resize-none`}
        />
      </label>

      <p className="text-xs text-brand-900/45">{form.requiredNotice}: *</p>

      {status === "error" && (
        <div className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          <div>
            <p className="font-semibold">{form.errorTitle}</p>
            <p className="mt-0.5 text-red-600/90">{form.errorMessage}</p>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-500/25 transition-all hover:bg-accent-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" && <Loader2 className="size-4 animate-spin" />}
        {status === "submitting" ? form.submitting : form.submit}
      </button>
    </form>
  );
}
