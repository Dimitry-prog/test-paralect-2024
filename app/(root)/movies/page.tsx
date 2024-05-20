import { Stack, Title } from '@mantine/core';

import EmptyFiltersResult from '@/app/(root)/movies/_components/empty-filters-result';
import { getGenres } from '@/services/get-genres';
import { getMovies } from '@/services/get-movies';
import { SearchParamsType } from '@/shared/types';
import Filters from '@/widgets/filters';
import MoviesList from '@/widgets/movies-list';
import MyPagination from '@/widgets/pagination';
import Sorting from '@/widgets/sorting';

export const generateMetadata = () => {
  return {
    title: 'Movies',
  };
};

export default async function Home({ searchParams }: SearchParamsType) {
  const genre = searchParams.genre;
  const year = searchParams.year;
  const ratingFrom = searchParams.ratingFrom;
  const ratingTo = searchParams.ratingTo;
  const sort = searchParams.sort;
  const page = parseInt(searchParams.page || '1');
  const movies = await getMovies({
    genre: genre!,
    year: year!,
    ratingFrom: ratingFrom!,
    ratingTo: ratingTo!,
    sort: sort!,
    page,
  });
  const genres = await getGenres();

  const filteredGenres = genres?.map((genre) => ({ value: genre.id, label: genre.title }));
  const sortingData = [
    {
      value: 'releaseDate',
      label: 'Date',
    },
    {
      value: 'budget',
      label: 'Budget',
    },
    {
      value: 'revenue',
      label: 'Revenue',
    },
    {
      value: 'duration',
      label: 'Duration',
    },
  ];

  return (
    <Stack maw={980} gap={40}>
      <Title>Movies</Title>
      <Stack gap={24}>
        <Stack gap={24} align="flex-end">
          <Filters genres={filteredGenres || []} />
          <Sorting data={sortingData} />
        </Stack>
        {movies?.data && movies.data.length > 0 ? (
          <MoviesList movies={movies.data} />
        ) : (
          <EmptyFiltersResult />
        )}

        {movies?.totalPages && movies.totalPages > 1 ? (
          <Stack align="flex-end">
            <MyPagination totalPages={movies.totalPages} page={page} />
          </Stack>
        ) : null}
      </Stack>
    </Stack>
  );
}
