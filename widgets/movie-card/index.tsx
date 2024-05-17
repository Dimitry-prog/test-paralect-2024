'use client';

import {
  Button,
  Card,
  Divider,
  Flex,
  Grid,
  GridCol,
  Group,
  Image,
  Modal,
  NavLink,
  Rating,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import StarIcon from '@/shared/components/icons/star-icon';
import { currentUserId } from '@/shared/libs/constants';
import { formattedDate, formattedDuration, formattedPrice } from '@/shared/libs/utils';
import { MovieType } from '@/widgets/movie-card/types';

type MovieCardProps = {
  movie: MovieType;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  const pathname = usePathname();
  const myFavorite = movie.votes.find((vote) => vote.userId === currentUserId);

  return (
    <>
      <Modal.Root opened={opened} onClose={close} centered radius={8}>
        <Modal.Overlay />
        <Modal.Content maw={{ base: '100%', sm: '380' }}>
          <Modal.Header>
            <Modal.Title>Your rating</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Divider />
          <Modal.Body pt={16}>
            <Stack gap={16}>
              <Text fw={700} c="black.9">
                {movie.title}
              </Text>

              <Rating
                count={10}
                size={24}
                w="100%"
                styles={{
                  root: {
                    justifyContent: 'space-evenly',
                  },
                }}
              />

              <Button onClick={close} w="fit-content" radius={8}>
                Save
              </Button>
            </Stack>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>

      <Card
        p={24}
        radius={12}
        w={{ base: '100%', sm: pathname === '/' || pathname.includes('rated') ? '482' : '100%' }}
      >
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          gap={8}
          align="start"
          justify="space-between"
        >
          {pathname === '/' || pathname.includes('rated') ? (
            <NavLink
              component={Link}
              href={movie.id}
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
          ) : (
            <Flex gap={16} direction={{ base: 'column', sm: 'row' }}>
              <Image
                w={{ base: '100%', sm: '250' }}
                h={{ base: '100%', sm: '350' }}
                fit="cover"
                width={250}
                height={350}
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${movie.image}`}
                alt={movie.title}
              />

              <Stack gap={62} justify="space-between">
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

                <Grid>
                  <GridCol span={4}>
                    <Text c="gray.6" ta="start">
                      Duration
                    </Text>
                  </GridCol>
                  <GridCol span={8}>
                    <Text c="black.9" fw={400}>
                      {formattedDuration(movie.duration)}
                    </Text>
                  </GridCol>

                  <GridCol span={4}>
                    <Text c="gray.6">Premiere</Text>
                  </GridCol>
                  <GridCol span={8}>
                    <Text c="black.9" fw={400}>
                      {formattedDate(movie.releaseDate)}
                    </Text>
                  </GridCol>
                  <GridCol span={4}>
                    <Text c="gray.6">Budget</Text>
                  </GridCol>
                  <GridCol span={8}>
                    <Text c="black.9" fw={400}>
                      {formattedPrice(movie.budget)}
                    </Text>
                  </GridCol>
                  <GridCol span={4}>
                    <Text c="gray.6">Gross worldwide</Text>
                  </GridCol>
                  <GridCol span={8}>
                    <Text c="black.9" fw={400}>
                      {formattedPrice(movie.revenue)}
                    </Text>
                  </GridCol>
                  <GridCol span={4}>
                    <Text c="gray.6">Genres</Text>
                  </GridCol>
                  <GridCol span={8}>
                    <Text c="black.9" fw={400}>
                      {movie.genres.map((genre) => genre.title).join(', ')}
                    </Text>
                  </GridCol>
                </Grid>
              </Stack>
            </Flex>
          )}

          <Group gap={4} wrap="nowrap">
            <Button onClick={open} w="fit-content" p={0} bg="transparent">
              <StarIcon fill={myFavorite ? theme.colors.purple[6] : theme.colors.gray[3]} />
            </Button>
            {myFavorite && (
              <Text fw={600} c="black.0">
                {myFavorite.score}
              </Text>
            )}
          </Group>
        </Flex>
      </Card>
    </>
  );
};

export default MovieCard;
