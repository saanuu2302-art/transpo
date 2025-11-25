
'use client';

import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import { ownerMachines, ownerRequests } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, User, Calendar } from 'lucide-react';

export default function OwnerDashboardPage() {
  const { language } = useLanguage();
  const t = translations[language].owner.dashboard;
  const router = useRouter();

  const availableMachines = ownerMachines.filter((m) => m.availability).length;
  const busyMachines = ownerMachines.length - availableMachines;

  const recentRequests = ownerRequests.slice(0, 3);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-headline text-3xl font-bold text-foreground">
          {t.title}
        </h1>
        <p className="text-muted-foreground">{t.description}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{t.machinesStatus}</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center gap-1 rounded-lg border p-4">
              <p className="text-3xl font-bold">{ownerMachines.length}</p>
              <p className="text-sm text-muted-foreground">{t.totalMachines}</p>
            </div>
            <div className="flex flex-col items-center gap-1 rounded-lg border p-4">
              <p className="text-3xl font-bold text-green-600">{availableMachines}</p>
              <p className="text-sm text-muted-foreground">{t.available}</p>
            </div>
            <div className="flex flex-col items-center gap-1 rounded-lg border p-4">
              <p className="text-3xl font-bold text-red-600">{busyMachines}</p>
              <p className="text-sm text-muted-foreground">{t.busy}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{t.recentRequests}</CardTitle>
          </CardHeader>
          <CardContent>
            {recentRequests.length > 0 ? (
              <div className="space-y-4">
                {recentRequests.map((req) => (
                  <div key={req.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{language === 'kn' ? req.kannadaMachineName : req.machineName}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                         <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            <span>{language === 'kn' ? req.kannadaFarmerName : req.farmerName}</span>
                         </div>
                         <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{req.date}</span>
                         </div>
                      </div>
                    </div>
                    <Badge variant="secondary">{language === 'kn' ? 'ಹೊಸ' : 'New'}</Badge>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground">{t.noRequests}</p>
            )}
          </CardContent>
           {recentRequests.length > 0 && (
            <CardFooter>
                 <Button variant="outline" size="sm" className="w-full" onClick={() => router.push('/owner/requests')}>
                    {t.viewAll} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </CardFooter>
           )}
        </Card>
      </div>
    </div>
  );
}
