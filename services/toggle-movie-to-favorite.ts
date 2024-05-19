'use server';

import { revalidatePath } from 'next/cache';

import prisma from '@/shared/libs/prisma';

export const addMovieToFavoriteById = async ({
  userId,
  movieId,
  score,
}: {
  userId: string;
  movieId: string;
  score: string;
}) => {
  try {
    const favorite = await prisma.vote.create({
      data: {
        movieId,
        userId,
        score,
      },
    });

    revalidatePath('/');
    return favorite;
  } catch (e) {
    console.log(e);
  }
};

export const deleteMovieFromFavoriteById = async (voteId: string) => {
  try {
    const favorite = await prisma.vote.delete({
      where: {
        id: voteId,
      },
    });

    revalidatePath('/');
    return favorite;
  } catch (e) {
    console.log(e);
  }
};
