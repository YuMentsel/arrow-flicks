import { ImgInfoState } from '@/app/components/ImgInfoState';
import { UIAlt, UIMessage } from '@/app/types/enums';
import noMovies from '@/../../public/no-movies.png';
import { Box } from '@mantine/core';

export function EmptyList() {
  return (
    <Box mx="auto">
      <ImgInfoState src={noMovies} alt={UIAlt.NoMovies} message={UIMessage.NoMovies} />
    </Box>
  );
}
