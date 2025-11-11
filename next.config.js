const nextConfig = {
  images: {
    // This allows Next.js to load images from the specified domains.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '', // Leave empty if not using a specific port
        pathname: '/**', // Allows any path on this hostname
      },
      // You can add other external domains here if needed (e.g., 'unsplash.com')
    ],
  },
};

module.exports = nextConfig;