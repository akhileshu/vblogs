/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpackDevMiddleware: (config) => {
  //   config.watchOptions = {
  //     poll: 1000, // Check for changes every second
  //     aggregateTimeout: 300, // delay before rebuilding
  //   };
  //   return config;
  // },
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow all hosts
      },
      {
        protocol: "http",
        hostname: "**", // Allow all hosts with http
      },
    ],
  },
  // async headers() {
  //   return [
  //     {
  //       // matching all API routes
  //       source: "/api/:path*",
  //       headers: [
  //         { key: "Access-Control-Allow-Credentials", value: "true" },
  //         { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
  //         {
  //           key: "Access-Control-Allow-Methods",
  //           value: "GET,DELETE,PATCH,POST,PUT",
  //         },
  //         {
  //           key: "Access-Control-Allow-Headers",
  //           value:
  //             "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  //         },
  //       ],
  //     },
  //   ];
  // },

  //fix slow page compilation on dev server
  swcMinify: true,
  productionBrowserSourceMaps: false, // Disable source maps in development
  optimizeFonts: false, // Disable font optimization
  minify: false, // Disable minification
  concurrentFeatures: true,
  fastRefresh: true,
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 15 * 60 * 1000, // 15 minutes
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 4,
  },

  
};

export default nextConfig;
