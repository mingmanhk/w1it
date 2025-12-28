const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '../public/images/optimized/hero-graphic.png');
const outputPath = path.join(__dirname, '../public/images/optimized/hero-graphic.webp');

sharp(inputPath)
  .webp({ quality: 85, effort: 6 })
  .toFile(outputPath)
  .then(info => {
    const inputSize = fs.statSync(inputPath).size;
    const outputSize = info.size;
    const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);
    console.log('✓ Converted successfully!');
    console.log(`  Input:  ${(inputSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`  Output: ${(outputSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`  Saved:  ${savings}% file size reduction`);
  })
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
