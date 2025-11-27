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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import { useToast } from '@/hooks/use-toast';

export default function Page() {
  const { language } = useLanguage();
  const t = translations[language].nav.admin;
  const { toast } = useToast();

  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [commissionVehicle, setCommissionVehicle] = useState(15);
  const [commissionMachinery, setCommissionMachinery] = useState(10);

  const handleSaveChanges = () => {
    toast({
      title: 'Settings Saved',
      description: 'Your changes have been saved successfully.',
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-headline text-3xl font-bold text-foreground">
          {t.systemSettings}
        </h1>
        <p className="text-muted-foreground">
          Configure global system settings and integrations.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
            <CardDescription>
              Manage platform-wide settings.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <Label htmlFor="maintenance-mode" className="font-semibold">
                  Maintenance Mode
                </Label>
                <p className="text-sm text-muted-foreground">
                  Temporarily disable access to the platform for users.
                </p>
              </div>
              <Switch
                id="maintenance-mode"
                checked={maintenanceMode}
                onCheckedChange={setMaintenanceMode}
              />
            </div>
             <div className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <Label htmlFor="notifications" className="font-semibold">
                  Email Notifications
                </Label>
                <p className="text-sm text-muted-foreground">
                  Enable or disable system-wide email notifications.
                </p>
              </div>
              <Switch id="notifications" defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Commission Rates</CardTitle>
            <CardDescription>
              Set the commission percentage for bookings.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="commission-vehicle">Vehicle Booking Commission (%)</Label>
              <Input
                id="commission-vehicle"
                type="number"
                value={commissionVehicle}
                onChange={(e) => setCommissionVehicle(Number(e.target.value))}
                placeholder="e.g., 15"
              />
            </div>
             <div className="space-y-2">
              <Label htmlFor="commission-machinery">Machinery Booking Commission (%)</Label>
              <Input
                id="commission-machinery"
                type="number"
                value={commissionMachinery}
                onChange={(e) => setCommissionMachinery(Number(e.target.value))}
                placeholder="e.g., 10"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Integrations & API Keys</CardTitle>
            <CardDescription>Manage third-party service configurations.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
             <div className="space-y-2">
                <Label htmlFor="ai-model">AI Expert Language Model</Label>
                <Select defaultValue="gemini-2.5-flash">
                    <SelectTrigger id="ai-model">
                        <SelectValue placeholder="Select AI Model" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="gemini-2.5-flash">Gemini 2.5 Flash</SelectItem>
                        <SelectItem value="gemini-pro">Gemini Pro</SelectItem>
                    </SelectContent>
                </Select>
             </div>
             <div className="space-y-2">
                <Label htmlFor="maps-api-key">Google Maps API Key</Label>
                <Input id="maps-api-key" type="password" defaultValue="xyz-abc-123" />
             </div>
          </CardContent>
        </Card>
      </div>

       <div className="flex justify-start">
          <Button onClick={handleSaveChanges}>Save Changes</Button>
       </div>
    </div>
  );
}
