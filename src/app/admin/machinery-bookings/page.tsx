<<<<<<< HEAD

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
import { adminMachineryBookings } from '@/lib/data';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import { Button } from '@/components/ui/button';

export default function Page() {
  const { language } = useLanguage();
  const t = translations[language].admin.machineryBookings;

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
              <TableHead>{t.owner}</TableHead>
              <TableHead>{t.machine}</TableHead>
              <TableHead>{t.duration}</TableHead>
              <TableHead>{t.cost}</TableHead>
              <TableHead>{t.status}</TableHead>
              <TableHead>{t.actions}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {adminMachineryBookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.id}</TableCell>
                <TableCell>{booking.farmer}</TableCell>
                <TableCell>{booking.owner}</TableCell>
                <TableCell>{booking.machine}</TableCell>
                <TableCell>{booking.duration}</TableCell>
                <TableCell>{booking.cost}</TableCell>
                <TableCell>
                  <Badge variant={getStatusVariant(booking.status)}>
                    {language === 'kn' ? booking.kannadaStatus : booking.status}
                  </Badge>
                </TableCell>
                <TableCell>
                    {booking.status === 'Pending' && (
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm">{t.approve}</Button>
                            <Button variant="destructive" size="sm">{t.reject}</Button>
                        </div>
                    )}
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
