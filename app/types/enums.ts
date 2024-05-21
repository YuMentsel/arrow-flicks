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

export enum UIMessages {
  NoMovies = `We don’t have such movies, look for another one`,
  NoRatedMovies = `You haven't rated any films yet`,
  NoPage = `We can’t find the page you are looking for`,
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
