import { MetadataRoute } from "next";

import { env } from "@/constants/env";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${env.BASE_DOMAIN_URL}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
