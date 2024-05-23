'use client';

import { Suspense } from 'react';
import { Stack, Title } from '@mantine/core';
import Filters from './components/Filters';
import SortBy from './components/Sorting';
import Movies from '@/app/components/Movies';
import LoaderDots from '@/app/components/LoaderDots';

export default function MoviesPage() {
  return (
    <>
      <Title order={1} mt={{ base: 'sm', md: 'md', lg: '1.2rem' }} mb="2.4rem">
        Movies
      </Title>
      <Stack gap="lg">
        <Suspense>
          <Filters />
          <SortBy />
        </Suspense>
      </Stack>
      <Suspense fallback={<LoaderDots />}>
        <Movies />
      </Suspense>
    </>
  );
}
