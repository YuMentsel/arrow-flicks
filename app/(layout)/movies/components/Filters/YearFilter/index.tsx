import { useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Select, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { createQueryString } from '@/app/lib/createQueryString';
import { Paths, SearchParams } from '@/app/types/enums';
import SelectIcon from '@/public/icons/down.svg';
import classes from './styles.module.css';

interface YearFilterProps {
  years: string[];
}

export default function YearFilter({ years }: Readonly<YearFilterProps>) {
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure();
  const searchParams = useSearchParams();
  const { push } = useRouter();

  const setYearParam = (value: string | null) => {
    const queryString = createQueryString(searchParams, value, SearchParams.Year);
    push(`${Paths.Movies}?${queryString}`);
  };

  const defaultValue = useMemo(() => searchParams.get(SearchParams.Year), [searchParams]);

  return (
    <Select
      label="Release year"
      placeholder="Select release year"
      data={years}
      onChange={setYearParam}
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
