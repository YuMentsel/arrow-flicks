import { Box } from '@mantine/core';
import { ImgInfoState } from './ImgInfoState';
import { UIAlt } from '../types/enums';
import noMovies from '@/../../public/no-movies.png';

export default function ErrorFallback({
  errorMessage,
}: Readonly<{
  errorMessage: string;
}>) {
  return (
    <Box className="center" ml={{ sm: '7.5rem', lg: '8.75rem' }}>
      <ImgInfoState src={noMovies} alt={UIAlt.Error} message={errorMessage} />
    </Box>
  );
}
