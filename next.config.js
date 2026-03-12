/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  output: "export",
  basePath: process.env.NODE_ENV === 'production' ? '/zukkasite' : ''
};

module.exports = nextConfig;
