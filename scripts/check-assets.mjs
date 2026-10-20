// Fails the build when code points at a file that is not in public/ (a typo'd image ships as a blank box otherwise).
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const files = (dir) => readdirSync(dir).flatMap((name) => {
  const path = join(dir, name);
  return statSync(path).isDirectory() ? files(path) : [path];
});

const ASSET = /['"`(](\/(?:images|videos|foxy|favicon_white|favicon_black)\/[\w./-]+\.\w+)/g;
const pathsIn = (text) => [...text.matchAll(ASSET)].map((match) => match[1]);
const thumbOf = (src) => src.replace(/\/([^/]+)\.\w+$/, '/thumbs/$1.webp'); // same rule as src/data/photos.ts
const missing = new Set();
const missingThumbs = new Set();

for (const file of [...files('src'), 'index.html']) {
  const text = readFileSync(file, 'utf8');
  for (const path of pathsIn(text)) {
    if (!existsSync(join('public', path))) missing.add(`${path}  (${file})`);
  }

  // Photos and project screenshots are shown through thumbOf, so each needs a thumbnail too
  const thumbed = file.endsWith(join('data', 'photos.ts'))
    ? pathsIn(text)
    : [...text.matchAll(/screenshots:\s*\[([^\]]*)\]/g)].flatMap((match) => pathsIn(match[1]));
  for (const path of thumbed) {
    if (!existsSync(join('public', thumbOf(path)))) missingThumbs.add(path);
  }
}

if (missing.size) console.error(`Missing files in public/:\n  ${[...missing].join('\n  ')}`);
if (missingThumbs.size) {
  console.error(`Missing thumbnails (photos use 1200, screenshots 960). Make each with:\n  ${[...missingThumbs]
    .map((path) => `ffmpeg -i public${path} -vf "scale='min(${path.includes('/pics/') ? 1200 : 960},iw)':-2" -c:v libwebp -quality 80 public${thumbOf(path)}`)
    .join('\n  ')}`);
}
if (missing.size || missingThumbs.size) process.exit(1);
console.log('check-assets: all referenced files exist');
