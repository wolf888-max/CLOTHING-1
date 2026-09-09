/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    /**
     * Images in /public/images are already sized and compressed for the web,
     * so we skip Next's on-demand optimizer (which is CPU-heavy on first load
     * and was the main cause of slow page loads). next/image still handles
     * lazy-loading, layout reservation and blur — just serves the file as-is.
     */
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
  },
};

export default nextConfig;
