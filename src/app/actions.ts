'use server';

import { farmingAssistant } from '@/ai/flows/ai-farming-assistant';

export async function getAiFarmingResponse(formData: FormData) {
  const query = formData.get('query') as string;
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
