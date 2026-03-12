/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  output: "export",
  assetPrefix: '',
  basePath: ''
};

module.exports = nextConfig;
