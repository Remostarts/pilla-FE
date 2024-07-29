/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //   typedRoutes: true,
    // },
    logging: {
      fetches: {
        fullUrl: true,
      },
    },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '*',
          },
          {
            protocol: 'http',
            hostname: '*',
          },
        ],
      },
    };
    
    export default nextConfig;