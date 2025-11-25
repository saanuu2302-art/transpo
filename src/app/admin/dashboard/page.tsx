'use client';

import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Users,
  Car,
  Tractor,
  Book,
  Container,
  Bot,
  UserCheck,
  IndianRupee,
} from 'lucide-react';

export default function AdminDashboardPage() {
  const { language } = useLanguage();
  const t = translations[language].admin.dashboard;

  const summaryCards = [
    { title: t.totalFarmers, value: '1,250', icon: Users },
    { title: t.totalDrivers, value: '150', icon: Car },
    { title: t.totalMachineOwners, value: '75', icon: Tractor },
    { title: t.totalVehicleBookings, value: '5,670', icon: Book },
    { title: t.totalMachineryBookings, value: '2,340', icon: Container },
    { title: t.aiExpertMessages, value: '12,890', icon: Bot },
    { title: t.activeUsersToday, value: '450', icon: UserCheck },
    { title: t.totalRevenue, value: '₹2,50,000', icon: IndianRupee },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-headline text-3xl font-bold text-foreground">
          {t.title}
        </h1>
        <p className="text-muted-foreground">{t.description}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {summaryCards.map((card, index) => (
          <Card key={index} className="transition-all hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
              <card.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
