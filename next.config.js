/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "www.startech.com.bd"
      }
    ]
  }
}

module.exports = nextConfig
