import { Button, Card, Flex, Group, Image, NavLink, Stack, Text, Title } from '@mantine/core';
import NextImage from 'next/image';
import Link from 'next/link';

import StarIcon from '@/shared/components/icons/star-icon';

const MovieCard = () => {
  return (
    <Card p={24} radius={12} w={{ base: '100%', sm: '482' }}>
      <Flex direction={{ base: 'column', sm: 'row' }} gap={8} align="start" justify="space-between">
        <NavLink
          component={Link}
          href="/"
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
                      color: '#9854F6',
                    }}
                  >
                    The Green Mile
                  </Title>
                  <Text c="gray.6">1999</Text>
                  <Group gap={8}>
                    <Group gap={4}>
                      <StarIcon fill="var(--mantine-color-yellow-filled)" />
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

        <Button w="fit-content" p={0} bg="transparent">
          <StarIcon fill="var(--mantine-color-gray-filled)" />
        </Button>
      </Flex>
    </Card>
  );
};

export default MovieCard;
