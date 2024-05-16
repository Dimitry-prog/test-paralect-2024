import { Company, Genre, Movie, Vote } from '@prisma/client';

export type MovieType = Movie & {
  genres: Genre[];
  votes: Vote[];
  companies: Company[];
};
