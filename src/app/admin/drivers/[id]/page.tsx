'use client';

import { useParams, useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowLeft, Edit, Car, Star } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

export default function DriverDetailPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  // In a real app, you would fetch this data based on the ID
  const driver = {
    id: id,
    name: 'Ravi Kumar',
    phone: '9123456780',
    email: 'ravi.k@example.com',
    status: 'Active',
    rating: 4.5,
    joined: '2023-03-20',
    vehicle: {
      type: 'Mini-Truck',
      model: 'Tata Ace',
      registration: 'KA-05-AB-1234',
    },
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="font-headline text-3xl font-bold text-foreground">
          Driver Details
        </h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Profile</CardTitle>
              <Button variant="ghost" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col items-center gap-2">
                <Avatar className="h-24 w-24">
                  <AvatarImage
                    src={`https://picsum.photos/seed/${driver.id}/200`}
                    alt={driver.name}
                  />
                  <AvatarFallback>{driver.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <p className="text-xl font-semibold">{driver.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {driver.email}
                  </p>
                </div>
              </div>
              <Separator />
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Phone:</strong> {driver.phone}
                </p>
                <p>
                  <strong>Joined:</strong> {driver.joined}
                </p>
                <div className='flex items-center gap-2'>
                    <strong>Status:</strong> <Badge variant={driver.status === 'Active' ? 'secondary' : 'outline'}>{driver.status}</Badge>
                </div>
                <div className="flex items-center gap-1">
                  <strong>Rating:</strong>
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span>{driver.rating}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="h-5 w-5" /> Vehicle Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p><strong>Type:</strong> {driver.vehicle.type}</p>
              <p><strong>Model:</strong> {driver.vehicle.model}</p>
              <p><strong>Registration:</strong> {driver.vehicle.registration}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Trip History</CardTitle>
              <CardDescription>
                Overview of completed trips.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-32 items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 bg-card">
                <p className="text-muted-foreground">
                  No trip history available.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
