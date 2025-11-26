'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Bot,
  Car,
  LayoutGrid,
  LogOut,
  Tractor,
  User,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import {
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Button } from './ui/button';
import { GeminiIcon } from './icons';

export function DashboardNav() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const t = translations[language].nav;

  const links = [
    {
      href: '/dashboard',
      label: t.dashboard,
      icon: LayoutGrid,
    },
    {
      href: '/dashboard/vehicles',
      label: t.vehicleBooking,
      icon: Car,
    },
    {
      href: '/dashboard/machines',
      label: t.machineBooking,
      icon: Tractor,
    },
    {
      href: '/dashboard/ai-expert',
      label: t.aiExpert,
      icon: GeminiIcon,
    },
    {
      href: '/dashboard/profile',
      label: t.profile,
      icon: User,
    },
  ];

  return (
    <div className="w-56">
      {links.map((link) => (
        <DropdownMenuItem key={link.href} asChild>
          <Link
            href={link.href}
            className={cn('flex items-center gap-2', pathname === link.href && 'bg-accent')}
          >
            <link.icon className="h-4 w-4" />
            <span>{link.label}</span>
          </Link>
        </DropdownMenuItem>
      ))}
      <DropdownMenuItem asChild>
        <Link href="/login" className="w-full">
            <Button variant="ghost" className="w-full justify-start gap-2 px-2">
                <LogOut className="h-4 w-4"/>
                <span>
                    {t.logout}
                </span>
            </Button>
         </Link>
      </DropdownMenuItem>
    </div>
  );
}
