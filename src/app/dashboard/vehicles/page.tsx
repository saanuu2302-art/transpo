
'use client';

import Image from 'next/image';
import { Star, ArrowRight, User, Tag, Map, CreditCard } from 'lucide-react';
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
} from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
import { useState, useEffect } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

function VehicleCard({
  vehicle,
  isNearest,
  onBook,
}: {
  vehicle: Vehicle;
  isNearest: boolean;
  onBook: (vehicle: Vehicle) => void;
}) {
  const { language } = useLanguage();
  const t = translations[language].vehicleBooking;

  return (
    <Card
      className={`flex flex-col overflow-hidden transition-all hover:shadow-lg ${
        isNearest ? 'border-primary ring-2 ring-primary' : ''
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
          <Badge
            variant="default"
            className="absolute right-2 top-2"
          >
            {t.nearest}
          </Badge>
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
        <Button className="w-full" onClick={() => onBook(vehicle)}>
          {t.bookNow} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function VehicleBookingPage() {
  const { language } = useLanguage();
  const t = translations[language].vehicleBooking;
  const tConfirm = translations[language].confirmation;
  const { toast } = useToast();
  const [nearestVehicleId, setNearestVehicleId] = useState<string | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Using useEffect to avoid hydration errors with navigator
  useEffect(() => {
    // This effect runs only on the client
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

  const handleBookNow = (clickedVehicle: Vehicle) => {
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
        const { latitude, longitude } = position.coords;
        
        let closestVehicle: Vehicle | null = null;
        let minDistance = Infinity;

        // Find the nearest vehicle of the same type as the one clicked
        vehicles
          .filter(v => v.name === clickedVehicle.name)
          .forEach((vehicle) => {
            if (vehicle.lat && vehicle.lng) {
              const distance = getDistance(latitude, longitude, vehicle.lat, vehicle.lng);
              if (distance < minDistance) {
                minDistance = distance;
                closestVehicle = vehicle;
              }
            }
        });
        
        const vehicleToBook = closestVehicle || clickedVehicle;

        setNearestVehicleId(vehicleToBook.id);
        setSelectedVehicle(vehicleToBook);
        setIsDialogOpen(true);
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
  
  const handleBookingConfirm = () => {
     if (!selectedVehicle) return;
    toast({
      title: tConfirm.success.title,
      description: `${
        language === 'en'
          ? selectedVehicle.name
          : selectedVehicle.kannadaName
      } ${tConfirm.success.description}`,
    });
    setIsDialogOpen(false);
    setSelectedVehicle(null);
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
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {vehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle.id}
            vehicle={vehicle}
            isNearest={nearestVehicleId === vehicle.id}
            onBook={handleBookNow}
          />
        ))}
      </div>
      
       <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent className="sm:max-w-md">
          {selectedVehicle && (
            <>
              <AlertDialogHeader>
                <AlertDialogTitle className="font-headline text-2xl">{tConfirm.title}</AlertDialogTitle>
                <AlertDialogDescription>
                  {tConfirm.description(
                    language === 'en' ? selectedVehicle.name : selectedVehicle.kannadaName
                  )}
                </AlertDialogDescription>
              </AlertDialogHeader>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <User className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-semibold">{tConfirm.details.owner}</p>
                    <p className="text-sm text-muted-foreground">{selectedVehicle.owner}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Tag className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-semibold">{tConfirm.details.price}</p>
                    <p className="text-sm text-muted-foreground">{selectedVehicle.cost}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Map className="h-5 w-5 text-muted-foreground mt-1" />
                  <div>
                    <p className="font-semibold">{tConfirm.details.liveTracking}</p>
                    <div className="mt-2 h-24 w-full rounded-md bg-muted flex items-center justify-center">
                      <p className="text-xs text-muted-foreground">{tConfirm.details.trackingPlaceholder}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CreditCard className="h-5 w-5 text-muted-foreground mt-1" />
                  <div>
                    <p className="font-semibold">{tConfirm.details.payment}</p>
                    <RadioGroup defaultValue="cod" className="mt-2 space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="cod" id="cod" />
                          <Label htmlFor="cod">{tConfirm.details.cod}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="upi" id="upi" />
                          <Label htmlFor="upi">{tConfirm.details.upi}</Label>
                        </div>
                      </RadioGroup>
                  </div>
                </div>
              </div>


              <AlertDialogFooter>
                <AlertDialogCancel onClick={() => {
                  setIsDialogOpen(false);
                  setSelectedVehicle(null);
                }}>{tConfirm.cancel}</AlertDialogCancel>
                <AlertDialogAction onClick={handleBookingConfirm}>
                  {tConfirm.confirm}
                </AlertDialogAction>
              </AlertDialogFooter>
            </>
          )}
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
