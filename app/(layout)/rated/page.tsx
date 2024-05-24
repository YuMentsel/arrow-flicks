'use client';

import { Suspense } from 'react';
import RatedMovies from './components/RatedMovies';

export default function RatedMoviesPage() {
  return (
    <Suspense>
      <RatedMovies />
    </Suspense>
  );
}
