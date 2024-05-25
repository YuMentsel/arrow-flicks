import useSWR from 'swr';
import { fetcher } from '../utils/fetch';
import { Endpoint } from '@/app/types/enums';

export const useMovies = (params: string) =>
  useSWR<MovieResponse>(`${Endpoint.MoviesData}?${params}`, fetcher);

export const useMovie = (id: number) => useSWR(`${Endpoint.Movie}${id}`, fetcher);

export const useRatedMovies = (moviesId: string[]) => {
  return useSWR(
    moviesId.length > 0 ? moviesId.map((id) => `${Endpoint.Movie}${id}`) : null,
    (urls) => Promise.all(urls.map((url) => fetcher(url))),
  );
};

export const useGenres = () => useSWR<GenreResponse>(`${Endpoint.Genres}`, fetcher);
