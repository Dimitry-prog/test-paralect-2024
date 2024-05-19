import { Button, Divider, Modal, Rating, Stack, Text } from '@mantine/core';
import { Dispatch, SetStateAction } from 'react';

import { MovieType } from '@/widgets/movie-card/types';

type ModalRatingProps = {
  movie: MovieType;
  opened: boolean;
  onClose: () => void;
  onAddFavorite: (formData: FormData) => void;
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
};

const ModalRating = ({
  movie,
  opened,
  onClose,
  onAddFavorite,
  rating,
  setRating,
}: ModalRatingProps) => {
  return (
    <Modal.Root opened={opened} onClose={onClose} centered radius={8}>
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

            <form action={onAddFavorite}>
              <Stack gap={16}>
                <Rating
                  name="score"
                  value={rating}
                  onChange={setRating}
                  count={10}
                  size={24}
                  w="100%"
                  styles={{
                    root: {
                      justifyContent: 'space-evenly',
                    },
                  }}
                />
                <Button disabled={rating === 0} type="submit" w="fit-content" radius={8}>
                  Save
                </Button>
              </Stack>
            </form>
          </Stack>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default ModalRating;
