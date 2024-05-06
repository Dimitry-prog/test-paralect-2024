import {
  Breadcrumbs,
  Card,
  Divider,
  Group,
  Image,
  NavLink,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import NextImage from 'next/image';
import Link from 'next/link';

import MovieCard from '@/widgets/movie-card';

const SingleMovie = () => {
  return (
    <Stack maw={800} gap={20} mx="auto">
      <Breadcrumbs c="black.9">
        <NavLink component={Link} href="/" label="Movies" w="fit-content" p={0} c="purple.6" />

        <Text c="purple.6" size="sm">
          Coco
        </Text>
      </Breadcrumbs>
      <MovieCard />

      <Card p={24} radius={12}>
        <Stack gap={20}>
          <Stack gap={16}>
            <Title order={3}>Trailer</Title>
          </Stack>
          <Divider />
          <Stack gap={16}>
            <Title order={3}>Description</Title>
            <Text c="black.9">
              Dan Browns controversial best-selling novel about a powerful secret that is been kept
              under wraps for thousands of years comes to the screen in this suspense thriller from
              Director Ron Howard.
            </Text>
          </Stack>
          <Divider />
          <Stack gap={16}>
            <Title order={3}>Production</Title>
            <Group gap={8}>
              <Image
                component={NextImage}
                w={40}
                miw={40}
                fit="cover"
                width={40}
                height={40}
                src="/film.png"
                alt="film"
                radius={50}
              />
              <Text fw={700} c="black.9">
                Castle Rock Entertainment
              </Text>
            </Group>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
};

export default SingleMovie;
