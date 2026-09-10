import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
assert.ok(fs.existsSync(root), 'Run npm run build before npm test.');
const walkFiles = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? walkFiles(path.join(dir, entry.name)) : [path.join(dir, entry.name)]);
const files = walkFiles(root);
const attr = (node, name) => node.attrs?.find(a => a.name === name)?.value;
const has = (node, name) => node.attrs?.some(a => a.name === name);
const descendants = node => [node, ...(node.childNodes || []).flatMap(descendants)];
const text = node => node.nodeName === '#text' ? node.value : (node.childNodes || []).map(text).join('');
const pages = files.filter(file => file.endsWith('.html')).map(file => {
  const html = fs.readFileSync(file, 'utf8');
  const nodes = descendants(parse(html));
  const route = '/' + path.relative(root, file).split(path.sep).join('/').replace(/index\.html$/, '').replace(/\/$/, '');
  return { file, html, nodes, route: route || '/', redirect: nodes.some(n => attr(n, 'http-equiv') === 'refresh') };
});
const pageFor = route => pages.find(page => page.route === route);
const demoPattern = /^\/(?:tr\/(?:kuafor-demo|dis-klinigi-demo|insaat-demo)|en\/(?:hair-salon-demo|dental-clinic-demo|construction-demo))(?:\/|$)/;
const demoPages = pages.filter(page => demoPattern.test(page.route));
const constructionPages = pages.filter(page => /\/(insaat-demo|construction-demo)(\/|$)/.test(page.route) && !page.redirect);
const resolveLocal = (url, base) => {
  const parsed = new URL(url, `https://test.invalid${base}`);
  if (parsed.origin !== 'https://test.invalid') return null;
  const pathname = decodeURIComponent(parsed.pathname);
  const candidates = [path.join(root, pathname), path.join(root, pathname, 'index.html')];
  return { url: parsed, file: candidates.find(file => fs.existsSync(file) && fs.statSync(file).isFile()) };
};

test('all main pages and both languages of all three demos are generated', () => {
  for (const route of ['/tr', '/en', '/tr/demo-calismalar', '/en/demo-work', '/tr/kuafor-demo', '/en/hair-salon-demo', '/tr/dis-klinigi-demo', '/en/dental-clinic-demo', '/tr/insaat-demo', '/en/construction-demo']) assert.ok(pageFor(route), route);
  assert.equal(constructionPages.length, 10, '2 homepages, 6 case studies, 2 information pages');
  for (const page of pages.filter(page => !page.redirect)) {
    assert.equal(page.nodes.filter(n => n.tagName === 'h1').length, 1, `${page.route}: one h1`);
    assert.ok(page.nodes.find(n => n.tagName === 'title' && text(n).trim()), `${page.route}: title`);
    assert.ok(page.nodes.find(n => attr(n, 'name') === 'description' && attr(n, 'content')), `${page.route}: description`);
    assert.doesNotMatch(page.html, /lorem ipsum|href="(?:undefined|null)"/i, page.route);
  }
});

test('all local navigation, language links and fragments resolve', () => {
  for (const page of pages) for (const node of page.nodes) {
    const href = attr(node, 'href');
    if (!href || /^(?:https?:|mailto:|tel:|data:|javascript:)/.test(href)) continue;
    const target = resolveLocal(href, page.route);
    assert.ok(target?.file, `${page.route} -> ${href}`);
    if (target.url.hash && target.file.endsWith('.html')) {
      const destination = pages.find(p => p.file === target.file);
      const id = decodeURIComponent(target.url.hash.slice(1));
      assert.ok(destination.nodes.some(n => attr(n, 'id') === id), `${page.route} -> ${href}: missing fragment`);
    }
  }
});

