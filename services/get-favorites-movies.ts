'use server';

import { currentUserId } from '@/shared/libs/constants';
import prisma from '@/shared/libs/prisma';

export const getFavoritesMovies = async () => {
  try {
    const movies = await prisma.movie.findMany({
      where: {
        votes: {
          some: {
            userId: currentUserId,
          },
        },
      },
      include: {
        genres: true,
        votes: true,
        companies: true,
      },
    });

    return movies;
  } catch (e) {
    console.log(e);
  }
};
