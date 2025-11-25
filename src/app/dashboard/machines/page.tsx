import Image from 'next/image';
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';
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

function MachineCard({ machine }: { machine: Machine }) {
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
              {machine.name} / {machine.kannadaName}
            </CardTitle>
            <CardDescription>{machine.cost}</CardDescription>
          </div>
          <Badge
            variant={machine.availability ? 'secondary' : 'destructive'}
            className="capitalize"
          >
            {machine.availability ? 'Available / ಲಭ್ಯವಿದೆ' : 'Busy / ಕಾರ್ಯನಿರತವಾಗಿದೆ'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">
          Owner: {machine.owner} / ಮಾಲೀಕರು: {machine.owner}
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full" disabled={!machine.availability}>
          Book Now / ಈಗ ಬುಕ್ ಮಾಡಿ <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}

function HistoryTable() {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item / ವಸ್ತು</TableHead>
            <TableHead>Date / ದಿನಾಂಕ</TableHead>
            <TableHead>Cost / ವೆಚ್ಚ</TableHead>
            <TableHead>Status / ಸ್ಥಿತಿ</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookingHistory.map((booking: Booking) => (
            <TableRow key={booking.id}>
              <TableCell>
                {booking.item} / {booking.kannadaItem}
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
                  {booking.status} / {booking.kannadaStatus}
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
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-headline text-3xl font-bold text-foreground">
          Machine Booking / ಯಂತ್ರ ಬುಕಿಂಗ್
        </h1>
        <p className="text-muted-foreground">
          Rent equipment or view your booking history. / ಉಪಕರಣಗಳನ್ನು ಬಾಡಿಗೆಗೆ
          ಪಡೆಯಿರಿ ಅಥವಾ ನಿಮ್ಮ ಬುಕಿಂಗ್ ಇತಿಹಾಸವನ್ನು ವೀಕ್ಷಿಸಿ.
        </p>
      </div>

      <Tabs defaultValue="booking" className="w-full">
        <TabsList>
          <TabsTrigger value="booking">
            Book Machine / ಯಂತ್ರವನ್ನು ಬುಕ್ ಮಾಡಿ
          </TabsTrigger>
          <TabsTrigger value="history">
            Booking History / ಬುಕಿಂಗ್ ಇತಿಹಾಸ
          </TabsTrigger>
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
