import { Image } from '@mantine/core';
import NextImage from 'next/image';

const Logo = () => {
  return <Image component={NextImage} w="180" width={180} height={36} src="/logo.svg" alt="logo" />;
};

export default Logo;
