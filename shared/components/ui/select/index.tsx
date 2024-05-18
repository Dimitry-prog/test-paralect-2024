'use client';

import { ComboboxItem, Select } from '@mantine/core';

type MySelectProps = {
  data:
    | {
        value: string;
        label: string;
      }[]
    | string[];
  onChange?: (value: string | null, option: ComboboxItem) => void;
  width?: number;
  label?: string;
  placeholder?: string;
  emptyPlaceholder?: string;
};

const MySelect = ({
  data,
  onChange,
  width = 283,
  label = 'Label',
  placeholder = 'Choose smt',
  emptyPlaceholder = 'Nothing found...',
}: MySelectProps) => {
  return (
    <Select
      data={data}
      onChange={onChange}
      w={width}
      label={label}
      placeholder={placeholder}
      nothingFoundMessage={emptyPlaceholder}
      searchable
      clearable
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
      styles={(theme) => ({
        label: {
          paddingBottom: '8px',
          fontWeight: 700,
          color: theme.colors.black[9],
        },
        input: {
          borderColor: theme.colors.gray[2],
          borderRadius: '8px',
        },
      })}
    />
  );
};

export default MySelect;
