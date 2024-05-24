export enum Path {
  Movies = 'movies',
  Rated = 'rated',
}

export enum SearchParam {
  Page = 'page',
  Genres = 'with_genres',
  Year = 'primary_release_year',
  MinVote = 'vote_average.gte',
  MaxVote = 'vote_average.lte',
  SortBy = 'sort_by',
  Search = 'search',
}

export enum ErrorMessage {
  RatingMin = `Should be ≤ "To"`,
  RatingMax = `Should be ≥ "From"`,
  Fetch = 'Failed to fetch data :(',
}

export enum UIMessage {
  NoMovies = `We don’t have such movies, look for another one`,
  NoRatedMovies = `You haven't rated any films yet`,
  NoPage = `We can’t find the page you are looking for`,
}

export enum UIAlt {
  NoMovies = 'No such movies',
  NoRatedMovies = 'No rated movies',
  NoPage = 'Not Found',
  Error = 'No Data',
}

export enum ButtonMessage {
  GoHome = 'Go Home',
  FindMovies = 'Find movies',
}

export enum Endpoint {
  MoviesData = '/movies_data',
  Genres = '/genre',
  Movie = '/movie/',
}

export enum VotesCount {
  million = 1000000,
  thousand = 1000,
}
