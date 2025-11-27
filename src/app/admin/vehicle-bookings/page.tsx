
'use client';

import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import { vehicleBookings } from '@/lib/data';
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

export default function AdminVehicleBookingsPage() {
  const { language } = useLanguage();
  const t = translations[language].admin.dashboard;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-headline text-3xl font-bold text-foreground">
          {translations[language].nav.admin.vehicleBookings}
        </h1>
        <p className="text-muted-foreground">Review and manage all vehicle bookings.</p>
      </div>
      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Booking ID</TableHead>
                <TableHead>Farmer Name</TableHead>
                <TableHead>Driver Name</TableHead>
                <TableHead>Vehicle</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Fare</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vehicleBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell>{booking.id}</TableCell>
                  <TableCell>{booking.farmerName}</TableCell>
                  <TableCell>{booking.driverName}</TableCell>
                  <TableCell>{booking.vehicle}</TableCell>
                  <TableCell>{booking.date}</TableCell>
                  <TableCell>{booking.fare}</TableCell>
                  <TableCell>
                    <Badge variant={booking.status === 'Completed' ? 'secondary' : 'outline'}>{booking.status}</Badge>
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
