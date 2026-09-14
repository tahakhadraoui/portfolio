"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { LOCALES, profile, type Locale } from "@/lib/content";

export function Nav() {
  const { t, locale, setLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#work", label: t.nav.work },
    { href: "#stack", label: t.nav.stack },
    { href: "#about", label: t.nav.about },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
      >
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5 ${
            scrolled
              ? "glass-strong shadow-[0_10px_44px_-14px_rgba(0,0,0,0.85)]"
              : "border border-transparent bg-transparent"
          }`}
        >
          <a href="#top" className="group flex items-center gap-2.5" aria-label={profile.name}>
            <span className="relative grid size-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-sky-400 via-indigo-500 to-violet-600 text-[0.8rem] font-bold text-white shadow-lg shadow-sky-500/25">
              {profile.initials}
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-white sm:block">
              {profile.name}
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <LocaleToggle locale={locale} setLocale={setLocale} />

            <a
              href="#contact"
              className="group hidden items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-ink-950 transition-all hover:bg-sky-300 sm:inline-flex"
            >
              {t.nav.cta}
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-200 md:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-4.5" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between px-6 pt-7">
              <span className="text-sm font-semibold text-white">{profile.name}</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-200"
                aria-label="Close menu"
              >
                <X className="size-4.5" />
              </button>
            </div>

            <div className="mt-12 flex flex-col gap-1 px-6">
              {[...links, { href: "#contact", label: t.nav.contact }].map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.08 }}
                  className="border-b border-white/[0.07] py-4 text-2xl font-semibold text-white"
                >
                  {l.label}
                </motion.a>
              ))}
            </div>

            <div className="px-6 pt-10">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-ink-950"
              >
                {t.nav.cta}
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function LocaleToggle({
  locale,
  setLocale,
}: {
  locale: Locale;
  setLocale: (l: Locale) => void;
}) {
  return (
    <div className="relative flex items-center rounded-xl border border-white/10 bg-white/[0.04] p-0.5">
      {LOCALES.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          className={`relative z-10 rounded-[0.6rem] px-2.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-wider transition-colors ${
            locale === l ? "text-ink-950" : "text-slate-400 hover:text-slate-200"
          }`}
          aria-pressed={locale === l}
        >
          {locale === l ? (
            <motion.span
              layoutId="locale-pill"
              className="absolute inset-0 -z-10 rounded-[0.6rem] bg-white"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          ) : null}
          {l}
        </button>
      ))}
    </div>
  );
}
