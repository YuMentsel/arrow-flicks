import { ErrorMessage } from '../../types/enums';

export const fetcher = async (url: string | URL | Request) => {
  const response = await fetch(url, {
    cache: 'force-cache',
    next: { revalidate: 1800 },
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(ErrorMessage.NotFound);
    } else {
      throw new Error(ErrorMessage.Fetch);
    }
  }

  const data = await response.json();
  return data;
};
