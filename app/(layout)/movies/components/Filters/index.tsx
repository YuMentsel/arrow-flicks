import { useRouter, useSearchParams } from 'next/navigation';
import { Button, Flex, Grid } from '@mantine/core';
import { getQueryParams } from '@/app/lib/utils/getQueryParams';
import GenresFilter from './GenresFilter';
import YearFilter from './YearFilter';
import RatingsFilter from './RatingsFilter';
import { Path } from '@/app/types/enums';

export default function Filters() {
  const { push } = useRouter();
  const searchParams = useSearchParams();

  return (
    <form key={searchParams.toString()}>
      <Grid gutter="md">
        <Grid.Col span={{ base: 12, xs: 6, lg: 'auto' }}>
          <GenresFilter />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6, lg: 'auto' }}>
          <YearFilter />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6, lg: 'auto' }}>
          <RatingsFilter />
        </Grid.Col>
        <Grid.Col span={{ lg: 'content', xs: 6, base: 12 }}>
          <Flex h="100%" mah="4.75rem" justify="center" align="flex-end">
            <Button
              variant="transparent"
              onClick={() => push(`/${Path.Movies}`)}
              size="xs"
              disabled={getQueryParams(searchParams).length === 0}
            >
              Reset filters
            </Button>
          </Flex>
        </Grid.Col>
      </Grid>
    </form>
  );
}
