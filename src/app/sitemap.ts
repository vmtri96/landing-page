import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://smartcodesolutions.vn";

  const routes = [
    "",
    "/about",
    "/client-pathway",
    "/contact",
    "/services",
    "/working-process",
    "/privacy-policy",
    "/terms-of-service",
  ];

  const now = new Date().toISOString().split("T")[0];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : 0.7,
  }));
}
