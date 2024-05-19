import { Group, Stack, Title } from '@mantine/core';

import RatedEmpty from '@/app/(root)/rated/_components/rated-empty';
import { getFavoritesMovies } from '@/services/get-favorites-movies';
import Search from '@/shared/components/search';
import { SearchParamsType } from '@/shared/types';
import MoviesList from '@/widgets/movies-list';
import MyPagination from '@/widgets/pagination';

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
        {movies?.data && movies.data.length > 0 ? (
          <MoviesList movies={movies.data} />
        ) : (
          <RatedEmpty />
        )}

        {movies?.totalPages && movies.totalPages > 1 ? (
          <MyPagination totalPages={movies.totalPages} page={page} />
        ) : null}
      </Stack>
    </Stack>
  );
};

export default RatedPage;
