/**
 * Reads repo-root icon.ico, writes electron-assets/icon.png (1024),
 * icon.icns (macOS), icon.ico (multi-size, installer-friendly for Windows).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import sharp from 'sharp';

const require = createRequire(import.meta.url);
const png2icons = require('png2icons');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const inputPath = path.join(root, 'icon.ico');
const outDir = path.join(root, 'electron-assets');

if (!fs.existsSync(inputPath)) {
	console.error('Missing icon.ico at project root.');
	process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });

const png1024 = await sharp(inputPath)
	.resize(1024, 1024, {
		fit: 'contain',
		background: { r: 0, g: 0, b: 0, alpha: 0 },
	})
	.png()
	.toBuffer();

fs.writeFileSync(path.join(outDir, 'icon.png'), png1024);

const icns = png2icons.createICNS(png1024, png2icons.BICUBIC, 0);
if (!icns) {
	console.error('png2icons.createICNS failed');
	process.exit(1);
}
fs.writeFileSync(path.join(outDir, 'icon.icns'), icns);

const ico = png2icons.createICO(png1024, png2icons.BICUBIC, 0, true, true);
if (!ico) {
	console.error('png2icons.createICO failed');
	process.exit(1);
}
fs.writeFileSync(path.join(outDir, 'icon.ico'), ico);

console.log('electron-assets: icon.png, icon.icns, icon.ico');
