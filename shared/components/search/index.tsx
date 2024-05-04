import { Button, Input } from '@mantine/core';

import SearchIcon from '@/shared/components/icons/search-icon';

const Search = () => {
  return (
    <Input
      w={490}
      h={48}
      placeholder="Search movie title"
      leftSection={<SearchIcon />}
      rightSectionPointerEvents="all"
      rightSection={<Button mr={4}>Search</Button>}
      rightSectionWidth="fit-content"
      styles={(theme) => ({
        input: {
          height: '48px',
          borderColor: theme.colors.gray[2],
          borderRadius: '8px',
        },
      })}
    />
  );
};

export default Search;
