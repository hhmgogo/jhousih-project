/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const assetPrefix =
  process.env.NODE_ENV === "production" ? "/jhousih-project" : "";
const nextConfig = {
  output: isProd ? "export" : undefined,
  reactStrictMode: true,
  // assetPrefix: isProd
  //   ? "https:///hhmgogo.github.io/jhousih-project/"
  //   : undefined,
  basePath: "/jhousih-project",
  assetPrefix: "/jhousih-project/",
};
export default nextConfig;
