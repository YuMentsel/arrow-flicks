import { useCallback, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Select, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Paths, SearchParams } from '@/app/types/enums';
import { getKeyByValue } from '@/app/lib/utils/getKeyByValue';
import { DEFAULT_SORT_VALUE, SORT_OPTIONS } from '@/app/constants';
import { createQueryString } from '@/app/lib/utils/createQueryString';
import SelectIcon from '@/public/icons/down.svg';
import classes from './styles.module.css';

export default function SortBySelect() {
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure();
  const searchParams = useSearchParams();
  const { push } = useRouter();

  const setSortParam = useCallback(
    (value: string | null) => {
      const paramKey = value ? getKeyByValue(SORT_OPTIONS, value) : null;
      const queryString = createQueryString(searchParams, paramKey, SearchParams.SortBy);
      push(`${Paths.Movies}?${queryString}`);
    },
    [searchParams, push],
  );

  const defaultValue = useMemo(() => {
    const paramKey = searchParams.get(SearchParams.SortBy);
    return paramKey ? SORT_OPTIONS[paramKey] : DEFAULT_SORT_VALUE;
  }, [searchParams]);

  return (
    <Select
      label="Sort by"
      placeholder="Select sort type"
      data={Object.values(SORT_OPTIONS)}
      onChange={setSortParam}
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
