'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLink, rem, useMantineTheme } from '@mantine/core';

interface NavBarProps {
  data: NavLinkData;
  close: () => void;
}

export default function NavigationLink({ data: { href, label }, close }: Readonly<NavBarProps>) {
  const theme = useMantineTheme();
  const path = usePathname();
  const isActive = useMemo(() => path === href || `/${path.split('/')[1]}` === href, [path, href]);
  return (
    <NavLink
      component={Link}
      href={href}
      label={label}
      onClick={close}
      p={rem(9)}
      style={{ borderRadius: theme.radius.md }}
      c={isActive ? theme.colors.purple[5] : theme.black}
      bg={isActive ? theme.colors.purple[1] : ''}
      fw={isActive ? 700 : 400}
      fz="sm"
      td="none"
    ></NavLink>
  );
}
