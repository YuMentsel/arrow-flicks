import Link from 'next/link';
import { Card, Divider, Text, Stack, Title, AspectRatio } from '@mantine/core';
import { Companies } from './Companies';
import classes from './styles.module.css';

interface TrailerProps {
  movie: MovieDetails;
}

export default function Trailer({
  movie: { videos, overview, original_title, production_companies, id },
}: Readonly<TrailerProps>) {
  const isVideo = videos.results.length !== 0;
  const isCompanies = production_companies.length !== 0;
  const noTrailerData = !(!overview && !isCompanies && !isVideo);

  return (
    noTrailerData && (
      <Card w="100%" radius="lg" p="1.5rem" component={Link} href={`/movies/${id}`}>
        <Stack gap="md">
          {isVideo && (
            <>
              <Title order={3} fz="md" lh="1">
                Trailer
              </Title>
              <AspectRatio className={classes.video} ratio={16 / 9} maw="31rem" mb="0.35rem">
                <iframe
                  className={classes.frame}
                  title={`YouTube video: ${original_title}`}
                  src={`https://www.youtube.com/embed/${videos.results[0].key}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </AspectRatio>
            </>
          )}

          {overview && isVideo && <Divider />}
          {!overview && isCompanies && isVideo && <Divider />}

          {overview && (
            <Stack gap="sm">
              <Title order={3} fz="md">
                Description
              </Title>
              <Text fz="sm" lh="1.4">
                {overview}
              </Text>
            </Stack>
          )}

          {overview && isCompanies && <Divider />}

          {isCompanies && (
            <Stack gap="sm">
              <Companies companies={production_companies} />
            </Stack>
          )}
        </Stack>
      </Card>
    )
  );
}
