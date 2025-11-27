'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';

export default function Page() {
  const { language } = useLanguage();
  const t = translations[language].nav.admin;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-headline text-3xl font-bold text-foreground">
          {t.marketplace}
        </h1>
        <p className="text-muted-foreground">
          Manage marketplace settings and listings.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
          <CardDescription>This page is under construction.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex h-64 items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30">
            <p className="text-muted-foreground">
              Marketplace management will be available here.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
