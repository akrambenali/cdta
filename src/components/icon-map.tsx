import {
  ShieldCheck,
  Clock,
  Wallet,
  Users,
  Network,
  LayoutDashboard,
  Monitor,
  ShoppingCart,
  Compass,
  type LucideProps,
} from "lucide-react";

export const iconMap = {
  "shield-check": ShieldCheck,
  clock: Clock,
  wallet: Wallet,
  users: Users,
  network: Network,
  "layout-dashboard": LayoutDashboard,
  monitor: Monitor,
  "shopping-cart": ShoppingCart,
  compass: Compass,
} as const;

export type IconName = keyof typeof iconMap;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Component = iconMap[name];
  return <Component {...props} />;
}
