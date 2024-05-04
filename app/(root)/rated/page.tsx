'use client';

import { Button, Group, Input, Pagination, Stack, Title } from '@mantine/core';

import SearchIcon from '@/shared/components/icons/search-icon';
import MoviesList from '@/widgets/movies-list';

const RatedPage = () => {
  return (
    <Stack maw={980} gap={40}>
      <Group justify="space-between">
        <Title>Rated movies</Title>
        <Input
          w={{ base: '100%', sm: '490' }}
          placeholder="Search movie title"
          leftSection={<SearchIcon />}
          rightSectionPointerEvents="all"
          rightSection={<Button mr={4}>Search</Button>}
          rightSectionWidth="fit-content"
          styles={(theme) => ({
            input: {
              height: '48px',
              borderColor: theme.colors.gray[2],
              borderRadius: '8px',
            },
          })}
        />
      </Group>
      <Stack gap={24} align="center">
        <MoviesList />
        <Pagination total={10} />
      </Stack>
    </Stack>
  );
};

export default RatedPage;