test('all referenced images, responsive sources, videos, CSS and scripts exist', () => {
  for (const page of pages) for (const node of page.nodes) {
    const urls = ['src', 'poster'].map(key => attr(node, key)).filter(Boolean);
    const srcset = attr(node, 'srcset');
    if (srcset) urls.push(...srcset.split(',').map(source => source.trim().split(/\s+/)[0]));
    for (const url of urls) {
      if (/^(?:https?:|data:)/.test(url)) continue;
      assert.ok(resolveLocal(url, page.route)?.file, `${page.route} missing asset: ${url}`);
    }
    if (node.tagName === 'img') assert.ok(has(node, 'alt'), `${page.route}: image needs an alt attribute`);
  }
  for (const file of files.filter(file => file.endsWith('.css'))) {
    const css = fs.readFileSync(file, 'utf8');
    const route = '/' + path.relative(root, file).split(path.sep).join('/');
    for (const match of css.matchAll(/url\(["']?([^\s)"']+)["']?\)/g)) {
      if (/^(?:data:|https?:|#)/.test(match[1])) continue;
      assert.ok(resolveLocal(match[1], route)?.file, `${route} missing CSS asset: ${match[1]}`);
    }
  }
});

test('every demo page has exactly one shared localized Back to Mifer control', () => {
  assert.equal(demoPages.length, 36);
  for (const page of demoPages) {
    const controls = page.nodes.filter(n => has(n, 'data-mifer-demo-return'));
    assert.equal(controls.length, 1, page.route);
    const lang = page.route.startsWith('/tr/') ? 'tr' : 'en';
    assert.equal(attr(controls[0], 'href'), `/${lang}#work`);
    assert.match(text(controls[0]), lang === 'tr' ? /Mifer’e dön/ : /Back to Mifer/);
  }
  for (const route of ['/tr', '/en']) assert.equal(pageFor(route).nodes.filter(n => has(n, 'data-mifer-demo-return')).length, 0);
});

test('new construction experience replaces the previous design in both languages', () => {
  for (const page of constructionPages) {
    assert.match(page.html, /KAVREN/);
    assert.doesNotMatch(page.html, /Orven|Mifer Yapı|build-hero|build-site|industry-demos|mifer-yapi/);
    const ids = page.nodes.filter(n => has(n, 'id')).map(n => attr(n, 'id'));
    assert.equal(new Set(ids).size, ids.length, `${page.route}: duplicate ID`);
    const alternate = page.nodes.find(n => attr(n, 'rel') === 'alternate');
    assert.ok(alternate, page.route);
    const alternateUrl = new URL(attr(alternate, 'href'));
    const otherPage = pageFor(alternateUrl.pathname);
    assert.ok(otherPage, `${page.route}: translated route`);
    const reverse = otherPage.nodes.find(n => attr(n, 'rel') === 'alternate');
    assert.equal(new URL(attr(reverse, 'href')).pathname, page.route);
  }
  for (const route of ['/tr/insaat-demo', '/en/construction-demo']) {
    const page = pageFor(route);
    const projects = page.nodes.filter(n => has(n, 'data-kv-project'));
    assert.equal(projects.length, 3);
    assert.equal(projects.filter(n => attr(n, 'data-status') === 'completed').length, 2);
    assert.equal(projects.filter(n => attr(n, 'data-status') === 'ongoing').length, 1);
    const image = page.nodes.find(n => n.tagName === 'img');
    assert.equal(attr(image, 'loading'), 'eager');
    assert.equal(attr(image, 'fetchpriority'), 'high');
    assert.match(attr(image, 'srcset'), /640w.*960w.*1536w/);
    assert.ok(fs.statSync(resolveLocal(attr(image, 'src'), route).file).size < 350 * 1024);
    assert.ok(page.nodes.filter(n => n.tagName === 'img').slice(1).every(n => attr(n, 'loading') === 'lazy'));
  }
});

test('project case studies contain unique metadata and link to a different next project', () => {
  const caseStudies = constructionPages.filter(page => /\/(projects|projeler)\//.test(page.route));
  assert.equal(caseStudies.length, 6);
  for (const page of caseStudies) {
    const facts = page.nodes.filter(n => n.tagName === 'dd');
    assert.equal(facts.length, 8, `${page.route}: project facts`);
    const next = page.nodes.find(n => n.tagName === 'nav' && attr(n, 'class')?.includes('kv-next'));
    const nextLink = descendants(next).find(n => n.tagName === 'a');
    assert.notEqual(attr(nextLink, 'href'), page.route);
    assert.match(attr(nextLink, 'href'), /\/(projects|projeler)\//);
  }
});

test('demo contact forms are inert until enhanced and do not declare a remote submission', () => {
  for (const page of constructionPages) {
    const form = page.nodes.find(n => has(n, 'data-kv-form'));
    assert.ok(form && has(form, 'inert'), page.route);
    assert.equal(attr(form, 'action'), undefined);
    assert.ok(attr(form, 'data-success'));
    const controls = descendants(form);
    for (const name of ['name', 'email', 'message', 'notice']) assert.ok(controls.find(n => attr(n, 'name') === name && has(n, 'required')), `${page.route}: required ${name}`);
    const dialogs = page.nodes.filter(n => n.tagName === 'dialog');
    assert.equal(dialogs.length, 2);
    for (const dialog of dialogs) assert.ok(attr(dialog, 'aria-labelledby'));
  }
});
