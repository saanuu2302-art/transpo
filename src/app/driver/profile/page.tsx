'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export default function DriverProfilePage() {
  const { language } = useLanguage();
  const t = translations[language].driver.profile;
  const { toast } = useToast();
  const vehicleImage = PlaceHolderImages.find(
    (img) => img.id === 'minitruck-vehicle'
  );

  const handleUpdate = () => {
    toast({
      title: 'Profile Updated',
      description: 'Your information has been saved successfully.',
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-headline text-3xl font-bold text-foreground">
          {t.title}
        </h1>
        <p className="text-muted-foreground">{t.description}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{t.personal.title}</CardTitle>
            <CardDescription>{t.personal.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="https://picsum.photos/seed/driver/100/100" />
                <AvatarFallback>D</AvatarFallback>
              </Avatar>
              <Button variant="outline">
                {translations[language].profile.details.changePhoto}
              </Button>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">{t.personal.name}</Label>
              <Input id="name" defaultValue="Ravi Kumar" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">{t.personal.phone}</Label>
              <Input id="phone" defaultValue="+91 98765 43210" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="license">{t.personal.license}</Label>
              <Input id="license" defaultValue="KA-01-20220012345" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{t.vehicle.title}</CardTitle>
            <CardDescription>{t.vehicle.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="relative aspect-video w-full overflow-hidden rounded-md">
              {vehicleImage && (
                <Image
                  src={vehicleImage.imageUrl}
                  alt={vehicleImage.description}
                  className="object-cover"
                  fill
                />
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="vehicle-model">{t.vehicle.model}</Label>
              <Input id="vehicle-model" defaultValue="Tata Ace" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="vehicle-reg">{t.vehicle.registration}</Label>
              <Input id="vehicle-reg" defaultValue="KA-05-AB-1234" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="vehicle-type">{t.vehicle.type}</Label>
              <Input id="vehicle-type" defaultValue="Mini-Truck" />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-start">
        <Button onClick={handleUpdate}>{t.update}</Button>
      </div>
    </div>
  );
}
