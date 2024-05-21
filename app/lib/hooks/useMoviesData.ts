import useSWR from 'swr';
import { fetchMoviesData } from '../utils/fetch';
import { Endpoints } from '@/app/types/enums';

export const useMoviesData = (params: string) => {
  const { data, error, isLoading } = useSWR<MainPageResponse>(
    `${Endpoints.MoviesData}?${params}`,
    fetchMoviesData,
  );

  return { data, error, isLoading };
};
