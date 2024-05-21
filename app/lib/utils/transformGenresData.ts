export const getGenresNamesByIds = (ids: number[] | string[], genres: Genre[]): string[] =>
  ids
    .map((id) => genres.find((genre) => genre.id == id))
    .filter((genre) => genre !== undefined)
    .map((genre) => genre!.name);

export const getGenresIdsByNames = (names: string[], genres: Genre[]): number[] =>
  names
    .map((name) => genres.find((genre) => genre.name === name))
    .filter((genre) => genre !== undefined)
    .map((genre) => genre!.id);

export const getGenresNames = (genres: Genre[]): string[] => genres.map(({ name }) => name);

export const transformGenres = (genres: Genre[], genreIds: number[]): string =>
  genres
    ?.filter(({ id }) => genreIds.includes(id))
    .map(({ name }) => name)
    .join(', ');
