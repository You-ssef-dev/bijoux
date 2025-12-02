const fs = require('fs');
const path = require('path');

const imagesBase = path.join(__dirname, 'public/images');

// Scan all images and categorize by size and format
function scanAllImages(dir, prefix = '') {
    if (!fs.existsSync(dir)) return [];

    const results = [];
    const items = fs.readdirSync(dir);

    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            const subResults = scanAllImages(fullPath, prefix ? `${prefix}/${item}` : item);
            results.push(...subResults);
        } else {
            const ext = path.extname(item).toLowerCase();
            if (['.jpg', '.jpeg', '.png', '.webp', '.avif'].includes(ext)) {
                results.push({
                    path: fullPath,
                    relativePath: `/images/${prefix ? prefix + '/' : ''}${item}`,
                    name: item,
                    size: stat.size,
                    ext: ext,
                    category: prefix
                });
            }
        }
    });

    return results;
}

const allImages = scanAllImages(imagesBase);

// Group by category
const byCategory = {};
allImages.forEach(img => {
    const cat = img.category || 'root';
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push(img);
});

console.log('Images by category:\n');
Object.keys(byCategory).sort().forEach(cat => {
    console.log(`\n${cat}:`);
    const images = byCategory[cat].sort((a, b) => b.size - a.size);
    images.forEach(img => {
        const sizeKB = (img.size / 1024).toFixed(1);
        console.log(`  ${img.name.padEnd(50)} ${sizeKB.padStart(8)} KB`);
    });
});

// Identify very small images (likely low quality)
console.log('\n\n=== POTENTIALLY LOW QUALITY (< 20KB) ===');
const lowQuality = allImages.filter(img => img.size < 20000).sort((a, b) => a.size - b.size);
lowQuality.forEach(img => {
    const sizeKB = (img.size / 1024).toFixed(1);
    console.log(`${img.relativePath.padEnd(70)} ${sizeKB.padStart(8)} KB`);
});

console.log(`\n\nTotal images: ${allImages.length}`);
console.log(`Potentially low quality: ${lowQuality.length}`);
