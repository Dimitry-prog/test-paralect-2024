import { Skeleton, Stack } from '@mantine/core';

const MovieIdSkeleton = () => {
  return (
    <Stack maw={800} gap={20} mx="auto">
      <Skeleton height={100} radius={12} />
      <Skeleton height={300} radius={12} />
      <Skeleton height={600} radius={12} />
    </Stack>
  );
};

export default MovieIdSkeleton;
