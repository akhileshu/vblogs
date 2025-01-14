/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpackDevMiddleware: (config) => {
  //   config.watchOptions = {
  //     poll: 1000, // Check for changes every second
  //     aggregateTimeout: 300, // delay before rebuilding
  //   };
  //   return config;
  // },

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

  // "dev:sourcemaps": "ENABLE_SOURCEMAPS=true next dev",
  // serverSourceMaps: process.env.ENABLE_SOURCEMAPS === "true",
  //found disabled sourcemaps causing no issue in debugging
  // "dev": "next dev --turbo", turbo is also causing no issue

  //fix slow page compilation on dev server
// below config might be causing full page reload on code even minor code changes

  experimental: {
    serverSourceMaps: false,
  },
  productionBrowserSourceMaps: false,
  swcMinify: true,
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
