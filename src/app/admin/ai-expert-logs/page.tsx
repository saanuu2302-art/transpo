'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';

const aiLogs = [
  {
    id: 'L001',
    query: 'How to increase soil fertility?',
    kannadaQuery: 'ಮಣ್ಣಿನ ಫಲವತ್ತತೆಯನ್ನು ಹೆಚ್ಚಿಸುವುದು ಹೇಗೆ?',
    language: 'English',
    timestamp: '2023-11-20 10:30 AM',
  },
  {
    id: 'L002',
    query: 'ಕಬ್ಬಿನ ಬೆಳೆಗೆ ಯಾವ ರೋಗ ಬರುತ್ತದೆ?',
    kannadaQuery: 'ಕಬ್ಬಿನ ಬೆಳೆಗೆ ಯಾವ ರೋಗ ಬರುತ್ತದೆ?',
    language: 'Kannada',
    timestamp: '2023-11-20 11:15 AM',
  },
  {
    id: 'L003',
    query: 'Best time to plant tomatoes.',
    kannadaQuery: 'ಟೊಮೆಟೊ ನೆಡಲು ಉತ್ತಮ ಸಮಯ.',
    language: 'English',
    timestamp: '2023-11-19 03:45 PM',
  },
];

export default function Page() {
  const { language } = useLanguage();
  const t = translations[language].admin.aiExpertLogs;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.title}</CardTitle>
        <CardDescription>{t.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t.logId}</TableHead>
              <TableHead>{t.query}</TableHead>
              <TableHead>{t.language}</TableHead>
              <TableHead>{t.timestamp}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {aiLogs.map((log) => (
              <TableRow key={log.id}>
                <TableCell>{log.id}</TableCell>
                <TableCell>
                  {language === 'kn' ? log.kannadaQuery : log.query}
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{log.language}</Badge>
                </TableCell>
                <TableCell>{log.timestamp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
