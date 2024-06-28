/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.imagin.studio", "s3-eu-west-1.amazonaws.com", "raw.githubusercontent.com"],
        unoptimized: true, // Disable the Image Optimization API for static export
    },
    output: "export", // Generate a static site
};

module.exports = nextConfig;