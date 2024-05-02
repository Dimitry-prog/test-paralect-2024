import { Image } from '@mantine/core';
import NextImage from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <Image component={NextImage} w="180" width={180} height={36} src="/logo.svg" alt="logo" />
    </Link>
  );
};

export default Logo;
