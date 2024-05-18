'use client';

import { Pagination } from '@mantine/core';
import { useState } from 'react';

import { useCustomSearchParams } from '@/shared/hooks/use-custom-search-params';

type MyPaginationProps = {
  page: number;
  totalPages: number;
};

const MyPagination = ({ totalPages, page }: MyPaginationProps) => {
  const { replace, params, pathname } = useCustomSearchParams();
  const [currentPage, setCurrentPage] = useState(page);

  const handleChange = (value: number) => {
    setCurrentPage(value);
    params.set('page', value.toString());
    replace(`${pathname}?${params}`, { scroll: false });
  };

  return <Pagination total={totalPages} value={currentPage} onChange={handleChange} withEdges />;
};

export default MyPagination;
