/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // 👈 this enables static site export for Cloudflare Pages
};

export default nextConfig;