'use client';

import Image from 'next/image';
import { Stack, Text } from '@mantine/core';
import noMovies from '@/../../public/no-movies.png';

export default function ErrorBoundary({
  errorMessage,
}: Readonly<{
  errorMessage: string;
}>) {
  return (
    <Stack className="center" p="xl" align="center" gap="sm">
      <Image src={noMovies} alt="No found data" priority />
      <Text ta="center" fw={600} fz="ld">
        {errorMessage}
      </Text>
    </Stack>
  );
}
