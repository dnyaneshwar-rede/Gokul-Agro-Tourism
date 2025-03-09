/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**', // Matches all paths from images.unsplash.com
      },
      {
        protocol: 'https',
        hostname: 'yt3.ggpht.com',
        pathname: '/**', // Matches all paths from yt3.ggpht.com
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/**', // Matches all paths from i.ytimg.com
      },
    ],
  },
};

export default nextConfig;
