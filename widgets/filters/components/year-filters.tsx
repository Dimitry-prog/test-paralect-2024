import MySelect from '@/shared/components/ui/select';
import { useFilters } from '@/widgets/filters/hooks/use-filters';

type YearFiltersProps = {
  data:
    | {
        value: string;
        label: string;
      }[]
    | string[];
};

const YearFilters = ({ data }: YearFiltersProps) => {
  const { onChange } = useFilters();

  return (
    <MySelect
      label="Release year"
      placeholder="Select release year"
      onChange={(value) => onChange(value, 'year')}
      data={data}
    />
  );
};

export default YearFilters;
