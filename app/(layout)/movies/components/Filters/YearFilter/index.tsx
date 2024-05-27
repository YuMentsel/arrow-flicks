import { useCallback, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Select, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { createQueryString } from '@/app/lib/utils/createQueryString';
import { Path, SearchParam } from '@/app/types/enums';
import SelectIcon from '@/public/icons/down.svg';
import classes from './styles.module.css';
import { generateYearsArr } from '@/app/lib/utils/generateYearsArr';

export default function YearFilter() {
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure();
  const searchParams = useSearchParams();
  const { push } = useRouter();

  const setYearParam = useCallback(
    (value: string | null) => {
      const queryString = createQueryString(searchParams, value, SearchParam.Year);
      push(`${Path.Movies}?${queryString}`);
    },
    [searchParams, push],
  );

  const defaultValue = useMemo(() => searchParams.get(SearchParam.Year), [searchParams]);

  return (
    <Select
      label="Release year"
      placeholder="Select release year"
      data={generateYearsArr(1874, new Date().getFullYear() + 7)}
      onChange={setYearParam}
      onDropdownOpen={open}
      onDropdownClose={close}
      defaultValue={defaultValue}
      classNames={classes}
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
