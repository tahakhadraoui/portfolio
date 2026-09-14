"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Lock, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { projects, type Project } from "@/lib/content";
import { Section, SectionHeading } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { ProjectGallery } from "./ProjectGallery";
import { ArchitectureDiagram } from "./ArchitectureDiagram";

export function Projects() {
  const { t, locale } = useI18n();
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="work">
      <SectionHeading eyebrow={t.work.eyebrow} title={t.work.title} lead={t.work.lead} />

      <div className="mt-16 space-y-24 md:space-y-32">
        {featured.map((p, i) => (
          <FeaturedProject key={p.id} project={p} flip={i % 2 === 1} />
        ))}
      </div>

      <Reveal className="mt-24">
        <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
          {t.work.more}
        </h3>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {rest.map((p) => (
            <CompactProject key={p.id} project={p} />
          ))}
        </div>
      </Reveal>

      <span className="sr-only">{locale}</span>
    </Section>
  );
}

function FeaturedProject({ project, flip }: { project: Project; flip: boolean }) {
  const { t, locale } = useI18n();
  const [open, setOpen] = useState(false);
  const c = project.copy[locale];
  const isClient = project.id === "spotfleet";

  return (
    <Reveal>
      <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className={flip ? "lg:order-2" : ""}>
          {project.visual === "gallery" && project.images ? (
            <ProjectGallery images={project.images} name={c.name} accent={project.accent} />
          ) : null}
          {project.visual === "architecture" ? <ArchitectureDiagram /> : null}
        </div>

        <div className={flip ? "lg:order-1" : ""}>
          <div className="flex items-center gap-3">
            <span className={`h-px w-8 bg-gradient-to-r ${project.accent}`} aria-hidden />
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
              {c.kind}
            </span>
            <span className="ml-auto font-mono text-[0.7rem] text-slate-600">{project.year}</span>
          </div>

          <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{c.name}</h3>
          <p className="mt-3 text-[1.0625rem] leading-relaxed text-slate-300">{c.tagline}</p>
          <p className="mt-3 flex items-center gap-2 text-[0.82rem] text-slate-500">
            {isClient ? <Lock className="size-3.5 shrink-0" /> : <Sparkles className="size-3.5 shrink-0" />}
            {c.context}
          </p>

          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-4">
            {project.metrics.map((m) => (
              <div key={m.label.en}>
                <p className={`bg-gradient-to-r ${project.accent} bg-clip-text text-xl font-bold text-transparent`}>
                  {m.value}
                </p>
                <p className="mt-0.5 text-[0.72rem] text-slate-500">{m.label[locale]}</p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="mt-7 inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-4 py-2.5 text-[0.82rem] font-semibold text-slate-200 transition-colors hover:border-white/25 hover:bg-white/[0.08]"
          >
            {open ? t.work.hideCase : t.work.viewCase}
            <ChevronDown className={`size-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence initial={false}>
            {open ? (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <ul className="mt-6 space-y-3.5 border-l border-white/10 pl-5">
                  {c.highlights.map((h) => (
                    <li key={h} className="relative text-[0.9rem] leading-relaxed text-slate-400">
                      <span
                        className={`absolute -left-[1.42rem] top-2 size-1.5 rounded-full bg-gradient-to-r ${project.accent}`}
                        aria-hidden
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <div className="mt-8 border-t border-white/[0.07] pt-5">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-600">
              {t.work.stackLabel}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 font-mono text-[0.7rem] text-slate-400"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function CompactProject({ project }: { project: Project }) {
  const { t, locale } = useI18n();
  const c = project.copy[locale];

  return (
    <article className="card-hover glass flex h-full flex-col rounded-2xl p-6">
      <div className="flex items-center gap-3">
        <span className={`h-px w-6 bg-gradient-to-r ${project.accent}`} aria-hidden />
        <span className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-slate-500">{c.kind}</span>
        <span className="ml-auto font-mono text-[0.68rem] text-slate-600">{project.year}</span>
      </div>

      <h4 className="mt-4 text-xl font-bold text-white">{c.name}</h4>
      <p className="mt-2 text-[0.9rem] leading-relaxed text-slate-400">{c.tagline}</p>

      <ul className="mt-5 space-y-2.5">
        {c.highlights.map((h) => (
          <li key={h} className="flex gap-2.5 text-[0.84rem] leading-relaxed text-slate-500">
            <span className={`mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-gradient-to-r ${project.accent}`} />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-600">{t.work.stackLabel}</p>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-0.5 font-mono text-[0.68rem] text-slate-400"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
