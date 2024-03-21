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

const nextConfig = {
  // Other Next.js configuration options...

  // 添加 output: export
  output: {
    // 添加 export 選項
    export: {
      // 在此處添加任何進一步的選項或配置
    },
  },
};
export default nextConfig;
