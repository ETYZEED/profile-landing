/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['iili.io'],
  },
  compiler: {
    // enable styled-components SWC transform for stable classnames between server/client
    styledComponents: true,
  },
}
module.exports = nextConfig
