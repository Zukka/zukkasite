/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  output: "export",
  assetPrefix: isProd ? '/zukkasite/' : '',
  basePath: isProd ? '/zukkasite' : ''
};

module.exports = nextConfig;
