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
import { ArrowLeft, User, Tag, MapPin, Milestone, Leaf, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useState, useEffect } from 'react';
import { vehicles, type Vehicle, bookingHistory } from '@/lib/data';
import { Skeleton } from '@/components/ui/skeleton';
import { format } from 'date-fns';

export default function VehicleDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const { language } = useLanguage();
  const { toast } = useToast();
  const t = translations[language];

  const [vehicle, setVehicle] = useState<Vehicle | null | undefined>(undefined);
  
  useEffect(() => {
    // Simulate fetching data
    const foundVehicle = vehicles.find(v => v.id === id);
    setVehicle(foundVehicle);
  }, [id]);

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [cropType, setCropType] = useState('');
  const [isBooking, setIsBooking] = useState(false);

  const handleBookingConfirm = async () => {
    if (!vehicle) return;
    if (!pickup || !destination || !cropType) {
        toast({
            variant: 'destructive',
            title: 'Missing Information',
            description: 'Please fill in all booking details.',
        });
        return;
    }
    
    setIsBooking(true);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call

    try {
        const pin = Math.floor(1000 + Math.random() * 9000).toString();
        
        toast({
          title: t.confirmation.success.title,
          description: t.confirmation.success.pinDescription(pin),
        });

        const fakeBookingId = `booking_${Date.now()}`;
        router.push(`/dashboard/vehicles/tracking?bookingId=${fakeBookingId}&vehicleId=${vehicle.id}&pin=${pin}`);

    } catch (error) {
        console.error("Booking failed:", error);
        toast({
            variant: 'destructive',
            title: 'Booking Failed',
            description: 'Something went wrong. Please try again.',
        });
    } finally {
        setIsBooking(false);
    }
  };

  const handleCancelBooking = () => {
    if (!vehicle) return;

    const newBooking = {
      id: `h${bookingHistory.length + 1}`,
      item: vehicle.name,
      kannadaItem: vehicle.kannadaName,
      date: format(new Date(), 'yyyy-MM-dd'),
      cost: vehicle.cost.split(' ')[0], 
      status: 'Cancelled' as const,
      kannadaStatus: 'ರದ್ದುಪಡಿಸಲಾಗಿದೆ' as const,
    };
    bookingHistory.unshift(newBooking);

    toast({
        variant: "destructive",
        title: "Booking Cancelled",
        description: `Your booking for the ${language === 'kn' ? vehicle.kannadaName : vehicle.name} has been cancelled.`
    });

    router.back();
  }

  if (vehicle === undefined) {
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
                     <div className="space-y-6">
                        <Skeleton className="h-20 w-full" />
                        <Skeleton className="h-20 w-full" />
                        <Skeleton className="h-20 w-full" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Skeleton className="h-10 w-48" />
                </CardFooter>
            </Card>
        </div>
    );
  }
  
  if (vehicle === null) {
    return <div>Error loading vehicle details. Vehicle not found.</div>;
  }


  const tConfirm = t.confirmation;
  const vehicleName = language === 'en' ? vehicle.name : vehicle.kannadaName;

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
          <CardDescription>{tConfirm.description(vehicleName)}</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="relative aspect-video w-full rounded-md overflow-hidden">
              <Image
                src={vehicle.image.imageUrl}
                alt={vehicle.image.description}
                layout="fill"
                objectFit="cover"
                data-ai-hint={vehicle.image.imageHint}
              />
            </div>

            <div className="grid grid-cols-2 gap-4 rounded-lg border p-4">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-semibold">{t.machineBooking.owner}</p>
                  <p className="text-sm text-muted-foreground">{vehicle.ownerName}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Tag className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-semibold">{tConfirm.details.price}</p>
                  <p className="text-sm text-muted-foreground">{vehicle.cost}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-muted-foreground mt-2.5" />
              <div className="w-full space-y-1.5">
                <Label htmlFor="pickup" className="font-semibold">
                  {tConfirm.details.pickupLocation}
                </Label>
                <Input id="pickup" placeholder={tConfirm.details.pickupPlaceholder} value={pickup} onChange={(e) => setPickup(e.target.value)} />
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Milestone className="h-5 w-5 text-muted-foreground mt-2.5" />
              <div className="w-full space-y-1.5">
                <Label htmlFor="destination" className="font-semibold">
                  {tConfirm.details.destination}
                </Label>
                <Input id="destination" placeholder={tConfirm.details.destinationPlaceholder} value={destination} onChange={(e) => setDestination(e.target.value)} />
              </div>
            </div>
             <div className="flex items-start gap-4">
              <Leaf className="h-5 w-5 text-muted-foreground mt-2.5" />
              <div className="w-full space-y-1.5">
                <Label htmlFor="crop" className="font-semibold">
                  {tConfirm.details.cropType}
                </Label>
                <Input id="crop" placeholder={tConfirm.details.cropPlaceholder} value={cropType} onChange={(e) => setCropType(e.target.value)} />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button onClick={handleBookingConfirm} className="w-full md:w-auto" disabled={isBooking}>
            {isBooking && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {tConfirm.confirm}
          </Button>
          <Button
            onClick={handleCancelBooking}
            variant="outline"
            className="w-full md:w-auto"
            disabled={isBooking}
          >
            {tConfirm.cancel}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
