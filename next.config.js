/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://nextjs.org/docs/messages/next-image-unconfigured-host#possible-ways-to-fix-it
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "thumbnail.image.rakuten.co.jp",
      },
      {
        protocol: "https",
        hostname: "r.r10s.jp",
      },
    ],
  },
};

module.exports = nextConfig;
