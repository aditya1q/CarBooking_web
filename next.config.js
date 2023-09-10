/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export', // Specify the export directory
  images: {
    domains: ["cdn.imagin.studio"],
  },
};

module.exports = nextConfig;
