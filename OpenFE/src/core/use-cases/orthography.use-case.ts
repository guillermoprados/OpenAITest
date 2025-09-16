import type {
  OrthographyParsed,
  OrthographyResponse,
} from '../../interfaces/orthography.response';

export const orthographyUseCase = async (
  prompt: string
): Promise<OrthographyParsed> => {
  try {
    const orthographyApi = `${import.meta.env.VITE_BACKEND_API}/orthography-check`;
    console.log(orthographyApi);
    const resp = await fetch(orthographyApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!resp.ok) {
      throw new Error('Correction failed');
    }

    const data = (await resp.json()) as OrthographyResponse;
    const message = asMarkdownMessage(data);
    return {
      message,
      ok: true,
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      ok: false,
      error: 'An unexpected error occurred',
    };
  }
};

function asMarkdownMessage(res: OrthographyResponse): string {
  const message = `## Fixed Message:
*${res.fixedMessage}*

### Errors:
*${res.errors}*

### Score:
*${res.score}*

#### Conclussion:
**${res.conclussion}**

`;
  return message;
}
