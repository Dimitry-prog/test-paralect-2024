import { rem } from '@mantine/core';

interface StarIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

const StarIcon = ({ size, style, fill, ...others }: StarIconProps) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}
    >
      <path
        d="M13.9999 20.7084L6.79926 24.4942L8.17476 16.4757L2.34143 10.7975L10.3914 9.63086L13.9918 2.33569L17.5921 9.63086L25.6421 10.7975L19.8088 16.4757L21.1843 24.4942L13.9999 20.7084Z"
        fill={fill}
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StarIcon;
