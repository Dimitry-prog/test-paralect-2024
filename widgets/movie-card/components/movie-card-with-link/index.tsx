'use client';

import { Flex, Group, Image, NavLink, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import Link from 'next/link';

import StarIcon from '@/shared/components/icons/star-icon';
import { formattedDate } from '@/shared/libs/utils';
import { MovieType } from '@/widgets/movie-card/types';

type MovieCardWithLinkProps = {
  movie: MovieType;
};

const MovieCardWithLink = ({ movie }: MovieCardWithLinkProps) => {
  const theme = useMantineTheme();

  return (
    <NavLink
      component={Link}
      href={`/movies/${movie.id}`}
      p={0}
      w="fit-content"
      bg="transparent"
      label={
        <Flex gap={16} direction={{ base: 'column', sm: 'row' }}>
          <Image
            w={{ base: '100%', sm: '119' }}
            fit="cover"
            width={119}
            height={170}
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${movie.image}`}
            alt={movie.title}
          />

          <Stack justify="space-between">
            <Stack gap={8}>
              <Title
                order={2}
                textWrap="balance"
                style={{
                  color: theme.colors.purple[6],
                }}
              >
                {movie.title}
              </Title>
              <Text c="gray.6">{formattedDate(movie.releaseDate).split(',')[1]}</Text>
              <Group gap={8}>
                <Group gap={4}>
                  <StarIcon fill={theme.colors.yellow[0]} />
                  <Text c="black.9" fw={600}>
                    {movie.voteAverange}
                  </Text>
                </Group>
                <Text c="gray.6">({movie.voteCount})</Text>
              </Group>
            </Stack>

            <Group gap={8} wrap="nowrap">
              <Text c="gray.6">Genres</Text>
              <Text c="black.9" fw={400} lineClamp={1}>
                {movie.genres.map((genre) => genre.title).join(', ')}
              </Text>
            </Group>
          </Stack>
        </Flex>
      }
    />
  );
};

export default MovieCardWithLink;
