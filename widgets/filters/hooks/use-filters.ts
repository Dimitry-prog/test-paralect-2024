'use client';

import { useCustomSearchParams } from '@/shared/hooks/use-custom-search-params';

export const useFilters = () => {
  const { replace, pathname, params } = useCustomSearchParams();

  const handleChange = (value: string | null, key: string) => {
    params.set('page', '1');
    if (value && key) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    replace(`${pathname}?${params}`, { scroll: false });
  };

  const handleReset = () => {
    replace(pathname, { scroll: false });
  };

  return {
    onChange: handleChange,
    onReset: handleReset,
  };
};
