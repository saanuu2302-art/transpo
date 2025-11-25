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
  );
}
