import { Injectable } from '@nestjs/common';
import { orthographyCheckUseCase } from './useCases';
import { OrthographyQueryDto } from './dtos';
import OpenAI from 'openai';

@Injectable()
export class OpenAiService {
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  orthographyCheck({ prompt, maxTokens }: OrthographyQueryDto) {
    return orthographyCheckUseCase(this.openai, { prompt, maxTokens });
  }
}
