import NextImage, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Button, Stack, Text, Image } from '@mantine/core';
import { Path } from '../types/enums';

interface InfoProps {
  src: StaticImageData;
  alt: string;
  message: string;
  btnText?: string;
}

export function ImgInfoState({ src, alt, message, btnText }: Readonly<InfoProps>) {
  return (
    <Stack align="center" gap="md" w="100%" miw="18rem">
      <Image component={NextImage} mah="15.8rem" src={src} alt={alt} fit="contain" priority />
      <Text ta="center" fw={600} fz={{ base: 'sm', md: 'md' }} lh="1.2" mt={btnText ? '2rem' : 0}>
        {message}
      </Text>
      {btnText && (
        <Button component={Link} href={`/${Path.Movies}`}>
          {btnText}
        </Button>
      )}
    </Stack>
  );
}
