'use client';

import { useState, useRef, useEffect, useActionState } from 'react';
import { Send, Mic, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getAiFarmingResponse } from '@/app/actions';
import { ChatMessage, type Message } from '@/components/chat-message';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

export default function AiExpertPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [state, formAction, isPending] = useActionState(getAiFarmingResponse, undefined);
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state) {
      if (state.error) {
        toast({
          variant: 'destructive',
          title: 'Error / ದೋಷ',
          description: state.error,
        });
      } else if (state.textResponse) {
        setMessages((prev) => [
          ...prev,
          {
            id: `ai-${Date.now()}`,
            sender: 'ai',
            text: state.textResponse,
            voiceResponse: state.voiceResponse,
          },
        ]);
      }
    }
  }, [state, toast]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isPending) return;

    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, sender: 'user', text: input.trim() },
    ]);

    formAction(input.trim());
    setInput('');
  };

  return (
    <div className="flex flex-col gap-6 h-[calc(100vh-10rem)]">
      <div>
        <h1 className="font-headline text-3xl font-bold text-foreground">
          AI Expert / AI ತಜ್ಞ
        </h1>
        <p className="text-muted-foreground">
          Ask any farming-related question. / ಕೃಷಿಗೆ ಸಂಬಂಧಿಸಿದ ಯಾವುದೇ ಪ್ರಶ್ನೆಯನ್ನು
          ಕೇಳಿ.
        </p>
      </div>

      <Card className="flex flex-1 flex-col">
        <CardHeader>
           <div className="flex justify-end">
                <Button variant="outline" size="sm">Switch Language - English / ಕನ್ನಡ</Button>
            </div>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden">
          <ScrollArea className="h-full" ref={scrollAreaRef}>
            <div className="space-y-6 pr-4">
              <ChatMessage
                message={{
                  id: 'initial',
                  sender: 'ai',
                  text: 'Hello! How can I help you with your farming today? / ನಮಸ್ಕಾರ! ಇಂದು ನಿಮ್ಮ ಕೃಷಿಗೆ ನಾನು ಹೇಗೆ ಸಹಾಯ ಮಾಡಲಿ?',
                }}
              />
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {isPending && (
                 <div className="flex items-start gap-4 justify-start">
                    <div className="h-8 w-8 border rounded-full flex items-center justify-center bg-card">
                        <Bot className="h-5 w-5" />
                    </div>
                    <div className="max-w-md rounded-lg p-3 rounded-tl-none bg-card flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <p className="text-sm text-muted-foreground">Thinking... / ಯೋಚಿಸುತ್ತಿದೆ...</p>
                    </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>
        <CardFooter className="border-t pt-4">
          <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question here... / ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಇಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ..."
              className="min-h-0 flex-1 resize-none"
              rows={1}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e.currentTarget.form as HTMLFormElement);
                }
              }}
              disabled={isPending}
            />
            <Button type="button" variant="outline" size="icon" disabled={isPending}>
              <Mic className="h-5 w-5" />
              <span className="sr-only">Voice Input</span>
            </Button>
            <Button type="submit" size="icon" disabled={!input.trim() || isPending}>
              <Send className="h-5 w-5" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
