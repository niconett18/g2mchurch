/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve AVIF/WebP where supported; falls back automatically.
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
  // Vercel optimizations
  swcMinify: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    // Tree-shake icon/motion barrel files instead of pulling in the whole package.
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
