import { useRouter, useSearchParams } from 'next/navigation';
import { Button, Flex, Group, rem } from '@mantine/core';
import { getQueryParams } from '@/app/lib/getQueryParams';
import GenresFilter from './GenresFilter';
import YearFilter from './YearFilter';
import RatingsFilter from './RatingsFilter';
import classes from './styles.module.css';
import { Paths } from '@/app/types/enums';

interface FiltersProps {
  genres: Genre[];
  years: string[];
}

export default function Filters({ genres, years }: Readonly<FiltersProps>) {
  const { push } = useRouter();
  const searchParams = useSearchParams();

  return (
    <Group mt={rem(37)} grow preventGrowOverflow={false} align="start">
      <GenresFilter genres={genres} />
      <YearFilter years={years} />
      <RatingsFilter />
      <Flex h="4.8rem" align={'end'}>
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
    </Group>
  );
}
