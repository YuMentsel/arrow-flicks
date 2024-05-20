export enum Paths {
  Movies = 'movies',
  Rated = 'rated',
}

export enum SearchParams {
  Page = 'page',
  Genres = 'with_genres',
  Year = 'primary_release_year',
  MinVote = 'minVote',
  MaxVote = 'maxVote',
}

export enum ErrorMessages {
  RatingMin = `Should be ≤ "To"`,
  RatingMax = `Should be ≥ "From"`,
}