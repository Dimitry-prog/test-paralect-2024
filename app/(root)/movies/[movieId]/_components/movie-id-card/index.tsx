import {
  Box,
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
import Link from 'next/link';

import { getMovieById } from '@/services/get-movie-by-id';
import MovieCard from '@/widgets/movie-card';

type MovieIdCardProps = {
  movieId: string;
};

const MovieIdCard = async ({ movieId }: MovieIdCardProps) => {
  const movie = await getMovieById(movieId);

  return (
    <Stack maw={800} gap={20} mx="auto">
      <Breadcrumbs c="black.9">
        <NavLink component={Link} href="/" label="Movies" w="fit-content" p={0} c="purple.6" />

        <Text c="purple.6" size="sm">
          {movie?.title}
        </Text>
      </Breadcrumbs>
      <MovieCard movie={movie!} />

      <Card p={24} radius={12}>
        <Stack gap={20}>
          <Stack gap={16}>
            <Title order={3}>Trailer</Title>
            <Box w={{ base: '100%', sm: '500' }} h={{ base: '281' }}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${movie?.trailer}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{
                  borderRadius: '9px',
                }}
              ></iframe>
            </Box>
          </Stack>
          <Divider />
          <Stack gap={16}>
            <Title order={3}>Description</Title>
            <Text c="black.9">{movie?.description}</Text>
          </Stack>
          <Divider />
          <Stack gap={16}>
            <Title order={3}>Production</Title>
            {movie?.companies.map((company) => (
              <Group gap={8} key={company.id}>
                <Image
                  w={40}
                  miw={40}
                  fit="cover"
                  width={40}
                  height={40}
                  src={
                    company.image
                      ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${company.image}`
                      : '/no_img.png'
                  }
                  alt={company.title}
                  radius={50}
                />
                <Text fw={700} c="black.9">
                  {company.title}
                </Text>
              </Group>
            ))}
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
};

export default MovieIdCard;
