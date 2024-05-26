import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useCallback, useState } from 'react';
import { Pagination, useMantineTheme } from '@mantine/core';
import { SearchParam } from '@/app/types/enums';
import { MAX_PAGES } from '@/app/constants';
import classes from './styles.module.css';
import { createQueryString } from '@/app/lib/utils/createQueryString';

interface MoviesPaginationProps {
  total: number;
}

export default function MoviesPagination({ total }: Readonly<MoviesPaginationProps>) {
  const theme = useMantineTheme();

  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [activePage, setActivePage] = useState(searchParams.get(SearchParam.Page) ?? 1);

  const setPageParam = useCallback(
    (value: string | number, name: string) => {
      const queryString = createQueryString(searchParams, value.toString(), name);
      push(`${pathname}?${queryString}`);
      setActivePage(value);
    },
    [searchParams, pathname, push],
  );

  return (
    <Pagination
      classNames={classes}
      value={+activePage}
      onChange={(value) => setPageParam(value, SearchParam.Page)}
      total={Math.min(total, MAX_PAGES)}
      boundaries={-1}
      w="fit-content"
      color={theme.colors.purple[5]}
      radius="sm"
    />
  );
}
