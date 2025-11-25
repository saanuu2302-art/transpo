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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AdminMachineOwnersPage() {
  const { language } = useLanguage();
  const t = translations[language].admin.machineOwners;

  const owners = [
    { id: 'O001', name: 'Ramesh', machine: 'Tractor', imageId: 'tractor-machine', available: true, price: '1200 / hr', status: 'Approved' },
    { id: 'O002', name: 'Suresh', machine: 'Tiller', imageId: 'tiller-machine', available: false, price: '500 / hr', status: 'Approved' },
    { id: 'O003', name: 'Ganesh', machine: 'Sprayer', imageId: 'sprayer-machine', available: true, price: '300 / hr', status: 'Pending' },
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
                <TableHead>{t.machineType}</TableHead>
                <TableHead>{t.machineImage}</TableHead>
                <TableHead>{t.availability}</TableHead>
                <TableHead>{t.price}</TableHead>
                <TableHead>{t.approvalStatus}</TableHead>
                <TableHead><span className="sr-only">Actions</span></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {owners.map((owner) => {
                const image = PlaceHolderImages.find(p => p.id === owner.imageId);
                return (
                  <TableRow key={owner.id}>
                    <TableCell>{owner.id}</TableCell>
                    <TableCell>{owner.name}</TableCell>
                    <TableCell>{owner.machine}</TableCell>
                    <TableCell>
                      <Avatar>
                        <AvatarImage src={image?.imageUrl} alt={image?.description} />
                        <AvatarFallback>{owner.machine.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </TableCell>
                    <TableCell>
                       <Badge variant={owner.available ? 'secondary' : 'outline'}>{owner.available ? 'Available' : 'Busy'}</Badge>
                    </TableCell>
                    <TableCell>{owner.price}</TableCell>
                    <TableCell>
                      <Badge variant={owner.status === 'Approved' ? 'secondary' : 'destructive'}>{owner.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">{t.viewDetails}</Button>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
