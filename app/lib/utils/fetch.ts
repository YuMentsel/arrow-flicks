import { Endpoint, ErrorMessage } from '../../types/enums';

export const fetcher = async (url: string | URL | Request) => {
  const response = await fetch(url, {
    cache: 'force-cache',
    next: { revalidate: 1800 },
  });

  if (!response.ok) {
    throw new Error(ErrorMessage.Fetch);
  }

  const data = await response.json();
  return data;
};

export const fetchMoviesData = async (url: string | URL | Request): Promise<MainPageResponse> => {
  const [moviesData, genres] = await Promise.all([fetcher(url), fetcher(Endpoint.Genres)]);
  return { moviesData, ...genres };
};
