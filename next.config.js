/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ibb.co'],
    
  },
  distDir: 'build',

}

module.exports = nextConfig
