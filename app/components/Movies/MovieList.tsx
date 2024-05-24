import { memo } from 'react';
import { SimpleGrid } from '@mantine/core';
import MovieCard from './MovieCard';
import { EmptyList } from '../../(layout)/movies/components/EmptyList';

interface MovieListProps {
  movies: Movie[] | MovieDetails[];
  genres: Genre[];
}

const MovieList = memo(({ movies, genres }: MovieListProps) => {
  return movies.length ? (
    <SimpleGrid maw={{ base: '35rem', lg: '100%' }} mx="auto" cols={{ base: 1, lg: 2 }}>
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} genres={genres} />
      ))}
    </SimpleGrid>
  ) : (
    <EmptyList />
  );
});

export default MovieList;
