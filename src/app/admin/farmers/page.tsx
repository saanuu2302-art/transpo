'use client';

import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import {
  Card,
  CardContent,
  CardDescription,
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
import { Button } from '@/components/ui/button';

export default function AdminFarmersPage() {
  const { language } = useLanguage();
  const t = translations[language].admin.farmers;

  const farmers = [
    { id: 'F001', name: 'Srinivas', phone: '9876543210', location: 'Mandya', bookings: 12, lastActive: '2 hours ago' },
    { id: 'F002', name: 'Lakshmi', phone: '9876543211', location: 'Mysuru', bookings: 8, lastActive: '1 day ago' },
    { id: 'F003', name: 'Gopal', phone: '9876543212', location: 'Channapatna', bookings: 21, lastActive: '5 hours ago' },
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
                <TableHead>{t.phone}</TableHead>
                <TableHead>{t.location}</TableHead>
                <TableHead>{t.totalBookings}</TableHead>
                <TableHead>{t.lastActive}</TableHead>
                <TableHead><span className="sr-only">Actions</span></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {farmers.map((farmer) => (
                <TableRow key={farmer.id}>
                  <TableCell>{farmer.id}</TableCell>
                  <TableCell>{farmer.name}</TableCell>
                  <TableCell>{farmer.phone}</TableCell>
                  <TableCell>{farmer.location}</TableCell>
                  <TableCell>{farmer.bookings}</TableCell>
                  <TableCell>{farmer.lastActive}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">{t.viewDetails}</Button>
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
