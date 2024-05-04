'use client';

import { List, ListItem } from '@mantine/core';

import MovieCard from '@/widgets/movie-card';

const MoviesList = () => {
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
      {Array.from({ length: 12 }).map((item, index) => (
        <ListItem key={index} m={0}>
          <MovieCard />
        </ListItem>
      ))}
    </List>
  );
};

export default MoviesList;
