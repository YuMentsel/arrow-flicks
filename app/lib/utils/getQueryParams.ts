import { ReadonlyURLSearchParams } from 'next/navigation';
import { SearchParam } from '../../types/enums';

export function getQueryParams(searchParams: ReadonlyURLSearchParams) {
  const params = Object.keys(Object.fromEntries(searchParams.entries())).filter(
    (key) => key !== SearchParam.Page && key !== SearchParam.SortBy,
  );
  return params;
}
