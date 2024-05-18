import MySelect from '@/shared/components/ui/select';
import { useFilters } from '@/widgets/filters/hooks/use-filters';

type GenreFiltersProps = {
  data:
    | {
        value: string;
        label: string;
      }[]
    | string[];
};
const GenreFilters = ({ data }: GenreFiltersProps) => {
  const { onChange } = useFilters();

  return (
    <MySelect
      label="Genres"
      placeholder="Select genre"
      onChange={(value) => onChange(value, 'genre')}
      data={data}
    />
  );
};

export default GenreFilters;
