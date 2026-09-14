"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { profile } from "@/lib/content";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-bg absolute inset-0 mask-fade-b opacity-70" />
        <div className="aurora left-[-12%] top-[-14%] size-[34rem] bg-sky-500/16 animate-[float_11s_ease-in-out_infinite]" />
        <div className="aurora right-[-10%] top-[8%] size-[30rem] bg-violet-600/14 animate-[float_13s_ease-in-out_infinite_reverse]" />
        <div className="aurora bottom-[-18%] left-[28%] size-[28rem] bg-indigo-500/10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.06fr_0.94fr] lg:gap-12">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/[0.07] px-3.5 py-1.5"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-emerald-400 opacity-75 animate-[pulse-ring_2.6s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[0.78rem] font-semibold text-emerald-300">{t.hero.status}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-[2.6rem] font-extrabold leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-[4.1rem]"
          >
            {t.hero.titleA}
            <br />
            <span className="text-gradient">{t.hero.titleB}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.36 }}
            className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-slate-400"
          >
            {t.hero.lead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.48 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-sky-400 to-indigo-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-shadow hover:shadow-xl hover:shadow-sky-500/35"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              {t.hero.ctaPrimary}
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
            >
              {t.hero.ctaSecondary}
            </a>

            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-2 py-3.5 text-sm font-semibold text-slate-400 transition-colors hover:text-sky-300"
            >
              <Download className="size-4" />
              {t.hero.cv}
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.62 }}
            className="mt-7 flex items-center gap-2 text-[0.8rem] text-slate-500"
          >
            <MapPin className="size-3.5" />
            {t.contact.remote}
          </motion.p>
        </div>

        <div className="relative lg:pl-4">
          <HeroVisual />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.75 }}
        className="mx-auto mt-20 w-full max-w-6xl px-5 sm:px-8 lg:mt-28"
      >
        <div className="glass grid grid-cols-2 divide-white/[0.07] rounded-2xl sm:grid-cols-4 sm:divide-x">
          {t.hero.stats.map((s) => (
            <div key={s.label} className="px-5 py-6 text-center sm:px-6">
              <p className="text-3xl font-bold tracking-tight text-white sm:text-[2.1rem]">{s.value}</p>
              <p className="mt-1.5 text-[0.76rem] leading-snug text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="mt-14 flex justify-center">
        <motion.a
          href="#services"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="group flex flex-col items-center gap-2 text-slate-600 transition-colors hover:text-sky-300"
          aria-label={t.hero.scroll}
        >
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em]">{t.hero.scroll}</span>
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.9, repeat: Infinity }}>
            <ArrowDown className="size-4" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
