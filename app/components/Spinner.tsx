'use client';

import { Center, Loader, useMantineTheme } from '@mantine/core';

export default function Spinner() {
  const theme = useMantineTheme();
  return (
    <Center w="100%">
      <Loader size="lg" color={theme.colors.purple[5]} />
    </Center>
  );
}
