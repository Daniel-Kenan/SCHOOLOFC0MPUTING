/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
   images: {
    domains: ['media.nextgensell.com'], // Add the external hostname here
  },
}

export default nextConfig
