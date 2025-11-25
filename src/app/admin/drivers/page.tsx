'use client';

import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
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
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';

export default function AdminDriversPage() {
  const router = useRouter();
  const { language } = useLanguage();
  const t = translations[language].admin.drivers;

  const drivers = [
    { id: 'D001', name: 'Ravi Kumar', vehicle: 'Mini-Truck', phone: '9123456780', rating: 4.5, status: 'Active', trips: 152 },
    { id: 'D002', name: 'Anand Reddy', vehicle: 'Heavy Duty Truck', phone: '9123456781', rating: 4.8, status: 'Offline', trips: 89 },
    { id: 'D003', name: 'Santosh', vehicle: 'Luggage Auto', phone: '9123456782', rating: 4.3, status: 'Active', trips: 210 },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-headline text-3xl font-bold text-foreground">
          {t.title}
        </h1>
        <p className="text-muted-foreground">{t.description}</p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t.id}</TableHead>
                <TableHead>{t.name}</TableHead>
                <TableHead>{t.vehicleType}</TableHead>
                <TableHead>{t.phone}</TableHead>
                <TableHead>{t.rating}</TableHead>
                <TableHead>{t.status}</TableHead>
                <TableHead>{t.completedTrips}</TableHead>
                <TableHead><span className="sr-only">Actions</span></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {drivers.map((driver) => (
                <TableRow key={driver.id}>
                  <TableCell>{driver.id}</TableCell>
                  <TableCell>{driver.name}</TableCell>
                  <TableCell>{driver.vehicle}</TableCell>
                  <TableCell>{driver.phone}</TableCell>
                  <TableCell>{driver.rating}</TableCell>
                  <TableCell>
                    <Badge variant={driver.status === 'Active' ? 'secondary' : 'outline'}>{driver.status}</Badge>
                  </TableCell>
                  <TableCell>{driver.trips}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" onClick={() => router.push(`/admin/drivers/${driver.id}`)}>{t.viewEdit}</Button>
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
