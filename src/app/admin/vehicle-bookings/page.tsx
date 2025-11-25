'use client';
import { Card, CardContent } from '@/components/ui/card';

export default function Page() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex h-64 items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 bg-card">
          <p className="text-muted-foreground">Vehicle Bookings - Coming Soon</p>
        </div>
      </CardContent>
    </Card>
  );
}
