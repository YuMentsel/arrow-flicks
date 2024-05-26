'use client';

import { ReactNode, useState } from 'react';
import { SWRConfig } from 'swr';
import { Container } from '@mantine/core';
import ErrorFallback from './ErrorFallback';

export default function ErrorBoundary({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [error, setError] = useState('');

  return (
    <SWRConfig
      value={{
        onError: (error) => {
          setError(`Error! ${error.message}`);
        },
      }}
    >
      {error ? (
        <ErrorFallback errorMessage={error} />
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
