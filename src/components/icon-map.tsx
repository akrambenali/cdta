import {
  ShieldCheck,
  Clock,
  Wallet,
  Users,
  Network,
  Compass,
  Shirt,
  Beef,
  QrCode,
  GraduationCap,
  Car,
  Hotel,
  Plane,
  ShoppingBag,
  Cpu,
  Building2,
  MapPin,
  Sun,
  type LucideProps,
} from "lucide-react";

export const iconMap = {
  "shield-check": ShieldCheck,
  clock: Clock,
  wallet: Wallet,
  users: Users,
  network: Network,
  compass: Compass,
  shirt: Shirt,
  beef: Beef,
  "qr-code": QrCode,
  "graduation-cap": GraduationCap,
  car: Car,
  hotel: Hotel,
  plane: Plane,
  "shopping-bag": ShoppingBag,
  cpu: Cpu,
  "building-2": Building2,
  "map-pin": MapPin,
  sun: Sun,
} as const;

export type IconName = keyof typeof iconMap;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Component = iconMap[name];
  return <Component {...props} />;
}
