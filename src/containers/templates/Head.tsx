import NextHead from 'next/head';
import React from 'react';

import { siteMetadata } from '../../_data/app/site-metadata';

export default function Head({
  title,
  description = siteMetadata.description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />

      <link rel="icon" href="/favicons/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      <link
        rel="preload"
        href="/assets/fonts/plus-jakarta-sans-all-400-normal.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/assets/fonts/plus-jakarta-sans-all-500-normal.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/assets/fonts/plus-jakarta-sans-all-600-normal.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/assets/fonts/plus-jakarta-sans-all-700-normal.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />
    </NextHead>
  );
}

Head.defaultProps = { description: undefined };
