'use server';

import { farmingAssistant } from '@/ai/flows/ai-farming-assistant';

type AiFarmingPayload = {
  query: string;
};

export async function getAiFarmingResponse(payload: AiFarmingPayload) {
  const { query } = payload;
  try {
    if (!query) {
      return { error: 'Query is required.' };
    }
    const response = await farmingAssistant({ query });
    
    return response;
  } catch (error) {
    console.error(error);
    return { error: 'An error occurred while fetching the AI response.' };
  }
}
