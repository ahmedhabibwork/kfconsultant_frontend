import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.dma-mea.com',
      },
      {
        protocol: 'http',
        hostname: '72.62.16.29',
      },
      {
        protocol: 'https',
        hostname: '72.62.16.29',
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);