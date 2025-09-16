import OpenAI from 'openai';
import { OrthographyResponseDto } from '../dtos';

interface Options {
  prompt: string;
  maxTokens?: number;
}

export const orthographyCheckUseCase = async (
  openai: OpenAI,
  options: Options,
): Promise<OrthographyResponseDto> => {
  const { prompt, maxTokens = 100 } = options;

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    temperature: 1,
    max_tokens: maxTokens,
    response_format: {
      type: 'json_object',
    },
    messages: [
      {
        role: 'system',
        content: `
          You will be given texts that may contain spelling and grammatical errors. 
          You must respond in valid JSON format only. 
          Your task is to correct the errors and return the corrected version. 
          You also need to provide the error percentage of the input text. 
          Make sure to return the corrections in the same language as the original text. 
          If there are no errors, return a good job message.

          Expected JSON output example:
          {
            "fixedMessage": "corrected text here",
            "errors": ["teh -> the", "recieve -> receive"],
            "score": 85,
            "conclussion": "The text was mostly correct, with minor spelling issues."
          }
        `,
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
  });

  try {
    const content = completion.choices[0].message?.content ?? '';

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const parsed: OrthographyResponseDto = JSON.parse(content);

    return parsed;
  } catch (error) {
    throw new Error(
      `Failed to parse model response: ${(error as Error).message}`,
    );
  }
};
