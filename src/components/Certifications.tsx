"use client";

import { Award, ExternalLink } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { certifications } from "@/lib/content";
import { Section, SectionHeading } from "./ui/Section";
import { RevealGroup, RevealItem } from "./ui/Reveal";

export function Certifications() {
  const { t, locale } = useI18n();

  return (
    <Section id="certifications">
      <SectionHeading
        eyebrow={t.certs.eyebrow}
        title={t.certs.title}
        lead={t.certs.lead}
        align="center"
      />

      <RevealGroup className="mt-14 grid gap-4 md:grid-cols-3">
        {certifications.map((cert) => {
          const c = cert.copy[locale];
          const Wrapper = cert.file ? "a" : "div";

          return (
            <RevealItem key={cert.id}>
              <Wrapper
                {...(cert.file
                  ? { href: cert.file, target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="card-hover glass group flex h-full flex-col rounded-2xl p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`grid size-11 place-items-center rounded-xl bg-gradient-to-br ${cert.accent} text-white shadow-lg shadow-black/30`}
                  >
                    <Award className="size-5" strokeWidth={1.7} />
                  </span>
                  <span className="font-mono text-[0.7rem] text-slate-500">{cert.year}</span>
                </div>

                <h3 className="mt-5 text-[1rem] font-semibold leading-snug text-white">{c.name}</h3>
                <p className="mt-1.5 text-[0.82rem] text-slate-500">{cert.issuer}</p>

                <div className="mt-auto pt-6">
                  {cert.file ? (
                    <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-sky-300">
                      {t.certs.view}
                      <ExternalLink className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  ) : (
                    <span className="text-[0.78rem] text-slate-600">{t.certs.soon}</span>
                  )}
                </div>
              </Wrapper>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
