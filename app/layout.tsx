import '@mantine/core/styles.css';
import React from 'react';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { RatedContextProvider } from './context';
import './globals.css';

export const metadata: Metadata = {
  title: 'ArrowFlicks',
  description: 'The application is designed for searching and rating movies.',
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--inter',
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          <RatedContextProvider>{children}</RatedContextProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
