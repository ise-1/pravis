import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://www.pravislearning.com";

interface SitemapEntry {
  path: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: string;
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "weekly", priority: "0.8" },
  
  { path: "/gtec-franchise", changefreq: "weekly", priority: "0.9" },
  { path: "/global-campus", changefreq: "weekly", priority: "0.9" },
  { path: "/prepinsta", changefreq: "weekly", priority: "0.9" },
  { path: "/career247", changefreq: "weekly", priority: "0.9" },
  { path: "/talent-partner", changefreq: "weekly", priority: "0.9" },
  { path: "/insurance", changefreq: "weekly", priority: "0.9" },
  { path: "/contact", changefreq: "weekly", priority: "0.7" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = entries
          .map(
            (e) =>
              `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
