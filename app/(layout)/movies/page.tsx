'use client';

import { Suspense } from 'react';
import { Title } from '@mantine/core';
import Filters from './components/Filters';
import SortBy from './components/Sorting';
import Movies from '@/app/(layout)/movies/components/Movies';
import LoaderDots from '@/app/components/LoaderDots';

export default function MoviesPage() {
  return (
    <>
      <Title order={1} mt={{ base: 'sm', md: 'md', lg: '1.25rem' }} mb="md">
        Movies
      </Title>

      <Suspense>
        <Filters />
        <SortBy />
      </Suspense>

      <Suspense fallback={<LoaderDots />}>
        <Movies />
      </Suspense>
    </>
  );
}
