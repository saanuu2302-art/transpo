
'use client';

import { useParams, useRouter } from 'next/navigation';
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
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, User, Tag, Map, Warehouse, Pin, Leaf } from 'lucide-react';
import Image from 'next/image';
import { Label } from '@/components/ui/label';
import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';

export default function VehicleDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const { language } = useLanguage();
  const { toast } = useToast();
  const t = translations[language];
  const vehicle = vehicles.find((v) => v.id === id);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) => {
    const R = 6371; // Radius of the earth in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  };
  
  const [nearestVehicle, setNearestVehicle] = useState(vehicle);

  useEffect(() => {
    if (!isClient || !vehicle) return;

    if (!navigator.geolocation) {
      toast({
        variant: 'destructive',
        title: t.vehicleBooking.locationError.title,
        description: t.vehicleBooking.locationError.notSupported,
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        
        let closest: typeof vehicle | null = null;
        let minDistance = Infinity;

        vehicles
          .filter(v => v.name === vehicle.name)
          .forEach((v) => {
            if (v.lat && v.lng) {
              const distance = getDistance(latitude, longitude, v.lat, v.lng);
              if (distance < minDistance) {
                minDistance = distance;
                closest = v;
              }
            }
        });
        
        setNearestVehicle(closest || vehicle);
      },
      () => {
        // Silently fail or show a less intrusive message
        console.warn('Could not get location. Using selected vehicle details.');
      }
    );

  }, [isClient, vehicle, t, toast]);


  if (!vehicle) {
    return <div>Vehicle not found</div>;
  }

  const handleBookingConfirm = () => {
    if (!nearestVehicle) return;
    const pin = Math.floor(1000 + Math.random() * 9000).toString();
    toast({
      title: t.confirmation.success.title,
      description: t.confirmation.success.pinDescription(pin),
    });
    router.push(`/dashboard/vehicles/tracking?vehicleId=${nearestVehicle.id}&pin=${pin}`);
  };

  const tConfirm = t.confirmation;
  const currentVehicle = nearestVehicle || vehicle;

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
                            layout="fill"
                            objectFit="cover"
                        />
                    ) : <Skeleton className="h-full w-full" />}
                    {currentVehicle.id === vehicle.id ? null : (
                        <Badge variant="default" className="absolute right-2 top-2">
                            {t.vehicleBooking.nearest}
                        </Badge>
                    )}
                 </div>
                 <div className="space-y-4 rounded-lg border p-4">
                     <div className="flex items-center gap-4">
                        <User className="h-5 w-5 text-muted-foreground" />
                        <div>
                            <p className="font-semibold">{tConfirm.details.owner}</p>
                            <p className="text-sm text-muted-foreground">{currentVehicle.owner}</p>
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
                            <Input id="pickup-location" placeholder={tConfirm.details.pickupPlaceholder} />
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Pin className="h-5 w-5 text-muted-foreground mt-1" />
                        <div className="w-full space-y-1">
                            <Label htmlFor="destination" className='font-semibold'>{tConfirm.details.destination}</Label>
                            <Input id="destination" placeholder={tConfirm.details.destinationPlaceholder} />
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Leaf className="h-5 w-5 text-muted-foreground mt-1" />
                        <div className="w-full space-y-1">
                            <Label htmlFor="crop-type" className='font-semibold'>{tConfirm.details.cropType}</Label>
                            <Input id="crop-type" placeholder={tConfirm.details.cropPlaceholder} />
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
            <Button onClick={handleBookingConfirm} className="w-full md:w-auto">
                {tConfirm.confirm}
            </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
