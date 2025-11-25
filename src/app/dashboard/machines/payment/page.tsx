
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import { machines } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, Landmark, Wallet } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function MachinePaymentPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const machineId = searchParams.get('machineId');
  const machine = machines.find((m) => m.id === machineId);

  const { language } = useLanguage();
  const { toast } = useToast();
  const t = translations[language].payment;

  const handlePayment = (method: string) => {
    toast({
      title: t.success.title,
      description: t.success.description(method),
    });
    router.push('/dashboard');
  };

  if (!machine) {
    router.push('/dashboard/machines');
    return null;
  }
  
  return (
    <div className="max-w-md mx-auto flex items-center h-[calc(100vh-10rem)]">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">{t.title}</CardTitle>
          <CardDescription>{t.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-between items-center text-lg font-semibold rounded-lg border p-4">
            <span>{t.total}</span>
            <span>{machine.cost}</span>
          </div>

          <Separator />
          
          <div className="space-y-3">
             <Button
              variant="outline"
              className="w-full justify-start h-14 text-base"
              onClick={() => handlePayment(language === 'en' ? 'Cash' : 'ನಗದು')}
            >
              <Wallet className="mr-4 h-6 w-6" />
              {t.cash}
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start h-14 text-base"
              onClick={() => handlePayment('UPI')}
            >
              <Landmark className="mr-4 h-6 w-6" />
              {t.upi}
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start h-14 text-base"
              onClick={() => handlePayment(language === 'en' ? 'Card' : 'ಕಾರ್ಡ್')}
            >
              <CreditCard className="mr-4 h-6 w-6" />
              {t.card}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
