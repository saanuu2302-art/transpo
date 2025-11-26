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
import { ArrowRight, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import { useAuth, useUser } from '@/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { useToast } from '@/hooks/use-toast';

export default function LoginPage() {
  const router = useRouter();
  const backgroundImage = PlaceHolderImages.find(
    (img) => img.id === 'farm-background'
  );
  const [isSignUp, setIsSignUp] = useState(false);
  const [userType, setUserType] = useState('farmer');
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].login;
  const auth = useAuth();
  const firestore = useFirestore();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const { user: existingUser, loading: userLoading } = useUser();

  useEffect(() => {
    if (userLoading) {
      return; // Wait until loading is complete
    }
    if (existingUser) {
      // If user is logged in, fetch their role and redirect
      const checkUserRoleAndRedirect = async () => {
         if (!firestore) return;
        const userDoc = await getDoc(doc(firestore, 'users', existingUser.uid));
        if (userDoc.exists()) {
          redirectUser(userDoc.data().role);
        } else {
          // Default redirect if doc not found, though this is unlikely
          router.replace('/dashboard');
        }
      };
      checkUserRoleAndRedirect();
    }
  }, [existingUser, userLoading, router, firestore]);
  

  if (userLoading || existingUser) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth || !firestore) {
       toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Firebase is not initialized correctly.',
      });
      return;
    }
    setIsLoading(true);

    try {
      if (isSignUp) {
        // Sign Up
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        // Create user profile in Firestore
        await setDoc(doc(firestore, 'users', user.uid), {
          uid: user.uid,
          email: user.email,
          displayName: name,
          role: userType,
        });
        toast({
          title: 'Sign Up Successful',
          description: "You're now being redirected.",
        });
        redirectUser(userType);
      } else {
        // Sign In
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        const userDoc = await getDoc(doc(firestore, 'users', user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          redirectUser(userData.role);
        } else {
          // Fallback if user doc doesn't exist, can happen with manual deletion in console
           await setDoc(doc(firestore, 'users', user.uid), {
              uid: user.uid,
              email: user.email,
              displayName: user.email, // Fallback name
              role: 'farmer', // Default role
            });
           redirectUser('farmer');
        }
      }
    } catch (error: any) {
      console.error("Authentication Error Details:", error);
      toast({
        variant: 'destructive',
        title: 'Authentication Error',
        description: error.message || 'An unknown error occurred.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const redirectUser = (role: string) => {
    switch (role) {
      case 'driver':
        router.push('/driver/dashboard');
        break;
      case 'owner':
        router.push('/owner/dashboard');
        break;
      case 'admin':
        router.push('/admin/dashboard');
        break;
      case 'farmer':
      default:
        router.push('/dashboard');
        break;
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
        <Button variant="outline" size="sm" onClick={toggleLanguage}>
          {translations[language].language.switchLanguage}
        </Button>
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
                <CardDescription>{t.signUp.description}</CardDescription>
              </>
            ) : (
              <>
                <CardTitle className="font-headline text-2xl">
                  {t.signIn.title}
                </CardTitle>
                <CardDescription>{t.signIn.description}</CardDescription>
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">{t.password}</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="user-type">{t.userType.label}</Label>
              <Select
                defaultValue="farmer"
                onValueChange={setUserType}
                disabled={!isSignUp}
              >
                <SelectTrigger id="user-type">
                  <SelectValue placeholder={t.userType.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="farmer">{t.userType.farmer}</SelectItem>
                  <SelectItem value="owner">
                    {t.userType.machineOwner}
                  </SelectItem>
                  <SelectItem value="driver">{t.userType.driver}</SelectItem>
                  <SelectItem value="admin">{t.userType.admin}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isSignUp ? t.signUp.button : t.signIn.button}{' '}
              <ArrowRight />
            </Button>
            <p className="text-xs text-muted-foreground">
              {isSignUp ? t.signUp.prompt : t.signIn.prompt}{' '}
              <a
                href="#"
                onClick={handleToggleMode}
                className="text-primary hover:underline"
              >
                {isSignUp ? t.signUp.switch : t.signIn.switch}
              </a>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
