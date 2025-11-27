'use server';

import { farmingAssistant } from '@/ai/flows/ai-farming-assistant';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';


type AiFarmingPayload = {
  query: string;
  userId: string;
};

export async function getAiFarmingResponse(payload: AiFarmingPayload) {
  const { query, userId } = payload;
  try {
    if (!query) {
      return { error: 'Query is required.' };
    }
    const response = await farmingAssistant({ query });
    
    // Log the conversation to Firestore - This is now removed
    // try {
    //   const { firestore } = initializeFirebase();
    //   await addDoc(collection(firestore, 'ai_expert_logs'), {
    //     userId,
    //     query,
    //     response: response.textResponse,
    //     timestamp: serverTimestamp(),
    //   });
    // } catch (logError) {
    //   console.error('Failed to log AI conversation:', logError);
    //   // We don't want to fail the whole request if logging fails
    // }

    return response;
  } catch (error) {
    console.error(error);
    return { error: 'An error occurred while fetching the AI response.' };
  }
}
