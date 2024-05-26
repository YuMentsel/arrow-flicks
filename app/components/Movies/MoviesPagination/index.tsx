import { useCallback, useEffect, useState } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { Pagination, useMantineTheme } from '@mantine/core';
import { createQueryString } from '@/app/lib/utils/createQueryString';
import { SearchParam } from '@/app/types/enums';
import { MAX_PAGES } from '@/app/constants';
import classes from './styles.module.css';

interface MoviesPaginationProps {
  total: number;
}

export default function MoviesPagination({ total }: Readonly<MoviesPaginationProps>) {
  const theme = useMantineTheme();

  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const pageParam = searchParams.get(SearchParam.Page);
    setActivePage(pageParam ? +pageParam : 1);
  }, [searchParams]);

  const setPageParam = useCallback(
    (value: number, name: string) => {
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
