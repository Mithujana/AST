const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Ensure output directory exists
const outDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Crisp commercial airliner silhouette
// Nose pointing UP (0 degrees)
const airplaneSvg = (x, y, angleDeg, scale = 1, fill = '#0284c7') => `
  <g transform="translate(${x},${y}) rotate(${angleDeg}) scale(${scale})">
    <path d="M0,-16 C1.5,-16 2.5,-11 2.5,-2 L14,5 C15.5,5.5 15,7 13.5,7 L2.5,5 L2.5,10.5 L6.5,13.5 C7,14 6.8,15 5.8,15 L0,13.5 L-5.8,15 C-6.8,15 -7,14 -6.5,13.5 L-2.5,10.5 L-2.5,5 L-13.5,7 C-15,7 -15.5,5.5 -14,5 L-2.5,-2 C-2.5,-11 -1.5,-16 0,-16 Z" 
          fill="${fill}" />
  </g>
`;

// 1. Arc flight trail (exact match to user image - gentle arching curve)
const svg1 = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 220" width="1200" height="440">
  <defs>
    <linearGradient id="trailGrad1" x1="0%" y1="100%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0" />
      <stop offset="25%" stop-color="#38bdf8" stop-opacity="0.65" />
      <stop offset="50%" stop-color="#0284c7" stop-opacity="0.9" />
      <stop offset="75%" stop-color="#38bdf8" stop-opacity="0.65" />
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0" />
    </linearGradient>
  </defs>
  <path d="M 40 190 Q 280 35 560 175" fill="none" stroke="url(#trailGrad1)" stroke-width="2.5" stroke-linecap="round" />
  ${airplaneSvg(280, 88, 72, 1.25, '#0284c7')}
</svg>
`;

// 2. Playful Loop-the-loop / Spiral flight trail
const svg2 = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 300" width="1100" height="600">
  <defs>
    <linearGradient id="trailGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.1" />
      <stop offset="45%" stop-color="#0284c7" stop-opacity="0.75" />
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.95" />
    </linearGradient>
  </defs>
  <path d="M 30 250 C 170 250, 220 90, 290 90 C 360 90, 370 230, 270 220 C 190 210, 260 50, 480 40" 
        fill="none" stroke="url(#trailGrad2)" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="7 5" />
  ${airplaneSvg(480, 40, 85, 1.3, '#0284c7')}
</svg>
`;

// 3. Ascending flight path with destination Map Pin
const svg3 = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 250" width="1100" height="500">
  <defs>
    <linearGradient id="trailGrad3" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.95" />
    </linearGradient>
  </defs>
  <!-- Map Pin origin -->
  <g transform="translate(60, 200)">
    <circle cx="0" cy="0" r="4.5" fill="#0284c7" />
    <circle cx="0" cy="0" r="9" fill="none" stroke="#38bdf8" stroke-width="1.8" opacity="0.6" />
    <circle cx="0" cy="0" r="14" fill="none" stroke="#38bdf8" stroke-width="1" stroke-dasharray="2 2" opacity="0.4" />
  </g>
  <path d="M 60 200 C 160 200, 250 160, 340 95 C 410 45, 460 35, 510 25" 
        fill="none" stroke="url(#trailGrad3)" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="8 5" />
  ${airplaneSvg(510, 25, 78, 1.3, '#0284c7')}
</svg>
`;

// 4. Smooth undulating S-Curve wave trail
const svg4 = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 220" width="1100" height="440">
  <defs>
    <linearGradient id="trailGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.1" />
      <stop offset="50%" stop-color="#0284c7" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.1" />
    </linearGradient>
  </defs>
  <path d="M 30 60 C 150 20, 190 190, 320 180 C 400 170, 440 100, 510 70" 
        fill="none" stroke="url(#trailGrad4)" stroke-width="2.5" stroke-linecap="round" />
  ${airplaneSvg(260, 150, 125, 1.2, '#0284c7')}
</svg>
`;

// 5. Diagonal soaring flight with soft cloud trail
const svg5 = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 280" width="1000" height="560">
  <defs>
    <linearGradient id="trailGrad5" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0" />
      <stop offset="35%" stop-color="#38bdf8" stop-opacity="0.5" />
      <stop offset="70%" stop-color="#0284c7" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#0284c7" stop-opacity="1" />
    </linearGradient>
  </defs>
  <path d="M 40 240 C 140 240, 230 200, 310 130 C 370 75, 410 40, 460 20" 
        fill="none" stroke="url(#trailGrad5)" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="6 4" />
  ${airplaneSvg(460, 20, 55, 1.3, '#0284c7')}
</svg>
`;

async function generateAll() {
  const items = [
    { svg: svg1, name: 'plane-trail-1' },
    { svg: svg2, name: 'plane-trail-2' },
    { svg: svg3, name: 'plane-trail-3' },
    { svg: svg4, name: 'plane-trail-4' },
    { svg: svg5, name: 'plane-trail-5' },
  ];

  for (const item of items) {
    // Save PNG (transparent)
    await sharp(Buffer.from(item.svg))
      .png()
      .toFile(path.join(outDir, `${item.name}.png`));

    // Also save SVG for maximum crispness / responsiveness
    fs.writeFileSync(path.join(outDir, `${item.name}.svg`), item.svg.trim());
    console.log(`Generated ${item.name}.png and .svg`);
  }
}

generateAll().catch(console.error);
