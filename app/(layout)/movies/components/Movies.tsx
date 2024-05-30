import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Stack } from '@mantine/core';
import MovieList from '@/app/components/Movies/MovieList';
import MoviesPagination from '@/app/components/Movies/MoviesPagination';
import LoaderDots from '@/app/components/LoaderDots';
import { useGenres, useMovies } from '@/app/lib/hooks/useMoviesDataHooks';
import { Path } from '@/app/types/enums';

export default function Movies() {
  const { replace } = useRouter();

  useEffect(() => {
    if (window.location.hostname === 'arrow-flicks-yumentsel.netlify.app') {
      window.location.replace('https://arrow-flicks-yumentsel.vercel.app');
    }
  }, []);

  const searchParams = useSearchParams();
  const { data: moviesData, isLoading: isMoviesLoading, isValidParams } = useMovies(searchParams);
  const { data: genresData, isLoading: isGenresLoading } = useGenres();

  if (!isValidParams) {
    replace(`/${Path.NotFound}`);
  }

  if (isMoviesLoading || isGenresLoading) {
    return <LoaderDots />;
  }

  return (
    moviesData &&
    genresData && (
      <Stack align="flex-end" gap="xl" mb="3.5rem">
        <MovieList movies={moviesData.results} genres={genresData.genres} />
        {moviesData.total_pages > 1 && <MoviesPagination total={moviesData.total_pages} />}
      </Stack>
    )
  );
}
