/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  newNextLinkBehavior: true,
  swcMinify: true,
  images: {
    domains: ['files.stripe.com']
  },
}

module.exports = nextConfig
