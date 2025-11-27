'use client';

import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import {
  getFirestore,
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  getDoc,
} from 'firebase/firestore';
import { initializeFirebase } from '@/firebase';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { User, Bot } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

type Log = {
  id: string;
  query: string;
  response: string;
  timestamp: Date;
  farmerName: string;
};

export default function Page() {
  const { language } = useLanguage();
  const t = translations[language].nav.admin;
  const [logs, setLogs] = useState<Log[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { firestore } = initializeFirebase();
    const logsCollection = collection(firestore, 'ai_expert_logs');
    const logsQuery = query(logsCollection, orderBy('timestamp', 'desc'));

    const unsubscribe = onSnapshot(
      logsQuery,
      async (snapshot) => {
        const fetchedLogs = await Promise.all(
          snapshot.docs.map(async (logDoc) => {
            const logData = logDoc.data();
            let farmerName = 'Unknown Farmer';

            if (logData.userId) {
              try {
                const userRef = doc(firestore, 'users', logData.userId);
                const userSnap = await getDoc(userRef);
                if (userSnap.exists()) {
                  farmerName = userSnap.data().name || 'Unnamed Farmer';
                }
              } catch (error) {
                console.error("Error fetching farmer's name: ", error);
              }
            }

            return {
              id: logDoc.id,
              query: logData.query,
              response: logData.response,
              timestamp: logData.timestamp.toDate(),
              farmerName,
            };
          })
        );
        setLogs(fetchedLogs);
        setLoading(false);
      },
      (error) => {
        console.error('Error fetching logs:', error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-headline text-3xl font-bold text-foreground">
          {t.aiExpertLogs}
        </h1>
        <p className="text-muted-foreground">
          Review and analyze conversations with the AI Expert.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Conversation History</CardTitle>
          <CardDescription>
            Browse through the interactions farmers have had with the AI.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-4">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          ) : logs.length === 0 ? (
            <div className="flex h-64 items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30">
              <p className="text-muted-foreground">No logs found.</p>
            </div>
          ) : (
            <Accordion type="single" collapsible className="w-full">
              {logs.map((log) => (
                <AccordionItem value={log.id} key={log.id}>
                  <AccordionTrigger>
                    <div className="flex w-full items-center justify-between pr-4">
                      <div className="flex items-center gap-2">
                         <p className="font-semibold">{log.farmerName}</p>
                         <p className="text-sm text-muted-foreground truncate max-w-xs">{log.query}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {log.timestamp.toLocaleString()}
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 rounded-md border p-4">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-8 w-8 border">
                          <AvatarFallback>
                            <User className="h-5 w-5" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="max-w-md rounded-lg p-3 bg-primary text-primary-foreground rounded-tl-none">
                            <p className="text-sm font-semibold mb-1">
                                {log.farmerName}
                            </p>
                            <p className="whitespace-pre-wrap text-sm">{log.query}</p>
                        </div>
                      </div>
                       <div className="flex items-start gap-4">
                        <Avatar className="h-8 w-8 border">
                          <AvatarFallback>
                            <Bot className="h-5 w-5" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="max-w-md rounded-lg p-3 bg-card rounded-tr-none">
                             <p className="text-sm font-semibold mb-1">
                                AI Expert
                            </p>
                            <p className="whitespace-pre-wrap text-sm">{log.response}</p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
