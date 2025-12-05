
'use client';

import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { ownerTransactions } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { IndianRupee, Download } from 'lucide-react';

export default function OwnerTransactionsPage() {
  const { language } = useLanguage();
  const t = translations[language].owner.transactions;
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
                <CardTitle className="text-muted-foreground">{t.totalEarnings}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="flex items-center text-4xl font-bold">
                    <IndianRupee className="mr-1 h-8 w-8" />
                    {language === 'kn' ? ownerTransactions.kannadaTotal : ownerTransactions.total.toLocaleString('en-IN')}
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
                {ownerTransactions.transactions.length > 0 ? (
                     <div className="space-y-4">
                        {ownerTransactions.transactions.map((tx, index) => (
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
                            {index < ownerTransactions.transactions.length - 1 && (
                                <Separator className="mt-4" />
                            )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex h-48 items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30">
                        <p className="text-muted-foreground">{t.noTransactions}</p>
                    </div>
                )}
            </CardContent>
        </Card>
      </div>

    </div>
  );
}
