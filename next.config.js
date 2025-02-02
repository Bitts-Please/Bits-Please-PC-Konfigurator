/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Falls du `next/image` in einem statischen Export nutzt
  },
};

module.exports = nextConfig;