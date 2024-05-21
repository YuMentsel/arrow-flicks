'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { SWRConfig } from 'swr';
import { Container, Title } from '@mantine/core';
import Filters from './components/Filters';
import MovieList from '@/app/components/Movies';
import Spinner from '@/app/components/Spinner';
import { useGenres, useMovies } from '@/app/lib/hooks/useMoviesDataHooks';
import ErrorBoundary from '../../components/ErrorBoundary';

export default function Movies() {
  const searchParams = useSearchParams();
  const { data, isLoading } = useMovies(searchParams.toString());
  const { data: genresData, isLoading: isGenresLoading } = useGenres();
  const [error, setError] = useState('');

  return (
    <Container
      style={{ position: 'relative' }}
      mih="100vh"
      size="65rem"
      mx={'auto'}
      px={{ base: 'sm', xs: 'xl', sm: '1.85rem' }}
      py={{ base: 'xs', sm: 'xl' }}
    >
      <SWRConfig
        value={{
          onError: (error) => {
            setError(`Error! ${error.message}`);
          },
        }}
      >
        {error ? (
          <ErrorBoundary errorMessage={error} />
        ) : (
          <>
            <Title order={1} mt={{ base: 'sm', md: 'md', lg: '1.22rem' }} mb="2.3rem">
              Movies
            </Title>
            <Filters />
            {isLoading || isGenresLoading ? (
              <Spinner />
            ) : (
              data && genresData && <MovieList movies={data.results} genres={genresData.genres} />
            )}
          </>
        )}
      </SWRConfig>
    </Container>
  );
}
