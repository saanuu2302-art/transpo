
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  LogOut,
  Menu,
  User,
  LayoutGrid,
  Tractor,
  BellRing,
  CircleDollarSign,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function OwnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const backgroundImage = PlaceHolderImages.find(
    (img) => img.id === 'farm-background'
  );
  const avatarImage = PlaceHolderImages.find(
    (img) => img.id === 'farmer-avatar'
  );
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav.owner;

  const links = [
    {
      href: '/owner/dashboard',
      label: t.dashboard,
      icon: LayoutGrid,
    },
    {
      href: '/owner/machines',
      label: t.machines,
      icon: Tractor,
    },
    {
      href: '/owner/requests',
      label: t.requests,
      icon: BellRing,
    },
    {
      href: '/owner/transactions',
      label: t.transactions,
      icon: CircleDollarSign,
    },
    {
      href: '/owner/profile',
      label: t.profile,
      icon: User,
    },
  ];

  return (
    <div className="relative min-h-screen">
      {backgroundImage && (
        <Image
          src={backgroundImage.imageUrl}
          alt={backgroundImage.description}
          fill
          style={{ objectFit: 'cover' }}
          className="blur-lg"
        />
      )}
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative flex min-h-screen w-full flex-col">
        <header className="flex h-14 items-center justify-between border-b bg-background/50 px-4 backdrop-blur-sm lg:px-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {links.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link
                    href={link.href}
                    className={cn(
                      'flex items-center gap-2',
                      pathname === link.href && 'bg-accent'
                    )}
                  >
                    <link.icon className="h-4 w-4" />
                    <span>{link.label}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
               <DropdownMenuItem asChild>
                <Link href="/login" className="w-full">
                  <Button variant="ghost" className="w-full justify-start gap-2 px-2">
                    <LogOut className="h-4 w-4" />
                    <span>{t.logout}</span>
                  </Button>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex flex-1 items-center justify-end gap-4">
            <Button variant="outline" size="sm" onClick={toggleLanguage}>
              {translations[language].language.switchLanguage}
            </Button>
            <Avatar>
              <AvatarImage src="https://picsum.photos/seed/owner/100/100" alt="Owner" />
              <AvatarFallback>O</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
