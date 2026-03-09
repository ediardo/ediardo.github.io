#!/usr/bin/env node
/**
 * Updates gallery photos.json files from assets.
 *
 * Convention:
 *   assets:  assets/photos/<category>/XXX.JPG
 *   content: content/photos/<category>/   (section that uses the gallery)
 *   static:  static/<category>/photos.json
 *
 * For each directory under assets/photos/ (e.g. amphibians-and-reptiles or
 * p/lokahi-occ-canoe-blessing-2026), lists image files, sorts them, and
 * writes static/<category>/photos.json with basePath and photos array.
 *
 * Usage: node scripts/update-photos-json.js [--dry-run]
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const ASSETS_PHOTOS = path.join(ROOT, 'assets', 'photos');
const STATIC = path.join(ROOT, 'static');

const IMAGE_EXT = /\.(jpe?g|png|gif|webp)$/i;

function isImage(name) {
  return IMAGE_EXT.test(name) && !name.startsWith('.');
}

function getCategories(dir, prefix = '') {
  const categories = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    const rel = prefix ? `${prefix}/${e.name}` : e.name;
    const full = path.join(dir, e.name);
    const names = fs.readdirSync(full);
    const hasImages = names.some((f) => isImage(f));
    const hasSubdirs = names.some((f) => {
      const p = path.join(full, f);
      return fs.statSync(p).isDirectory();
    });
    if (hasImages) categories.push(rel);
    if (hasSubdirs) categories.push(...getCategories(full, rel));
  }
  return categories;
}

function listImages(categoryDir) {
  const names = fs.readdirSync(categoryDir).filter(isImage);
  return names.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
}

function main() {
  const dryRun = process.argv.includes('--dry-run');
  if (!fs.existsSync(ASSETS_PHOTOS)) {
    console.error('assets/photos not found');
    process.exit(1);
  }

  const categories = getCategories(ASSETS_PHOTOS);
  if (categories.length === 0) {
    console.log('No image directories found under assets/photos');
    return;
  }

  for (const category of categories) {
    const assetsDir = path.join(ASSETS_PHOTOS, category);
    const photos = listImages(assetsDir);
    if (photos.length === 0) continue;

    const basePath = '/' + category.replace(/\\/g, '/') + '/';
    const json = {
      basePath,
      photos,
    };

    const staticDir = path.join(STATIC, category);
    const jsonPath = path.join(staticDir, 'photos.json');
    const jsonStr = JSON.stringify(json, null, 2) + '\n';

    if (dryRun) {
      console.log('[dry-run]', jsonPath, '→', photos.length, 'photos');
      continue;
    }

    fs.mkdirSync(staticDir, { recursive: true });
    fs.writeFileSync(jsonPath, jsonStr, 'utf8');
    console.log(jsonPath, '→', photos.length, 'photos');
  }
}

main();
