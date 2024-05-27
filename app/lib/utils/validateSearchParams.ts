import { VALID_SORT_KEYS, VALID_PARAM_KEYS } from '@/app/constants';
import { SearchParam } from '@/app/types/enums';
import { ReadonlyURLSearchParams } from 'next/navigation';

interface SearchParams {
  [key: string]: string | null;
}

function getParamsObj(params: ReadonlyURLSearchParams): SearchParams {
  return {
    with_genres: params.get(SearchParam.Genres),
    primary_release_year: params.get(SearchParam.Year),
    'vote_average.gte': params.get(SearchParam.MinVote),
    'vote_average.lte': params.get(SearchParam.MaxVote),
    sort_by: params.get(SearchParam.SortBy),
    page: params.get(SearchParam.Page),
  };
}

export const validateSearchParams = (params: ReadonlyURLSearchParams) => {
  const keys = Array.from(params.keys());

  for (const key of keys) {
    if (!VALID_PARAM_KEYS.has(key)) {
      return false;
    }
  }

  const {
    with_genres,
    primary_release_year,
    'vote_average.gte': min,
    'vote_average.lte': max,
    sort_by,
    page,
  }: SearchParams = getParamsObj(params);

  if (
    invalidGenresParam(with_genres?.split(',')) ||
    invalidYearParam(primary_release_year) ||
    invalidPageParam(page)
  ) {
    return false;
  }

  if (invalidVoteParam(min) || invalidVoteParam(max) || invalidMinMax(min, max)) {
    return false;
  }

  if (sort_by && !VALID_SORT_KEYS.includes(sort_by)) {
    return false;
  }

  return true;
};

const invalidGenresParam = (genres: string[] | undefined) =>
  genres?.length ? !genres.every((genre) => Number.isInteger(+genre)) : false;

const invalidYearParam = (year: string | null) =>
  year ? !(Number.isInteger(+year) && +year >= 1874 && +year <= 2031) : false;

const invalidPageParam = (page: string | null) =>
  page ? !(Number.isInteger(+page) && +page >= 1 && +page <= 500) : false;

const invalidVoteParam = (vote: string | null) =>
  vote ? !(Number.isInteger(+vote) && +vote >= 0 && +vote <= 10) : false;

const invalidMinMax = (min: string | null, max: string | null) =>
  min && max ? +min > +max : false;
