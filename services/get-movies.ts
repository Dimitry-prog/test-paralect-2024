'use server';

import prisma from '@/shared/libs/prisma';

export const getMovies = async () => {
  try {
    const movies = await prisma.movie.findMany({
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
