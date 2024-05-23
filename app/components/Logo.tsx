'use client';

import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { Flex, Text, useMantineTheme } from '@mantine/core';
import { Paths } from '../types/enums';
import LogoSvg from '@/public/logo.svg';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '600',
  display: 'swap',
});

export default function Logo() {
  const theme = useMantineTheme();

  return (
    <Flex
      href={`/${Paths.Movies}`}
      component={Link}
      h="2.25rem"
      align="center"
      gap="0.75rem"
      td="none"
    >
      <LogoSvg />
      <Text className={poppins.className} lts="-0.03rem" size="lg" c={theme.colors.purple[5]}>
        ArrowFlicks
      </Text>
    </Flex>
  );
}
