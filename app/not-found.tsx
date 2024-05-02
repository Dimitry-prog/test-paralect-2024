'use client';

import { AppShell, Group, Image, NavLink, Stack, Title } from '@mantine/core';
import NextImage from 'next/image';
import Link from 'next/link';

import Logo from '@/shared/components/logo';

const NotFound = () => {
  return (
    <AppShell header={{ height: { base: 60, sm: 0 } }} padding="md" withBorder={false}>
      <AppShell.Header bg="gray.1">
        <Group p="md">
          <Logo />
        </Group>
      </AppShell.Header>
      <AppShell.Main bg="gray.1" pl={{ base: '20', xs: '40', sm: '370' }} pt="287">
        <Stack gap={48} justify="center" align="center">
          <Image
            maw={656}
            component={NextImage}
            width={180}
            height={196}
            src="/404.png"
            alt="404"
            fit="cover"
          />
          <Stack gap={16} justify="center" align="center">
            <Title order={2}>We can’t find the page you are looking for</Title>
            <NavLink
              href="/"
              component={Link}
              label=" Go Home"
              styles={(theme) => ({
                root: {
                  width: 'fit-content',
                  backgroundColor: theme.colors.purple[6],
                  borderRadius: '8px',
                },
                body: {
                  fontSizes: '16px',
                  fontWeight: 400,
                  lineHeights: '22.4px',
                  color: theme.colors.white[1],
                },
              })}
            />
          </Stack>
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
};

export default NotFound;
