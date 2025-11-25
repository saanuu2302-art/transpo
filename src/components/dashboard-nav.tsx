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

const links = [
  {
    href: '/dashboard',
    label: 'Dashboard / ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
    icon: LayoutGrid,
  },
  {
    href: '/dashboard/vehicles',
    label: 'Vehicle Booking / ವಾಹನ ಬುಕಿಂಗ್',
    icon: Car,
  },
  {
    href: '/dashboard/machines',
    label: 'Machine Booking / ಯಂತ್ರ ಬುಕಿಂಗ್',
    icon: Tractor,
  },
  {
    href: '/dashboard/ai-expert',
    label: 'AI Expert / AI ತಜ್ಞ',
    icon: Bot,
  },
  {
    href: '/dashboard/profile',
    label: 'Profile / ಪ್ರೊಫೈಲ್',
    icon: User,
  },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <>
      <SidebarMenu>
        {links.map((link) => (
          <SidebarMenuItem key={link.href}>
            <Link href={link.href} className="w-full">
              <SidebarMenuButton
                isActive={pathname === link.href}
                tooltip={{ children: link.label.split(' / ')[0] }}
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
                    Logout / ಲಾಗೌಟ್
                </span>
            </Button>
         </Link>
      </div>
    </>
  );
}
