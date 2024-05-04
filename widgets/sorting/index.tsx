'use client';

import { Select } from '@mantine/core';

const Sorting = () => {
  return (
    <Select
      w={283}
      label="Sort by"
      placeholder="Select sorting"
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

export default Sorting;
