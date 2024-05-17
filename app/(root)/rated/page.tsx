import { Group, Pagination, Stack, Title } from '@mantine/core';

import { getFavoritesMovies } from '@/services/get-favorites-movies';
import Search from '@/shared/components/search';
import { SearchParamsType } from '@/shared/types';
import MoviesList from '@/widgets/movies-list';

const RatedPage = async ({ searchParams }: SearchParamsType) => {
  const query = searchParams.query || '';
  const page = parseInt(searchParams.page || '1');
  const movies = await getFavoritesMovies({ query, page });

  return (
    <Stack maw={980} gap={40}>
      <Group justify="space-between">
        <Title>Rated movies</Title>
        <Search />
      </Group>
      <Stack gap={24} align="center">
        <MoviesList movies={movies?.data || []} />
        <Pagination total={10} />
      </Stack>
    </Stack>
  );
};

export default RatedPage;
