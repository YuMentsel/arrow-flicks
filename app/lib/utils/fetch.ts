import { Endpoints } from '../../types/enums';

export const fetcher = async (url: string | URL | Request) => {
  const response = await fetch(url, {
    cache: 'force-cache',
    next: { revalidate: 600 },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data :(');
  }

  const data = await response.json();
  return data;
};

export const fetchMoviesData = async (url: string | URL | Request): Promise<MainPageResponse> => {
  const [moviesData, genres] = await Promise.all([fetcher(url), fetcher(Endpoints.Genres)]);
  return { moviesData, ...genres };
};
