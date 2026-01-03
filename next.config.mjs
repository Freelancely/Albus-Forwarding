/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Generate static HTML output (required for cPanel hosting)
  output: 'export',

  // ✅ Disable image optimization since cPanel doesn't run a Node server
  images: {
    unoptimized: true,
  },

  // ✅ Optional – helps ensure routes like /about/ work correctly
  trailingSlash: true,

  // Optional – allows builds to proceed even with TypeScript errors
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
