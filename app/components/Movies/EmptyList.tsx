import Image from 'next/image';
import { Stack, Text } from '@mantine/core';
import { UIMessages } from '@/app/types/enums';
import noMovies from '@/../../public/no-movies.png';

export function EmptyList() {
  return (
    <Stack p="xl" align="center" gap="sm">
      <Image src={noMovies} alt="No such movies" />
      <Text ta="center" fw={600} fz="ld">
        {UIMessages.NoMovies}
      </Text>
    </Stack>
  );
}
