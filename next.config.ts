/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'substack-post-assets.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'substackcdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'substack-post-media.s3.amazonaws.com', // Adicionamos este novo aqui!
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig