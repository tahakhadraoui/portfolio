"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { profile } from "@/lib/content";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.07] px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-sky-400 via-indigo-500 to-violet-600 text-[0.72rem] font-bold text-white">
              {profile.initials}
            </span>
            <span className="text-sm font-semibold text-white">{profile.name}</span>
          </div>
          <p className="mt-3 max-w-sm text-[0.84rem] text-slate-500">{t.footer.tagline}</p>
        </div>

        <div className="flex items-center gap-2.5">
          {[
            { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
            { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
            { icon: Github, href: profile.github, label: "GitHub" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={s.label}
              className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-colors hover:border-sky-400/40 hover:text-sky-300"
            >
              <s.icon className="size-4" strokeWidth={1.7} />
            </a>
          ))}

          <a
            href="#top"
            aria-label={t.footer.backToTop}
            className="ml-2 grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-colors hover:border-sky-400/40 hover:text-sky-300"
          >
            <ArrowUp className="size-4" strokeWidth={1.7} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-white/[0.07] pt-6 text-[0.76rem] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name}. {t.footer.rights}
        </p>
        <p>{t.footer.built}</p>
      </div>
    </footer>
  );
}
