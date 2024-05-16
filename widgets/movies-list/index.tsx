'use client';

import { List, ListItem } from '@mantine/core';

import MovieCard from '@/widgets/movie-card';
import { MovieType } from '@/widgets/movie-card/types';

type MoviesListProps = {
  movies: MovieType[];
};

const MoviesList = ({ movies }: MoviesListProps) => {
  return (
    <List
      listStyleType="none"
      spacing={16}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
      }}
      styles={(theme) => ({
        itemLabel: {
          width: '100%',
        },
      })}
    >
      {movies.map((movie) => (
        <ListItem key={movie.id} m={0}>
          <MovieCard movie={movie} />
        </ListItem>
      ))}
    </List>
  );
};

export default MoviesList;
