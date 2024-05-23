'use client';

import { Suspense } from 'react';
import { Flex, Title } from '@mantine/core';
import RatedMovies from './components/RatedMovies';
import LoaderDots from '@/app/components/LoaderDots';
import { Search } from './components/Search';

export default function RatedMoviesPage() {
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
        <RatedMovies />
      </Suspense>
    </>
  );
}
