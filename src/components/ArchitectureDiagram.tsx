"use client";

import { motion } from "framer-motion";
import { Database, GitBranch, Lock, Package, Server, Settings } from "lucide-react";

const workloads = [
  { name: "next-frontend", replicas: "1/1", exposure: "LoadBalancer" },
  { name: "nest-backend", replicas: "2/2", exposure: "LoadBalancer" },
  { name: "flask-api", replicas: "1/1", exposure: "ClusterIP" },
];

export function ArchitectureDiagram() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-br from-orange-500/12 to-rose-500/10 blur-3xl" />

      <div className="mb-3 flex items-center gap-2">
        {[
          { icon: GitBranch, label: "Git" },
          { icon: Settings, label: "Jenkins" },
          { icon: Package, label: "Docker Hub" },
          { icon: GitBranch, label: "Helm repo" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex flex-1 items-center gap-1.5 rounded-lg border border-white/[0.07] bg-white/[0.03] px-2 py-2"
          >
            <s.icon className="size-3.5 shrink-0 text-orange-300/90" strokeWidth={1.8} />
            <span className="truncate text-[0.68rem] font-medium text-slate-400">{s.label}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass rounded-2xl p-3.5"
      >
        <DiagramLabel color="text-orange-300" text="AWS · us-east-1" note="Terraform managed" />

        <div className="mt-3 rounded-xl border border-dashed border-sky-400/25 bg-sky-400/[0.03] p-3">
          <DiagramLabel color="text-sky-300" text="VPC 10.0.0.0/16" note="2 availability zones" />

          <div className="mt-3 grid grid-cols-2 gap-2">
            <SubnetChip label="Public subnet" detail="NAT gateway" />
            <SubnetChip label="Public subnet" detail="Jenkins EC2" />
          </div>

          <div className="mt-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <DiagramLabel color="text-violet-300" text="EKS 1.28" note="managed node group · t3.small" />

            <div className="mt-2.5 space-y-1.5">
              {workloads.map((w, i) => (
                <motion.div
                  key={w.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.1 }}
                  className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-ink-900/60 px-2.5 py-2"
                >
                  <Server className="size-3.5 shrink-0 text-violet-300/80" strokeWidth={1.8} />
                  <span className="font-mono text-[0.72rem] text-slate-300">{w.name}</span>
                  <span className="ml-auto font-mono text-[0.65rem] text-emerald-400">{w.replicas}</span>
                  <span
                    className={`rounded px-1.5 py-0.5 text-[0.58rem] font-semibold ${
                      w.exposure === "ClusterIP"
                        ? "bg-slate-500/15 text-slate-400"
                        : "bg-sky-400/15 text-sky-300"
                    }`}
                  >
                    {w.exposure}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55 }}
            className="mt-2.5 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5"
          >
            <Database className="size-4 shrink-0 text-emerald-300/85" strokeWidth={1.8} />
            <span className="text-[0.75rem] font-medium text-slate-300">RDS PostgreSQL 14</span>
            <span className="ml-auto text-[0.62rem] text-slate-500">private subnets</span>
          </motion.div>
        </div>

        <div className="mt-3 flex items-center gap-2 px-1">
          <Lock className="size-3 text-slate-500" />
          <span className="text-[0.62rem] text-slate-500">
            Scoped IAM roles · Kubernetes secrets · security groups per tier
          </span>
        </div>
      </motion.div>
    </div>
  );
}

function DiagramLabel({ color, text, note }: { color: string; text: string; note: string }) {
  return (
    <div className="flex items-baseline justify-between gap-2 px-1">
      <span className={`text-[0.68rem] font-bold uppercase tracking-wider ${color}`}>{text}</span>
      <span className="truncate text-[0.62rem] text-slate-500">{note}</span>
    </div>
  );
}

function SubnetChip({ label, detail }: { label: string; detail: string }) {
  return (
    <div className="rounded-lg border border-white/[0.07] bg-white/[0.02] px-2.5 py-2">
      <p className="text-[0.6rem] uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-0.5 font-mono text-[0.7rem] text-slate-300">{detail}</p>
    </div>
  );
}
