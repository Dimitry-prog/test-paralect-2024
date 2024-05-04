import { Pagination, Stack, Title } from '@mantine/core';

import Filters from '@/widgets/filters';
import MoviesList from '@/widgets/movies-list';
import Sorting from '@/widgets/sorting';

export default function Home() {
  return (
    <Stack w={980}>
      <Title mb={40}>Movies</Title>
      <Stack gap={24} align="flex-end">
        <Filters />
        <Sorting />
        <MoviesList />
        <Pagination total={10} />
      </Stack>
    </Stack>
  );
}
