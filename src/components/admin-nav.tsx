'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutGrid,
  Users,
  Car,
  Tractor,
  Book,
  Building2,
  Bot,
  FileText,
  Settings,
  Container,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';

export function AdminNav() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const t = translations[language].nav.admin;

  const links = [
    { href: '/admin/dashboard', label: t.dashboard, icon: LayoutGrid },
    { href: '/admin/farmers', label: t.farmers, icon: Users },
    { href: '/admin/drivers', label: t.drivers, icon: Car },
    { href: '/admin/machine-owners', label: t.machineOwners, icon: Tractor },
    { href: '/admin/vehicle-bookings', label: t.vehicleBookings, icon: Book },
    {
      href: '/admin/machinery-bookings',
      label: t.machineryBookings,
      icon: Container,
    },
    { href: '/admin/marketplace', label: t.marketplace, icon: Building2 },
    { href: '/admin/ai-expert-logs', label: t.aiExpertLogs, icon: Bot },
    { href: '/admin/reports', label: t.reports, icon: FileText },
    { href: '/admin/system-settings', label: t.systemSettings, icon: Settings },
  ];

  return (
    <nav className="grid items-start gap-1 px-2 text-sm font-medium lg:px-4">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
            pathname === link.href && 'bg-accent text-primary'
          )}
        >
          <link.icon className="h-4 w-4" />
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
