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

export default function LoginPage() {
  const router = useRouter();
  const backgroundImage = PlaceHolderImages.find(
    (img) => img.id === 'farm-background'
  );
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle login or sign up logic
    // For now, we'll just redirect to the dashboard
    router.push('/dashboard');
  };

  const toggleMode = (e: React.MouseEvent) => {
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
      <Card className="relative z-10 w-full max-w-sm border-2 bg-card/80 backdrop-blur-sm">
        <form onSubmit={handleSubmit}>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4">
              <Logo className="h-10 w-auto" />
            </div>
            {isSignUp ? (
                <>
                    <CardTitle className="font-headline text-2xl">
                        Create Account / ಖಾತೆ ತೆರೆಯಿರಿ
                    </CardTitle>
                    <CardDescription>
                        Enter your details to get started
                        <br />
                        ಪ್ರಾರಂಭಿಸಲು ನಿಮ್ಮ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ
                    </CardDescription>
                </>
            ) : (
                <>
                    <CardTitle className="font-headline text-2xl">
                        Welcome Back / ಮತ್ತೆ ಸ್ವಾಗತ
                    </CardTitle>
                    <CardDescription>
                        Sign in to access your dashboard
                        <br />
                        ನಿಮ್ಮ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಪ್ರವೇಶಿಸಲು ಸೈನ್ ಇನ್ ಮಾಡಿ
                    </CardDescription>
                </>
            )}
          </CardHeader>
          <CardContent className="space-y-4">
             {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="name">Full Name / ಪೂರ್ಣ ಹೆಸರು</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  required
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email / ಇಮೇಲ್</Label>
              <Input
                id="email"
                type="email"
                placeholder="farmer@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password / ಪಾಸ್ವರ್ಡ್</Label>
              <Input id="password" type="password" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="user-type">User Type / ಬಳಕೆದಾರರ ಪ್ರಕಾರ</Label>
              <Select defaultValue="farmer">
                <SelectTrigger id="user-type">
                  <SelectValue placeholder="Select user type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="farmer">Farmer / ರೈತ</SelectItem>
                  <SelectItem value="owner">Machine Owner / ಯಂತ್ರ ಮಾಲೀಕ</SelectItem>
                  <SelectItem value="driver">Driver / ಚಾಲಕ</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full">
              {isSignUp ? 'Sign Up / ಸೈನ್ ಅಪ್ ಮಾಡಿ' : 'Sign In / ಸೈನ್ ಇನ್ ಮಾಡಿ'} <ArrowRight />
            </Button>
            <p className="text-xs text-muted-foreground">
              {isSignUp ? 'Already have an account? / ಈಗಾಗಲೇ ಖಾತೆ ಇದೆಯೆ?' : 'No account? / ಖಾತೆ ಇಲ್ವೇ?'}
              {' '}
              <a href="#" onClick={toggleMode} className="text-primary hover:underline">
                 {isSignUp ? 'Sign In / ಸೈನ್ ಇನ್ ಮಾಡಿ' : 'Sign Up / ಸೈನ್ ಅಪ್ ಮಾಡಿ'}
              </a>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
