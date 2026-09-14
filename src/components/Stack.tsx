"use client";

import { useI18n } from "@/lib/i18n";
import { stackGroups } from "@/lib/content";
import { Section, SectionHeading } from "./ui/Section";
import { RevealGroup, RevealItem } from "./ui/Reveal";
import { Icon } from "./ui/Icon";

export function Stack() {
  const { t, locale } = useI18n();

  return (
    <Section id="stack">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="dot-bg absolute inset-0 opacity-40" />
      </div>

      <SectionHeading
        eyebrow={t.stack.eyebrow}
        title={t.stack.title}
        lead={t.stack.lead}
        align="center"
      />

      <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stackGroups.map((g) => (
          <RevealItem key={g.id}>
            <div className="card-hover glass h-full rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-lg bg-white/[0.05] text-sky-300 ring-1 ring-inset ring-white/10">
                  <Icon name={g.icon} className="size-4" />
                </span>
                <h3 className="text-[0.95rem] font-semibold text-white">{g.copy[locale].title}</h3>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 text-[0.76rem] text-slate-400 transition-colors hover:border-sky-400/30 hover:text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
