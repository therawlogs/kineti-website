export const prerender = true;

const SITE = "https://www.getkineti.com";

const pages: { loc: string; lastmod: string }[] = [
  { loc: "/", lastmod: "2026-08-27" },
  { loc: "/docs", lastmod: "2026-08-27" },
  { loc: "/docs/getting-started", lastmod: "2026-08-27" },
  { loc: "/docs/ci", lastmod: "2026-08-27" },
  { loc: "/docs/commands", lastmod: "2026-08-27" },
  { loc: "/docs/receipt", lastmod: "2026-08-27" },
  { loc: "/pricing", lastmod: "2026-08-27" },
  { loc: "/team", lastmod: "2026-08-27" },
  { loc: "/security", lastmod: "2026-08-27" },
  { loc: "/legal/privacy", lastmod: "2026-08-27" },
  { loc: "/legal/terms", lastmod: "2026-08-27" },
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
