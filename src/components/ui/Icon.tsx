"use client";

import {
  Activity,
  Cloud,
  Container,
  Database,
  GitBranch,
  LayoutDashboard,
  Server,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  cloud: Cloud,
  container: Container,
  gitbranch: GitBranch,
  server: Server,
  smartphone: Smartphone,
  activity: Activity,
  database: Database,
  layout: LayoutDashboard,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = map[name] ?? Server;
  return <Cmp className={className} strokeWidth={1.6} aria-hidden />;
}
