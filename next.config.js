const nextConfig = {
  output: 'export', 
  trailingSlash: true,
  images: {
    unoptimized: true, 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '', 
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'i1.sndcdn.com', 
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
