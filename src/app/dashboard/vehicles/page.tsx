'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import { ArrowRight, Star } from 'lucide-react';
import { vehicles, type Vehicle } from '@/lib/data';
import { Skeleton } from '@/components/ui/skeleton';
import { useState, useEffect } from 'react';

function VehicleCard({
  vehicle
}: {
  vehicle: Vehicle;
}) {
  const { language } = useLanguage();
  const t = translations[language].vehicleBooking;
  const router = useRouter();

  return (
      <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 relative">
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
  );
}

export default function VehicleBookingPage() {
  const { language } = useLanguage();
  const t = translations[language].vehicleBooking;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
        setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

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
            vehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
              />
            ))
        )}
      </div>
    </div>
  );
}
