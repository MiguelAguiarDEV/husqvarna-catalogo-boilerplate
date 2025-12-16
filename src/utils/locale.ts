import { SupportedLocale } from "@/types";

// Base URLs for each locale
const STORE_URLS: Record<SupportedLocale, string> = {
  es: "https://tiendahusqvarna.es",
  cat: "https://tiendahusqvarna.es", // Catalan uses Spanish store
  pt: "https://lojahusqvarna.pt",
};

/**
 * Get the store base URL for a given locale
 */
export const getStoreUrl = (locale: SupportedLocale): string => {
  return STORE_URLS[locale] || STORE_URLS.es;
};

/**
 * Build a full product URL for a given locale and path
 */
export const getProductUrl = (
  locale: SupportedLocale,
  path: string
): string => {
  const baseUrl = getStoreUrl(locale);
  // Ensure path starts with /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${normalizedPath}`;
};

/**
 * Get localized URLs for different locales
 * Returns the appropriate URL based on locale
 */
export const getLocalizedUrl = (
  locale: SupportedLocale,
  urls: {
    es?: string;
    cat?: string;
    pt?: string;
    default?: string;
  }
): string => {
  return urls[locale] || urls.default || urls.es || "";
};

/**
 * Check if locale is valid
 */
export const isValidLocale = (locale: string): locale is SupportedLocale => {
  return ["es", "cat", "pt"].includes(locale);
};

/**
 * Get locale with fallback to Spanish
 */
export const getLocaleWithFallback = (
  locale: string | undefined
): SupportedLocale => {
  if (locale && isValidLocale(locale)) {
    return locale;
  }
  return "es";
};
