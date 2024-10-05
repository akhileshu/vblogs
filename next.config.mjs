/** @type {import('next').NextConfig} */
const nextConfig = {

  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000, // Check for changes every second
      aggregateTimeout: 300, // delay before rebuilding
    };
    return config;
  },
};

export default nextConfig;
