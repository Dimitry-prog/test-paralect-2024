import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { useOptimistic, useState } from 'react';
import { v4 as uuid } from 'uuid';

import {
  addMovieToFavoriteById,
  deleteMovieFromFavoriteById,
} from '@/services/toggle-movie-to-favorite';
import { currentUserId } from '@/shared/libs/constants';
import { MovieType } from '@/widgets/movie-card/types';

type useOptimisticFavoriteProps = {
  movie: MovieType;
};

export const useOptimisticFavorite = ({ movie }: useOptimisticFavoriteProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [optimisticFavorite, addOptimisticFavorite] = useOptimistic(
    movie,
    (state: MovieType, score: string) => {
      const hasFavorite = state.votes.find((vote) => vote.userId === currentUserId);
      const newVote = {
        id: uuid(),
        userId: currentUserId,
        movieId: movie.id,
        score,
      };
      return {
        ...state,
        votes: hasFavorite
          ? state.votes.filter((vote) => vote.userId !== currentUserId)
          : [...state.votes, newVote],
      };
    }
  );

  const myFavorite = optimisticFavorite.votes.find((vote) => vote.userId === currentUserId);
  const [rating, setRating] = useState(parseInt(myFavorite?.score as string) || 0);

  const handleClose = () => {
    if (!myFavorite) {
      setRating(0);
    }
    close();
  };

  const handleAddToFavorite = async (formData: FormData) => {
    addOptimisticFavorite(formData.get('score') as string);
    const favorite = await addMovieToFavoriteById({
      userId: currentUserId,
      movieId: movie.id,
      score: formData.get('score') as string,
    });

    if (favorite) {
      notifications.show({
        title: 'Success!',
        message: 'We added movie to your favorites',
      });
      close();
    } else {
      notifications.show({
        title: 'Oops!',
        message: 'Something went wrong',
      });
    }
  };

  const handleDeleteFromFavorite = async (formData: FormData) => {
    if (myFavorite) {
      setRating(0);
      addOptimisticFavorite(formData.get('score') as string);
      const deletedMovie = await deleteMovieFromFavoriteById(myFavorite.id);

      if (deletedMovie) {
        notifications.show({
          title: 'Success!',
          message: 'We removed movie from your favorites',
        });
      } else {
        notifications.show({
          title: 'Oops!',
          message: 'Something went wrong',
        });
      }
    } else {
      setRating(0);
      open();
    }
  };

  return {
    optimisticFavorite,
    addOptimisticFavorite,
    myFavorite,
    rating,
    setRating,
    opened,
    handleClose,
    handleAddToFavorite,
    handleDeleteFromFavorite,
  };
};
