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
import { ArrowLeft, Edit } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function FarmerDetailPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  // In a real app, you would fetch this data based on the ID
  const farmer = {
    id: id,
    name: 'Srinivas',
    phone: '9876543210',
    location: 'Mandya',
    bookings: 12,
    lastActive: '2 hours ago',
    email: 'srinivas@example.com',
    joined: '2023-01-15',
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="font-headline text-3xl font-bold text-foreground">
          Farmer Details
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
                    src={`https://picsum.photos/seed/${farmer.id}/200`}
                    alt={farmer.name}
                  />
                  <AvatarFallback>
                    {farmer.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <p className="text-xl font-semibold">{farmer.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {farmer.email}
                  </p>
                </div>
              </div>
              <Separator />
              <div className="space-y-2 text-sm">
                <p><strong>Phone:</strong> {farmer.phone}</p>
                <p><strong>Location:</strong> {farmer.location}</p>
                <p><strong>Joined:</strong> {farmer.joined}</p>
                <p><strong>Last Active:</strong> {farmer.lastActive}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Booking History</CardTitle>
              <CardDescription>
                Overview of vehicle and machinery bookings.
              </CardDescription>
            </CardHeader>
            <CardContent>
               <div className="flex h-32 items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 bg-card">
                 <p className="text-muted-foreground">No booking history available.</p>
                </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>AI Expert Chat Logs</CardTitle>
              <CardDescription>
                Recent interactions with the AI assistant.
              </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex h-32 items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 bg-card">
                    <p className="text-muted-foreground">No chat logs available.</p>
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
