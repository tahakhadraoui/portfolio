"use client";

import { GraduationCap, Languages, Quote } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Section, SectionHeading } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

export function About() {
  const { t } = useI18n();

  return (
    <Section id="about">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="aurora left-[-14%] top-[18%] size-[26rem] bg-indigo-600/10" />
      </div>

      <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
        <div>
          <Reveal>
            <div className="space-y-4">
              {t.about.body.map((p) => (
                <p key={p.slice(0, 32)} className="text-[0.97rem] leading-relaxed text-slate-400">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="mt-12 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
              {t.about.experienceTitle}
            </h3>

            <div className="mt-6 space-y-8 border-l border-white/10 pl-6">
              {t.about.experience.map((job) => (
                <div key={job.org} className="relative">
                  <span className="absolute -left-[1.72rem] top-1.5 size-2.5 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 ring-4 ring-ink-950" />

                  <p className="font-mono text-[0.7rem] text-sky-300/80">{job.period}</p>
                  <h4 className="mt-1.5 text-[1.05rem] font-semibold text-white">{job.role}</h4>
                  <p className="text-[0.85rem] text-slate-500">{job.org}</p>

                  <ul className="mt-3 space-y-1.5">
                    {job.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5 text-[0.86rem] leading-relaxed text-slate-400">
                        <span className="mt-[0.45rem] size-1 shrink-0 rounded-full bg-slate-600" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="space-y-4">
          <Reveal delay={0.14}>
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-2.5">
                <GraduationCap className="size-4 text-sky-300" strokeWidth={1.7} />
                <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  {t.about.educationTitle}
                </h3>
              </div>

              <div className="mt-5 space-y-5">
                {t.about.education.map((e) => (
                  <div key={e.org}>
                    <p className="text-[0.92rem] font-semibold text-white">{e.degree}</p>
                    <p className="mt-0.5 text-[0.82rem] text-slate-500">{e.org}</p>
                    <p className="mt-0.5 font-mono text-[0.7rem] text-slate-600">{e.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-2.5">
                <Languages className="size-4 text-sky-300" strokeWidth={1.7} />
                <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  {t.about.languagesTitle}
                </h3>
              </div>

              <div className="mt-5 space-y-3">
                {t.about.languages.map((l) => (
                  <div key={l.name} className="flex items-baseline justify-between gap-3">
                    <span className="text-[0.9rem] font-medium text-slate-200">{l.name}</span>
                    <span className="text-[0.78rem] text-slate-500">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <figure className="relative overflow-hidden rounded-2xl border border-sky-400/15 bg-gradient-to-br from-sky-500/[0.09] to-indigo-600/[0.05] p-6">
              <Quote className="size-6 text-sky-400/35" strokeWidth={2} />
              <blockquote className="mt-3 text-[0.95rem] leading-relaxed text-slate-200 italic">
                “{t.testimonial.quote}”
              </blockquote>
              <figcaption className="mt-5">
                <p className="text-[0.88rem] font-semibold text-white">{t.testimonial.author}</p>
                <p className="text-[0.78rem] text-slate-500">{t.testimonial.role}</p>
                <p className="mt-2 text-[0.68rem] text-slate-600">{t.testimonial.note}</p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
