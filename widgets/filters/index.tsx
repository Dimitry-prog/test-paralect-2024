'use client';

import { Button, Group, Select } from '@mantine/core';

const Filters = () => {
  return (
    <Group gap={16} align="end">
      <Select
        w={283}
        label="Genres"
        placeholder="Select genre"
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
      <Select
        w={283}
        label="Release year"
        placeholder="Select release year"
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
      <Group gap={8} align="end">
        <Select
          w={137}
          label="Ratings"
          placeholder="From"
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
        <Select
          w={137}
          placeholder="To"
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
      </Group>

      <Button p={0} bg="transparent" c="gray.6">
        Reset filters
      </Button>
    </Group>
  );
};

export default Filters;
