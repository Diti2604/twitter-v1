/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["help.twitter.com","upload.wikimedia.org"],
  },
};

module.exports = nextConfig;
