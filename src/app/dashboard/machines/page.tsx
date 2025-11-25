'use client';

import Image from 'next/image';
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  machines,
  type Machine,
  bookingHistory,
  type Booking,
} from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';

function MachineCard({ machine }: { machine: Machine }) {
  const { language } = useLanguage();
  const t = translations[language].machineBooking;
  const router = useRouter();

  const handleBookNow = () => {
    router.push(`/dashboard/machines/${machine.id}`);
  };

  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-video">
        {machine.image && (
          <Image
            src={machine.image.imageUrl}
            alt={machine.image.description}
            layout="fill"
            objectFit="cover"
            data-ai-hint={machine.image.imageHint}
          />
        )}
      </div>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="font-headline text-xl">
              {language === 'en' ? machine.name : machine.kannadaName}
            </CardTitle>
            <CardDescription>{machine.cost}</CardDescription>
          </div>
          <Badge
            variant={machine.availability ? 'secondary' : 'destructive'}
            className="capitalize"
          >
            {machine.availability ? t.available : t.busy}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">
          {t.owner}: {machine.owner}
        </p>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          disabled={!machine.availability}
          onClick={handleBookNow}
        >
          {t.bookNow} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}

function HistoryTable() {
  const { language } = useLanguage();
  const t = translations[language].machineBooking;
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{t.history.item}</TableHead>
            <TableHead>{t.history.date}</TableHead>
            <TableHead>{t.history.cost}</TableHead>
            <TableHead>{t.history.status}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookingHistory.map((booking: Booking) => (
            <TableRow key={booking.id}>
              <TableCell>
                {language === 'en' ? booking.item : booking.kannadaItem}
              </TableCell>
              <TableCell>{booking.date}</TableCell>
              <TableCell>{booking.cost}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    booking.status === 'Completed' ? 'secondary' : 'destructive'
                  }
                  className="flex items-center gap-1"
                >
                  {booking.status === 'Completed' ? (
                    <CheckCircle className="h-3 w-3" />
                  ) : (
                    <XCircle className="h-3 w-3" />
                  )}
                  {language === 'en' ? booking.status : booking.kannadaStatus}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

export default function MachineBookingPage() {
  const { language } = useLanguage();
  const t = translations[language].machineBooking;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-headline text-3xl font-bold text-foreground">
          {t.title}
        </h1>
        <p className="text-muted-foreground">{t.description}</p>
      </div>

      <Tabs defaultValue="booking" className="w-full">
        <TabsList>
          <TabsTrigger value="booking">{t.tabs.bookMachine}</TabsTrigger>
          <TabsTrigger value="history">{t.tabs.bookingHistory}</TabsTrigger>
        </TabsList>
        <TabsContent value="booking" className="mt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {machines.map((machine) => (
              <MachineCard key={machine.id} machine={machine} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="history" className="mt-6">
          <HistoryTable />
        </TabsContent>
      </Tabs>
    </div>
  );
}
