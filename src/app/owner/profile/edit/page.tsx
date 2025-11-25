'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import { useToast } from '@/hooks/use-toast';
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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowLeft } from 'lucide-react';

export default function EditOwnerProfilePage() {
  const router = useRouter();
  const { language } = useLanguage();
  const t = translations[language].owner.profile;
  const { toast } = useToast();

  const [ownerName, setOwnerName] = useState('Sample Owner');
  const [ownerEmail, setOwnerEmail] = useState('owner@example.com');

  const handleSaveChanges = () => {
    toast({
      title: 'Profile Updated',
      description: 'Your profile details have been saved.',
    });
    router.push('/owner/profile');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Button
        variant="ghost"
        onClick={() => router.back()}
        className="mb-4"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        {t.backToProfile}
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>{t.editProfile}</CardTitle>
          <CardDescription>{t.editDescription}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage
                src="https://picsum.photos/seed/owner-avatar/200"
                alt="Owner Avatar"
                data-ai-hint="person portrait"
              />
              <AvatarFallback className="text-3xl">O</AvatarFallback>
            </Avatar>
            <Button variant="outline">{t.changePhoto}</Button>
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">{t.ownerName}</Label>
            <Input
              id="name"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{t.emailAddress}</Label>
            <Input
              id="email"
              type="email"
              value={ownerEmail}
              onChange={(e) => setOwnerEmail(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSaveChanges}>{t.saveChanges}</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
