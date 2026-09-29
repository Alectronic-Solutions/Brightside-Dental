const sharp = require('sharp');
const fs = require('node:fs');
const path = require('node:path');
(async () => {
  for (const relative of ['cta-teeth-figurine.jpg', 'videos/hero-dental-poster.jpg']) {
    const source = path.join(__dirname, '../public', relative);
    const output = source.replace(/\.jpg$/, '.webp');
    await sharp(source).webp({quality: 80}).toFile(output);
    console.log(`${relative}: ${fs.statSync(source).size} -> ${fs.statSync(output).size} bytes`);
  }
})();
