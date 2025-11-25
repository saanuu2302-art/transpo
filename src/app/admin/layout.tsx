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
import { LogOut, Menu } from 'lucide-react';
import { AdminNav } from '@/components/admin-nav';
import { Logo } from '@/components/icons';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const backgroundImage = PlaceHolderImages.find(
    (img) => img.id === 'farm-background'
  );
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav.admin;

  return (
    <div className="relative min-h-screen">
      {backgroundImage && (
        <Image
          src={backgroundImage.imageUrl}
          alt={backgroundImage.description}
          fill
          style={{ objectFit: 'cover' }}
          className="blur-sm"
        />
      )}
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-background/50 backdrop-blur-sm md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <Logo className="h-6 w-auto" />
              </Link>
            </div>
            <div className="flex-1">
              <AdminNav />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-background/50 px-4 backdrop-blur-sm lg:h-[60px] lg:px-6">
             <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <AdminNav />
              </DropdownMenuContent>
            </DropdownMenu>
           
            <div className="flex w-full flex-1 items-center justify-end gap-4">
               <Button variant="outline" size="sm" onClick={toggleLanguage}>
                {translations[language].language.switchLanguage}
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" size="icon" className="rounded-full">
                    <Avatar>
                      <AvatarImage
                        src="https://picsum.photos/seed/admin/100/100"
                        alt="Admin"
                      />
                      <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
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
            </div>
          </header>
          <main className="flex-1 p-4 md:p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
