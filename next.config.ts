import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: false, // hides the round "N" badge in dev only
  async redirects() {
    return [
      // Legacy URLs → current structure
      { source: '/agro', destination: '/food-gift', permanent: true },
      { source: '/agro/products/:path*', destination: '/food-gift', permanent: true },
      { source: '/industrial/products/:path*', destination: '/industrial', permanent: true },
      { source: '/industries', destination: '/', permanent: true },
      { source: '/markets', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
