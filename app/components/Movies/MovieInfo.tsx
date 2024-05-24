'use client';

import { memo, ReactNode } from 'react';
import { Text, Stack, useMantineTheme, Title, Flex } from '@mantine/core';
import { transformVotesCount } from '@/app/lib/utils/transformMoviesData';
import Star from '@/../../public/icons/star.svg';

interface MovieInfoProps {
  movie: Movie | MovieDetails;
  children: ReactNode;
}

const MovieInfo = memo(({ movie, children }: MovieInfoProps) => {
  const theme = useMantineTheme();

  return (
    <Stack gap="0.3rem">
      <Flex justify="space-between" wrap="nowrap" gap="0.5rem">
        <Title order={2} size="sm" lh={1.2} c={theme.colors.purple[5]}>
          {movie.original_title || '...'}
        </Title>
        {children}
      </Flex>

      <Text size="sm" c={theme.colors.gray[6]}>
        {movie.release_date ? new Date(movie.release_date).getFullYear() : 'unknown'}
      </Text>
      <Flex align="center" columnGap="0.25rem">
        <Star color={movie.vote_average ? theme.colors.yellow[6] : theme.colors.gray[2]} />
        <Text size="sm" fw={600} lh="20px">
          {movie.vote_average?.toFixed(1) || '0.0'}
        </Text>
        <Text size="sm" c={theme.colors.gray[6]} ml="0.25rem">
          ({movie.vote_count ? transformVotesCount(movie.vote_count) : 0})
        </Text>
      </Flex>
    </Stack>
  );
});

export default MovieInfo;
