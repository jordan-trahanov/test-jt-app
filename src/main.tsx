import React from 'react';

import { ThemeProvider } from '@emotion/react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';

import './index.css';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      background: string;
      text: string;
      link: string;
      linkHover: string;
      button: string;
      buttonText: string;
      buttonHover: string;
      border: string;

      fsH1: string;
      fsH2: string;
      fsH3: string;
      fsH4: string;
      fsH5: string;

      fwNormal: string;
      fwSemibold: string;
      fwBold: string;
    };
  }
}

const theme = {
  colors: {
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    tertiary: 'var(--color-tertiary)',
    background: 'var(--color-background)',
    text: 'var(--color-text)',
    link: 'var(--color-link)',
    linkHover: 'var(--color-link-hover)',
    button: 'var(--color-button)',
    buttonText: 'var(--color-button-text)',
    buttonHover: 'var(--color-button-hover)',
    border: 'var(--color-border)',

    fsH1: 'var(--font-size-h1)',
    fsH2: 'var(--font-size-h2)',
    fsH3: 'var(--font-size-h3)',
    fsH4: 'var(--font-size-h4)',
    fsH5: 'var(--font-size-h5)',

    fwNormal: 'var(--font-weight-normal)',
    fwSemibold: 'var(--font-weight-semibold)',
    fwBold: 'var(--font-weight-bold)',
  },
} as const;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
