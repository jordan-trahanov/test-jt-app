import { Theme } from '@emotion/react';

import './reset.css';
import './app.css';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      light: {
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
    };
  }
}

export const theme: Theme = {
  colors: {
    light: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      tertiary: 'var(--color-tertiary)',
      background: 'var(--color-background-light)',
      text: 'var(--color-text-light)',
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
  },
} as const;
