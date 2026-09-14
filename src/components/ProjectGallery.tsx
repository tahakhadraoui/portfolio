"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function PhoneFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-[2.4rem] border border-white/12 bg-gradient-to-b from-white/[0.14] to-white/[0.04] p-[3px] shadow-[0_30px_70px_-24px_rgba(0,0,0,0.95)] ${className}`}
    >
      <div className="relative overflow-hidden rounded-[2.2rem] bg-ink-900">
        <div className="absolute left-1/2 top-2 z-20 h-[1.1rem] w-[5.2rem] -translate-x-1/2 rounded-full bg-ink-950/90" />
        {children}
      </div>
    </div>
  );
}

export function ProjectGallery({
  images,
  name,
  accent,
}: {
  images: string[];
  name: string;
  accent: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="relative">
      <div className={`absolute -inset-8 -z-10 rounded-full bg-gradient-to-br ${accent} opacity-[0.14] blur-3xl`} />

      <div className="flex items-center justify-center gap-5">
        <PhoneFrame className="w-[13.5rem] shrink-0 sm:w-[15rem]">
          <div className="relative aspect-[9/19.5] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={images[active]}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={images[active]}
                  alt={`${name} — screen ${active + 1}`}
                  fill
                  sizes="(max-width: 640px) 216px, 240px"
                  className="object-cover object-top"
                  priority={active === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </PhoneFrame>

        <div className="grid grid-cols-1 gap-2.5">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`${name} screen ${i + 1}`}
              aria-pressed={i === active}
              className={`relative aspect-[9/19.5] w-11 overflow-hidden rounded-lg border transition-all duration-300 sm:w-[3.25rem] ${
                i === active
                  ? "border-sky-400/70 opacity-100 ring-2 ring-sky-400/25"
                  : "border-white/10 opacity-45 hover:opacity-80"
              }`}
            >
              <Image src={src} alt="" fill sizes="56px" className="object-cover object-top" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
