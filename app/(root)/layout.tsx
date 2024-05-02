import { ReactNode } from 'react';

import CustomLayout from '@/shared/components/custom-layout';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <CustomLayout>{children} </CustomLayout>
    </>
  );
};

export default Layout;
