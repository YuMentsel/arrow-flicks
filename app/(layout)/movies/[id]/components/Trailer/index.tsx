import Link from 'next/link';
import { Card, Divider, Text, Stack, Title, AspectRatio } from '@mantine/core';
import { Companies } from './Companies';
import classes from './styles.module.css';

interface TrailerProps {
  movie: MovieDetails;
}

export default function Trailer({ movie }: Readonly<TrailerProps>) {
  return (
    <Card w="100%" radius="lg" p="1.5rem" component={Link} href={`/movies/${movie.id}`}>
      <Stack gap="1rem">
        {movie.videos.results.length !== 0 && (
          <>
            <Title order={3} fz="md">
              Trailer
            </Title>
            <AspectRatio className={classes.video} ratio={16 / 9} maw="31rem">
              <iframe
                className={classes.frame}
                title={`YouTube video: ${movie.original_title}`}
                src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </AspectRatio>
            <Divider />
          </>
        )}
        <Title order={3} fz="md">
          Description
        </Title>
        <Text fz="sm">{movie.overview}</Text>
        {movie.production_companies.length !== 0 && (
          <>
            <Divider />
            <Companies companies={movie.production_companies} />
          </>
        )}
      </Stack>
    </Card>
  );
}
