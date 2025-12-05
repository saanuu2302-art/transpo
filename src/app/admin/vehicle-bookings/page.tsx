<<<<<<< HEAD

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
=======
'use client';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
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
import { adminVehicleBookings } from '@/lib/data';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';

export default function Page() {
  const { language } = useLanguage();
  const t = translations[language].admin.vehicleBookings;

  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'secondary';
      case 'cancelled':
        return 'destructive';
      case 'pending':
        return 'outline';
      default:
        return 'default';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t.bookingId}</TableHead>
              <TableHead>{t.farmer}</TableHead>
              <TableHead>{t.driver}</TableHead>
              <TableHead>{t.pickup}</TableHead>
              <TableHead>{t.dropoff}</TableHead>
              <TableHead>{t.fare}</TableHead>
              <TableHead>{t.status}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {adminVehicleBookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.id}</TableCell>
                <TableCell>{booking.farmer}</TableCell>
                <TableCell>{booking.driver}</TableCell>
                <TableCell>{booking.pickup}</TableCell>
                <TableCell>{booking.dropoff}</TableCell>
                <TableCell>{booking.fare}</TableCell>
                <TableCell>
                  <Badge variant={getStatusVariant(booking.status)}>
                    {language === 'kn' ? booking.kannadaStatus : booking.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
>>>>>>> 3c83eb72c4fed165f0eb00a08511a386cc6f2469
  );
}
