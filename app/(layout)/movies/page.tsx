'use client';

import { Container, Title } from '@mantine/core';
import Filters from './components/Filters';
import MovieList from '@/app/components/Movies';
import Spinner from '@/app/components/Spinner';
import { useSearchParams } from 'next/navigation';
import { useGenres, useMovies } from '@/app/lib/hooks/useMoviesDataHooks';

export default function Movies() {
  const searchParams = useSearchParams();
  const { data, isLoading } = useMovies(searchParams.toString());
  const { data: genresData, isLoading: isGenresLoading } = useGenres();

  return (
    <Container
      size="65rem"
      mx={'auto'}
      px={{ base: 'sm', xs: 'xl', sm: '1.85rem' }}
      py={{ base: 'xs', sm: 'xl' }}
    >
      <Title order={1} mb="2.3rem">
        Movies
      </Title>
      <Filters />
      {isLoading || isGenresLoading ? (
        <Spinner />
      ) : (
        data &&
        genresData && <MovieList movies={data.results} genres={genresData.genres} />
      )}
    </Container>
  );
}
