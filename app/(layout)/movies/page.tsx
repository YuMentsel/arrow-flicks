'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { SWRConfig } from 'swr';
import { Container, Stack, Title } from '@mantine/core';
import Filters from './components/Filters';
import MovieList from '@/app/components/Movies';
import Spinner from '@/app/components/Spinner';
import ErrorBoundary from '../../components/ErrorBoundary';
import SortBy from './components/Sorting';
import { useGenres, useMovies } from '@/app/lib/hooks/useMoviesDataHooks';

export default function Movies() {
  const searchParams = useSearchParams();
  const { data, isLoading } = useMovies(searchParams.toString());
  const { data: genresData, isLoading: isGenresLoading } = useGenres();
  const [error, setError] = useState('');

  return (
    <SWRConfig
      value={{
        onError: (error) => {
          setError(`Error! ${error.message}`);
        },
      }}
    >
      <Container
        style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}
        mih="100vh"
        size="65rem"
        mx={'auto'}
        px={{ base: 'sm', xs: 'xl', sm: '1.85rem' }}
        py={{ base: 'xs', sm: 'xl' }}
      >
        {error ? (
          <ErrorBoundary errorMessage={error} />
        ) : (
          <>
            <Title order={1} mt={{ base: 'sm', md: 'md', lg: '1.2rem' }} mb="2.4rem">
              Movies
            </Title>
            <Stack gap="lg">
              <Filters />
              <SortBy />
            </Stack>
            {isLoading || isGenresLoading ? (
              <Spinner />
            ) : (
              data && genresData && <MovieList movies={data.results} genres={genresData.genres} />
            )}
          </>
        )}
      </Container>
    </SWRConfig>
  );
}
