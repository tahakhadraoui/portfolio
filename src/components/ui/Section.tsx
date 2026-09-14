"use client";

import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative scroll-mt-24 px-5 py-24 sm:px-8 md:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div
        className={`inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 ${
          centered ? "mx-auto" : ""
        }`}
      >
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex size-full rounded-full bg-sky-400 opacity-75 animate-[pulse-ring_2.6s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
          <span className="relative inline-flex size-1.5 rounded-full bg-sky-400" />
        </span>
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-sky-300/90">
          {eyebrow}
        </span>
      </div>

      <h2 className="mt-5 text-3xl font-bold leading-[1.1] text-white sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>

      {lead ? (
        <p className="mt-4 text-[1.0625rem] leading-relaxed text-slate-400">{lead}</p>
      ) : null}
    </Reveal>
  );
}
