'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import { driverTasks } from '@/lib/data';
import { ArrowRight, MapPin, Milestone } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function DriverDashboardPage() {
  const router = useRouter();
  const { language } = useLanguage();
  const t = translations[language].driver.dashboard;
  const task = driverTasks[0]; // Assuming the first task is the current one
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="font-headline text-3xl font-bold text-foreground">
            {t.title}
          </h1>
          <p className="text-muted-foreground">{t.description}</p>
        </div>
        <div className="flex items-center space-x-2 rounded-lg border p-3">
          <Switch
            id="availability-switch"
            checked={isAvailable}
            onCheckedChange={setIsAvailable}
          />
          <Label htmlFor="availability-switch" className="text-lg">
            {isAvailable ? t.available : t.unavailable}
          </Label>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t.currentTask}</CardTitle>
          <CardDescription>{t.currentTaskDescription}</CardDescription>
        </CardHeader>
        {task ? (
          <>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">
                  {language === 'kn' ? task.kannadaFarmerName : task.farmerName}
                </p>
                <p className="text-lg font-bold text-primary">
                  {language === 'kn' ? task.kannadaFare : task.fare}
                </p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                  <div>
                    <span className="font-semibold text-muted-foreground">
                      {translations[language].driver.tasks.pickup}:{' '}
                    </span>
                    <span>
                      {language === 'kn' ? task.kannadaPickup : task.pickup}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Milestone className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                  <div>
                    <span className="font-semibold text-muted-foreground">
                      {translations[language].driver.tasks.destination}:{' '}
                    </span>
                    <span>
                      {language === 'kn'
                        ? task.kannadaDestination
                        : task.destination}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="gap-2">
              <Button onClick={() => router.push(`/driver/tasks/${task.id}/track`)}>
                {t.startTrip}
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push('/driver/tasks')}
              >
                {t.viewAllTasks} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </>
        ) : (
          <CardContent>
            <p className="text-muted-foreground">{t.noCurrentTask}</p>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
