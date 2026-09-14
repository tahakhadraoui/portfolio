"use client";

import { useI18n } from "@/lib/i18n";

const badges = [
  "AWS",
  "Kubernetes",
  "Terraform",
  "Docker",
  "Helm",
  "Jenkins",
  "ArgoCD",
  "NestJS",
  "Flutter",
  "Next.js",
  "PostgreSQL",
  "Prometheus",
  "Grafana",
  "Ansible",
  "Python",
  "TypeScript",
];

export function Marquee() {
  const { t } = useI18n();
  const row = [...badges, ...badges];

  return (
    <div className="relative border-y border-white/[0.06] bg-white/[0.015] py-7">
      <p className="mb-5 text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-slate-600">
        {t.trust.label}
      </p>

      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-[marquee_42s_linear_infinite] items-center gap-3">
          {row.map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="whitespace-nowrap rounded-lg border border-white/[0.07] bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-400"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
