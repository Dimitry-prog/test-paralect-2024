import {
  Flex,
  Grid,
  GridCol,
  Group,
  Image,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';

import StarIcon from '@/shared/components/icons/star-icon';
import { formattedDate, formattedDuration, formattedPrice } from '@/shared/libs/utils';
import { MovieType } from '@/widgets/movie-card/types';

type MovieCardFullInfoProps = {
  movie: MovieType;
};

const MovieCardFullInfo = ({ movie }: MovieCardFullInfoProps) => {
  const theme = useMantineTheme();

  return (
    <Flex gap={16} direction={{ base: 'column', sm: 'row' }}>
      <Image
        w={{ base: '100%', sm: '250' }}
        h={{ base: '100%', sm: '350' }}
        fit="cover"
        width={250}
        height={350}
        src={movie.image ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${movie.image}` : '/no_img.png'}
        alt={movie.title}
      />

      <Stack gap={62} justify="space-between">
        <Stack gap={8}>
          <Title
            order={2}
            textWrap="balance"
            style={{
              color: theme.colors.purple[6],
            }}
          >
            {movie.title}
          </Title>
          <Text c="gray.6">{formattedDate(movie.releaseDate).split(',')[1]}</Text>
          <Group gap={8}>
            <Group gap={4}>
              <StarIcon fill={theme.colors.yellow[0]} />
              <Text c="black.9" fw={600}>
                {movie.voteAverange}
              </Text>
            </Group>
            <Text c="gray.6">({movie.voteCount})</Text>
          </Group>
        </Stack>

        <Grid>
          <GridCol span={4}>
            <Text c="gray.6" ta="start">
              Duration
            </Text>
          </GridCol>
          <GridCol span={8}>
            <Text c="black.9" fw={400}>
              {formattedDuration(movie.duration)}
            </Text>
          </GridCol>

          <GridCol span={4}>
            <Text c="gray.6">Premiere</Text>
          </GridCol>
          <GridCol span={8}>
            <Text c="black.9" fw={400}>
              {formattedDate(movie.releaseDate)}
            </Text>
          </GridCol>
          <GridCol span={4}>
            <Text c="gray.6">Budget</Text>
          </GridCol>
          <GridCol span={8}>
            <Text c="black.9" fw={400}>
              {formattedPrice(movie.budget)}
            </Text>
          </GridCol>
          <GridCol span={4}>
            <Text c="gray.6">Gross worldwide</Text>
          </GridCol>
          <GridCol span={8}>
            <Text c="black.9" fw={400}>
              {formattedPrice(movie.revenue)}
            </Text>
          </GridCol>
          <GridCol span={4}>
            <Text c="gray.6">Genres</Text>
          </GridCol>
          <GridCol span={8}>
            <Text c="black.9" fw={400}>
              {movie.genres.map((genre) => genre.title).join(', ')}
            </Text>
          </GridCol>
        </Grid>
      </Stack>
    </Flex>
  );
};

export default MovieCardFullInfo;
