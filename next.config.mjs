/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Brightside-Dental",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/Brightside-Dental",
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.dicebear.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
