'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Bot, PlayCircle, User } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import { GeminiIcon } from './icons';

export type Message = {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  voiceResponse?: string;
};

export function ChatMessage({ message }: { message: Message }) {
  const isAi = message.sender === 'ai';
  const { language } = useLanguage();
  const t = translations[language].chat;

  const handlePlayAudio = () => {
    if (message.voiceResponse) {
      const audio = new Audio(message.voiceResponse);
      audio.play().catch(e => console.error("Audio playback failed:", e));
    }
  };

  return (
    <div
      className={cn(
        'flex items-start gap-4',
        isAi ? 'justify-start' : 'justify-end'
      )}
    >
      {isAi && (
        <Avatar className="h-8 w-8 border">
          <AvatarFallback>
            <GeminiIcon className="h-5 w-5" />
          </AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn(
          'max-w-md rounded-lg p-3',
          isAi
            ? 'rounded-tl-none bg-card'
            : 'rounded-tr-none bg-primary text-primary-foreground'
        )}
      >
        <p className="whitespace-pre-wrap text-sm">{message.text}</p>
        {isAi && message.voiceResponse && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handlePlayAudio}
            className={cn(
              'mt-2 gap-2 p-0 h-auto',
               isAi ? 'text-foreground hover:bg-muted' : 'text-primary-foreground hover:bg-primary/80',
            )}
          >
            <PlayCircle className="h-5 w-5" />
            {t.playAudio}
          </Button>
        )}
      </div>
      {!isAi && (
        <Avatar className="h-8 w-8 border">
          <AvatarFallback>
            <User className="h-5 w-5" />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
