'use client';
<<<<<<< HEAD
=======
import { useState } from 'react';
>>>>>>> 3c83eb72c4fed165f0eb00a08511a386cc6f2469
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
<<<<<<< HEAD
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
import { IndianRupee, Book, Users } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 5000 },
  { month: 'Apr', revenue: 4500 },
  { month: 'May', revenue: 6000 },
  { month: 'Jun', revenue: 5500 },
];

const bookingData = [
  { name: 'Vehicle Bookings', value: 5670 },
  { name: 'Machinery Bookings', value: 2340 },
];

const COLORS = ['hsl(var(--primary))', 'hsl(var(--secondary))'];

const topDrivers = [
  { name: 'Ravi Kumar', trips: 152, earnings: '₹50,000' },
  { name: 'Santosh', trips: 210, earnings: '₹45,000' },
  { name: 'Anand Reddy', trips: 89, earnings: '₹35,000' },
];

const topMachines = [
  { name: 'Tractor', bookings: 120, earnings: '₹1,44,000' },
  { name: 'Tiller', bookings: 95, earnings: '₹47,500' },
  { name: 'Harvester', bookings: 50, earnings: '₹1,25,000' },
];

export default function Page() {
  const { language } = useLanguage();
  const t = translations[language].nav.admin;
=======
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
>>>>>>> 3c83eb72c4fed165f0eb00a08511a386cc6f2469

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-headline text-3xl font-bold text-foreground">
<<<<<<< HEAD
          {t.reports}
        </h1>
        <p className="text-muted-foreground">
          Generate and view reports on platform usage and revenue.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <IndianRupee className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹2,50,000</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Bookings
            </CardTitle>
            <Book className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,010</div>
            <p className="text-xs text-muted-foreground">
              +120 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+1,400</div>
            <p className="text-xs text-muted-foreground">+50 since yesterday</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Monthly revenue for the last 6 months.</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="hsl(var(--primary))"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Booking Distribution</CardTitle>
            <CardDescription>
              Breakdown of vehicle vs. machinery bookings.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={bookingData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {bookingData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
       <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Drivers</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Driver</TableHead>
                  <TableHead>Trips</TableHead>
                  <TableHead>Total Earnings</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topDrivers.map(driver => (
                  <TableRow key={driver.name}>
                    <TableCell>{driver.name}</TableCell>
                    <TableCell>{driver.trips}</TableCell>
                    <TableCell>{driver.earnings}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
         <Card>
          <CardHeader>
            <CardTitle>Most Booked Machinery</CardTitle>
          </CardHeader>
          <CardContent>
             <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Machine</TableHead>
                  <TableHead>Bookings</TableHead>
                  <TableHead>Total Earnings</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topMachines.map(machine => (
                  <TableRow key={machine.name}>
                    <TableCell>{machine.name}</TableCell>
                    <TableCell>{machine.bookings}</TableCell>
                    <TableCell>{machine.earnings}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
       </div>
=======
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

>>>>>>> 3c83eb72c4fed165f0eb00a08511a386cc6f2469
    </div>
  );
}
