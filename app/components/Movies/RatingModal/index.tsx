import { useState } from 'react';
import { Modal, Button, Text, Title, Rating, Divider, Stack, Group } from '@mantine/core';
import { IconX } from '@tabler/icons-react';
import { useLocalStorage } from '@mantine/hooks';
import { LS_RATED_MOVIES_KEY } from '@/app/constants';
import classes from './styles.module.css';

interface RatedMovie {
  [key: string]: number;
}

interface RatingModalProps {
  movie: { id: string; title: string };
  rating: number | null;
  opened: boolean;
  close: () => void;
  updateRating: (rating: number | null) => void;
}

export function RatingModal({
  movie: { id, title },
  rating,
  opened,
  close,
  updateRating,
}: Readonly<RatingModalProps>) {
  const [ratingValue, setRatingValue] = useState<number>(rating ?? 0);

  const [ratedMovies, setRatedMovie] = useLocalStorage<RatedMovie>({
    key: LS_RATED_MOVIES_KEY,
    defaultValue: {},
  });

  const saveRating = () => {
    setRatedMovie({ ...ratedMovies, [id]: ratingValue });
    updateRating(ratingValue);
    closeModal(true);
  };

  const removeRating = () => {
    setRatingValue(0);
    if (ratedMovies[id] !== undefined) {
      const { [id]: _, ...newRatedMovies } = ratedMovies;
      setRatedMovie(newRatedMovies);
    }
    updateRating(null);
    closeModal(true);
  };

  const closeModal = (isSaved?: boolean) => {
    if (!isSaved) {
      setRatingValue(rating ?? 0);
    }
    close();
  };

  return (
    <Modal
      classNames={classes}
      title={<Text fz="sm">Your rating</Text>}
      opened={opened}
      onClose={closeModal}
      centered
      size="sm"
      padding={0}
      transitionProps={{ transition: 'fade', duration: 300 }}
      closeButtonProps={{
        icon: <IconX size="1rem" />,
      }}
    >
      <Divider />
      <Stack gap="md" p="md">
        <Title order={3} fz="sm">
          {title}
        </Title>
        <Rating
          value={ratingValue}
          onChange={(value) => setRatingValue(value)}
          size="lg"
          count={10}
          w="100%"
          styles={{
            root: { display: 'flex', justifyContent: 'space-between' },
          }}
        />
        <Group>
          <Button onClick={saveRating}>Save</Button>
          <Button
            variant="transparent"
            disabled={ratedMovies[id] === undefined}
            onClick={removeRating}
          >
            Remove rating
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
