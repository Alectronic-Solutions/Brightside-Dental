// Only apply the GitHub Pages sub-path in production builds, so local dev
// serves at the plain root (http://localhost:3000/) instead of requiring
// the /Brightside-Dental prefix.
const basePath = process.env.NODE_ENV === "production" ? "/Brightside-Dental" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
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
