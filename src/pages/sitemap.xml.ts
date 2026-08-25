export const prerender = true;

const SITE = "https://www.getkineti.com";

const pages: { loc: string; lastmod: string }[] = [
  { loc: "/", lastmod: "2026-08-26" },
  { loc: "/docs/getting-started", lastmod: "2026-08-26" },
  { loc: "/governance", lastmod: "2026-08-26" },
  { loc: "/docs/swarm", lastmod: "2026-08-26" },
  { loc: "/docs/cli", lastmod: "2026-08-26" },
  { loc: "/docs/configuration", lastmod: "2026-08-26" },
  { loc: "/security", lastmod: "2026-08-26" },
  { loc: "/architecture", lastmod: "2026-08-26" },
  { loc: "/docs/c-api", lastmod: "2026-08-26" },
  { loc: "/changelog", lastmod: "2026-08-25" },
  { loc: "/faq", lastmod: "2026-08-26" },
];

export async function GET() {
  const urls = pages
    .map(
      (p) =>
        `  <url>\n    <loc>${SITE}${p.loc}</loc>\n    <lastmod>${p.lastmod}</lastmod>\n  </url>`
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
