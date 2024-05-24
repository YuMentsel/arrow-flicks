'use client';

import { Suspense, useContext, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Flex, Title } from '@mantine/core';
import LoaderDots from '@/app/components/LoaderDots';
import { Search } from './components/Search';
import { EmptyRatedList } from './components/EmptyRatedList';
import { RatedContext } from '../layout';
import MovieList from '@/app/components/Movies/MovieList';
import { useRatedMovies, useGenres } from '@/app/lib/hooks/useMoviesDataHooks';
import { SearchParam } from '@/app/types/enums';

export default function RatedMoviesPage() {
  const searchParams = useSearchParams();
  const searchValue = useMemo(() => searchParams.get(SearchParam.Search) ?? '', [searchParams]);

  const { ratedData } = useContext<RatedContextData>(RatedContext);

  const { data: ratedMovies, isLoading: isRatedMoviesLoading } = useRatedMovies(
    Object.keys(JSON.parse(ratedData)),
  );

  const { data: genresData, isLoading: isGenresLoading } = useGenres();

  const filteredMovies: MovieDetails[] = useMemo(() => {
    if (!ratedMovies?.length) return [];
    if (!searchValue) return ratedMovies;
    return ratedMovies.filter(({ title }) =>
      title.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }, [ratedMovies, searchValue]);

  if (isRatedMoviesLoading || isGenresLoading) {
    return <LoaderDots />;
  }

  if (!ratedMovies?.length) {
    return <EmptyRatedList />;
  }

  return (
    <>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        my={{ base: 'sm', md: 'md', lg: '1.1rem' }}
        rowGap="md"
      >
        <Title order={1} mr="1rem" style={{ whiteSpace: 'nowrap' }}>
          Rated movies
        </Title>
        <Search />
      </Flex>

      <Suspense fallback={<LoaderDots />}>
        {genresData && <MovieList movies={filteredMovies} genres={genresData.genres} />}
      </Suspense>
    </>
  );
}
