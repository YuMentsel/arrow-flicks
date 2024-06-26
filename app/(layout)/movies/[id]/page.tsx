'use client';

import Link from 'next/link';
import { Breadcrumbs, Stack } from '@mantine/core';
import LoaderDots from '@/app/components/LoaderDots';
import MovieDetails from './components/MovieDetails';
import Trailer from './components/Trailer';
import { useMovie } from '@/app/lib/hooks/useMoviesDataHooks';
import { Path } from '@/app/types/enums';
import classes from './styles.module.css';

interface MoviePageProps {
  params: { id: string };
}

export default function MoviePage({ params: { id } }: Readonly<MoviePageProps>) {
  const { data, isLoading } = useMovie(+id);

  if (isLoading) {
    return <LoaderDots />;
  }

  return (
    data && (
      <Stack w="100%" maw="50rem" mih='95rem' mx="auto" gap='lg'>
        <Breadcrumbs classNames={classes} td="none" mt="md">
          <Link href="/">Movies</Link>
          <Link href={`/${Path.Movies}/${data.id}`}>{data.original_title}</Link>
        </Breadcrumbs>
        <MovieDetails movie={data} />
        <Trailer movie={data} />
      </Stack>
    )
  );
}
