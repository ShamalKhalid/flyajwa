/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
module.exports = {
  webpack(config, { dev }) {
    if (!dev) {
      config.optimization.minimize = false;
    }
    return config;
  },
};
