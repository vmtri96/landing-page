/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  // Đảm bảo CSS được build đúng
  swcMinify: true,
};

export default nextConfig;
