'use client';

import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import { driverEarnings } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { IndianRupee, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function DriverEarningsPage() {
  const { language } = useLanguage();
  const t = translations[language].driver.earnings;
  const { toast } = useToast();

  const handleWithdraw = () => {
    toast({
      title: 'Withdrawal Initiated',
      description: 'Your request to withdraw funds is being processed.',
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-headline text-3xl font-bold text-foreground">
          {t.title}
        </h1>
        <p className="text-muted-foreground">{t.description}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="text-muted-foreground">
              {t.totalEarnings}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="flex items-center text-4xl font-bold">
              <IndianRupee className="mr-1 h-8 w-8" />
              {language === 'kn'
                ? driverEarnings.kannadaTotal
                : driverEarnings.total.toLocaleString('en-IN')}
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={handleWithdraw}>
              <Download className="mr-2 h-4 w-4" />
              {t.withdraw}
            </Button>
          </CardFooter>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>{t.recentTransactions}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {driverEarnings.transactions.map((tx, index) => (
                <div key={tx.id}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">
                        {language === 'kn'
                          ? tx.kannadaDescription
                          : tx.description}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(tx.date).toLocaleDateString(
                          language === 'kn' ? 'kn-IN' : 'en-US'
                        )}
                      </p>
                    </div>
                    <p className="font-semibold text-primary">
                      + ₹{tx.amount.toLocaleString('en-IN')}
                    </p>
                  </div>
                  {index < driverEarnings.transactions.length - 1 && (
                    <Separator className="mt-4" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
