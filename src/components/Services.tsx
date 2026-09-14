"use client";

import { Check } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Section, SectionHeading } from "./ui/Section";
import { RevealGroup, RevealItem } from "./ui/Reveal";
import { Icon } from "./ui/Icon";

export function Services() {
  const { t } = useI18n();

  return (
    <Section id="services">
      <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} lead={t.services.lead} />

      <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.services.items.map((s) => (
          <RevealItem key={s.title}>
            <article className="card-hover glass group h-full rounded-2xl p-6">
              <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-sky-400/15 to-indigo-500/15 text-sky-300 ring-1 ring-inset ring-white/10 transition-transform duration-500 group-hover:scale-105">
                <Icon name={s.icon} className="size-5" />
              </span>

              <h3 className="mt-5 text-[1.0625rem] font-semibold text-white">{s.title}</h3>
              <p className="mt-2.5 text-[0.9rem] leading-relaxed text-slate-400">{s.body}</p>

              <ul className="mt-5 space-y-2 border-t border-white/[0.07] pt-4">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-[0.82rem] text-slate-500">
                    <Check className="size-3.5 shrink-0 text-sky-400/80" strokeWidth={2.6} />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
