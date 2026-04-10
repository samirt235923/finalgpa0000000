const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  productionBrowserSourceMaps: false,
  experimental: {
    optimizePackageImports: ['react', 'react-dom'],
  },
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'next/dist/client/app-globals$': path.resolve(
        __dirname,
        'src/shims/next-app-globals.js'
      ),
    };

    return config;
  },
  images: {
    unoptimized: false,
    formats: ['image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/(.*).css',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/(.*).js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/(.*).svg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/(.*).png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/(.*).jpg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/(.*).ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/(.*).webmanifest',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400'
          }
        ]
      }
    ];
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.topgpacalculator.com' }],
        destination: 'https://topgpacalculator.com/:path*',
        permanent: true,
      },
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/index.htm', destination: '/', permanent: true },
      { source: '/index.php', destination: '/', permanent: true },
      { source: '/junior-gpa-calculator', destination: '/gpa-calculators/junior-gpa-calculator', permanent: true },
      { source: '/senior-gpa-calculator', destination: '/gpa-calculators/junior-gpa-calculator', permanent: true },
      { source: '/freshman-gpa-calculator', destination: '/gpa-calculators/junior-gpa-calculator', permanent: true },
      { source: '/semester-gpa-calculator', destination: '/gpa-calculators/semester-gpa-calculator', permanent: true },
      { source: '/high-school-gpa-calculator', destination: '/gpa-calculators/high-school-gpa-calculator', permanent: true },
      { source: '/weighted-gpa-calculator', destination: '/gpa-calculators/weighted-gpa-calculator', permanent: true },
      { source: '/gpa-average-calculator', destination: '/gpa-calculators/gpa-average-calculator', permanent: true },
      { source: '/online-gpa-calculator', destination: '/gpa-calculators/online-free-gpa-calculator', permanent: true },
      { source: '/gpa-calculator', destination: '/gpa-calculators/online-free-gpa-calculator', permanent: true },
      { source: '/college-gpa-calculator', destination: '/gpa-calculators/college-gpa-calculator', permanent: true },
      { source: '/cumulative-gpa-calculator', destination: '/gpa-calculators/cumulative-gpa-calculator', permanent: true },
      { source: '/nursing-gpa-calculator', destination: '/gpa-calculators/nursing-gpa-calculator', permanent: true },
      { source: '/simple-gpa-calculator', destination: '/gpa-calculators/simple-gpa-calculator', permanent: true },
      { source: '/gpa-improvement-calculator', destination: '/gpa-calculators/target-gpa-calculator', permanent: true },
      { source: '/gpa-converter', destination: '/gpa-calculators/percentage-to-gpa-calculator', permanent: true },
      { source: '/gpa-calculators/gpa-to-percentage-calculator', destination: '/gpa-calculators/percentage-to-gpa-calculator', permanent: true },
      { source: '/gpa-calculators/gpa-calculator', destination: '/gpa-calculators/online-free-gpa-calculator', permanent: true },
    ];
  },
};

module.exports = nextConfig;
