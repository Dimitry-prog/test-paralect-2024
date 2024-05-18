import { Group } from '@mantine/core';

import MySelect from '@/shared/components/ui/select';
import { useFilters } from '@/widgets/filters/hooks/use-filters';

type RatingFiltersProps = {
  data:
    | {
        value: string;
        label: string;
      }[]
    | string[];
};

const RatingFilters = ({ data }: RatingFiltersProps) => {
  const { onChange } = useFilters();

  return (
    <Group gap={8} align="end">
      <MySelect
        width={137}
        label="Ratings"
        placeholder="From"
        onChange={(value, option) => onChange(value, 'ratingFrom')}
        data={data}
      />
      <MySelect
        width={137}
        placeholder="To"
        onChange={(value, option) => onChange(value, 'ratingTo')}
        data={data}
      />
    </Group>
  );
};

export default RatingFilters;
