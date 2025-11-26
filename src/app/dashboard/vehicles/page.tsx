'use client';

import Image from 'next/image';
import { Star, ArrowRight, LocateFixed } from 'lucide-react';
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
import type { Vehicle } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import { useCollection, useFirestore } from '@/firebase';
import { collection } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';
import { useEffect, useState, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

function VehicleCard({
  vehicle,
  isNearest,
  cardRef,
}: {
  vehicle: Vehicle;
  isNearest: boolean;
  cardRef: React.RefObject<HTMLDivElement> | null;
}) {
  const { language } = useLanguage();
  const t = translations[language].vehicleBooking;
  const router = useRouter();

  const handleBookNow = () => {
    router.push(`/dashboard/vehicles/${vehicle.id}`);
  };

  return (
    <Card
      ref={cardRef}
      className={`flex flex-col overflow-hidden transition-all hover:shadow-lg ${
        isNearest ? 'ring-2 ring-primary shadow-lg' : ''
      }`}
    >
      <div className="relative aspect-video">
        {vehicle.image ? (
          <Image
            src={vehicle.image.imageUrl}
            alt={vehicle.image.description}
            width={600}
            height={400}
            className="object-cover"
            data-ai-hint={vehicle.image.imageHint}
          />
        ) : (
          <Skeleton className="h-full w-full" />
        )}
        {isNearest && (
          <Badge className="absolute right-2 top-2">{t.nearest}</Badge>
        )}
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="font-headline text-xl">
            {language === 'en' ? vehicle.name : vehicle.kannadaName}
          </CardTitle>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-accent text-accent" />
            {vehicle.rating}
          </Badge>
        </div>
        <CardDescription>{vehicle.cost}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow"></CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleBookNow}>
          {t.bookNow} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function VehicleBookingPage() {
  const { language } = useLanguage();
  const t = translations[language].vehicleBooking;
  const firestore = useFirestore();
  const vehiclesRef = firestore ? collection(firestore, 'vehicles') : null;
  const { data: vehicles, loading } = useCollection<Vehicle>(
    vehiclesRef as any
  );
  const { toast } = useToast();

  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [nearestVehicleId, setNearestVehicleId] = useState<string | null>(null);
  const nearestVehicleRef = useRef<HTMLDivElement>(null);

  const handleFindNearest = () => {
    if (!navigator.geolocation) {
      toast({
        variant: 'destructive',
        title: t.locationError.title,
        description: t.locationError.notSupported,
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        toast({
          variant: 'destructive',
          title: t.locationError.title,
          description: t.locationError.permissionDenied,
        });
      }
    );
  };

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

  useEffect(() => {
    if (userLocation && vehicles.length > 0) {
      let closestVehicle: Vehicle | null = null;
      let minDistance = Infinity;

      vehicles.forEach((vehicle) => {
        if(vehicle.lat && vehicle.lng) {
          const distance = haversineDistance(
            userLocation.lat,
            userLocation.lng,
            vehicle.lat,
            vehicle.lng
          );
          if (distance < minDistance) {
            minDistance = distance;
            closestVehicle = vehicle;
          }
        }
      });

      if (closestVehicle) {
        setNearestVehicleId(closestVehicle.id);
      }
    }
  }, [userLocation, vehicles]);

  useEffect(() => {
    if (nearestVehicleId && nearestVehicleRef.current) {
      nearestVehicleRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [nearestVehicleId]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="font-headline text-3xl font-bold text-foreground">
            {t.title}
          </h1>
          <p className="text-muted-foreground">{t.description}</p>
        </div>
        <Button onClick={handleFindNearest}>
          <LocateFixed className="mr-2 h-4 w-4" />
          {t.findNearest}
        </Button>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i}>
              <Skeleton className="aspect-video w-full" />
              <CardHeader>
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent className="flex-grow"></CardContent>
              <CardFooter>
                <Skeleton className="h-10 w-full" />
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {vehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              isNearest={vehicle.id === nearestVehicleId}
              cardRef={vehicle.id === nearestVehicleId ? nearestVehicleRef : null}
            />
          ))}
        </div>
      )}
    </div>
  );
}
