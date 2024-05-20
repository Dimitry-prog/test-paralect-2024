'use server';

import prisma from '@/shared/libs/prisma';

export const getMovies = async ({
  genre,
  year,
  ratingFrom,
  ratingTo,
  sort,
  page = 1,
  limit = 3,
}: {
  genre?: string;
  year?: string;
  ratingFrom?: string;
  ratingTo?: string;
  sort?: string;
  page?: number;
  limit?: number;
}) => {
  try {
    const totalMovies = await prisma.movie.count({
      where: {
        AND: [
          {
            genres: {
              some: {
                id: genre,
              },
            },
          },
        ],
        releaseDate: year
          ? {
              gte: new Date(`${year}-01-01`),
              lte: new Date(`${year}-12-31`),
            }
          : undefined,
        voteAverange: {
          gte: ratingFrom,
          lte: ratingTo,
        },
      },
    });

    const movies = await prisma.movie.findMany({
      where: {
        AND: [
          {
            genres: {
              some: {
                id: genre,
              },
            },
          },
        ],
        releaseDate: year
          ? {
              gte: new Date(`${year}-01-01`),
              lte: new Date(`${year}-12-31`),
            }
          : undefined,
        voteAverange: {
          gte: ratingFrom,
          lte: ratingTo,
        },
      },
      include: {
        genres: true,
        votes: true,
        companies: true,
      },
      take: limit,
      skip: limit * (page - 1),
      orderBy: sort
        ? {
            [sort]: 'desc',
          }
        : undefined,
    });

    return {
      data: movies,
      totalPages: Math.ceil(totalMovies / limit),
    };
  } catch (e) {
    console.log(e);
  }
};
