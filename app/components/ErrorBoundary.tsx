'use client';

import Image from 'next/image';
import { Box, Center, Flex, Stack, Text } from '@mantine/core';
import noMovies from '@/../../public/no-movies.png';

export default function ErrorBoundary({
  errorMessage,
}: Readonly<{
  errorMessage: string;
}>) {
  return (
    <Stack className="center" align="center" gap="1rem">
      <Image src={noMovies} alt="No found data" priority />
      <Text ta="center" fw={600} fz={20}>
        {errorMessage}
      </Text>
    </Stack>
  );
}
