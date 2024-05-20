import { Suspense } from 'react';

import MovieIdCard from '@/app/(root)/movies/[movieId]/_components/movie-id-card';
import MovieIdSkeleton from '@/app/(root)/movies/[movieId]/_components/movie-id-skeleton';
import { getMovieById } from '@/services/get-movie-by-id';
import { getMovies } from '@/services/get-movies';

type SingleMovieProps = {
  params: {
    movieId: string;
  };
};

export const generateMetadata = async ({ params: { movieId } }: SingleMovieProps) => {
  const movie = await getMovieById(movieId);

  if (!movie) {
    return {
      title: 'Movie not found',
    };
  }

  return {
    title: movie?.title,
    description: movie?.description,
  };
};

export const generateStaticParams = async () => {
  const movies = await getMovies({});

  if (movies) {
    return movies?.data.map((movie) => ({
      movieId: movie.id,
    }));
  }
  return [];
};

const SingleMovie = ({ params: { movieId } }: SingleMovieProps) => {
  return (
    <Suspense fallback={<MovieIdSkeleton />}>
      <MovieIdCard movieId={movieId} />
    </Suspense>
  );
};

export default SingleMovie;
