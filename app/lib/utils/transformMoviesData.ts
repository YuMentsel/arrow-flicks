import { VotesCount } from '@/app/types/enums';

export const transformVotesCount = (count: number): string => {
  switch (true) {
    case count / VotesCount.million >= 1:
      return transformMillions(count);
    case count / VotesCount.thousand >= 1:
      return `${Math.floor(count / VotesCount.thousand)}K`;
    default:
      return count.toString();
  }
};

const transformMillions = (count: number): string => {
  const transformedCount = (count / VotesCount.million).toFixed(1);
  return transformedCount.endsWith('0')
    ? `${transformedCount.slice(0, -2)}M`
    : `${transformedCount}M`;
};
