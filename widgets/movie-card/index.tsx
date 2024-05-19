'use client';

import { Button, Card, Flex, Group, Text, useMantineTheme } from '@mantine/core';
import { usePathname } from 'next/navigation';

import StarIcon from '@/shared/components/icons/star-icon';
import ModalRating from '@/widgets/movie-card/components/modal-rating';
import MovieCardFullInfo from '@/widgets/movie-card/components/movie-card-full-info';
import MovieCardWithLink from '@/widgets/movie-card/components/movie-card-with-link';
import { useOptimisticFavorite } from '@/widgets/movie-card/hooks/use-optimistic-favorite';
import { MovieType } from '@/widgets/movie-card/types';

type MovieCardProps = {
  movie: MovieType;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  const theme = useMantineTheme();
  const pathname = usePathname();
  const {
    myFavorite,
    rating,
    setRating,
    handleAddToFavorite,
    handleDeleteFromFavorite,
    handleClose,
    opened,
  } = useOptimisticFavorite({
    movie,
  });

  return (
    <>
      <ModalRating
        movie={movie}
        opened={opened}
        onClose={handleClose}
        onAddFavorite={handleAddToFavorite}
        rating={rating}
        setRating={setRating}
      />

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
            <MovieCardWithLink movie={movie} />
          ) : (
            <MovieCardFullInfo movie={movie} />
          )}

          <form action={handleDeleteFromFavorite}>
            <input type="hidden" name="score" />
            <Group gap={4} wrap="nowrap">
              <Button type="submit" w="fit-content" p={0} bg="transparent">
                <StarIcon fill={myFavorite ? theme.colors.purple[6] : theme.colors.gray[3]} />
              </Button>
              {myFavorite && (
                <Text fw={600} c="black.0">
                  {myFavorite.score}
                </Text>
              )}
            </Group>
          </form>
        </Flex>
      </Card>
    </>
  );
};

export default MovieCard;
