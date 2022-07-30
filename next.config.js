const fontPaths = [
  '/assets/fonts/plus-jakarta-sans-all-400-normal.woff',
  '/assets/fonts/plus-jakarta-sans-all-500-normal.woff',
  '/assets/fonts/plus-jakarta-sans-all-600-normal.woff',
  '/assets/fonts/plus-jakarta-sans-all-700-normal.woff',
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return fontPaths.map((fontPath) => ({
      source: fontPath,
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000',
        },
      ],
    }));
  },
  experimental: { scrollRestoration: true },
};

module.exports = nextConfig;
