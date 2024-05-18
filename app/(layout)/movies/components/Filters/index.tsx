import { Group, rem } from '@mantine/core';
import GenresFilter from './GenresFilter';
import YearFilter from './YearFilter';

interface FiltersProps {
  genres: Genre[];
  years: string[];
}

export default function Filters({ genres, years }: Readonly<FiltersProps>) {
  return (
    <Group mt={rem(37)} align="start" grow>
      <GenresFilter genres={genres} />
      <YearFilter years={years} />
    </Group>
  );
}
