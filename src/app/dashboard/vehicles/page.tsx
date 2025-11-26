'use client';

import Image from 'next/image';
import { Star, ArrowRight, Loader2 } from 'lucide-react';
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

function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const { language } = useLanguage();
  const t = translations[language].vehicleBooking;
  const router = useRouter();

  const handleBookNow = () => {
    router.push(`/dashboard/vehicles/${vehicle.id}`);
  };

  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-video">
        {vehicle.image && (
          <Image
            src={vehicle.image.imageUrl}
            alt={vehicle.image.description}
            fill
            style={{ objectFit: 'cover' }}
            data-ai-hint={vehicle.image.imageHint}
          />
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
  const { data: vehicles, loading } = useCollection<Vehicle>(vehiclesRef as any);

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
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      )}
    </div>
  );
}
