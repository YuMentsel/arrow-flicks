import { memo } from 'react';
import { SimpleGrid } from '@mantine/core';
import MovieCard from './MovieCard';

interface MovieListProps {
  movies: Movie[];
  genres: Genre[];
}

const MovieList = memo(({ movies, genres }: MovieListProps) => {
  return (
    <SimpleGrid maw={{ base: '35rem', lg: '100%' }} mx="auto" mt="1.5rem" cols={{ base: 1, lg: 2 }}>
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} genres={genres} />
      ))}
    </SimpleGrid>
  );
});

export default MovieList;
