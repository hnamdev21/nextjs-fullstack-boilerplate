export const env = {
  ENVIRONMENT: process.env.ENVIRONMENT || "development",
  ANALYZE: process.env.ANALYZE || false,

  BASE_DOMAIN_URL: process.env.BASE_DOMAIN_URL || "http://localhost:3000",

  DB_URI: process.env.DB_URI || "",
  DB_PASSWORD: process.env.DB_PASSWORD || "",

  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || "",

  SOCKET_URL: process.env.SOCKET_URL || "",
  API_LOCAL_URL: process.env.API_LOCAL_URL || "",
  API_STAGING_URL: process.env.API_STAGING_URL || "",
  API_PRODUCTION_URL: process.env.API_PRODUCTION_URL || "",

  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID || "",
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET || "",

  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || "",
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || "",

  FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID || "",
  FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET || "",
};

export const isDevelopment = env.ENVIRONMENT === "development";
