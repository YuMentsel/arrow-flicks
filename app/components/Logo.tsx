'use client';

import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { Flex, Text, rem, useMantineTheme } from '@mantine/core';
import LogoSvg from '@/public/logo.svg';
import { Paths } from '../types/enums';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '600',
  display: 'swap',
});

export default function Logo() {
  const theme = useMantineTheme();
  return (
    <Flex href={Paths.Movies} component={Link} gap={rem(12)} td="none">
      <LogoSvg />
      <Text
        className={poppins.className}
        lts="-0.03rem"
        size="lg"
        mt={-2}
        c={theme.colors.purple[5]}
      >
        ArrowFlicks
      </Text>
    </Flex>
  );
}
