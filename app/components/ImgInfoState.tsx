import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { Button, Stack, Text } from '@mantine/core';
import { Path } from '../types/enums';

interface InfoProps {
  src: StaticImageData;
  alt: string;
  message: string;
  btnText?: string;
}

export function ImgInfoState({ src, alt, message, btnText }: Readonly<InfoProps>) {
  return (
    <Stack align="center" gap="sm">
      <Image src={src} alt={alt} priority />
      <Text ta="center" fw={600} fz="ld" mt={btnText ? '2rem' : 0}>
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
