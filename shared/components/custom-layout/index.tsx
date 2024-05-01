'use client';

import { AppShell, Burger, Group, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ReactNode } from 'react';

import Logo from '@/shared/components/logo';
import NavMenu from '@/shared/components/nav-menu';

const CustomLayout = ({ children }: { children: ReactNode }) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: { base: 60, sm: 0 } }}
      navbar={{
        width: { base: 280 },
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
      withBorder={false}
    >
      <AppShell.Header>
        <Group p="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Logo />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="24" bg="purple.1">
        <Stack gap="80">
          <Logo />
          <NavMenu />
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main bg="gray.1" pl="370" pt="40">
        {children}
      </AppShell.Main>
    </AppShell>
  );
};

export default CustomLayout;
