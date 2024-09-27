/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.imagin.studio', 'images.pexels.com','encrypted-tbn0.gstatic.com', 'www.bmw.se', 'images.pexels.com', 'unifleet.se'], // Lägg till 'images.pexels.com' här
    },
    typescript: {
        ignoreBuildErrors: true,
    }
};

export default nextConfig;
