const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const brainDir = 'C:\\Users\\ThenushanSritharan\\.gemini\\antigravity-ide\\brain\\b2c18444-cf23-4bd0-9b0f-395d5499fbd3';
const outDir = path.join(__dirname, '..', 'public', 'images');

async function processImage(inputFilename, outputFilename) {
  const inputPath = path.join(brainDir, inputFilename);
  const outputPath = path.join(outDir, outputFilename);

  if (!fs.existsSync(inputPath)) {
    console.error('File does not exist:', inputPath);
    return;
  }

  const image = sharp(inputPath);
  const metadata = await image.metadata();

  // Convert to raw buffer with RGBA
  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const threshold = 248; // White threshold
  const fadeRange = 15;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const brightness = Math.min(r, g, b);

    if (brightness >= threshold) {
      data[i + 3] = 0; // Transparent
    } else if (brightness > threshold - fadeRange) {
      // Smooth alpha transition
      const factor = (threshold - brightness) / fadeRange;
      data[i + 3] = Math.round(data[i + 3] * factor);
    }
  }

  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .png({ quality: 90, compressionLevel: 8 })
    .toFile(outputPath);

  console.log(`Saved transparent PNG: ${outputPath}`);
}

async function run() {
  await processImage('travel_luggage_3d_1790228526653.jpg', 'travel-suitcase.png');
  await processImage('travel_passport_3d_1790228558382.jpg', 'travel-passport.png');
  await processImage('travel_compass_3d_1790228601313.jpg', 'travel-compass.png');
}

run().catch(console.error);
