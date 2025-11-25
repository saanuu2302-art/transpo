'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { PlaceHolderImages } from '@/lib/placeholder-images';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Logo } from '@/components/icons';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';

export default function LoginPage() {
  const router = useRouter();
  const backgroundImage = PlaceHolderImages.find(
    (img) => img.id === 'farm-background'
  );
  const [isSignUp, setIsSignUp] = useState(false);
  const [userType, setUserType] = useState('farmer');
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].login;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userType === 'driver') {
      router.push('/driver/dashboard');
    } else {
      router.push('/dashboard');
    }
  };

  const handleToggleMode = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      {backgroundImage && (
        <Image
          src={backgroundImage.imageUrl}
          alt={backgroundImage.description}
          layout="fill"
          objectFit="cover"
          className="blur-sm"
          data-ai-hint={backgroundImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-background/50" />
       <div className="absolute top-4 right-4 z-20">
          <Button variant="outline" size="sm" onClick={toggleLanguage}>{translations[language].language.switchLanguage}</Button>
        </div>
      <Card className="relative z-10 w-full max-w-sm border-2 bg-card/80 backdrop-blur-sm">
        <form onSubmit={handleSubmit}>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4">
              <Logo className="h-10 w-auto" />
            </div>
            {isSignUp ? (
                <>
                    <CardTitle className="font-headline text-2xl">
                        {t.signUp.title}
                    </CardTitle>
                    <CardDescription>
                        {t.signUp.description}
                    </CardDescription>
                </>
            ) : (
                <>
                    <CardTitle className="font-headline text-2xl">
                        {t.signIn.title}
                    </CardTitle>
                    <CardDescription>
                        {t.signIn.description}
                    </CardDescription>
                </>
            )}
          </CardHeader>
          <CardContent className="space-y-4">
             {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="name">{t.fullName}</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder={t.yourNamePlaceholder}
                  required
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">{t.email}</Label>
              <Input
                id="email"
                type="email"
                placeholder="farmer@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">{t.password}</Label>
              <Input id="password" type="password" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="user-type">{t.userType.label}</Label>
              <Select defaultValue="farmer" onValueChange={setUserType}>
                <SelectTrigger id="user-type">
                  <SelectValue placeholder={t.userType.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="farmer">{t.userType.farmer}</SelectItem>
                  <SelectItem value="owner">{t.userType.machineOwner}</SelectItem>
                  <SelectItem value="driver">{t.userType.driver}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full">
              {isSignUp ? t.signUp.button : t.signIn.button} <ArrowRight />
            </Button>
            <p className="text-xs text-muted-foreground">
              {isSignUp ? t.signUp.prompt : t.signIn.prompt}
              {' '}
              <a href="#" onClick={handleToggleMode} className="text-primary hover:underline">
                 {isSignUp ? t.signUp.switch : t.signIn.switch}
              </a>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
