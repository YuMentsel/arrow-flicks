'use client';

import { createTheme, DEFAULT_THEME, mergeMantineTheme } from '@mantine/core';

const customTheme = createTheme({
  white: '#ffffff',
  black: '#232134',

  colors: {
    purple: [
      '#f2ebf9',
      '#e5d5fa',
      '#d1b4f8',
      '#bd93f7',
      '#a76cf8',
      '#9854f6',
      '#7734d3',
      '#6526bc',
      '#541f9d',
      '#4d1b95',
    ],

    grey: [
      '#f5f5f6',
      '#eaebed',
      '#d5d6dc',
      '#c9cad3',
      '#acadb9',
      '#95969e',
      '#7b7c88',
      '#6c6d78',
      '#60606d',
      '#505363',
    ],
  },

  primaryColor: 'purple',

  headings: {
    fontFamily: 'Inter, sans-serif',
    sizes: {
      h1: {
        fontWeight: '700',
        fontSize: '2rem',
      },
    },
  },

  fontSizes: {
    xs: '0.875rem',
    sm: '1rem',
    md: '1.25rem',
    lg: '1.5rem',
    xl: '2rem',
  },
});

export const theme = mergeMantineTheme(DEFAULT_THEME, customTheme);
