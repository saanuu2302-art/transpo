
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { vehicles } from '@/lib/data';
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
import { ArrowLeft, User, Star, Phone, KeyRound } from 'lucide-react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';


export default function VehicleTrackingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const vehicleId = searchParams.get('vehicleId');
  const pin = searchParams.get('pin');
  const vehicle = vehicles.find((v) => v.id === vehicleId);

  const { language } = useLanguage();
  const { toast } = useToast();
  const t = translations[language];

  if (!vehicle) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <p>Vehicle not found.</p>
        <Button onClick={() => router.push('/dashboard/vehicles')} className="mt-4">
          Go Back
        </Button>
      </div>
    );
  }

  const handlePayment = () => {
    toast({
      title: "Trip Completed",
      description: "Proceeding to payment.",
    });
    router.push(`/dashboard/vehicles/payment?vehicleId=${vehicleId}`);
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Button variant="ghost" onClick={() => router.push('/dashboard/vehicles')} className="mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" />
        {language === 'en' ? 'Back to Vehicles' : 'ವಾಹನಗಳಿಗೆ ಹಿಂತಿರುಗಿ'}
      </Button>
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-3xl">{t.tracking.title}</CardTitle>
          <CardDescription>{t.tracking.description}</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="aspect-video w-full rounded-md bg-muted flex items-center justify-center">
                <p className="text-sm text-muted-foreground">{t.tracking.mapPlaceholder}</p>
            </div>
            <Card>
                <CardContent className="p-4 grid grid-cols-2 items-center justify-between gap-4">
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">{t.tracking.status}</p>
                        <p className="text-lg font-semibold text-primary">{t.tracking.enRoute}</p>
                    </div>
                     <div>
                        <p className="text-sm font-medium text-muted-foreground">{t.tracking.eta}</p>
                        <p className="text-lg font-semibold">15 {t.tracking.minutes}</p>
                    </div>
                    {pin && (
                        <div className="col-span-2">
                            <Separator className='my-2'/>
                            <div className="flex items-center gap-3">
                                <KeyRound className="h-5 w-5 text-muted-foreground" />
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">{t.tracking.verificationCode}</p>
                                    <p className="text-2xl font-bold tracking-widest text-primary">{pin}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
          </div>
          <div className="space-y-4">
            <Card>
              <CardHeader className='pb-2'>
                <CardTitle className="text-xl font-headline">
                  {language === 'en' ? vehicle.name : vehicle.kannadaName}
                </CardTitle>
                <CardDescription>{vehicle.cost}</CardDescription>
              </CardHeader>
              <CardContent>
                 <div className="relative aspect-video w-full rounded-md overflow-hidden">
                    {vehicle.image && (
                        <Image
                            src={vehicle.image.imageUrl}
                            alt={vehicle.image.description}
                            layout="fill"
                            objectFit="cover"
                        />
                    )}
                 </div>
              </CardContent>
            </Card>
            <Card>
                <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                            <AvatarImage src="https://picsum.photos/seed/driver/100/100" alt="Driver" data-ai-hint="driver portrait" />
                            <AvatarFallback>D</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold">{vehicle.owner}</p>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Star className="h-4 w-4 fill-accent text-accent" />
                                <span>{vehicle.rating}</span>
                            </div>
                        </div>
                        <Button variant="outline" size="icon" className="ml-auto">
                            <Phone className="h-5 w-5" />
                        </Button>
                    </div>
                </CardContent>
            </Card>
          </div>
        </CardContent>
        <CardFooter>
            <Button className="w-full md:w-auto" onClick={handlePayment}>
                {t.tracking.goToPayment}
            </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
