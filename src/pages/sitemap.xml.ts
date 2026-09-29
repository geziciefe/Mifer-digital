import original from '../data/base-sitemap.xml?raw';
import { allBlogPosts, blogPath } from '../data/blog';
import { pageUrl } from '../data/siteConfig';
export function GET() {
  const pairs = [['/tr/blog','/en/blog'], ...allBlogPosts.map(post => [blogPath('tr', post), blogPath('en', post)])];
  const entries = pairs.flatMap(pair => pair.map(path => `<url><loc>${pageUrl(path)}</loc><xhtml:link rel="alternate" hreflang="tr" href="${pageUrl(pair[0])}"/><xhtml:link rel="alternate" hreflang="en" href="${pageUrl(pair[1])}"/><xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl(pair[0])}"/></url>`)).join('');
  return new Response(original.replace('</urlset>', entries + '</urlset>'), { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
