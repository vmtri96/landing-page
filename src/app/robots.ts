import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const isProd = process.env.NODE_ENV === "production";
  const base = "https://smartcodesolutions.vn";

  return {
    rules: [
      {
        userAgent: "*",
        allow: isProd ? ["/"] : [],
        disallow: isProd ? ["/admin", "/api"] : ["/"],
        crawlDelay: 1,
      },
    ],
    sitemap: [`${base}/sitemap.xml`],
    host: base,
  };
}
