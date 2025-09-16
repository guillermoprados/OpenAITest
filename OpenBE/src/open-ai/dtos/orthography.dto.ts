import { IsInt, IsOptional, IsString } from 'class-validator';

export class OrthographyQueryDto {
  @IsString()
  readonly prompt: string;

  @IsInt()
  @IsOptional()
  readonly maxTokens?: number;
}

export class OrthographyResponseDto {
  readonly fixedMessage: string;
  readonly errors: string[];
  readonly score: number;
  readonly conclussion: string;
}
