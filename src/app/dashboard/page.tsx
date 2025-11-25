'use client';

import { ArrowRight, Bot, Car, CheckCircle, Tractor, XCircle } from 'lucide-react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import { bookingHistory, type Booking } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

export default function DashboardPage() {
  const { language } = useLanguage();
  const t = translations[language].dashboard;

  const featureCards = [
    {
      title: t.features.vehicleBooking.title,
      description: t.features.vehicleBooking.description,
      href: '/dashboard/vehicles',
      icon: Car,
    },
    {
      title: t.features.machineBooking.title,
      description: t.features.machineBooking.description,
      href: '/dashboard/machines',
      icon: Tractor,
    },
    {
      title: t.features.aiExpert.title,
      description: t.features.aiExpert.description,
      href: '/dashboard/ai-expert',
      icon: Bot,
    },
  ];

  const recentActivities = [...bookingHistory]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-headline text-3xl font-bold text-foreground">
          {t.title}
        </h1>
        <p className="text-muted-foreground">{t.description}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featureCards.map((feature) => (
          <Card
            key={feature.href}
            className="flex flex-col transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="font-headline text-xl">
                    {feature.title}
                  </CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </div>
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
            </CardHeader>
            <CardContent className="mt-auto">
              <Link href={feature.href}>
                <Button variant="outline" className="w-full">
                  {t.access} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-xl">
            {t.recentActivity.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {recentActivities.length > 0 ? (
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">
                      {language === 'en' ? activity.item : activity.kannadaItem}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(activity.date).toLocaleDateString(language === 'kn' ? 'kn-IN' : 'en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                  <Badge
                    variant={
                      activity.status === 'Completed' ? 'secondary' : 'destructive'
                    }
                  >
                    {activity.status === 'Completed' ? (
                      <CheckCircle className="mr-1 h-3 w-3" />
                    ) : (
                      <XCircle className="mr-1 h-3 w-3" />
                    )}
                    {language === 'en'
                      ? activity.status
                      : activity.kannadaStatus}
                  </Badge>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">
              {t.recentActivity.noActivity}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
