'use server';

import prisma from '@/shared/libs/prisma';

export const getMovieById = async (movieId: string) => {
  try {
    const movie = await prisma.movie.findFirst({
      where: {
        id: movieId,
      },
      include: {
        genres: true,
        votes: true,
        companies: true,
      },
    });

    return movie;
  } catch (e) {
    console.log(e);
  }
};
