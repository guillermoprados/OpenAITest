import { Body, Controller, Post } from '@nestjs/common';
import { OpenAiService } from './open-ai.service';
import { OrthographyQueryDto } from './dtos';

@Controller('open-ai')
export class OpenAiController {
  constructor(private readonly openAiService: OpenAiService) {}

  @Post('orthography-check')
  ortographyCheck(@Body() orthographyDto: OrthographyQueryDto) {
    return this.openAiService.orthographyCheck(orthographyDto);
  }
}
