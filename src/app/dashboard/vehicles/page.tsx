'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
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
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, LocateFixed, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useCollection } from '@/firebase';
import { collection } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import type { Vehicle } from '@/lib/data';
import { Skeleton } from '@/components/ui/skeleton';

function VehicleCard({
  vehicle,
  isNearest,
  cardRef,
}: {
  vehicle: Vehicle;
  isNearest: boolean;
  cardRef: React.RefObject<HTMLDivElement>;
}) {
  const { language } = useLanguage();
  const t = translations[language].vehicleBooking;
  const router = useRouter();

  return (
    <div ref={cardRef}>
      <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 relative">
         {isNearest && (
          <Badge className="absolute top-2 right-2 border-primary bg-primary/10 text-primary">
            {t.nearest}
          </Badge>
        )}
        <div className="relative aspect-video">
          <Image
            src={vehicle.image.imageUrl}
            alt={vehicle.image.description}
            layout="fill"
            objectFit="cover"
            data-ai-hint={vehicle.image.imageHint}
          />
        </div>
        <CardHeader>
          <CardTitle className="font-headline text-xl">
            {language === 'en' ? vehicle.name : vehicle.kannadaName}
          </CardTitle>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span>{vehicle.rating}</span>
            </div>
            <span className="text-sm text-muted-foreground">•</span>
            <p className="text-sm text-muted-foreground">
                {vehicle.cost}
            </p>
          </div>
        </CardHeader>
        <CardContent className="flex-grow"></CardContent>
        <CardFooter>
          <Button
            className="w-full"
            onClick={() => router.push(`/dashboard/vehicles/${vehicle.id}`)}
          >
            {t.bookNow} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

const haversineDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
};

export default function VehicleBookingPage() {
  const { language } = useLanguage();
  const t = translations[language].vehicleBooking;
  const { toast } = useToast();
  const firestore = useFirestore();
  const vehiclesCollection = firestore ? collection(firestore, 'vehicles') : null;
  const { data: vehicles, loading, error } = useCollection<Vehicle>(vehiclesCollection);
  
  const [nearestVehicleId, setNearestVehicleId] = useState<string | null>(null);
  const [isFindingLocation, setIsFindingLocation] = useState(false);
  const vehicleRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
  vehicleRefs.current = vehicles.map((_, i) => vehicleRefs.current[i] ?? React.createRef());


  const findNearestVehicle = () => {
    if (!navigator.geolocation) {
      toast({
        variant: 'destructive',
        title: t.locationError.title,
        description: t.locationError.notSupported,
      });
      return;
    }

    setIsFindingLocation(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        let nearestId: string | null = null;
        let minDistance = Infinity;

        vehicles.forEach((vehicle) => {
          const distance = haversineDistance(
            latitude,
            longitude,
            vehicle.lat,
            vehicle.lng
          );
          if (distance < minDistance) {
            minDistance = distance;
            nearestId = vehicle.id;
          }
        });

        setNearestVehicleId(nearestId);
        setIsFindingLocation(false);
      },
      (error) => {
        toast({
          variant: 'destructive',
          title: t.locationError.title,
          description: t.locationError.permissionDenied,
        });
        setIsFindingLocation(false);
      }
    );
  };
  
   useEffect(() => {
    if (nearestVehicleId) {
      const nearestVehicleIndex = vehicles.findIndex(v => v.id === nearestVehicleId);
      if (nearestVehicleIndex !== -1 && vehicleRefs.current[nearestVehicleIndex]?.current) {
        vehicleRefs.current[nearestVehicleIndex].current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }
  }, [nearestVehicleId, vehicles]);

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="font-headline text-3xl font-bold text-foreground">
            {t.title}
          </h1>
          <p className="text-muted-foreground">{t.description}</p>
        </div>
        <Button onClick={findNearestVehicle} disabled={isFindingLocation}>
          {isFindingLocation ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <LocateFixed className="mr-2 h-4 w-4" />
          )}
          {t.findNearest}
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {loading ? (
            Array.from({ length: 4 }).map((_, index) => (
                <Card key={index}>
                    <CardContent className="p-0">
                        <Skeleton className="w-full h-40" />
                    </CardContent>
                    <CardHeader>
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                    </CardHeader>
                    <CardFooter>
                         <Skeleton className="h-10 w-full" />
                    </CardFooter>
                </Card>
            ))
        ) : (
            vehicles.map((vehicle, index) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                isNearest={vehicle.id === nearestVehicleId}
                cardRef={vehicleRefs.current[index]}
              />
            ))
        )}
      </div>
    </div>
  );
}
