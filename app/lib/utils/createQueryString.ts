import { ReadonlyURLSearchParams } from 'next/navigation';
import { SearchParam } from '../../types/enums';

export function createQueryString(
  searchParams: ReadonlyURLSearchParams,
  value: string | null,
  name: string,
) {
  const params = new URLSearchParams(searchParams);

  if (value) {
    params.set(name, value);

    if (name !== SearchParam.Page || value === '1') {
      params.delete(SearchParam.Page);
    }
  } else {
    params.delete(name);
  }

  return params.toString();
}
