'use client';

import { useParams, useRouter } from 'next/navigation';
import { driverTasks } from '@/lib/data';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, User, MapPin, Milestone, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';

export default function DriverTrackPage() {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const { id } = params;
  const { language } = useLanguage();
  const t = translations[language].driver.tasks;

  const task = driverTasks.find((t) => t.id === id);

  if (!task) {
    return <div>Task not found</div>;
  }

  const handleEndTrip = () => {
    toast({
      title: t.tripEnded,
      description: t.tripEndedDescription,
    });
    router.push('/driver/dashboard');
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.push('/driver/tasks')}
        >
          <ArrowLeft />
        </Button>
        <div>
          <h1 className="font-headline text-3xl font-bold text-foreground">
            {t.tripDetails}
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="aspect-video w-full rounded-lg bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">Map will be shown here</p>
          </div>
        </div>
        <div className="space-y-6 lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>
                {language === 'kn' ? task.kannadaFarmerName : task.farmerName}
              </CardTitle>
              <CardDescription>
                {t.fare}:{' '}
                <span className="font-semibold text-primary">
                  {language === 'kn' ? task.kannadaFare : task.fare}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                <div>
                  <p className="font-semibold">{t.pickup}</p>
                  <p className="text-sm text-muted-foreground">
                    {language === 'kn' ? task.kannadaPickup : task.pickup}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Milestone className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                <div>
                  <p className="font-semibold">{t.destination}</p>
                  <p className="text-sm text-muted-foreground">
                    {language === 'kn'
                      ? task.kannadaDestination
                      : task.destination}
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-muted-foreground" />
                  <p className="font-semibold">{t.farmer}</p>
                </div>
                <Button variant="outline" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
            <CardFooter className="grid grid-cols-2 gap-2">
              <Button variant="outline">{t.startTrip}</Button>
              <Button onClick={handleEndTrip}>{t.endTrip}</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
