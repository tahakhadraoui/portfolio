"use client";

import { useI18n } from "@/lib/i18n";
import { Section, SectionHeading } from "./ui/Section";
import { RevealGroup, RevealItem } from "./ui/Reveal";

export function Process() {
  const { t } = useI18n();

  return (
    <Section id="process">
      <SectionHeading
        eyebrow={t.process.eyebrow}
        title={t.process.title}
        lead={t.process.lead}
        align="center"
      />

      <RevealGroup className="relative mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {t.process.steps.map((s, i) => (
          <RevealItem key={s.title}>
            <div className="glass relative h-full overflow-hidden rounded-2xl p-6">
              <span className="absolute -right-2 -top-4 select-none text-[5.5rem] font-extrabold leading-none text-white/[0.035]">
                {i + 1}
              </span>

              <span className="inline-grid size-8 place-items-center rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500 text-[0.78rem] font-bold text-white shadow-lg shadow-sky-500/20">
                {i + 1}
              </span>

              <h3 className="mt-4 text-[1rem] font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-[0.87rem] leading-relaxed text-slate-400">{s.body}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
