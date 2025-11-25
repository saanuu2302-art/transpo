
'use client';

import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import { ownerMachines } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tractor, IndianRupee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function OwnerProfilePage() {
  const { language } = useLanguage();
  const t = translations[language].owner.profile;
  const ownerName = "Sample Owner";
  const totalMachines = ownerMachines.length;
  const totalEarnings = 15400;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-headline text-3xl font-bold text-foreground">
          {t.title}
        </h1>
        <p className="text-muted-foreground">{t.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="items-center text-center">
              <Avatar className="h-24 w-24">
                 <AvatarImage src="https://picsum.photos/seed/owner-avatar/200" alt="Owner Avatar" data-ai-hint="person portrait" />
                <AvatarFallback className="text-4xl">O</AvatarFallback>
              </Avatar>
              <CardTitle className="font-headline text-2xl">{ownerName}</CardTitle>
              <CardDescription>owner@example.com</CardDescription>
            </CardHeader>
            <CardContent>
                <Link href="/owner/profile/edit" legacyBehavior>
                  <a className="w-full">
                    <Button variant="outline" className="w-full">{t.editProfile}</Button>
                  </a>
                </Link>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{t.totalMachines}</CardTitle>
                        <Tractor className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{totalMachines}</div>
                        <p className="text-xs text-muted-foreground">{t.machinesRegistered}</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{t.totalEarnings}</CardTitle>
                        <IndianRupee className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {language === 'kn' ? totalEarnings.toLocaleString('kn-IN') : totalEarnings.toLocaleString('en-IN')}
                        </div>
                        <p className="text-xs text-muted-foreground">{t.lifetimeEarnings}</p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </div>
  );
}
