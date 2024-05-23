import { useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { MultiSelect, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { createQueryString } from '@/app/lib/utils/createQueryString';
import {
  getGenresIdsByNames,
  getGenresNamesByIds,
  getGenresNames,
} from '@/app/lib/utils/transformGenresData';
import { useGenres } from '@/app/lib/hooks/useMoviesDataHooks';
import { Paths, SearchParams } from '@/app/types/enums';
import SelectIcon from '@/public/icons/down.svg';
import LoaderDots from '@/app/components/LoaderDots';
import classes from './styles.module.css';

export default function GenresFilter() {
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure();
  const searchParams = useSearchParams();
  const { push } = useRouter();

  const { data, isLoading } = useGenres();

  const setGenresParams = useCallback(
    (value: string[], genres: Genre[]) => {
      const idsString = getGenresIdsByNames(value, genres).join(',');
      const queryString = createQueryString(searchParams, idsString, SearchParams.Genres);
      push(`${Paths.Movies}?${queryString}`);
    },
    [searchParams, push],
  );

  const getDefaultValue = (genres: Genre[]) => {
    const ids = searchParams.get(SearchParams.Genres)?.split(',');
    return ids ? getGenresNamesByIds(ids, genres) : [];
  };

  return isLoading ? (
    <LoaderDots />
  ) : (
    data && (
      <MultiSelect
        label="Genres"
        placeholder="Select genre"
        data={getGenresNames(data?.genres)}
        onChange={(value) => setGenresParams(value, data?.genres)}
        onDropdownOpen={open}
        onDropdownClose={close}
        defaultValue={getDefaultValue(data?.genres)}
        classNames={classes}
        withCheckIcon={false}
        maxDropdownHeight="13.45rem"
        rightSection={
          <SelectIcon stroke={opened ? theme.colors.purple[5] : theme.colors.gray[4]} />
        }
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
    )
  );
}
