'use client';

import { memo, useCallback, useState, MouseEvent } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import { useMantineTheme, Card, Flex, Box, Stack, Group, Image, Text } from '@mantine/core';
import { transformGenres } from '@/app/lib/utils/transformGenresData';
import MovieInfo from './MovieInfo';
import { RatingButton } from './RatingButton';
import poster from '@/../../public/no-poster-sm.png';

interface MovieCardProps {
  movie: Movie;
  genres: Genre[];
}

export const MovieCard = memo(({ movie, genres }: MovieCardProps) => {
  const theme = useMantineTheme();

  const [vote, setVote] = useState<number>(0);

  const rateMovie = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setVote((prevVote) => prevVote + 1);
  }, []);

  return (
    <Card w="100%" radius="lg" p="xl" component={Link} href={`/movies/${movie.id ?? ''}`}>
      <Flex gap="1rem">
        <Box pos="relative" h="10.62rem" miw="7.44rem">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMG_URL}/w185${movie.poster_path ?? ''}`}
            alt={`Poster of ${movie.title ?? 'movie'}`}
            component={NextImage}
            fallbackSrc={poster.src}
            sizes="100%"
            fit="cover"
            fill
            priority
          />
        </Box>

        <Stack justify="space-between" gap="sm" w="100%">
          <MovieInfo movie={movie}>
            <RatingButton onClick={rateMovie} rating={vote} />
          </MovieInfo>
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
