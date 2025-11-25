'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import { driverTasks, type DriverTask } from '@/lib/data';
import { ArrowRight, Leaf, MapPin, Milestone, DollarSign } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

function TaskCard({ task }: { task: DriverTask }) {
  const router = useRouter();
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = translations[language].driver.tasks;

  const handleAccept = () => {
    router.push(`/driver/tasks/${task.id}/track`);
  };

  const handleReject = () => {
    toast({
      variant: 'destructive',
      title: 'Request Rejected',
      description: `You have rejected the request from ${task.farmerName}.`,
    });
    // Here you would typically update the state to remove the task
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {language === 'kn' ? task.kannadaFarmerName : task.farmerName}
        </CardTitle>
        <CardDescription>
          {language === 'kn'
            ? `${task.kannadaPickup} ನಿಂದ ${task.kannadaDestination}`
            : `From ${task.pickup} to ${task.destination}`}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="font-semibold">{t.pickup}:</span>
          <span>{language === 'kn' ? task.kannadaPickup : task.pickup}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Milestone className="h-4 w-4 text-muted-foreground" />
          <span className="font-semibold">{t.destination}:</span>
          <span>
            {language === 'kn' ? task.kannadaDestination : task.destination}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Leaf className="h-4 w-4 text-muted-foreground" />
          <span className="font-semibold">{t.cropType}:</span>
          <span>
            {language === 'kn' ? task.kannadaCropType : task.cropType}
          </span>
        </div>
        <div className="flex items-center gap-2 text-lg font-bold text-primary">
          <DollarSign className="h-5 w-5" />
          <span>{language === 'kn' ? task.kannadaFare : task.fare}</span>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button onClick={handleAccept} className="w-full">
          {t.accept} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button onClick={handleReject} variant="outline" className="w-full">
          {t.reject}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function DriverTasksPage() {
  const { language } = useLanguage();
  const t = translations[language].driver.tasks;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-headline text-3xl font-bold text-foreground">
          {t.title}
        </h1>
        <p className="text-muted-foreground">{t.description}</p>
      </div>

      {driverTasks.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {driverTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      ) : (
        <div className="flex h-64 items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 bg-card">
          <p className="text-muted-foreground">{t.noTasks}</p>
        </div>
      )}
    </div>
  );
}
