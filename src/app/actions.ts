'use server';

import { farmingAssistant } from '@/ai/flows/ai-farming-assistant';

type AiFarmingPayload = {
  query: string;
  language: 'en' | 'kn';
}

export async function getAiFarmingResponse(payload: AiFarmingPayload) {
  const { query, language } = payload;
  try {
    if (!query) {
      return { error: 'Query is required.' };
    }
    const response = await farmingAssistant({ query, language });
    return response;
  } catch (error) {
    console.error(error);
    return { error: 'An error occurred while fetching the AI response.' };
  }
}
