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

export default function ProfilePage() {
  const avatarImage = PlaceHolderImages.find(
    (img) => img.id === 'farmer-avatar'
  );
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-headline text-3xl font-bold text-foreground">
          Profile / ಪ್ರೊಫೈಲ್
        </h1>
        <p className="text-muted-foreground">
          View and edit your personal information. / ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿಯನ್ನು
          ವೀಕ್ಷಿಸಿ ಮತ್ತು ಸಂಪಾದಿಸಿ.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Details / ನಿಮ್ಮ ವಿವರಗಳು</CardTitle>
          <CardDescription>
            Keep your profile information up to date. / ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಮಾಹಿತಿಯನ್ನು
            ಅಪ್-ಟು-ಡೇಟ್ ಆಗಿ ಇರಿಸಿ.
          </CardDescription>
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
            <Button variant="outline">Change Photo / ಫೋಟೋ ಬದಲಾಯಿಸಿ</Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name / ಪೂರ್ಣ ಹೆಸರು</Label>
              <Input id="name" defaultValue="Sample Farmer" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number / ಫೋನ್ ಸಂಖ್ಯೆ</Label>
              <Input id="phone" defaultValue="+91 98765 43210" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email / ಇಮೇಲ್</Label>
              <Input id="email" type="email" defaultValue="farmer@example.com" disabled />
            </div>
             <div className="space-y-2">
              <Label htmlFor="location">Location / ಸ್ಥಳ</Label>
              <Input id="location" defaultValue="Mandya, Karnataka" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Update Profile / ಪ್ರೊಫೈಲ್ ನವೀಕರಿಸಿ</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
