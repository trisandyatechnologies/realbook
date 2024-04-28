/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: "nSph6q3/EjuQQiBaMy6C7Z5y/e3RTnRUE/DZhwAm7KY=",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: '"res.cloudinary.com"',
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
