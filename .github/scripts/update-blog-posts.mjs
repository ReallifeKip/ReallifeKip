import { readFile, writeFile } from 'node:fs/promises';

const FEED_URL = process.env.FEED_URL ?? 'https://reallife-kip.com/rss.xml';
const README_PATH = 'README.md';
const MAX_POSTS = 4;
const COVER_WIDTH = 160;
const DESCRIPTION_MAX_LENGTH = 80;
const START_MARKER = '<!-- BLOG-POSTS:START -->';
const END_MARKER = '<!-- BLOG-POSTS:END -->';

function decodeXml(value) {
  return value
    .replace(/^<!\[CDATA\[([\s\S]*)\]\]>$/, '$1')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&apos;', "'")
    .replaceAll('&amp;', '&');
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function tagText(itemXml, tag) {
  const match = itemXml.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`));
  return match ? decodeXml(match[1].trim()) : '';
}

function coverUrl(itemXml) {
  const match = itemXml.match(/<media:content\s[^>]*url="([^"]+)"/);
  return match ? decodeXml(match[1]) : '';
}

function truncate(text, maxLength) {
  const chars = [...text];
  return chars.length > maxLength ? `${chars.slice(0, maxLength).join('')}…` : text;
}

function formatDate(rfc822) {
  const date = new Date(rfc822);
  return Number.isNaN(date.getTime()) ? '' : date.toISOString().slice(0, 10);
}

const response = await fetch(FEED_URL);
if (!response.ok) {
  throw new Error(`讀取 RSS 失敗:HTTP ${response.status}`);
}
const feed = await response.text();

const posts = [...feed.matchAll(/<item>([\s\S]*?)<\/item>/g)]
  .slice(0, MAX_POSTS)
  .map(([, itemXml]) => ({
    title: tagText(itemXml, 'title'),
    url: tagText(itemXml, 'link'),
    description: truncate(tagText(itemXml, 'description').replace(/\s+/g, ' '), DESCRIPTION_MAX_LENGTH),
    date: formatDate(tagText(itemXml, 'pubDate')),
    cover: coverUrl(itemXml),
  }));

if (posts.length === 0) {
  throw new Error('RSS 中沒有任何文章');
}

const rows = posts.map((post) => {
  const url = escapeHtml(post.url);
  const coverCell = post.cover
    ? `<a href="${url}"><img src="${escapeHtml(post.cover)}" width="${COVER_WIDTH}" alt="${escapeHtml(post.title)}"></a>`
    : '';
  return [
    '<tr>',
    `<td width="${COVER_WIDTH}">${coverCell}</td>`,
    `<td><a href="${url}"><b>${escapeHtml(post.title)}</b></a><br>${escapeHtml(post.description)}<br><sub>${post.date}</sub></td>`,
    '</tr>',
  ].join('\n');
});
const list = ['<table>', ...rows, '</table>'].join('\n');

const readme = await readFile(README_PATH, 'utf8');
const start = readme.indexOf(START_MARKER);
const end = readme.indexOf(END_MARKER);
if (start === -1 || end === -1 || end < start) {
  throw new Error(`README 中找不到 ${START_MARKER} / ${END_MARKER} 標記`);
}

const updated = `${readme.slice(0, start + START_MARKER.length)}\n${list}\n${readme.slice(end)}`;
if (updated === readme) {
  console.log('文章列表沒有變化');
} else {
  await writeFile(README_PATH, updated);
  console.log(`已更新 ${posts.length} 篇文章`);
}
