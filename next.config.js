/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  exportPathMap: async function () {
    return {
      '/': { page: '/' }, // Define the export path for the root page
      // Add more export paths for other pages if needed
    };
  },
  export: 'output', // Specify the export directory
  images: {
    domains: ["cdn.imagin.studio"],
  },
};

module.exports = nextConfig;
