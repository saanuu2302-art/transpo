'use client';

import { useParams, useRouter } from 'next/navigation';
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
import { ArrowLeft, User, Tag, Map, Warehouse, Pin, Leaf, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { Label } from '@/components/ui/label';
import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';
import { useDoc } from '@/firebase';
import { useFirestore, useUser } from '@/firebase';
import { doc, addDoc, collection } from 'firebase/firestore';
import type { Vehicle } from '@/lib/data';

export default function VehicleDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const { language } = useLanguage();
  const { toast } = useToast();
  const t = translations[language];
  const firestore = useFirestore();
  const { user } = useUser();
  
  const vehicleRef = firestore && id ? doc(firestore, 'vehicles', Array.isArray(id) ? id[0] : id) : null;
  const { data: vehicle, loading: vehicleLoading } = useDoc<Vehicle>(vehicleRef);

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [cropType, setCropType] = useState('');
  const [isBooking, setIsBooking] = useState(false);

  if (vehicleLoading) {
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
                        <Skeleton className="h-48 w-full" />
                    </div>
                    <div className="space-y-4">
                        <Skeleton className="h-72 w-full" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Skeleton className="h-10 w-32" />
                </CardFooter>
            </Card>
        </div>
    );
  }

  if (!vehicle) {
    return <div>Vehicle not found</div>;
  }

  const handleBookingConfirm = async () => {
    if (!firestore || !user || !vehicle) return;
    if (!pickup || !destination || !cropType) {
      toast({
        variant: 'destructive',
        title: 'Missing Information',
        description: 'Please fill out all booking details.',
      });
      return;
    }
    
    setIsBooking(true);
    try {
      const pin = Math.floor(1000 + Math.random() * 9000).toString();
      
      const bookingData = {
        userId: user.uid,
        vehicleId: vehicle.id,
        driverId: vehicle.driverId,
        status: 'confirmed',
        pickup,
        destination,
        cropType,
        pin,
        createdAt: new Date(),
        fare: vehicle.cost,
      };

      const bookingRef = await addDoc(collection(firestore, 'bookings'), bookingData);

      toast({
        title: t.confirmation.success.title,
        description: t.confirmation.success.pinDescription(pin),
      });

      router.push(`/dashboard/vehicles/tracking?bookingId=${bookingRef.id}`);

    } catch (error) {
      console.error("Booking failed:", error);
      toast({
        variant: 'destructive',
        title: "Booking Failed",
        description: "Could not complete your booking. Please try again.",
      });
    } finally {
      setIsBooking(false);
    }
  };

  const tConfirm = t.confirmation;
  const currentVehicle = vehicle;

  return (
    <div className="max-w-4xl mx-auto">
       <Button variant="ghost" onClick={() => router.back()} className="mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" />
        {language === 'en' ? 'Back to Vehicles' : 'ವಾಹನಗಳಿಗೆ ಹಿಂತಿರುಗಿ'}
      </Button>
      <Card>
        <CardHeader>
           <CardTitle className="font-headline text-3xl">
              {tConfirm.title}
            </CardTitle>
            <CardDescription>
              {tConfirm.description(
                language === 'en' ? vehicle.name : vehicle.kannadaName
              )}
            </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
            <div className='space-y-4'>
                 <div className="relative aspect-video w-full rounded-md overflow-hidden">
                    {currentVehicle.image ? (
                        <Image
                            src={currentVehicle.image.imageUrl}
                            alt={currentVehicle.image.description}
                            fill
                            style={{ objectFit: 'cover'}}
                        />
                    ) : <Skeleton className="h-full w-full" />}
                 </div>
                 <div className="space-y-4 rounded-lg border p-4">
                     <div className="flex items-center gap-4">
                        <User className="h-5 w-5 text-muted-foreground" />
                        <div>
                            <p className="font-semibold">{tConfirm.details.owner}</p>
                            <p className="text-sm text-muted-foreground">{currentVehicle.ownerName}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <Tag className="h-5 w-5 text-muted-foreground" />
                        <div>
                            <p className="font-semibold">{tConfirm.details.price}</p>
                            <p className="text-sm text-muted-foreground">{currentVehicle.cost}</p>
                        </div>
                    </div>
                </div>
                 <div className="rounded-lg border p-4 space-y-4">
                    <div className="flex items-start gap-4">
                        <Warehouse className="h-5 w-5 text-muted-foreground mt-1" />
                        <div className="w-full space-y-1">
                            <Label htmlFor="pickup-location" className='font-semibold'>{tConfirm.details.pickupLocation}</Label>
                            <Input id="pickup-location" placeholder={tConfirm.details.pickupPlaceholder} value={pickup} onChange={(e) => setPickup(e.target.value)} />
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Pin className="h-5 w-5 text-muted-foreground mt-1" />
                        <div className="w-full space-y-1">
                            <Label htmlFor="destination" className='font-semibold'>{tConfirm.details.destination}</Label>
                            <Input id="destination" placeholder={tConfirm.details.destinationPlaceholder} value={destination} onChange={(e) => setDestination(e.target.value)} />
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Leaf className="h-5 w-5 text-muted-foreground mt-1" />
                        <div className="w-full space-y-1">
                            <Label htmlFor="crop-type" className='font-semibold'>{tConfirm.details.cropType}</Label>
                            <Input id="crop-type" placeholder={tConfirm.details.cropPlaceholder} value={cropType} onChange={(e) => setCropType(e.target.value)} />
                        </div>
                    </div>
                 </div>
            </div>
             <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Map className="h-5 w-5 text-muted-foreground mt-1" />
                  <div className='w-full'>
                    <p className="font-semibold">{tConfirm.details.liveTracking}</p>
                    <div className="mt-2 h-64 w-full rounded-md bg-muted flex items-center justify-center">
                      <p className="text-xs text-muted-foreground">{tConfirm.details.trackingPlaceholder}</p>
                    </div>
                  </div>
                </div>
              </div>

        </CardContent>
        <CardFooter>
            <Button onClick={handleBookingConfirm} className="w-full md:w-auto" disabled={isBooking}>
                {isBooking && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {tConfirm.confirm}
            </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
