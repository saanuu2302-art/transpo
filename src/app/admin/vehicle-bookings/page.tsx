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
  );
}
