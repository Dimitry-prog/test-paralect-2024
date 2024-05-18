'use client';

import MySelect from '@/shared/components/ui/select';
import { useFilters } from '@/widgets/filters/hooks/use-filters';

type SortingProps = {
  data:
    | {
        value: string;
        label: string;
      }[]
    | string[];
};

const Sorting = ({ data }: SortingProps) => {
  const { onChange } = useFilters();

  return (
    <MySelect
      label="Sort by"
      placeholder="Select sorting"
      onChange={(value) => onChange(value, 'sort')}
      data={data}
    />
  );
};

export default Sorting;
