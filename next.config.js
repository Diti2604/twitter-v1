/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ["upload.wikimedia.org", "help.twitter.com"]
  }
}

module.exports = nextConfig
