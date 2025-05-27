/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  experimental: {
    optimizeCss: true,
  },
  devIndicators: {
    buildActivity: false,
  },
};

export default nextConfig;
