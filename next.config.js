/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  webpack(config, { dev }) {
    if (!dev) {
      config.optimization.minimize = false;
    }
    return config;
  },
};

module.exports = nextConfig;
