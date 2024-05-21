import { MouseEventHandler } from 'react';
import { ActionIcon, Text, useMantineTheme } from '@mantine/core';

import Star from '@/../../public/icons/star.svg';

interface RatingProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  rating: number;
}

export function RatingButton({ onClick, rating }: Readonly<RatingProps>) {
  const theme = useMantineTheme();

  return (
    <ActionIcon variant="transparent" miw="fit-content" onClick={onClick}>
      <Star color={rating ? theme.colors.purple[5] : theme.colors.gray[2]} />
      {rating > 0 && (
        <Text size="sm" fw={600} c="black" mx="0.2rem">
          {rating}
        </Text>
      )}
    </ActionIcon>
  );
}
