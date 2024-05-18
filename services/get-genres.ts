'use server';

import prisma from '@/shared/libs/prisma';

export const getGenres = async () => {
  try {
    const genres = await prisma.genre.findMany();

    return genres;
  } catch (e) {
    console.log(e);
  }
};
