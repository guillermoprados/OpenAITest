import { Module } from '@nestjs/common';
import { OpenAiModule } from './open-ai/open-ai.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), OpenAiModule],
})
export class AppModule {}
