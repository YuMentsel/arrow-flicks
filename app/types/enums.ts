export enum Paths {
  Movies = 'movies',
  Rated = 'rated',
}

export enum SearchParams {
  Page = 'page',
  Genres = 'with_genres',
  Year = 'primary_release_year',
  MinVote = 'vote_average.gte',
  MaxVote = 'vote_average.lte',
  SortBy = 'sort_by',
}

export enum ErrorMessages {
  RatingMin = `Should be ≤ "To"`,
  RatingMax = `Should be ≥ "From"`,
}

export enum Endpoints {
  MoviesData = '/movies_data',
  Genres = '/genre',
  Movie = '/movie/:movieId',
}

export enum VotesCount {
  million = 1000000,
  thousand = 1000,
}
