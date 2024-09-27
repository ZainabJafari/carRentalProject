/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,  // För att aktivera `app`-mappen om det behövs
  },
  output: 'standalone',  // Detta är viktigt för Vercel
};

module.exports = nextConfig;
