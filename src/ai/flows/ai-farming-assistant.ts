'use server';

/**
 * @fileOverview A farming assistant AI agent. 
 *
 * - farmingAssistant - A function that handles the farming question answering process.
 * - FarmingAssistantInput - The input type for the farmingAssistant function.
 * - FarmingAssistantOutput - The return type for the farmingAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import wav from 'wav';

const FarmingAssistantInputSchema = z.object({
  query: z.string().describe('The farming question asked by the farmer.'),
  language: z.enum(['en', 'kn']).describe('The language for the response (English or Kannada).'),
});
export type FarmingAssistantInput = z.infer<typeof FarmingAssistantInputSchema>;

const FarmingAssistantOutputSchema = z.object({
  textResponse: z.string().describe('The text response to the farming question.'),
  voiceResponse: z.string().describe('The voice response to the farming question as a data URI.'),
});
export type FarmingAssistantOutput = z.infer<typeof FarmingAssistantOutputSchema>;

export async function farmingAssistant(input: FarmingAssistantInput): Promise<FarmingAssistantOutput> {
  return farmingAssistantFlow(input);
}

async function toWav(
  pcmData: Buffer,
  channels = 1,
  rate = 24000,
  sampleWidth = 2
): Promise<string> {
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });

    let bufs = [] as any[];
    writer.on('error', reject);
    writer.on('data', function (d) {
      bufs.push(d);
    });
    writer.on('end', function () {
      resolve(Buffer.concat(bufs).toString('base64'));
    });

    writer.write(pcmData);
    writer.end();
  });
}

const farmingAssistantPrompt = ai.definePrompt({
  name: 'farmingAssistantPrompt',
  input: {schema: FarmingAssistantInputSchema},
  prompt: `You are an expert AI farming assistant. A farmer will ask a question, and you will provide a helpful answer.
Respond in the following language: {{{language}}}.

Question: {{{query}}}`,
});

const farmingAssistantFlow = ai.defineFlow(
  {
    name: 'farmingAssistantFlow',
    inputSchema: FarmingAssistantInputSchema,
    outputSchema: FarmingAssistantOutputSchema,
  },
  async input => {
    const {text: textResponse} = await farmingAssistantPrompt(input);

    const { media } = await ai.generate({
      model: 'googleai/gemini-2.5-flash-preview-tts',
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Algenib' },
          },
        },
      },
      prompt: textResponse,
    });

    if (!media) {
      throw new Error('no media returned');
    }

    const audioBuffer = Buffer.from(
      media.url.substring(media.url.indexOf(',') + 1),
      'base64'
    );
    const voiceResponse = 'data:audio/wav;base64,' + (await toWav(audioBuffer));

    return {
      textResponse,
      voiceResponse,
    };
  }
);
