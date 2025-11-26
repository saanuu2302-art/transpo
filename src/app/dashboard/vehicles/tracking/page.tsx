'use client';

import { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, User, Star, Copy, Info } from 'lucide-react';
import { useDoc, useFirestore } from '@/firebase';
import { doc } from 'firebase/firestore';
import type { Booking, Vehicle } from '@/lib/data';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';

function TrackingPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bookingId = searchParams.get('bookingId');
  const { language } = useLanguage();
  const { toast } = useToast();
  const t = translations[language].tracking;

  const firestore = useFirestore();
  
  const bookingDocRef = firestore && bookingId ? doc(firestore, 'bookings', bookingId) : null;
  const { data: booking, loading: bookingLoading, error: bookingError } = useDoc<Booking>(bookingDocRef);

  const vehicleDocRef = firestore && booking?.vehicleId ? doc(firestore, 'vehicles', booking.vehicleId) : null;
  const { data: vehicle, loading: vehicleLoading, error: vehicleError } = useDoc<Vehicle>(vehicleDocRef);

  const handleCopyPin = () => {
    if (booking?.pin) {
        navigator.clipboard.writeText(booking.pin);
        toast({
            title: "PIN Copied!",
            description: "The verification PIN has been copied to your clipboard.",
        })
    }
  }

  if (bookingLoading || vehicleLoading) {
    return (
         <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Skeleton className="h-10 w-10" />
                <div className="space-y-2">
                    <Skeleton className="h-8 w-48" />
                    <Skeleton className="h-4 w-64" />
                </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
                <Skeleton className="lg:col-span-2 aspect-video w-full rounded-lg" />
                <div className="space-y-6">
                    <Skeleton className="h-64 w-full" />
                    <Skeleton className="h-48 w-full" />
                </div>
            </div>
        </div>
    );
  }

  if (bookingError || vehicleError || !booking || !vehicle) {
    return <div>Error loading tracking details. Please try again.</div>;
  }

  const eta = Math.floor(Math.random() * 25) + 5; // Placeholder ETA

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => router.push('/dashboard')}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
           <h1 className="font-headline text-3xl font-bold text-foreground">{t.title}</h1>
           <p className="text-muted-foreground">{t.description}</p>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
             <div className="aspect-video w-full rounded-lg bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">{t.mapPlaceholder}</p>
            </div>
        </div>
        <div className="lg:col-span-1 space-y-6">
           <Card>
            <CardHeader>
                <CardTitle>{t.verificationCode}</CardTitle>
                <CardDescription>Share this code with the driver upon arrival.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-center gap-2 p-4 border-2 border-dashed rounded-lg">
                    <p className="text-4xl font-bold tracking-widest">{booking.pin}</p>
                    <Button variant="ghost" size="icon" onClick={handleCopyPin}>
                        <Copy className="h-6 w-6" />
                    </Button>
                </div>
            </CardContent>
           </Card>
           <Card>
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <div className="relative h-16 w-16 rounded-md overflow-hidden">
                             <Image src={vehicle.image.imageUrl} alt={vehicle.name} layout="fill" objectFit="cover" />
                        </div>
                        <div>
                             <CardTitle>{language === 'en' ? vehicle.name : vehicle.kannadaName}</CardTitle>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Star className="h-4 w-4 fill-accent text-accent" />
                                <span>{vehicle.rating}</span>
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Separator />
                     <div className="flex items-center justify-between">
                        <p className="font-semibold text-muted-foreground">{t.status}</p>
                        <Badge variant="secondary" className="capitalize">{t.enRoute}</Badge>
                    </div>
                     <div className="flex items-center justify-between">
                        <p className="font-semibold text-muted-foreground">{t.eta}</p>
                        <p className="font-bold">{eta} {t.minutes}</p>
                    </div>
                     <Separator />
                    <div className="flex items-center gap-3">
                        <User className="h-5 w-5 text-muted-foreground" />
                        <p className="font-semibold">{vehicle.ownerName}</p>
                    </div>
                </CardContent>
                 <CardFooter>
                    <Button className="w-full" onClick={() => router.push('/dashboard/payment')}>
                        {t.goToPayment}
                    </Button>
                </CardFooter>
           </Card>
        </div>
      </div>
    </div>
  );
}


export default function TrackingPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <TrackingPageContent />
        </Suspense>
    )
}
