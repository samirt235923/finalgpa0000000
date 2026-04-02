const path = require('path');
const fs = require('fs/promises');
const Critters = require('critters');

const NEXT_DIR = path.join(process.cwd(), '.next');
const SERVER_DIR = path.join(NEXT_DIR, 'server');

const exists = async (targetPath) => {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
};

const collectHtmlFiles = async (dir, files) => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await collectHtmlFiles(fullPath, files);
      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }
};

const inlineCriticalCss = async () => {
  if (!(await exists(SERVER_DIR))) {
    console.log('postbuild: .next/server not found, skipping critical CSS inlining.');
    return;
  }

  const htmlFiles = [];
  for (const segment of ['app', 'pages']) {
    const segmentPath = path.join(SERVER_DIR, segment);
    if (await exists(segmentPath)) {
      await collectHtmlFiles(segmentPath, htmlFiles);
    }
  }

  if (htmlFiles.length === 0) {
    console.log('postbuild: no prerendered HTML files found to inline.');
    return;
  }

  const critters = new Critters({
    path: NEXT_DIR,
    publicPath: '/_next/',
    preload: 'swap',
    fonts: true,
    minimumExternalSize: 50000,
    pruneSource: true,
    reduceInlineStyles: false,
    logLevel: 'silent',
    noscriptFallback: true,
  });

  for (const htmlPath of htmlFiles) {
    const html = await fs.readFile(htmlPath, 'utf8');
    const inlined = await critters.process(html);
    await fs.writeFile(htmlPath, inlined, 'utf8');
  }

  console.log(`postbuild: inlined critical CSS for ${htmlFiles.length} HTML files.`);
};

inlineCriticalCss().catch((error) => {
  console.error('postbuild: failed to inline critical CSS.');
  console.error(error);
  process.exitCode = 1;
});
