"use client";

import { motion } from "framer-motion";
import { Check, Cloud, Container, GitBranch, Package, Rocket } from "lucide-react";

const stages = [
  { icon: GitBranch, label: "git push", meta: "main" },
  { icon: Package, label: "docker build", meta: "3 images" },
  { icon: Container, label: "helm upgrade", meta: "chart v18" },
  { icon: Cloud, label: "deploy → EKS", meta: "us-east-1" },
  { icon: Rocket, label: "live", meta: "healthy" },
];

const pods = [
  { name: "nest-backend", replicas: "2/2", tone: "text-emerald-400" },
  { name: "next-frontend", replicas: "1/1", tone: "text-emerald-400" },
  { name: "flask-api", replicas: "1/1", tone: "text-emerald-400" },
];

export function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-sky-500/12 via-indigo-500/8 to-transparent blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 34, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
        className="glass-strong overflow-hidden rounded-2xl shadow-[0_28px_80px_-28px_rgba(0,0,0,0.9)]"
      >
        <div className="flex items-center gap-2 border-b border-white/[0.07] bg-white/[0.02] px-4 py-3">
          <span className="size-2.5 rounded-full bg-rose-400/70" />
          <span className="size-2.5 rounded-full bg-amber-400/70" />
          <span className="size-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-2 font-mono text-[0.7rem] tracking-tight text-slate-500">
            jenkins · pipeline #18
          </span>
          <span className="ml-auto flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2 py-0.5 text-[0.65rem] font-semibold text-emerald-300">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            passing
          </span>
        </div>

        <div className="space-y-2 p-4">
          {stages.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0.25 }}
              animate={{ opacity: [0.25, 1, 1, 0.55] }}
              transition={{
                duration: 5,
                times: [0, 0.14, 0.75, 1],
                repeat: Infinity,
                repeatDelay: 1.6,
                delay: 0.9 + i * 0.42,
                ease: "easeInOut",
              }}
              className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] px-3 py-2.5"
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-sky-400/18 to-indigo-500/18 text-sky-300">
                <s.icon className="size-4" strokeWidth={1.7} />
              </span>

              <span className="font-mono text-[0.8rem] font-medium text-slate-200">{s.label}</span>
              <span className="ml-auto font-mono text-[0.68rem] text-slate-500">{s.meta}</span>

              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 5,
                  times: [0, 0.18, 0.75, 1],
                  repeat: Infinity,
                  repeatDelay: 1.6,
                  delay: 1.05 + i * 0.42,
                }}
                className="grid size-4 shrink-0 place-items-center rounded-full bg-emerald-400 text-ink-950"
              >
                <Check className="size-2.5" strokeWidth={3.5} />
              </motion.span>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-white/[0.07] bg-ink-950/50 px-4 py-3.5">
          <p className="font-mono text-[0.68rem] text-slate-500">$ kubectl get deployments</p>
          <div className="mt-2 space-y-1.5">
            {pods.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 + i * 0.14, duration: 0.5 }}
                className="flex items-center justify-between font-mono text-[0.72rem]"
              >
                <span className="text-slate-400">{p.name}</span>
                <span className={p.tone}>{p.replicas}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <FloatingBadge className="-left-4 top-16 sm:-left-9" delay={1.15} label="Terraform" value="apply complete" />
      <FloatingBadge className="-right-3 bottom-20 sm:-right-8" delay={1.4} label="TestFlight" value="build 1.1.1" />
    </div>
  );
}

function FloatingBadge({
  className = "",
  delay,
  label,
  value,
}: {
  className?: string;
  delay: number;
  label: string;
  value: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute hidden lg:block ${className}`}
    >
      <motion.div
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay }}
        className="glass-strong rounded-xl px-3 py-2 shadow-xl shadow-black/50"
      >
        <p className="text-[0.6rem] font-semibold uppercase tracking-wider text-slate-500">{label}</p>
        <p className="font-mono text-[0.72rem] font-medium text-emerald-300">{value}</p>
      </motion.div>
    </motion.div>
  );
}
