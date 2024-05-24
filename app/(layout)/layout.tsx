'use client';

import React, { createContext, useEffect, useMemo, useState } from 'react';
import { AppShell, Burger, Group, useMantineTheme, Stack, rem, Flex } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import Logo from '../components/Logo';
import NavigationLink from '../components/NavigationLink';
import Container from '../components/ErrorBoundary';
import { LS_RATED_MOVIES_KEY, NAV_LINKS } from '../constants';

export const RatedContext = createContext<RatedContextData>({
  ratedData: '{}',
  setRatedData: () => {},
});

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useMantineTheme();
  const [opened, { toggle, close }] = useDisclosure();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const [ratedDataLS, setRatedDataLS] = useState('{}');

  const setRatedData = (value: string) => {
    setRatedDataLS(value);
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      setRatedDataLS(localStorage.getItem(LS_RATED_MOVIES_KEY) ?? '{}');
    }
  }, []);

  const value = useMemo(() => ({ ratedData: ratedDataLS, setRatedData }), [ratedDataLS]);

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
        <RatedContext.Provider value={value}>
          <Container>{children}</Container>
        </RatedContext.Provider>
      </AppShell.Main>
    </AppShell>
  );
}
