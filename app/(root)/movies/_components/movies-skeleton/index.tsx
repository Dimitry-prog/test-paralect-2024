import { Group, Skeleton, Stack } from '@mantine/core';

const MoviesSkeleton = () => {
  return (
    <Stack maw={980} gap={40}>
      <Skeleton height={100} radius={12} />
      <Skeleton height={100} radius={12} />
      <Group gap={10}>
        <Skeleton height={250} width={482} radius={12} />
        <Skeleton height={250} width={482} radius={12} />
        <Skeleton height={250} width={482} radius={12} />
      </Group>
    </Stack>
  );
};

export default MoviesSkeleton;
