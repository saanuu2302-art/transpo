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
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { Button } from './ui/button';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';

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
      icon: Bot,
    },
    {
      href: '/dashboard/profile',
      label: t.profile,
      icon: User,
    },
  ];

  return (
    <>
      <SidebarMenu>
        {links.map((link) => (
          <SidebarMenuItem key={link.href}>
            <Link href={link.href} className="w-full">
              <SidebarMenuButton
                isActive={pathname === link.href}
                tooltip={{ children: language === 'en' ? link.label.split(' / ')[0] : link.label.split(' / ')[1] }}
              >
                <link.icon />
                <span>{link.label}</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
      <div className="mt-auto p-2">
         <Link href="/login" className="w-full">
            <Button variant="ghost" className="w-full justify-start gap-2 px-2">
                <LogOut />
                <span className="group-data-[collapsible=icon]:hidden">
                    {t.logout}
                </span>
            </Button>
         </Link>
      </div>
    </>
  );
}
