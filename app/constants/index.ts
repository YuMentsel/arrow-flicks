export const NAV_LINKS: NavLinkData[] = [
  { href: '/movies', label: 'Movies' },
  { href: '/rated', label: 'Rated movies' },
];

export const SORT_OPTIONS: SortByOptions = {
  'popularity.desc': 'Most Popular',
  'popularity.asc': 'Least Popular',
  'vote_average.desc': 'Most Rated',
  'vote_average.asc': 'Least Rated',
  'vote_count.desc': 'Most Voted',
  'vote_count.asc': 'Least Voted',
  'primary_release_date.desc': 'Newest first',
  'primary_release_date.asc': 'Oldest first',
  'revenue.desc': 'Highest Revenue',
  'revenue.asc': 'Lowest Revenue',
  'original_title.asc': 'Title (A-Z)',
  'original_title.desc': 'Title (Z-A)',
};

export const VALID_SORT_KEYS = Object.keys(SORT_OPTIONS);

export const VALID_PARAM_KEYS = new Set([
  'with_genres',
  'primary_release_year',
  'vote_average.gte',
  'vote_average.lte',
  'sort_by',
  'page',
]);

export const LS_RATED_MOVIES_KEY = 'ratedMovies';

export const DEFAULT_SORT_VALUE = 'Most Popular';

export const MAX_PAGES = 500;

export const MOVIES_ON_PAGE = 4;
