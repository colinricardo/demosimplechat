/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  distDir: 'public',  // Change this from 'out' to 'public'
}

module.exports = nextConfig