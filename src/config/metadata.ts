import { Metadata } from "next";

import { env } from "@/constants/env";

export const APP_NAME = "Next.js Boilerplate";
export const APP_DEFAULT_TITLE = "Next.js Boilerplate";
export const APP_TITLE_TEMPLATE = "%s";
export const APP_DESCRIPTION = "Next.js Boilerplate";
export const IMAGE_SHARING = "";

const metadataConfig: Metadata = {
  metadataBase: new URL(`${env.BASE_DOMAIN_URL}`),
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: [
      {
        url: IMAGE_SHARING,
        width: 1200,
        height: 630,
        alt: APP_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: [
      {
        url: IMAGE_SHARING,
        alt: APP_NAME,
      },
    ],
  },
};

export default metadataConfig;
