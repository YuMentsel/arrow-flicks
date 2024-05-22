/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/movies',
        permanent: false,
      },
    ];
  },

  async rewrites() {
    const apiBaseUrl = process.env.API_BASE_URL;
    const apiKey = process.env.API_KEY;

    return [
      {
        source: '/movies_data',
        destination: `${apiBaseUrl}/discover/movie?api_key=${apiKey}&language=en-US`,
      },
      {
        source: '/genre',
        destination: `${apiBaseUrl}/genre/movie/list?api_key=${apiKey}`,
      },
      {
        source: '/movie/:movieId',
        destination: `${apiBaseUrl}/movie/:movieId?api_key=${apiKey}&append_to_response=videos`,
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.IMAGE_HOSTNAME,
        port: '',
        pathname: process.env.IMAGE_PATH,
      },
    ],
  },
};

export default nextConfig;
