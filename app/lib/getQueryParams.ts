import { ReadonlyURLSearchParams } from 'next/navigation';
import { SearchParams } from '../types/enums';

export function getQueryParams(searchParams: ReadonlyURLSearchParams) {
  const params = Object.keys(Object.fromEntries(searchParams.entries())).filter(
    (key) => key !== SearchParams.Page,
  );
  return params;
}
