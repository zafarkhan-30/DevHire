import {
  Award,
  BrainCircuit,
  Briefcase,
  Building2,
  Calendar,
  ChartColumn,
  Check,
  Clock,
  Cloud,
  Code,
  Compass,
  CreditCard,
  Database,
  Eye,
  FileText,
  GitBranch,
  Globe,
  GraduationCap,
  Handshake,
  Heart,
  House,
  Layers,
  Lock,
  Mail,
  MessageSquare,
  Monitor,
  Network,
  Plane,
  RefreshCw,
  Rocket,
  Search,
  Server,
  Settings,
  ShieldAlert,
  ShoppingCart,
  Smartphone,
  Target,
  TrendingUp,
  TriangleAlert,
  Truck,
  Users,
  Wrench,
  Zap,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";
import type { IconKey } from "@/content/types";

const icons: Record<IconKey, LucideIcon> = {
  alert: TriangleAlert,
  award: Award,
  brain: BrainCircuit,
  briefcase: Briefcase,
  building: Building2,
  calendar: Calendar,
  cart: ShoppingCart,
  chart: ChartColumn,
  check: Check,
  clock: Clock,
  cloud: Cloud,
  code: Code,
  compass: Compass,
  credit: CreditCard,
  database: Database,
  eye: Eye,
  file: FileText,
  git: GitBranch,
  globe: Globe,
  graduation: GraduationCap,
  handshake: Handshake,
  heart: Heart,
  home: House,
  layers: Layers,
  lock: Lock,
  mail: Mail,
  message: MessageSquare,
  monitor: Monitor,
  network: Network,
  plane: Plane,
  refresh: RefreshCw,
  rocket: Rocket,
  search: Search,
  server: Server,
  settings: Settings,
  shield: ShieldAlert,
  smartphone: Smartphone,
  target: Target,
  trending: TrendingUp,
  truck: Truck,
  users: Users,
  wrench: Wrench,
  zap: Zap,
};

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Component = icons[name as IconKey] ?? Zap;
  return <Component aria-hidden="true" {...props} />;
}

export function SocialIcon({ name }: { name: string }) {
  const common = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true } as const;
  if (name === "linkedin") {
    return (
      <svg {...common}>
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.6h.06c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.88 2.5 4.88 5.9V21h-4v-5.1c0-1.3-.03-2.95-1.85-2.95-1.85 0-2.15 1.4-2.15 2.85V21h-4V9.75Z" />
      </svg>
    );
  }
  if (name === "instagram") {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth={2}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5A2.7 2.7 0 0 0 2.4 7.2 28 28 0 0 0 2 12a28 28 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.8ZM10 15.2V8.8l5.2 3.2L10 15.2Z" />
    </svg>
  );
}
