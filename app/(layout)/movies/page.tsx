'use client';

import { Suspense } from 'react';
import { Container, Title } from '@mantine/core';
import Spinner from '@/app/components/Spinner';
import Filters from './components/Filters';

export default function Movies() {
  const genres: Genre[] = [
    {
      id: 28,
      name: 'Action',
    },
    {
      id: 12,
      name: 'Abenteuer',
    },
    {
      id: 16,
      name: 'Animation',
    },
    {
      id: 35,
      name: 'Komödie',
    },
    {
      id: 80,
      name: 'Krimi',
    },
    {
      id: 99,
      name: 'Dokumentarfilm',
    },
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 10751,
      name: 'Familie',
    },
    {
      id: 14,
      name: 'Fantasy',
    },
    {
      id: 36,
      name: 'Historie',
    },
    {
      id: 27,
      name: 'Horror',
    },
    {
      id: 10402,
      name: 'Musik',
    },
  ];

  const years = ['1990', '1991', '1992', '1993', '1994', '1995'];

  return (
    <Container size="64.3rem" my="1.25rem" px="xl">
      <Title order={1}>Movies</Title>
      <Suspense fallback={<Spinner />}>
        <Filters genres={genres} years={years} />
      </Suspense>
    </Container>
  );
}
