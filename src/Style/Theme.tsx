import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#0070f3',
    secondary: '#1DB954',
    background: '#f5f5f5',
    text: '#333',
    error: '#ff0000',
  },
  spacing: (factor: number) => `${8 * factor}px`,
  breakpoints: ['480px', '768px', '1024px', '1200px'],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  space: [0, 4, 8, 16, 32, 64],
};

export default theme;
