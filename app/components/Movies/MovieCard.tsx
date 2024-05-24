'use client';

import { memo, useCallback, useState, MouseEvent, useEffect, useContext } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import { useMantineTheme, Card, Flex, Box, Stack, Group, Image, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { transformGenres } from '@/app/lib/utils/transformGenresData';
import MovieInfo from './MovieInfo';
import { RatingButton } from './RatingButton';
import { RatingModal } from './RatingModal';
import { RatedContext } from '@/app/(layout)/layout';
import poster from '@/../../public/no-poster-sm.png';

interface MovieCardProps {
  movie: Movie | MovieDetails;
  genres: Genre[];
}

export const MovieCard = memo(({ movie, genres }: MovieCardProps) => {
  const theme = useMantineTheme();

  const genresArr = 'genres' in movie ? movie.genres.map(({ name }) => name) : [];
  const genresStr = 'genre_ids' in movie ? transformGenres(genres, movie.genre_ids) : '';

  const { ratedData } = useContext<RatedContextData>(RatedContext);

  const [rating, setRating] = useState<number | null>(+JSON.parse(ratedData)[movie.id] || null);
  const [opened, { open, close }] = useDisclosure(false);

  const openRatingModal = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      open();
    },
    [open],
  );

  const updateRating = useCallback((rating: number | null) => {
    setRating(rating);
  }, []);

  return (
    <>
      <Card w="100%" radius="lg" p="xl" component={Link} href={`/movies/${movie.id}`}>
        <Flex gap="1rem" direction={{ base: 'column', xs: 'row' }}>
          <Box pos="relative" h={{ base: '22rem', xs: '10.62rem' }} miw="7.44rem">
            <Image
              src={
                movie.poster_path && `${process.env.NEXT_PUBLIC_IMG_URL}/w185${movie.poster_path}`
              }
              alt={`Poster of ${movie.original_title || 'movie'}`}
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
              <RatingButton onClick={openRatingModal} rating={rating} />
            </MovieInfo>
            <Group align="flex-start" wrap="nowrap" gap="xs">
              <Text lh={1.2} size="sm" c={theme.colors.gray[6]}>
                Genres
              </Text>

              <Text lh={1.2} size="sm" lineClamp={2}>
                {genresArr ? genresArr.join(', ') : genresStr}
              </Text>
            </Group>
          </Stack>
        </Flex>
      </Card>
      <RatingModal
        movie={{ title: movie.original_title || '...', id: movie.id.toString() }}
        rating={rating}
        opened={opened}
        close={close}
        updateRating={updateRating}
      />
    </>
  );
});

export default MovieCard;
