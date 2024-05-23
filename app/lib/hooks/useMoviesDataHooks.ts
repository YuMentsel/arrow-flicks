import useSWR from 'swr';
import { fetchMoviesData, fetcher } from '../utils/fetch';
import { Endpoint } from '@/app/types/enums';

export const useMoviesData = (params: string) =>
  useSWR<MainPageResponse>(`${Endpoint.MoviesData}?${params}`, fetchMoviesData);

export const useMovies = (params: string) =>
  useSWR<MovieResponse>(`${Endpoint.MoviesData}?${params}`, fetcher);

export const useGenres = () => useSWR<GenreResponse>(`${Endpoint.Genres}`, fetcher);
