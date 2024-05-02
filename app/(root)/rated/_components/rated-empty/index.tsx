'use client';

import { Image, NavLink, Stack, Title } from '@mantine/core';
import NextImage from 'next/image';
import Link from 'next/link';

const RatedEmpty = () => {
  return (
    <Stack gap={48} justify="center" align="center" pt={{ base: '151', sm: 251 }}>
      <Image
        maw={400}
        component={NextImage}
        width={180}
        height={300}
        src="/rated-empty.png"
        alt="404"
        fit="cover"
      />
      <Stack gap={16} justify="center" align="center">
        <Title order={2} textWrap="balance" ta={{ base: 'center', sm: 'start' }}>
          You have not rated any films yet
        </Title>
        <NavLink
          href="/"
          component={Link}
          label="Find movies"
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
  );
};

export default RatedEmpty;
