'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
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
  const searchParams = useSearchParams();
  const suspenseKey = new URLSearchParams(searchParams);

  return (
    <Container size="65rem" ml="3.6rem" mx={'auto'} py="1.7rem">
      <Title order={1}>Movies</Title>
      <Suspense key={suspenseKey.toString()} fallback={<Spinner />}>
        <Filters genres={genres} years={years} />
      </Suspense>
    </Container>
  );
}
