'use client';

import { memo } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import { useMantineTheme, Card, Flex, Box, Stack, Group, Image, Text } from '@mantine/core';
import poster from '@/../../public/no-poster-sm.png';
import { transformGenres } from '@/app/lib/utils/transformGenresData';
import MovieInfo from './MovieInfo';

interface MovieCardProps {
  movie: Movie;
  genres: Genre[];
}

export const MovieCard = memo(({ movie, genres }: MovieCardProps) => {
  const theme = useMantineTheme();

  return (
    <Card w="100%" radius="lg" p="xl" component={Link} href={`/movies/${movie.id ?? ''}`}>
      <Flex gap="1rem">
        <Box pos="relative" h="10.62rem" miw="7.44rem">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMG_URL}/w185${movie.poster_path ?? ''}`}
            alt={`Poster ${movie.title ?? ''}`}
            component={NextImage}
            fallbackSrc={poster.src}
            sizes="100%"
            fit="cover"
            fill
            priority
          />
        </Box>

        <Stack justify="space-between" gap="sm" w="100%">
          <MovieInfo movie={movie} />
          <Group align="flex-start" wrap="nowrap" gap="xs">
            <Text lh={1.2} size="sm" c={theme.colors.grey[6]}>
              Genres
            </Text>

            <Text lh={1.2} size="sm" lineClamp={2}>
              {transformGenres(genres, movie.genre_ids ?? [])}
            </Text>
          </Group>
        </Stack>
      </Flex>
    </Card>
  );
});

export default MovieCard;
