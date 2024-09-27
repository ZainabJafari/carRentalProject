/** @type {import('next').NextConfig} */
const nextConfig = {
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

export default nextConfig;