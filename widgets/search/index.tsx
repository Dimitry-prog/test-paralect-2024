'use client';

import { Button, Input } from '@mantine/core';
import { ChangeEvent, useEffect, useState } from 'react';

import SearchIcon from '@/shared/components/icons/search-icon';
import { useCustomSearchParams } from '@/shared/hooks/use-custom-search-params';
import { useDebounce } from '@/shared/hooks/use-debounce';

type SearchProps = {
  placeholder?: string;
};

const Search = ({ placeholder = 'Search movie title' }: SearchProps) => {
  const { replace, params, pathname } = useCustomSearchParams();
  const [search, setSearch] = useState('');
  const debouncedValue = useDebounce(search);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    params.set('page', '1');
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (!debouncedValue) {
      params.delete('query');
    } else {
      params.set('query', debouncedValue);
    }
    replace(`${pathname}?${params}`, { scroll: false });
  }, [debouncedValue, params, replace, pathname]);

  return (
    <Input
      value={search}
      onChange={handleChange}
      w={490}
      h={48}
      placeholder={placeholder}
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
