export interface OrthographyResponse {
  fixedMessage?: string;
  errors?: string[];
  score?: number;
  conclussion?: string;
  error?: string;
}

export interface OrthographyParsed {
  ok: boolean;
  message?: string;
  error?: string;
}
