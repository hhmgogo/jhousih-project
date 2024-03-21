// /** @type {import('next').NextConfig} */

// const isProd = process.env.NODE_ENV === "production";

// const nextConfig = {
//   output: isProd ? "export" : undefined,
//   reactStrictMode: true,
//   assetPrefix: isProd
//     ? "https:///hhmgogo.github.io/jhousih-project/"
//     : undefined,
// };
// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Outputs a Single-Page Application (SPA).
  distDir: "./out", // Changes the build output directory to `./dist/`.
};

export default nextConfig;
