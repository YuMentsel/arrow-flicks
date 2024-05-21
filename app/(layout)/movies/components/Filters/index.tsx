import { useRouter, useSearchParams } from 'next/navigation';
import { Button, Flex, Grid, rem } from '@mantine/core';
import { getQueryParams } from '@/app/lib/utils/getQueryParams';
import GenresFilter from './GenresFilter';
import YearFilter from './YearFilter';
import RatingsFilter from './RatingsFilter';
import { Paths } from '@/app/types/enums';
import classes from './styles.module.css';

export default function Filters() {
  const { push } = useRouter();
  const searchParams = useSearchParams();

  return (
    <Grid gutter="md" mb={{ base: '0.3rem', xs: 'md', md: 'xl' }}>
      <Grid.Col span={{ lg: 'auto', xs: 6, base: 12 }}>
        <GenresFilter />
      </Grid.Col>
      <Grid.Col span={{ lg: 'auto', xs: 6, base: 12 }}>
        <YearFilter />
      </Grid.Col>
      <Grid.Col span={{ lg: 'auto', xs: 6, base: 12 }}>
        <RatingsFilter />
      </Grid.Col>
      <Grid.Col span={{ lg: 'content', xs: 6, base: 12 }}>
        <Flex h="100%" justify="center" align="flex-end">
          <Button
            variant="transparent"
            className={classes.button}
            onClick={() => push(`/${Paths.Movies}`)}
            h="2.4rem"
            size="xs"
            disabled={getQueryParams(searchParams).length === 0}
          >
            Reset filters
          </Button>
        </Flex>
      </Grid.Col>
    </Grid>
  );
}
