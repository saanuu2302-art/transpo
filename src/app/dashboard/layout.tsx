'use client';

import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { DashboardNav } from '@/components/dashboard-nav';
import { Logo } from '@/components/icons';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import { Button } from '@/components/ui/button';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const backgroundImage = PlaceHolderImages.find(
    (img) => img.id === 'farm-background'
  );
  const avatarImage = PlaceHolderImages.find(
    (img) => img.id === 'farmer-avatar'
  );
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <SidebarProvider>
      <div className="relative min-h-screen">
        {backgroundImage && (
          <Image
            src={backgroundImage.imageUrl}
            alt={backgroundImage.description}
            layout="fill"
            objectFit="cover"
            className="blur-lg"
            data-ai-hint={backgroundImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative">
          <Sidebar>
            <SidebarHeader>
              <div className="flex items-center gap-2">
                <Logo className="w-24 group-data-[collapsible=icon]:hidden" />
                <SidebarTrigger className="ml-auto" />
              </div>
            </SidebarHeader>
            <SidebarContent>
              <DashboardNav />
            </SidebarContent>
          </Sidebar>
          <SidebarInset>
            <header className="flex h-14 items-center justify-between border-b bg-background/50 px-4 backdrop-blur-sm lg:px-6">
              <div className="md:hidden">
                <SidebarTrigger />
              </div>
              <div className="flex flex-1 items-center justify-end gap-4">
                 <Button variant="outline" size="sm" onClick={toggleLanguage}>{t.language.switchLanguage}</Button>
                <Avatar>
                  {avatarImage && (
                    <AvatarImage
                      src={avatarImage.imageUrl}
                      alt={avatarImage.description}
                      data-ai-hint={avatarImage.imageHint}
                    />
                  )}
                  <AvatarFallback>F</AvatarFallback>
                </Avatar>
              </div>
            </header>
            <main className="flex-1 p-4 md:p-6">{children}</main>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}
