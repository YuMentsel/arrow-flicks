import useSWR from 'swr';
import { fetchMoviesData, fetcher } from '../utils/fetch';
import { Endpoints } from '@/app/types/enums';

export const useMoviesData = (params: string) =>
  useSWR<MainPageResponse>(`${Endpoints.MoviesData}?${params}`, fetchMoviesData);

export const useMovies = (params: string) =>
  useSWR<MovieResponse>(`${Endpoints.MoviesData}?${params}`, fetcher);

export const useGenres = () => useSWR<GenreResponse>(`${Endpoints.Genres}`, fetcher);
