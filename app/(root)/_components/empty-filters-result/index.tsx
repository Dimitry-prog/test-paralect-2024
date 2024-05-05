import { Image, Stack, Title } from '@mantine/core';
import NextImage from 'next/image';

const EmptyFiltersResult = () => {
  return (
    <Stack gap={16} justify="center" align="center">
      <Image
        maw={310}
        component={NextImage}
        width={310}
        height={252}
        src="/empty-filters-res.png"
        alt="no match"
        fit="cover"
      />
      <Stack gap={16} justify="center" align="center">
        <Title order={2} textWrap="balance" ta={{ base: 'center', sm: 'start' }}>
          We do not have such movies, look for another one
        </Title>
      </Stack>
    </Stack>
  );
};

export default EmptyFiltersResult;
