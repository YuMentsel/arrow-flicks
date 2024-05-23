import { Stack } from '@mantine/core';
import { ImgInfoState } from './ImgInfoState';
import { UIAlt } from '../types/enums';
import noMovies from '@/../../public/no-movies.png';

export default function ErrorFallback({
  errorMessage,
}: Readonly<{
  errorMessage: string;
}>) {
  return (
    <Stack className="center" p="xl" align="center" gap="sm">
      <ImgInfoState src={noMovies} alt={UIAlt.Error} message={errorMessage} />
    </Stack>
  );
}
