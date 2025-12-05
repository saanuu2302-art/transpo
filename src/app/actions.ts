'use server';

import { farmingAssistant } from '@/ai/flows/ai-farming-assistant';

<<<<<<< HEAD
type AiFarmingPayload = {
  query: string;
};

export async function getAiFarmingResponse(payload: AiFarmingPayload) {
  const { query } = payload;
=======
export async function getAiFarmingResponse(prevState: any, formData: FormData) {
  const query = formData.get('query') as string;
>>>>>>> 3c83eb72c4fed165f0eb00a08511a386cc6f2469
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
