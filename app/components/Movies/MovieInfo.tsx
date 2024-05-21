'use client';

import { memo } from 'react';
import { Text, Stack, useMantineTheme, Title, Flex, Rating } from '@mantine/core';
import { transformVotesCount } from '@/app/lib/utils/transformMoviesData';

interface MovieInfoProps {
  movie: Movie;
}

const MovieInfo = memo(({ movie }: MovieInfoProps) => {
  const theme = useMantineTheme();

  return (
    <Stack gap="0.5rem">
      <Title order={2} size="sm" lh={1.2} c={theme.colors.purple[5]}>
        {movie.title ?? '...'}
      </Title>

      <Text size="sm" c={theme.colors.grey[6]}>
        {new Date(movie.release_date).getFullYear() ?? 'unknown'}
      </Text>
      <Flex align="center" columnGap="0.25rem">
        <Rating size="lg" readOnly count={1} value={movie?.vote_average} />
        <Text size="sm" fw={600} lh="20px">
          {movie.vote_average.toFixed(1) ?? '0.0'}
        </Text>
        <Text size="sm" c={theme.colors.grey[6]} ml="0.25rem">
          ({transformVotesCount(movie.vote_count) ?? 0})
        </Text>
      </Flex>
    </Stack>
  );
});

export default MovieInfo;
