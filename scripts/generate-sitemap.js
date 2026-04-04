const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://topgpacalculator.com';
const ROOT_DIR = path.join(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

function readSource(relativePath) {
  return fs.readFileSync(path.join(ROOT_DIR, relativePath), 'utf8');
}

function extractUniqueCalculatorIds() {
  const source = readSource(path.join('src', 'data', 'calculators.ts'));
  const seen = new Set();

  return [...source.matchAll(/id:\s*'([^']+)'/g)]
    .map((match) => match[1])
    .filter((id) => {
      if (seen.has(id)) return false;
      seen.add(id);
      return true;
    });
}

function extractBlogPosts() {
  const source = readSource(path.join('src', 'data', 'blog.ts'));

  return [...source.matchAll(/slug:\s*'([^']+)'[\s\S]*?publishedDate:\s*'([^']+)'/g)].map(
    (match) => ({
      slug: match[1],
      publishedDate: match[2],
    })
  );
}

function ensurePublicDir() {
  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }
}

function generateSitemap() {
  const calculators = extractUniqueCalculatorIds();
  const blogPosts = extractBlogPosts();
  const today = new Date().toISOString().split('T')[0];
  const staticPages = [
    '/',
    '/gpa-calculators',
    '/blog',
    '/about',
    '/contact',
    '/privacy-policy',
  ];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  staticPages.forEach((route) => {
    xml += '  <url>\n';
    xml += `    <loc>${DOMAIN}${route}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += '    <changefreq>weekly</changefreq>\n';
    xml += '    <priority>0.8</priority>\n';
    xml += '  </url>\n';
  });

  calculators.forEach((calculatorId) => {
    xml += '  <url>\n';
    xml += `    <loc>${DOMAIN}/gpa-calculators/${calculatorId}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += '    <priority>0.7</priority>\n';
    xml += '  </url>\n';
  });

  blogPosts.forEach((post) => {
    xml += '  <url>\n';
    xml += `    <loc>${DOMAIN}/blog/${post.slug}</loc>\n`;
    xml += `    <lastmod>${post.publishedDate}</lastmod>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += '    <priority>0.7</priority>\n';
    xml += '  </url>\n';
  });

  xml += '</urlset>';

  ensurePublicDir();
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), xml);
  console.log(`Generated sitemap.xml with ${staticPages.length + calculators.length + blogPosts.length} URLs`);
}

function generateRobotsTxt() {
  let robotsTxt = 'User-agent: *\n';
  robotsTxt += 'Allow: /\n';
  robotsTxt += 'Disallow: /admin\n';
  robotsTxt += 'Disallow: /api\n';
  robotsTxt += '\n';
  robotsTxt += `Sitemap: ${DOMAIN}/sitemap.xml\n`;

  ensurePublicDir();
  fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), robotsTxt);
  console.log('Generated robots.txt');
}

try {
  generateSitemap();
  generateRobotsTxt();
  console.log('\nSitemap and robots.txt generated successfully.');
} catch (error) {
  console.error('Error generating sitemap:', error);
  process.exit(1);
}
