import { Suspense } from 'react';

import MovieIdCard from '@/app/(root)/movies/[movieId]/_components/movie-id-card';
import MovieIdSkeleton from '@/app/(root)/movies/[movieId]/_components/movie-id-skeleton';

type SingleMovieProps = {
  params: {
    movieId: string;
  };
};

const SingleMovie = ({ params: { movieId } }: SingleMovieProps) => {
  return (
    <Suspense fallback={<MovieIdSkeleton />}>
      <MovieIdCard movieId={movieId} />
    </Suspense>
  );
};

export default SingleMovie;
