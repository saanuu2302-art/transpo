'use client';

import Image from 'next/image';
import { Star, ArrowRight } from 'lucide-react';
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

function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const { language } = useLanguage();
  const t = translations[language].vehicleBooking;
  
  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
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
        <Button className="w-full">
          {t.bookNow} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function VehicleBookingPage() {
  const { language } = useLanguage();
  const t = translations[language].vehicleBooking;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-headline text-3xl font-bold text-foreground">
          {t.title}
        </h1>
        <p className="text-muted-foreground">
          {t.description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
}
