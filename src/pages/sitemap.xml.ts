import original from '../data/base-sitemap.xml?raw';
import { allBlogPosts, blogPath } from '../data/blog';
import { siteConfig } from '../data/siteConfig';
export function GET() {
  const pairs = [['/tr/blog','/en/blog'], ...allBlogPosts.map(post => [blogPath('tr', post), blogPath('en', post)])];
  const entries = pairs.flatMap(pair => pair.map(path => `<url><loc>${siteConfig.url}${path}</loc><xhtml:link rel="alternate" hreflang="tr" href="${siteConfig.url}${pair[0]}"/><xhtml:link rel="alternate" hreflang="en" href="${siteConfig.url}${pair[1]}"/></url>`)).join('');
  return new Response(original.replace('</urlset>', entries + '</urlset>'), { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
