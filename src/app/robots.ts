import { MetadataRoute } from "next";

import { env } from "@/constants/env";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/*", "/api/*", "/api-docs/*", "/admin/*"],
    },
    sitemap: `${env.BASE_DOMAIN_URL}/sitemap.xml`,
  };
}
