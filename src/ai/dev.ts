import { config } from 'dotenv';
config();

import '@genkit-ai/google-genai/register-config';
import '@/ai/flows/ai-farming-assistant.ts';
