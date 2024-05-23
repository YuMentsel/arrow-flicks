'use client';

import { Center, Loader, useMantineTheme } from '@mantine/core';

export default function LoaderDots() {
  const theme = useMantineTheme();
  return (
    <Center style={{ flex: 1 }} mih="100%">
      <Loader size="lg" type="dots" color={theme.colors.purple[5]} />
    </Center>
  );
}
