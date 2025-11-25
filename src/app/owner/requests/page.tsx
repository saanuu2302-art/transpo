
'use client';

import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import { ownerRequests, type OwnerRequest } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, Check, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

function RequestCard({ request }: { request: OwnerRequest }) {
  const { language } = useLanguage();
  const t = translations[language].owner.requests;
  const { toast } = useToast();

  const handleApprove = () => {
    toast({
      title: 'Request Approved',
      description: `Booking for ${request.machineName} has been confirmed.`,
    });
  };

  const handleReject = () => {
    toast({
      variant: 'destructive',
      title: 'Request Rejected',
      description: `Booking for ${request.machineName} has been rejected.`,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {language === 'kn' ? request.kannadaMachineName : request.machineName}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-sm">
          <User className="h-4 w-4 text-muted-foreground" />
          <span className="font-semibold">{t.farmer}:</span>
          <span>
            {language === 'kn' ? request.kannadaFarmerName : request.farmerName}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span className="font-semibold">{t.date}:</span>
          <span>{request.date}</span>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button onClick={handleApprove} className="w-full">
          <Check className="mr-2 h-4 w-4" />
          {t.approve}
        </Button>
        <Button onClick={handleReject} variant="outline" className="w-full">
          <X className="mr-2 h-4 w-4" />
          {t.reject}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function OwnerRequestsPage() {
  const { language } = useLanguage();
  const t = translations[language].owner.requests;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-headline text-3xl font-bold text-foreground">
          {t.title}
        </h1>
        <p className="text-muted-foreground">{t.description}</p>
      </div>

      {ownerRequests.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ownerRequests.map((request) => (
            <RequestCard key={request.id} request={request} />
          ))}
        </div>
      ) : (
        <div className="flex h-64 items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 bg-card">
          <p className="text-muted-foreground">{t.noRequests}</p>
        </div>
      )}
    </div>
  );
}
