/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  output: "export",
  assetPrefix: isProd ? '/zukkasite/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/zukkasite' : ''
};

module.exports = nextConfig;
