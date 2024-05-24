import Link from 'next/link';
import NextImage from 'next/image';
import { Box, Card, Flex, Image, Stack, Table } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useCallback, useContext, MouseEvent, useState } from 'react';
import { RatingButton } from '@/app/components/Movies/RatingButton';
import { RatingModal } from '@/app/components/Movies/RatingModal';
import { RatedContext } from '@/app/context';
import MovieInfo from '@/app/components/Movies/MovieInfo';
import { transformDetailedData } from '@/app/lib/utils/transformDetailedData';
import poster from '@/../../public/no-poster.png';
import classes from './styles.module.css';

interface MovieDetailsProps {
  movie: MovieDetails;
}

export default function MovieDetails({ movie }: Readonly<MovieDetailsProps>) {
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
      <Card w="100%" radius="lg" p="1.5rem" component={Link} href={`/movies/${movie.id}`}>
        <Flex gap="1rem" mih="22rem" direction={{ base: 'column', xs: 'row' }}>
          <Box pos="relative" h={{ base: '30rem', xs: '22rem' }} miw="15.6rem">
            <Image
              src={
                movie.poster_path && `${process.env.NEXT_PUBLIC_IMG_URL}/w185${movie.poster_path}`
              }
              alt={`Poster of ${movie.original_title || 'movie'}`}
              component={NextImage}
              fallbackSrc={poster.src}
              sizes="100%"
              fit="contain"
              fill
              priority
            />
          </Box>

          <Stack justify="space-between" gap="sm" w="100%">
            <MovieInfo movie={movie}>
              <RatingButton onClick={openRatingModal} rating={rating} />
            </MovieInfo>
            <Table
              data={transformDetailedData(movie)}
              classNames={classes}
              withRowBorders={false}
              horizontalSpacing={0}
              verticalSpacing={6}
              mb="-0.5rem"
            />
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
}
