'use client';

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import { useToast } from '@/hooks/use-toast';

export default function ProfilePage() {
  const avatarImage = PlaceHolderImages.find(
    (img) => img.id === 'farmer-avatar'
  );
  const { language } = useLanguage();
  const t = translations[language].profile;
  const { toast } = useToast();

  const [name, setName] = useState('Sample Farmer');
  const [phone, setPhone] = useState('+91 98765 43210');
  const [location, setLocation] = useState('Mandya, Karnataka');

  const handleUpdateProfile = () => {
    toast({
      title: t.details.updateSuccessTitle,
      description: t.details.updateSuccessDescription,
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

      <Card>
        <CardHeader>
          <CardTitle>{t.details.title}</CardTitle>
          <CardDescription>{t.details.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              {avatarImage && (
                <AvatarImage
                  src={avatarImage.imageUrl}
                  alt={avatarImage.description}
                  data-ai-hint={avatarImage.imageHint}
                />
              )}
              <AvatarFallback className="text-3xl">F</AvatarFallback>
            </Avatar>
            <Button variant="outline">{t.details.changePhoto}</Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">{t.details.fullName}</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">{t.details.phoneNumber}</Label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t.details.email}</Label>
              <Input
                id="email"
                type="email"
                defaultValue="farmer@example.com"
                disabled
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">{t.details.location}</Label>
              <Input
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleUpdateProfile}>{t.details.updateProfile}</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
