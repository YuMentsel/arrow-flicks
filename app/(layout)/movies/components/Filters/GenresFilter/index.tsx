import { useCallback, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { MultiSelect, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { createQueryString } from '@/app/lib/createQueryString';
import { Paths, SearchParams } from '@/app/types/enums';
import SelectIcon from '@/public/icons/down.svg';
import classes from './styles.module.css';

interface GenresFilterProps {
  genres: Genre[];
}

export default function GenresFilter({ genres }: Readonly<GenresFilterProps>) {
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure();
  const searchParams = useSearchParams();
  const { push } = useRouter();

  const setGenresParams = useCallback(
    (value: string[]) => {
      const queryString = createQueryString(searchParams, value.join(','), SearchParams.Genres);
      push(`${Paths.Movies}?${queryString}`);
    },
    [searchParams, push],
  );

  const genreNames = useMemo(() => genres.map(({ name }) => name), [genres]);

  const defaultValue = useMemo(
    () =>
      searchParams
        .get(SearchParams.Genres)
        ?.split(',')
        .filter((genre) => genreNames.includes(genre)),
    [searchParams],
  );

  return (
    <MultiSelect
      label="Genres"
      placeholder="Select genre"
      data={genreNames}
      onChange={setGenresParams}
      onDropdownOpen={open}
      onDropdownClose={close}
      defaultValue={defaultValue}
      classNames={classes}
      maw="17.75rem"
      withCheckIcon={false}
      maxDropdownHeight="13.45rem"
      rightSection={<SelectIcon stroke={opened ? theme.colors.purple[5] : theme.colors.gray[4]} />}
      comboboxProps={{
        dropdownPadding: '0.25rem 0.15rem 0.25rem 0.25rem',
        transitionProps: { transition: 'pop-top-right', duration: 300 },
      }}
      scrollAreaProps={{
        scrollbarSize: '0.4rem',
        offsetScrollbars: false,
        type: 'auto',
      }}
    />
  );
}
