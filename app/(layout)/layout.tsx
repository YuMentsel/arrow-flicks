'use client';

import React from 'react';
import { AppShell, Burger, Group, useMantineTheme, Stack, rem, Flex } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import Logo from '../components/Logo';
import NavigationLink from '../components/NavigationLink';
import Container from '../components/ErrorBoundary';
import { NAV_LINKS } from '../constants';

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useMantineTheme();
  const [opened, { toggle, close }] = useDisclosure();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <AppShell
      layout="alt"
      header={{ height: rem(66), collapsed: !isMobile }}
      navbar={{
        width: { sm: rem(240), lg: rem(280) },
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      transitionDuration={500}
      transitionTimingFunction="ease"
      withBorder={false}
    >
      <AppShell.Header hiddenFrom="md">
        <Flex justify="space-between" align="center" h="100%" px={rem(15)}>
          <Logo />
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
            aria-label="Toggle navigation"
            color={theme.colors.purple[5]}
          />
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar p={{ base: 'md', xl: 'xl' }} bg={theme.colors.purple[0]}>
        <AppShell.Section h={rem(116)}>
          <Group justify="space-between" align="center">
            <Logo />
            <Burger
              hiddenFrom="sm"
              opened
              onClick={close}
              aria-label="Toggle navigation"
              color={theme.colors.purple[5]}
            />
          </Group>
        </AppShell.Section>
        <AppShell.Section grow>
          <Stack>
            {NAV_LINKS.map((data) => (
              <NavigationLink key={data.href} data={data} close={close} />
            ))}
          </Stack>
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main bg={theme.colors.gray[0]}>
        <Container>{children}</Container>
      </AppShell.Main>
    </AppShell>
  );
}
