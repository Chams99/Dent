/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Disabled for Vercel
  trailingSlash: true,
  images: {
    // unoptimized: true, // Disabled for Vercel Image Optimization
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', 'next-themes'],
    webVitalsAttribution: ['CLS', 'LCP'],
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  compiler: {
    // removeConsole: process.env.NODE_ENV === 'production', // Not supported by Turbopack
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  // Configure for subdirectory deployment - DISABLED FOR VERCEL
  // assetPrefix: '/white',
  // basePath: '/white',

  // Performance optimizations
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // Enable modern features
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{kebabCase member}}',
    },
  },
}

module.exports = nextConfig 