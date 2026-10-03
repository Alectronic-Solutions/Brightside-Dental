import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // Crawlers only read robots.txt at a domain root, so this file takes effect
    // once the site moves from the GitHub Pages sub-path to its own domain.
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
