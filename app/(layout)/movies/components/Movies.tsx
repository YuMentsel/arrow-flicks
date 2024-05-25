import { useRouter, useSearchParams } from 'next/navigation';
import MovieList from '@/app/components/Movies/MovieList';
import LoaderDots from '@/app/components/LoaderDots';
import { useGenres, useMovies } from '@/app/lib/hooks/useMoviesDataHooks';
import { useEffect } from 'react';

export default function Movies() {
  const router = useRouter();

  useEffect(() => {
    if (window?.location.hostname === 'arrow-flicks-yumentsel.netlify.app') {
      router.replace('https://arrow-flicks-yumentsel.vercel.app');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
