/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export configuration for manual deployment
  output: 'export',
  distDir: 'build-output',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Allow cross-origin requests from local network devices during development
  allowedDevOrigins: [
    '192.168.1.42',
    '192.168.1.*',
    '192.168.*.*',
    '10.*.*.*',
    '172.16.*.*',
    'localhost',
    '127.0.0.1',
  ],
  // SEO and performance
  compress: true,
  poweredByHeader: false,
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
