/**
 * Single source of truth for the site's canonical URL.
 * Set NEXT_PUBLIC_SITE_URL on Vercel after the custom domain is live.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://huyphuong.dev";
