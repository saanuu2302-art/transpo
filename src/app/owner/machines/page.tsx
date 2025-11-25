
'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import { ownerMachines, type OwnerMachine } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { PlusCircle } from 'lucide-react';
import Image from 'next/image';

function MachineCard({ machine: initialMachine }: { machine: OwnerMachine }) {
  const { language } = useLanguage();
  const t = translations[language].owner.machines;
  const [machine, setMachine] = useState(initialMachine);

  const handleAvailabilityChange = (checked: boolean) => {
    setMachine({ ...machine, availability: checked });
  };

  return (
    <Card className="overflow-hidden">
      {machine.image && (
        <div className="relative aspect-video">
          <Image
            src={machine.image.imageUrl}
            alt={machine.image.description}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle>
          {language === 'kn' ? machine.kannadaName : machine.name}
        </CardTitle>
        <CardDescription>{machine.cost}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between rounded-lg border p-3">
          <Label htmlFor={`availability-${machine.id}`} className="text-sm font-medium">
            {t.availability}
          </Label>
          <div className="flex items-center gap-2">
             <Switch
                id={`availability-${machine.id}`}
                checked={machine.availability}
                onCheckedChange={handleAvailabilityChange}
              />
            <span className={`text-sm font-semibold ${machine.availability ? 'text-green-600' : 'text-red-600'}`}>
                {machine.availability ? t.available : t.busy}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function OwnerMachinesPage() {
  const { language } = useLanguage();
  const t = translations[language].owner.machines;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="font-headline text-3xl font-bold text-foreground">
            {t.title}
          </h1>
          <p className="text-muted-foreground">{t.description}</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          {t.addMachine}
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ownerMachines.map((machine) => (
          <MachineCard key={machine.id} machine={machine} />
        ))}
      </div>
    </div>
  );
}
