import { getGenresNames } from './transformGenresData';

export const transformDetailedData = ({
  release_date,
  runtime,
  budget,
  revenue,
  genres,
}: MovieDetails) => {
  const transformedData = {
    body: [
      ['Duration', getDuration(runtime)],
      ['Premiere', getPremiere(release_date)],
      ['Budget', getBudget(budget)],
      ['Gross worldwide', getBudget(revenue)],
      ['Genres', getGenresNames(genres).join(', ')],
    ],
  };
  return transformedData;
};

export const getDuration = (runtime: number) =>
  `${Math.floor(runtime / 60)}h ${(runtime % 60).toString()}m`;

export const getPremiere = (premiere: Date) => {
  return new Date(premiere).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const getBudget = (budget: number) => `$${budget.toLocaleString('en-US')}`;
