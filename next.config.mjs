/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      { source: "/schedule", destination: "/contact", permanent: true },
      { source: "/schedule/confirmation", destination: "/contact/confirmation", permanent: true },
    ];
  },

  images: {
    formats: ['image/avif', 'image/webp'],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
