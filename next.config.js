/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/api/stores",
        destination: `http://localhost:9000/stores`,
      },
      {
        source: "/api/stores/:id",
        destination: `http://localhost:9000/stores/:id`,
      },
    ];
  },
};

module.exports = nextConfig;
