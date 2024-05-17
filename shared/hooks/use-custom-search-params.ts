'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const useCustomSearchParams = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  return {
    replace,
    pathname,
    params,
  };
};
