import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "vi"],
  defaultLocale: "vi",
  localePrefix: "always",
});

export const { Link, usePathname, useRouter, redirect } = createSharedPathnamesNavigation(routing);
