import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Stack } from '@mantine/core';
import MovieList from '@/app/components/Movies/MovieList';
import MoviesPagination from '@/app/components/Movies/MoviesPagination';
import LoaderDots from '@/app/components/LoaderDots';
import { useGenres, useMovies } from '@/app/lib/hooks/useMoviesDataHooks';

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
    moviesData &&
    genresData && (
      <Stack align="flex-end" gap="xl" mb="3.5rem">
        <MovieList movies={moviesData.results} genres={genresData.genres} />
        {moviesData.results.length > 0 && <MoviesPagination total={moviesData.total_pages} />}
      </Stack>
    )
  );
}
