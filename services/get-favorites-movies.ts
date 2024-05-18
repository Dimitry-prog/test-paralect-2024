'use server';

import { currentUserId } from '@/shared/libs/constants';
import prisma from '@/shared/libs/prisma';

export const getFavoritesMovies = async ({
  query,
  page,
  limit = 2,
}: {
  query: string;
  page: number;
  limit?: number;
}) => {
  try {
    const totalMovies = await prisma.movie.count({
      where: {
        title: {
          contains: query,
          mode: 'insensitive',
        },
        votes: {
          some: {
            userId: currentUserId,
          },
        },
      },
    });
    const movies = await prisma.movie.findMany({
      where: {
        title: {
          contains: query,
          mode: 'insensitive',
        },
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
      take: limit,
      skip: limit * (page - 1),
    });

    return {
      data: movies,
      totalPages: Math.ceil(totalMovies / limit),
    };
  } catch (e) {
    console.log(e);
  }
};
