
'use client';

import { useParams, useRouter } from 'next/navigation';
import { machines } from '@/lib/data';
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
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, User, Tag, Clock } from 'lucide-react';
import Image from 'next/image';

export default function MachineDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const { language } = useLanguage();
  const { toast } = useToast();
  const t = translations[language];
  const machine = machines.find((m) => m.id === id);

  if (!machine) {
    // Optionally, render a not found page or redirect
    return <div>Machine not found</div>;
  }

  const handleBookingConfirm = () => {
    toast({
      title: t.confirmation.success.title,
      description: `${language === 'en' ? machine.name : machine.kannadaName} ${t.confirmation.success.description}`,
    });
    router.push('/dashboard/machines');
  };
  
  const tConfirm = t.confirmation;
  const machineName = language === 'en' ? machine.name : machine.kannadaName;

  return (
    <div className="max-w-2xl mx-auto">
       <Button variant="ghost" onClick={() => router.back()} className="mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" />
        {language === 'en' ? 'Back to Machines' : 'ಯಂತ್ರಗಳಿಗೆ ಹಿಂತಿರುಗಿ'}
      </Button>
      <Card>
        <CardHeader>
           <CardTitle className="font-headline text-3xl">
              {tConfirm.title}
            </CardTitle>
            <CardDescription>
              {tConfirm.description(machineName)}
            </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="relative aspect-video w-full rounded-md overflow-hidden">
                {machine.image ? (
                    <Image
                        src={machine.image.imageUrl}
                        alt={machine.image.description}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={machine.image.imageHint}
                    />
                ) : null}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-lg border p-4">
                 <div className="flex items-center gap-4">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <div>
                        <p className="font-semibold">{t.machineBooking.owner}</p>
                        <p className="text-sm text-muted-foreground">{machine.owner}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Tag className="h-5 w-5 text-muted-foreground" />
                    <div>
                        <p className="font-semibold">{t.confirmation.details.price}</p>
                        <p className="text-sm text-muted-foreground">{machine.cost}</p>
                    </div>
                </div>
            </div>
            
            <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-muted-foreground mt-1" />
                  <div className='w-full'>
                    <p className="font-semibold">{t.machineBooking.usageHours}</p>
                    <p className="text-xs text-muted-foreground">{t.machineBooking.usageDescription}</p>
                    <div className="mt-2 h-48 w-full rounded-md bg-muted flex items-center justify-center">
                      <p className="text-xs text-muted-foreground">{t.machineBooking.liveUsagePlaceholder}</p>
                    </div>
                  </div>
                </div>
            </div>

        </CardContent>
        <CardFooter>
            <Button onClick={handleBookingConfirm} className="w-full md:w-auto">
                {tConfirm.confirm}
            </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
