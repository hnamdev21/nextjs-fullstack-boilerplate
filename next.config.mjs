/** @type {import('next').NextConfig} */

import createBundleAnalyzerPlugin from "@next/bundle-analyzer";
import withPlugins from "next-compose-plugins";
import createIntlPlugin from "next-intl/plugin";
import withSvgr from "next-plugin-svgr";

const withBundleAnalyzer = createBundleAnalyzerPlugin({
  enabled: process.env.ANALYZE === "true",
});
const withNextIntl = createIntlPlugin();
const isProd = process.env.ENVIRONMENT === "production";

const nextConfig = {
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  compiler: {
    styledComponents: true,
    styledJsx: true,
    removeConsole: isProd,
  },
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  generateEtags: true,
  sassOptions: {
    additionalData: `
      @import "@styles/_variables.scss";
      @import "@styles/_tools.scss";
      @import "@styles/_utils.scss";
    `,
  },
  images: {
    remotePatterns: [
      {
        hostname: "**",
        protocol: "https",
        port: "",
        pathname: "/**",
      },
      {
        hostname: "**",
        protocol: "http",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      // {
      //   source: "/api/:path*",
      //   destination: "http://localhost:3000/api/:path*",
      // },
    ];
  },
  async redirects() {
    return [
      // {
      //   source: "/",
      //   destination: "/home",
      //   permanent: true,
      // },
    ];
  },
};

export default withPlugins([withBundleAnalyzer, withSvgr, withNextIntl], nextConfig);
