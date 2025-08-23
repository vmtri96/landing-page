import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://smartcodesolutions.vn";

  const routes = [
    {
      path: "",
      priority: 1.0,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/services",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/about",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/contact",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/working-process",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/client-pathway",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/privacy-policy",
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
    {
      path: "/terms-of-service",
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
  ];

  const now = new Date().toISOString().split("T")[0];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
