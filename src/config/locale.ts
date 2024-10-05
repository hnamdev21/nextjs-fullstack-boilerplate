import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

export const headers = { "accept-language": "en-US,en;q=0.9,vi;q=0.8" };
export const languages = new Negotiator({ headers }).languages;
export const locales = ["en", "vi"];
export const defaultLocale = "vi";
export const locale = match(languages as unknown as string[], locales, defaultLocale);
