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
