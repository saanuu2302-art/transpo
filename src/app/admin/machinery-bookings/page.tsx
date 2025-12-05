'use client';

import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import { machineryBookings } from '@/lib/data';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

export default function AdminMachineryBookingsPage() {
  const { language } = useLanguage();
  const t = translations[language].nav.admin;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-headline text-3xl font-bold text-foreground">
          {t.machineryBookings}
        </h1>
        <p className="text-muted-foreground">Review and manage all machinery bookings.</p>
      </div>

      <Card>
        <CardContent className="pt-6">
           <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Booking ID</TableHead>
                <TableHead>Farmer Name</TableHead>
                <TableHead>Owner Name</TableHead>
                <TableHead>Machine</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Cost</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {machineryBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell>{booking.id}</TableCell>
                  <TableCell>{booking.farmerName}</TableCell>
                  <TableCell>{booking.ownerName}</TableCell>
                  <TableCell>{booking.machine}</TableCell>
                  <TableCell>{booking.date}</TableCell>
                  <TableCell>{booking.cost}</TableCell>
                   <TableCell>
                    <Badge variant={booking.status === 'Completed' ? 'secondary' : 'destructive'}>{booking.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
