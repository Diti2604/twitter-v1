/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["help.twitter.com","upload.wikimedia.org"],
  },
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
