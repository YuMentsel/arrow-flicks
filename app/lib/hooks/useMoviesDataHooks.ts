import { ReadonlyURLSearchParams } from 'next/navigation';
import useSWR from 'swr';
import { fetcher } from '../utils/fetch';
import { Endpoint } from '@/app/types/enums';
import { validateSearchParams } from '../utils/validateSearchParams';

export const useMovies = (params: ReadonlyURLSearchParams) => {
  const isValidParams = validateSearchParams(params);
  const { data, isLoading } = useSWR<MovieResponse>(
    `${Endpoint.MoviesData}?${params.toString()}`,
    fetcher,
  );
  return { data, isLoading, isValidParams };
};

export const useMovie = (id: number) => useSWR(`${Endpoint.Movie}${id}`, fetcher);

export const useRatedMovies = (moviesId: string[]) => {
  return useSWR(
    moviesId.length > 0 ? moviesId.map((id) => `${Endpoint.Movie}${id}`) : null,
    (urls) => Promise.all(urls.map((url) => fetcher(url))),
  );
};

export const useGenres = () => useSWR<GenreResponse>(`${Endpoint.Genres}`, fetcher);
