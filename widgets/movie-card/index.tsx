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
import NextImage from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import StarIcon from '@/shared/components/icons/star-icon';

const MovieCard = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  const pathname = usePathname();

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
                Coco
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

      <Card p={24} radius={12} w={{ base: '100%', sm: pathname === '/' ? '482' : '100%' }}>
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          gap={8}
          align="start"
          justify="space-between"
        >
          {pathname === '/' ? (
            <NavLink
              component={Link}
              href="/12"
              p={0}
              w="fit-content"
              label={
                <Flex gap={16} direction={{ base: 'column', sm: 'row' }}>
                  <Image
                    component={NextImage}
                    w={{ base: '100%', sm: '119' }}
                    fit="cover"
                    width={119}
                    height={170}
                    src="/film.png"
                    alt="film"
                  />

                  <Stack gap={62}>
                    <Stack gap={8}>
                      <Title
                        order={2}
                        textWrap="balance"
                        style={{
                          color: theme.colors.purple[6],
                        }}
                      >
                        The Green Mile
                      </Title>
                      <Text c="gray.6">1999</Text>
                      <Group gap={8}>
                        <Group gap={4}>
                          <StarIcon fill={theme.colors.yellow[0]} />
                          <Text c="black.9" fw={600}>
                            9.3
                          </Text>
                        </Group>
                        <Text c="gray.6">(2.9M)</Text>
                      </Group>
                    </Stack>

                    <Group gap={8}>
                      <Text c="gray.6">Genres</Text>
                      <Text c="black.9" fw={400}>
                        Drama, Crime, Fantasy
                      </Text>
                    </Group>
                  </Stack>
                </Flex>
              }
            />
          ) : (
            <Flex gap={16} direction={{ base: 'column', sm: 'row' }}>
              <Image
                component={NextImage}
                w={{ base: '100%', sm: '250' }}
                h={{ base: '100%', sm: '350' }}
                fit="cover"
                width={250}
                height={350}
                src="/film.png"
                alt="film"
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
                    The Green Mile
                  </Title>
                  <Text c="gray.6">1999</Text>
                  <Group gap={8}>
                    <Group gap={4}>
                      <StarIcon fill={theme.colors.yellow[0]} />
                      <Text c="black.9" fw={600}>
                        9.3
                      </Text>
                    </Group>
                    <Text c="gray.6">(2.9M)</Text>
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
                      Drama, Crime, Fantasy
                    </Text>
                  </GridCol>

                  <GridCol span={4}>
                    <Text c="gray.6">Premiere</Text>
                  </GridCol>
                  <GridCol span={8}>
                    <Text c="black.9" fw={400}>
                      Drama, Crime, Fantasy
                    </Text>
                  </GridCol>
                  <GridCol span={4}>
                    <Text c="gray.6">Budget</Text>
                  </GridCol>
                  <GridCol span={8}>
                    <Text c="black.9" fw={400}>
                      Drama, Crime, Fantasy
                    </Text>
                  </GridCol>
                  <GridCol span={4}>
                    <Text c="gray.6">Gross worldwide</Text>
                  </GridCol>
                  <GridCol span={8}>
                    <Text c="black.9" fw={400}>
                      Drama, Crime, Fantasy
                    </Text>
                  </GridCol>
                  <GridCol span={4}>
                    <Text c="gray.6">Genres</Text>
                  </GridCol>
                  <GridCol span={8}>
                    <Text c="black.9" fw={400}>
                      Drama, Crime, Fantasy
                    </Text>
                  </GridCol>
                </Grid>
              </Stack>
            </Flex>
          )}

          <Group gap={4} wrap="nowrap">
            <Button onClick={open} w="fit-content" p={0} bg="transparent">
              <StarIcon fill={theme.colors.gray[3]} />
            </Button>
            <Text fw={600} c="black.0">
              9
            </Text>
          </Group>
        </Flex>
      </Card>
    </>
  );
};

export default MovieCard;
