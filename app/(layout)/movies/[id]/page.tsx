'use client';

import { Stack } from '@mantine/core';
import LoaderDots from '@/app/components/LoaderDots';
import MovieDetails from './components/MovieDetails';
import { useMovie } from '@/app/lib/hooks/useMoviesDataHooks';

interface MoviePageProps {
  params: { id: string };
}

export default function MoviePage({ params: { id } }: Readonly<MoviePageProps>) {
  const { data, isLoading } = useMovie(+id);

  if (isLoading) {
    return <LoaderDots />;
  }

  return (
    data && (
      <Stack w="100%" maw="50rem" mx="auto">
        <MovieDetails movie={data} />
        {/* <Trailer movie={data} /> */}
      </Stack>
    )
  );
}
