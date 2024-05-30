'use client';

import { useContext, useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Box, Flex, Stack, Title } from '@mantine/core';
import LoaderDots from '@/app/components/LoaderDots';
import { Search } from '../components/Search';
import { EmptyRatedList } from '../components/EmptyRatedList';
import MovieList from '@/app/components/Movies/MovieList';
import MoviesPagination from '@/app/components/Movies/MoviesPagination';
import { RatedContext } from '@/app/context';
import { useRatedMovies, useGenres } from '@/app/lib/hooks/useMoviesDataHooks';
import { createQueryString } from '@/app/lib/utils/createQueryString';
import { SearchParam } from '@/app/types/enums';
import { MOVIES_ON_PAGE } from '@/app/constants';

export default function RatedMovies() {
  const searchParams = useSearchParams();
  const searchValue = useMemo(() => searchParams.get(SearchParam.Search) ?? '', [searchParams]);
  const { push } = useRouter();
  const pathname = usePathname();

  const [page, setPage] = useState(1);

  useEffect(() => {
    const pageParam = searchParams.get(SearchParam.Page);
    setPage(pageParam ? +pageParam : 1);
  }, [searchParams]);

  const { ratedData } = useContext<RatedContextData>(RatedContext);
  const ratedMoviesKeys = Object.keys(JSON.parse(ratedData));

  const { data: ratedMovies, isLoading: isRatedMoviesLoading } = useRatedMovies(ratedMoviesKeys);
  const { data: genresData, isLoading: isGenresLoading } = useGenres();

  const filteredMovies = useMemo(() => {
    if (!ratedMovies?.length) return [];
    if (!searchValue) return ratedMovies;

    return ratedMovies.filter(({ title }) =>
      title.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }, [ratedMovies, searchValue]);

  const paginatedMovies = useMemo(() => {
    return filteredMovies.slice(MOVIES_ON_PAGE * (page - 1), MOVIES_ON_PAGE * page);
  }, [filteredMovies, page]);

  useEffect(() => {
    if (
      !isRatedMoviesLoading &&
      !(filteredMovies.length % MOVIES_ON_PAGE) &&
      page > 1 &&
      !paginatedMovies.length
    ) {
      const queryString = createQueryString(searchParams, (page - 1).toString(), SearchParam.Page);
      push(`${pathname}?${queryString}`);
      setPage(page - 1);
    }
  }, [filteredMovies, paginatedMovies, isRatedMoviesLoading, page, searchParams, push, pathname]);

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

      {genresData && (
        <Stack align="center" gap="xl" mb="3.5rem">
          <Box
            mih={{ base: 'auto', lg: '28.25rem' }}
            w="100%"
            mt={filteredMovies.length ? 0 : '20%'}
          >
            <MovieList movies={paginatedMovies} genres={genresData.genres} />
          </Box>
          {filteredMovies.length > MOVIES_ON_PAGE && (
            <MoviesPagination total={Math.ceil(filteredMovies.length / MOVIES_ON_PAGE)} />
          )}
        </Stack>
      )}
    </>
  );
}
