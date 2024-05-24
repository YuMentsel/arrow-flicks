import { ButtonMessage, UIAlt, UIMessage } from '@/app/types/enums';
import NoRatedMovies from '@/../../public/no-rated-movies.png';
import { Box } from '@mantine/core';
import { ImgInfoState } from '@/app/components/ImgInfoState';

export function EmptyRatedList() {
  return (
    <Box className="center">
      <ImgInfoState
        src={NoRatedMovies}
        alt={UIAlt.NoRatedMovies}
        message={UIMessage.NoRatedMovies}
        btnText={ButtonMessage.FindMovies}
      />
    </Box>
  );
}
