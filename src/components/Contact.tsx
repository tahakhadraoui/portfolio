"use client";

import { useState } from "react";
import { ArrowUpRight, Clock, Linkedin, Mail, MessageCircle, Phone, Send } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { profile } from "@/lib/content";
import { Section, SectionHeading } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

export function Contact() {
  const { t } = useI18n();

  const channels = [
    { icon: Mail, label: t.contact.emailLabel, value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: t.contact.phoneLabel, value: profile.phone, href: profile.phoneHref },
    { icon: MessageCircle, label: t.contact.whatsappLabel, value: profile.phone, href: profile.whatsapp },
    { icon: Linkedin, label: t.contact.linkedinLabel, value: "taha-khadraoui", href: profile.linkedin },
  ];

  return (
    <Section id="contact">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="aurora bottom-[-10%] left-1/2 size-[36rem] -translate-x-1/2 bg-sky-500/12" />
        <div className="grid-bg absolute inset-0 opacity-40" />
      </div>

      <SectionHeading
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        lead={t.contact.lead}
        align="center"
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal className="space-y-3">
          {channels.map((ch) => (
            <a
              key={ch.label}
              href={ch.href}
              target={ch.href.startsWith("http") ? "_blank" : undefined}
              rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="card-hover glass group flex items-center gap-4 rounded-2xl px-5 py-4"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-sky-400/15 to-indigo-500/15 text-sky-300 ring-1 ring-inset ring-white/10">
                <ch.icon className="size-4" strokeWidth={1.7} />
              </span>

              <span className="min-w-0">
                <span className="block text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {ch.label}
                </span>
                <span className="block truncate text-[0.9rem] font-medium text-slate-200">{ch.value}</span>
              </span>

              <ArrowUpRight className="ml-auto size-4 shrink-0 text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-300" />
            </a>
          ))}

          <div className="glass space-y-3 rounded-2xl p-5">
            <p className="flex items-center gap-2.5 text-[0.84rem] text-slate-300">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full rounded-full bg-emerald-400 opacity-75 animate-[pulse-ring_2.6s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              {t.contact.availability}
            </p>
            <p className="flex items-center gap-2.5 text-[0.84rem] text-slate-400">
              <Clock className="size-3.5 shrink-0 text-slate-500" />
              {t.contact.response}
            </p>
            <p className="border-t border-white/[0.07] pt-3 text-[0.78rem] text-slate-500">{t.contact.remote}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}

function ContactForm() {
  const { t } = useI18n();
  const [form, setForm] = useState<Record<"name" | "email" | "budget" | "type" | "message", string>>({
    name: "",
    email: "",
    budget: "",
    type: "",
    message: "",
  });

  const type = form.type || t.contact.formTypeOptions[0];
  const budget = form.budget || t.contact.formBudgetOptions[0];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `New project enquiry — ${type}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Project type: ${type}`,
      `Budget: ${budget}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const field =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[0.9rem] text-slate-100 placeholder:text-slate-600 transition-colors focus:border-sky-400/50 focus:bg-white/[0.05] focus:outline-none";
  const label = "mb-1.5 block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-slate-500";

  return (
    <form onSubmit={handleSubmit} className="glass-strong rounded-2xl p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="cf-name">
            {t.contact.formName}
          </label>
          <input
            id="cf-name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={field}
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label className={label} htmlFor="cf-email">
            {t.contact.formEmail}
          </label>
          <input
            id="cf-email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={field}
            placeholder="jane@company.com"
          />
        </div>
        <div>
          <label className={label} htmlFor="cf-type">
            {t.contact.formType}
          </label>
          <select
            id="cf-type"
            value={type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            className={`${field} appearance-none`}
          >
            {t.contact.formTypeOptions.map((o) => (
              <option key={o} value={o} className="bg-ink-900">
                {o}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="cf-budget">
            {t.contact.formBudget}
          </label>
          <select
            id="cf-budget"
            value={budget}
            onChange={(e) => setForm({ ...form, budget: e.target.value })}
            className={`${field} appearance-none`}
          >
            {t.contact.formBudgetOptions.map((o) => (
              <option key={o} value={o} className="bg-ink-900">
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label className={label} htmlFor="cf-message">
          {t.contact.formMessage}
        </label>
        <textarea
          id="cf-message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${field} resize-none`}
          placeholder={t.contact.formMessagePlaceholder}
        />
      </div>

      <button
        type="submit"
        className="group relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-sky-400 to-indigo-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-shadow hover:shadow-xl hover:shadow-sky-500/35"
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        <Send className="size-4" />
        {t.contact.formSubmit}
      </button>

      <p className="mt-3 text-center text-[0.72rem] text-slate-600">{t.contact.formNote}</p>
    </form>
  );
}
