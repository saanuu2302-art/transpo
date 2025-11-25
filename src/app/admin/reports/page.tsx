'use client';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { DateRange } from 'react-day-picker';
import { Download, BarChart, PieChart, LineChart } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';

export default function Page() {
  const [reportType, setReportType] = useState('user-activity');
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const { language } = useLanguage();
  const t = translations[language].admin.reports;

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
          <CardTitle>{t.generate.title}</CardTitle>
          <CardDescription>{t.generate.description}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <label className="text-sm font-medium">{t.generate.reportType}</label>
            <Select value={reportType} onValueChange={setReportType}>
              <SelectTrigger>
                <SelectValue placeholder="Select a report" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="user-activity">{t.generate.userActivity}</SelectItem>
                <SelectItem value="booking-revenue">{t.generate.bookingRevenue}</SelectItem>
                <SelectItem value="transport-demand">{t.generate.transportDemand}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
             <label className="text-sm font-medium">{t.generate.dateRange}</label>
            <Calendar
              mode="range"
              selected={dateRange}
              onSelect={setDateRange}
              className="rounded-md border"
            />
          </div>
          <div className="flex items-end">
            <Button className="w-full">
              <Download className="mr-2 h-4 w-4" />
              {t.generate.generateButton}
            </Button>
          </div>
        </CardContent>
      </Card>
      
       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><BarChart className="h-5 w-5"/>{t.charts.bookings.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-48 bg-muted rounded-md flex items-center justify-center"><p className="text-sm text-muted-foreground">{t.charts.placeholder}</p></div>
            </CardContent>
        </Card>
         <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><PieChart className="h-5 w-5"/>{t.charts.revenue.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-48 bg-muted rounded-md flex items-center justify-center"><p className="text-sm text-muted-foreground">{t.charts.placeholder}</p></div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><LineChart className="h-5 w-5"/>{t.charts.userGrowth.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-48 bg-muted rounded-md flex items-center justify-center"><p className="text-sm text-muted-foreground">{t.charts.placeholder}</p></div>
            </CardContent>
        </Card>
      </div>

    </div>
  );
}
