'use client';

import { ReactNode, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SWRConfig } from 'swr';
import { Container } from '@mantine/core';
import ErrorFallback from './ErrorFallback';
import { ErrorMessage, Path } from '../types/enums';

export default function ErrorBoundary({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [errorMessage, setErrorMessage] = useState('');
  const { push } = useRouter();

  return (
    <SWRConfig
      value={{
        onError: (error) => {
          if (error.message === ErrorMessage.NotFound) {
            push(`/${Path.NotFound}`);
          } else {
            setErrorMessage(`Error! ${error.message}`);
          }
        },
      }}
    >
      {errorMessage ? (
        <ErrorFallback errorMessage={errorMessage} />
      ) : (
        <Container
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.3rem',
          }}
          mih="100vh"
          size="65rem"
          mx={'auto'}
          px={{ base: 'sm', xs: 'xl', sm: '1.85rem' }}
          py={{ base: 'xs', sm: 'xl' }}
        >
          {children}
        </Container>
      )}
    </SWRConfig>
  );
}
