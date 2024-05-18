'use client';

import { Button, Group } from '@mantine/core';

import GenreFilters from '@/widgets/filters/components/genre-filters';
import RatingFilters from '@/widgets/filters/components/rating-filters';
import YearFilters from '@/widgets/filters/components/year-filters';
import { useFilters } from '@/widgets/filters/hooks/use-filters';

type FiltersProps = {
  genres: {
    value: string;
    label: string;
  }[];
};

const Filters = ({ genres }: FiltersProps) => {
  const { onReset } = useFilters();

  return (
    <Group gap={16} align="end">
      <GenreFilters data={genres} />
      <YearFilters data={['2024', '2023', '2022', '2021', '2020']} />
      <RatingFilters data={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']} />

      <Button onClick={onReset} p={0} bg="transparent" c="gray.6">
        Reset filters
      </Button>
    </Group>
  );
};

export default Filters;
