'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Page() {
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = translations[language].admin.systemSettings;

  const handleSaveChanges = () => {
    toast({
      title: t.save.successTitle,
      description: t.save.successDescription,
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

      <Card>
        <CardHeader>
          <CardTitle>{t.featureFlags.title}</CardTitle>
          <CardDescription>{t.featureFlags.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border p-3">
            <Label htmlFor="marketplace-flag">{t.featureFlags.marketplace}</Label>
            <Switch id="marketplace-flag" defaultChecked />
          </div>
          <div className="flex items-center justify-between rounded-lg border p-3">
            <Label htmlFor="ai-expert-flag">{t.featureFlags.aiExpert}</Label>
            <Switch id="ai-expert-flag" defaultChecked />
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
            <CardTitle>{t.financial.title}</CardTitle>
            <CardDescription>{t.financial.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="commission-rate">{t.financial.commissionRate}</Label>
                <Input id="commission-rate" type="number" defaultValue="5" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="payment-gateway">{t.financial.paymentGateway}</Label>
                 <Select defaultValue="razorpay">
                    <SelectTrigger id="payment-gateway">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="razorpay">Razorpay</SelectItem>
                        <SelectItem value="stripe">Stripe</SelectItem>
                         <SelectItem value="cash">{t.financial.cashOnly}</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-start">
        <Button onClick={handleSaveChanges}>{t.save.saveButton}</Button>
      </div>
    </div>
  );
}
