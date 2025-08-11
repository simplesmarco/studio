'use server';

/**
 * @fileOverview Dynamic FAQ Generation Flow.
 *
 * This file implements a Genkit flow to dynamically generate answers to frequently asked questions
 * about physiotherapy services. It uses a prompt to tailor responses based on user queries
 * regarding session duration, treatment specifics, service options, and other common concerns.
 *
 * @interface DynamicFaqInput - Defines the input schema for the dynamic FAQ flow, expecting a question string.
 * @interface DynamicFaqOutput - Defines the output schema for the dynamic FAQ flow, providing an answer string.
 * @function generateDynamicFaq - A function that calls the dynamic FAQ flow with the input and returns the output.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DynamicFaqInputSchema = z.object({
  question: z
    .string()
    .describe('The question to be answered by the dynamic FAQ system.'),
});
export type DynamicFaqInput = z.infer<typeof DynamicFaqInputSchema>;

const DynamicFaqOutputSchema = z.object({
  answer: z.string().describe('The answer to the question.'),
});
export type DynamicFaqOutput = z.infer<typeof DynamicFaqOutputSchema>;

export async function generateDynamicFaq(input: DynamicFaqInput): Promise<DynamicFaqOutput> {
  return dynamicFaqFlow(input);
}

const dynamicFaqPrompt = ai.definePrompt({
  name: 'dynamicFaqPrompt',
  input: {schema: DynamicFaqInputSchema},
  output: {schema: DynamicFaqOutputSchema},
  prompt: `You are a helpful assistant designed to answer questions about Dr. Lucas Ribeiro's physiotherapy services.

  Use the following information to answer the question:

  Dr. Lucas Ribeiro offers specialized treatments in Quiropraxia, Liberação Miofascial, Dry Needling, and Ortopedia.
  He has 10 years of experience and provides personalized treatment plans based on individual needs.
  Services are available both at the clinic located in R. Comendador Ângelo Rinaldi, 164 - Sala 21, Parque Santos Dumont, Taboão da Serra - SP, CEP: 06754-070, and through at-home visits.
  To schedule a consultation, you can contact via WhatsApp at (11) 9 8765-3214 or by phone at (11) 3456-7890.

  Question: {{{question}}}
  `,
});

const dynamicFaqFlow = ai.defineFlow(
  {
    name: 'dynamicFaqFlow',
    inputSchema: DynamicFaqInputSchema,
    outputSchema: DynamicFaqOutputSchema,
  },
  async input => {
    const {output} = await dynamicFaqPrompt(input);
    return output!;
  }
);
