import { ArrowRight, Bot, Car, Tractor } from 'lucide-react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const featureCards = [
  {
    title: 'Vehicle Booking',
    kannadaTitle: 'ವಾಹನ ಬುಕಿಂಗ್',
    description: 'Transport your crops with ease.',
    kannadaDescription: 'ನಿಮ್ಮ ಬೆಳೆಯನ್ನು ಸುಲಭವಾಗಿ ಸಾಗಿಸಿ.',
    href: '/dashboard/vehicles',
    icon: Car,
  },
  {
    title: 'Machine Booking',
    kannadaTitle: 'ಯಂತ್ರ ಬುಕಿಂಗ್',
    description: 'Rent the best farming equipment.',
    kannadaDescription: 'ಅತ್ಯುತ್ತಮ ಕೃಷಿ ಉಪಕರಣಗಳನ್ನು ಬಾಡಿಗೆಗೆ ಪಡೆಯಿರಿ.',
    href: '/dashboard/machines',
    icon: Tractor,
  },
  {
    title: 'AI Expert',
    kannadaTitle: 'AI ತಜ್ಞ',
    description: 'Get instant farming advice.',
    kannadaDescription: 'ತక్షణ ಕೃಷಿ ಸಲಹೆ ಪಡೆಯಿರಿ.',
    href: '/dashboard/ai-expert',
    icon: Bot,
  },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-headline text-3xl font-bold text-foreground">
          Farmer Dashboard / ರೈತರ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್
        </h1>
        <p className="text-muted-foreground">
          Manage your farm operations efficiently. / ನಿಮ್ಮ ಕೃಷಿ ಕಾರ್ಯಾಚರಣೆಗಳನ್ನು
          ದಕ್ಷತೆಯಿಂದ ನಿರ್ವಹಿಸಿ.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featureCards.map((feature) => (
          <Card
            key={feature.href}
            className="flex flex-col transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="font-headline text-xl">
                    {feature.title} / {feature.kannadaTitle}
                  </CardTitle>
                  <CardDescription>
                    {feature.description} / {feature.kannadaDescription}
                  </CardDescription>
                </div>
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
            </CardHeader>
            <CardContent className="mt-auto">
              <Link href={feature.href}>
                <Button variant="outline" className="w-full">
                  Access / ಪ್ರವೇಶಿಸಿ <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-xl">
            Recent Activity / ಇತ್ತೀಚಿನ ಚಟುವಟಿಕೆ
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            No recent activity to show. / ತೋರಿಸಲು ಯಾವುದೇ ಇತ್ತೀಚಿನ ಚಟುವಟಿಕೆ ಇಲ್ಲ.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
