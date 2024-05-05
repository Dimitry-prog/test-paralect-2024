import { Pagination, Stack, Title } from '@mantine/core';

import EmptyFiltersResult from '@/app/(root)/_components/empty-filters-result';
import Filters from '@/widgets/filters';
import MoviesList from '@/widgets/movies-list';
import Sorting from '@/widgets/sorting';

export default function Home() {
  return (
    <Stack maw={980} gap={40}>
      <Title>Movies</Title>
      <Stack gap={24}>
        <Stack gap={24} align="flex-end">
          <Filters />
          <Sorting />
        </Stack>
        <EmptyFiltersResult />
        <MoviesList />
        <Stack align="flex-end">
          <Pagination total={10} />
        </Stack>
      </Stack>
    </Stack>
  );
}
