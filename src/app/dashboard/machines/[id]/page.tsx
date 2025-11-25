
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
import { ArrowLeft, User, Tag, Clock, CalendarIcon, MapPin } from 'lucide-react';
import Image from 'next/image';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

export default function MachineDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const { language } = useLanguage();
  const { toast } = useToast();
  const t = translations[language];
  const machine = machines.find((m) => m.id === id);
  const [date, setDate] = useState<Date>();

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
    <div className="max-w-4xl mx-auto">
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
        <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
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

                <div className="grid grid-cols-2 gap-4 rounded-lg border p-4">
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
                            <p className="font-semibold">{tConfirm.details.price}</p>
                            <p className="text-sm text-muted-foreground">{machine.cost}</p>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg border p-4 space-y-4">
                    <div className="flex items-start gap-4">
                        <CalendarIcon className="h-5 w-5 text-muted-foreground mt-1" />
                        <div className="w-full space-y-1">
                            <Label htmlFor="booking-date" className='font-semibold'>{tConfirm.details.date}</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP") : <span>{tConfirm.details.datePlaceholder}</span>}
                                </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <MapPin className="h-5 w-5 text-muted-foreground mt-1" />
                        <div className="w-full space-y-1">
                            <Label htmlFor="location" className='font-semibold'>{tConfirm.details.location}</Label>
                            <Input id="location" placeholder={tConfirm.details.locationPlaceholder} />
                        </div>
                    </div>
                 </div>
            </div>
            
            <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-muted-foreground mt-1" />
                  <div className='w-full'>
                    <p className="font-semibold">{t.machineBooking.usageHours}</p>
                    <p className="text-xs text-muted-foreground">{t.machineBooking.usageDescription}</p>
                    <div className="mt-2 h-96 w-full rounded-md bg-muted flex items-center justify-center">
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
