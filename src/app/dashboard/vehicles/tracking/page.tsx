'use client';

import { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
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
import { ArrowLeft, Star, Phone, KeyRound, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { useDoc, useFirestore } from '@/firebase';
import { doc } from 'firebase/firestore';
import type { Vehicle, Booking } from '@/lib/data';
import { Skeleton } from '@/components/ui/skeleton';

function VehicleTrackingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bookingId = searchParams.get('bookingId');

  const { language } = useLanguage();
  const { toast } = useToast();
  const t = translations[language];
  const firestore = useFirestore();

  const bookingRef = firestore && bookingId ? doc(firestore, 'bookings', bookingId) : null;
  const { data: booking, loading: bookingLoading } = useDoc<Booking>(bookingRef);

  const vehicleRef = firestore && booking ? doc(firestore, 'vehicles', booking.vehicleId) : null;
  const { data: vehicle, loading: vehicleLoading } = useDoc<Vehicle>(vehicleRef);

  const driverRef = firestore && vehicle ? doc(firestore, 'users', vehicle.driverId) : null;
  const { data: driver, loading: driverLoading } = useDoc(driverRef as any);

  const isLoading = bookingLoading || vehicleLoading || driverLoading;
  
  if (isLoading) {
     return (
        <div className="max-w-4xl mx-auto">
            <Skeleton className="h-10 w-48 mb-4" />
            <Card>
                <CardHeader>
                    <Skeleton className="h-8 w-1/2" />
                    <Skeleton className="h-4 w-3/4" />
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <Skeleton className="aspect-video w-full" />
                        <Skeleton className="h-24 w-full" />
                    </div>
                    <div className="space-y-4">
                        <Skeleton className="h-48 w-full" />
                        <Skeleton className="h-20 w-full" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Skeleton className="h-10 w-36" />
                </CardFooter>
            </Card>
        </div>
     )
  }

  if (!booking || !vehicle || !driver) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <p>Booking details not found.</p>
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
    router.push(`/dashboard/vehicles/payment?vehicleId=${vehicle.id}`);
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
                    {booking.pin && (
                        <div className="col-span-2">
                            <Separator className='my-2'/>
                            <div className="flex items-center gap-3">
                                <KeyRound className="h-5 w-5 text-muted-foreground" />
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">{t.tracking.verificationCode}</p>
                                    <p className="text-2xl font-bold tracking-widest text-primary">{booking.pin}</p>
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
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    )}
                 </div>
              </CardContent>
            </Card>
            <Card>
                <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                            <AvatarImage src={driver.photoURL || "https://picsum.photos/seed/driver/100/100"} alt={driver.displayName} data-ai-hint="driver portrait" />
                            <AvatarFallback>{driver.displayName?.charAt(0) || 'D'}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold">{driver.displayName}</p>
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


export default function VehicleTrackingPage() {
    return (
        <Suspense fallback={<Loader2 className="h-8 w-8 animate-spin" />}>
            <VehicleTrackingContent />
        </Suspense>
    )
}
