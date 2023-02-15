/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['files.stripe.com', 'www.nicepng.com']
  },
}

module.exports = nextConfig
