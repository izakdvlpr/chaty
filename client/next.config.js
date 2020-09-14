const bundleAnalyzer = require('@next/bundle-analyzer');
const sourceMaps = require('@zeit/next-source-maps');
const { config } = require('dotenv');
const composePlugins = require('next-compose-plugins');
const { join } = require('path');

const { NODE_ENV, ANALYZE } = process.env;

if (NODE_ENV === 'development') {
  config({
    path: join(__dirname, '..', '.env.development'),
  });
}

module.exports = composePlugins(
  [
    [sourceMaps],
    [
      bundleAnalyzer,
      {
        enabled: !!ANALYZE,
      },
    ],
  ],
  {
    env: {},
    distDir: 'dist',
    devIndicators: {
      autoPrerender: false,
    },
    experimental: {
      jsconfigPaths: true,
    },
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
  },
);
