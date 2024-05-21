'use client';

import { Container, Title } from '@mantine/core';
import Filters from './components/Filters';
import MovieList from '@/app/components/Movies';
import Spinner from '@/app/components/Spinner';
import { useSearchParams } from 'next/navigation';
import { useMoviesData } from '@/app/lib/hooks/useMoviesData';

export default function Movies() {
  const searchParams = useSearchParams();
  const { data, isLoading } = useMoviesData(searchParams.toString());

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
      {isLoading ? (
        <Spinner />
      ) : (
        data && (
          <>
            <Filters />
            <MovieList movies={data.moviesData.results} genres={data.genres} />
          </>
        )
      )}
    </Container>
  );
}
