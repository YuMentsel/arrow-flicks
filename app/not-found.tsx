import { Box, Stack } from '@mantine/core';
import { ImgInfoState } from './components/ImgInfoState';
import Logo from './components/Logo';
import { ButtonMessage, UIAlt, UIMessage } from './types/enums';
import notFoundImg from '@/public/not-found.png';

export default function NotFound() {
  return (
    <>
      <Box className="logo-not-found">
        <Logo />
      </Box>
      <Stack className="center logo-not-found">
        <ImgInfoState
          src={notFoundImg}
          alt={UIAlt.NoPage}
          message={UIMessage.NoPage}
          btnText={ButtonMessage.GoHome}
        />
      </Stack>
    </>
  );
}
