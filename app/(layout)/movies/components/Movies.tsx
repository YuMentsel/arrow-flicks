import { useSearchParams } from 'next/navigation';
import MovieList from '@/app/components/Movies/MovieList';
import LoaderDots from '@/app/components/LoaderDots';
import { useGenres, useMovies } from '@/app/lib/hooks/useMoviesDataHooks';

export default function Movies() {
  const searchParams = useSearchParams();
  const { data: moviesData, isLoading: isMoviesLoading } = useMovies(searchParams.toString());
  const { data: genresData, isLoading: isGenresLoading } = useGenres();

  if (isMoviesLoading || isGenresLoading) {
    return <LoaderDots />;
  }

  return (
    moviesData && genresData && <MovieList movies={moviesData.results} genres={genresData.genres} />
  );
}
