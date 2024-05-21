import { memo } from 'react';
import { SimpleGrid } from '@mantine/core';

interface MovieListProps {
  movies: Movie[];
  genres: Genre[];
}

const MovieList = memo(({ movies, genres }: MovieListProps) => {
  return (
    <SimpleGrid mt='1.5rem' cols={2}>
      {movies?.map((movie) => (
        // <MovieCard key={movie.id} movie={movie} genres={genres} />
        <div key={movie.id}>{movie.title}</div>
      ))}
    </SimpleGrid>
  );
});

export default MovieList;
