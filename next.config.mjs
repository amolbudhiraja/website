/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  turbopack: {},
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "logo.clearbit.com" },
    ],
  },
  async rewrites() {
    return [
      { source: "/resume", destination: "/Amol_Budhiraja_Resume.pdf" },
    ];
  },
};

export default nextConfig;
