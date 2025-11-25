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
import { ArrowLeft, Edit, Tractor } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function MachineOwnerDetailPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  // In a real app, you would fetch this data based on the ID
  const owner = {
    id: id,
    name: 'Ramesh',
    phone: '9123456789',
    email: 'ramesh@example.com',
    joined: '2023-04-10',
    machines: [
      {
        id: 'm1',
        type: 'Tractor',
        model: 'John Deere 5050D',
        status: 'Available',
      },
       {
        id: 'm2',
        type: 'Harvester',
        model: 'Claas Dominator',
        status: 'In Use',
      },
    ],
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="font-headline text-3xl font-bold text-foreground">
          Machine Owner Details
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
                    src={`https://picsum.photos/seed/${owner.id}/200`}
                    alt={owner.name}
                  />
                  <AvatarFallback>{owner.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <p className="text-xl font-semibold">{owner.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {owner.email}
                  </p>
                </div>
              </div>
              <Separator />
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Phone:</strong> {owner.phone}
                </p>
                <p>
                  <strong>Joined:</strong> {owner.joined}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Tractor className="h-5 w-5" /> Registered Machines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {owner.machines.map(machine => (
                    <div key={machine.id} className="p-4 border rounded-lg">
                        <p className="font-semibold">{machine.type}</p>
                        <p className="text-sm text-muted-foreground">{machine.model}</p>
                        <p className="text-sm">Status: {machine.status}</p>
                    </div>
                ))}
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle>Booking History</CardTitle>
              <CardDescription>
                Overview of rental history.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-32 items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 bg-card">
                <p className="text-muted-foreground">
                  No booking history available.
                </p>
              </div>
            </AdCardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
