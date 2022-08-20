import type { AppProps } from 'next/app';
import React from 'react';
import { Provider, styles, theme as defaultTheme, Theme } from '@andideve/ids-react';
import { Global } from '@emotion/react';

import '../styles/plus-jakarta-sans.css';
import { globalStyles } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider
      theme={{
        colorMode: 'light',
        fonts: {
          body: `"Plus Jakarta Sans", ${defaultTheme.fonts.body}`,
          heading: `"Plus Jakarta Sans", ${defaultTheme.fonts.heading}`,
        },
      }}
    >
      <Global styles={(theme) => globalStyles(theme as Theme)} />
      <Global styles={styles.flexBox} />
      <Global styles={styles.layouts} />
      <Global styles={styles.size} />
      <Global styles={styles.typography} />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
