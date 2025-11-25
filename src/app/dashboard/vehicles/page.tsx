'use client';

import Image from 'next/image';
import { Star, ArrowRight, LocateFixed, Loader2 } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { vehicles, type Vehicle } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const haversineDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers
  return distance;
};

function VehicleCard({
  vehicle,
  isNearest,
}: {
  vehicle: Vehicle;
  isNearest: boolean;
}) {
  const { language } = useLanguage();
  const { toast } = useToast();
  const t = translations[language].vehicleBooking;
  const tConfirm = translations[language].confirmation;

  const handleBooking = () => {
    toast({
      title: tConfirm.success.title,
      description: `${
        language === 'en' ? vehicle.name : vehicle.kannadaName
      } ${tConfirm.success.description}`,
    });
  };

  return (
    <Card
      className={`flex flex-col overflow-hidden transition-all hover:shadow-lg ${
        isNearest ? 'border-primary border-2 shadow-lg' : ''
      }`}
    >
      <div className="relative aspect-video">
        {vehicle.image && (
          <Image
            src={vehicle.image.imageUrl}
            alt={vehicle.image.description}
            layout="fill"
            objectFit="cover"
            data-ai-hint={vehicle.image.imageHint}
          />
        )}
        {isNearest && (
          <Badge className="absolute top-2 right-2">{t.nearest}</Badge>
        )}
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="font-headline text-xl">
            {language === 'en' ? vehicle.name : vehicle.kannadaName}
          </CardTitle>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Star className="h-4 w-4 text-accent fill-accent" />
            {vehicle.rating}
          </Badge>
        </div>
        <CardDescription>{vehicle.cost}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow"></CardContent>
      <CardFooter>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="w-full">
              {t.bookNow} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{tConfirm.title}</AlertDialogTitle>
              <AlertDialogDescription>
                {tConfirm.description(
                  language === 'en' ? vehicle.name : vehicle.kannadaName
                )}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>{tConfirm.cancel}</AlertDialogCancel>
              <AlertDialogAction onClick={handleBooking}>
                {tConfirm.confirm}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
}

export default function VehicleBookingPage() {
  const { language } = useLanguage();
  const t = translations[language].vehicleBooking;
  const { toast } = useToast();
  const [nearestVehicleId, setNearestVehicleId] = useState<string | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  const findNearestVehicle = () => {
    setIsLoading(true);
    setNearestVehicleId(null);

    if (!navigator.geolocation) {
      toast({
        variant: 'destructive',
        title: t.locationError.title,
        description: t.locationError.notSupported,
      });
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        let nearest: Vehicle | null = null;
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
            nearest = vehicle;
          }
        });

        if (nearest) {
          setNearestVehicleId(nearest.id);
        }
        setIsLoading(false);
      },
      (error) => {
        toast({
          variant: 'destructive',
          title: t.locationError.title,
          description: t.locationError.permissionDenied,
        });
        setIsLoading(false);
      }
    );
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="font-headline text-3xl font-bold text-foreground">
            {t.title}
          </h1>
          <p className="text-muted-foreground">{t.description}</p>
        </div>
        <Button onClick={findNearestVehicle} disabled={isLoading}>
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <LocateFixed className="mr-2 h-4 w-4" />
          )}
          {t.findNearest}
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {vehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle.id}
            vehicle={vehicle}
            isNearest={vehicle.id === nearestVehicleId}
          />
        ))}
      </div>
    </div>
  );
}
