/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,  // För att aktivera `app`-mappen om det behövs
  },
  output: 'standalone',  // Detta är viktigt för Vercel
  images: {
    domains: [
      'cdn.imagin.studio', 
      'images.pexels.com', 
      'encrypted-tbn0.gstatic.com', 
      'www.bmw.se', 
      'unifleet.se'
    ], // Domäner för bilder
  },
  typescript: {
    ignoreBuildErrors: true, // Tillåt att bygga trots TypeScript-fel
  }
};

module.exports = nextConfig;