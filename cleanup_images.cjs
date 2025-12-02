const fs = require('fs');
const path = require('path');

const imagesBase = path.join(__dirname, 'public/images');
const productsPath = path.join(__dirname, 'src/data/products.js');

// Images to remove (low quality < 20KB)
const lowQualityImages = [
    '/images/earrings/silver/silver-earrings-7.jpg',
    '/images/earrings/silver/silver-earrings-8.webp',
    '/images/necklaces/silver/silver-necklaces-6.jpg',
    '/images/bracelets/silver/silver-bracelets-7.webp',
    '/images/necklaces/gold/gold-necklaces-1.webp'
];

console.log('Removing low-quality images...\n');

// Remove the files
lowQualityImages.forEach(imgPath => {
    const fullPath = path.join(__dirname, 'public', imgPath.replace('/images/', 'images/'));
    if (fs.existsSync(fullPath)) {
        fs.unlinkSync(fullPath);
        console.log(`✓ Removed: ${imgPath}`);
    } else {
        console.log(`✗ Not found: ${imgPath}`);
    }
});

console.log('\nUpdating product data...\n');

// Read products.js
let content = fs.readFileSync(productsPath, 'utf8');
const match = content.match(/export const products = (\[[\s\S]*?\]);/);
if (!match) {
    console.error('Could not find products array');
    process.exit(1);
}

let products = eval(match[1]);

// Build fresh image pools (excluding removed images)
function scanImages(dir, prefix = '') {
    if (!fs.existsSync(dir)) return [];

    const results = [];
    const items = fs.readdirSync(dir);

    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            const subResults = scanImages(fullPath, prefix ? `${prefix}/${item}` : item);
            results.push(...subResults);
        } else {
            const ext = path.extname(item).toLowerCase();
            if (['.jpg', '.jpeg', '.png', '.webp', '.avif'].includes(ext)) {
                const relativePath = `/images/${prefix ? prefix + '/' : ''}${item}`;
                results.push(relativePath);
            }
        }
    });

    return results;
}

const allImages = scanImages(imagesBase);

const imagePool = {
    'gold-rings': allImages.filter(p => p.toLowerCase().includes('rings') && p.toLowerCase().includes('gold')),
    'silver-rings': allImages.filter(p => p.toLowerCase().includes('rings') && p.toLowerCase().includes('silver')),
    'gold-necklaces': allImages.filter(p => p.toLowerCase().includes('necklaces') && p.toLowerCase().includes('gold')),
    'silver-necklaces': allImages.filter(p => p.toLowerCase().includes('necklaces') && p.toLowerCase().includes('silver')),
    'gold-earrings': allImages.filter(p => p.toLowerCase().includes('earrings') && p.toLowerCase().includes('gold')),
    'silver-earrings': allImages.filter(p => p.toLowerCase().includes('earrings') && p.toLowerCase().includes('silver')),
    'gold-bracelets': allImages.filter(p => p.toLowerCase().includes('bracelets') && p.toLowerCase().includes('gold')),
    'silver-bracelets': allImages.filter(p => p.toLowerCase().includes('bracelets') && p.toLowerCase().includes('silver'))
};

console.log('Available images after cleanup:');
Object.keys(imagePool).forEach(key => {
    console.log(`  ${key}: ${imagePool[key].length} images`);
});

// Track used images
const usedImages = new Set();

// Reassign images to products
products = products.map(p => {
    let key = null;

    if (p.category === 'Rings' && p.material === 'Gold') key = 'gold-rings';
    else if (p.category === 'Rings' && p.material === 'Silver') key = 'silver-rings';
    else if (p.category === 'Necklaces' && p.material === 'Gold') key = 'gold-necklaces';
    else if (p.category === 'Necklaces' && p.material === 'Silver') key = 'silver-necklaces';
    else if (p.category === 'Earrings' && p.material === 'Gold') key = 'gold-earrings';
    else if (p.category === 'Earrings' && p.material === 'Silver') key = 'silver-earrings';
    else if (p.category === 'Bracelets' && p.material === 'Gold') key = 'gold-bracelets';
    else if (p.category === 'Bracelets' && p.material === 'Silver') key = 'silver-bracelets';

    if (key && imagePool[key] && imagePool[key].length > 0) {
        // Find an unused image
        let selectedImage = null;
        for (let img of imagePool[key]) {
            if (!usedImages.has(img)) {
                selectedImage = img;
                usedImages.add(img);
                break;
            }
        }

        // If all images are used, reuse from the pool
        if (!selectedImage) {
            selectedImage = imagePool[key][Math.floor(Math.random() * imagePool[key].length)];
        }

        p.image = selectedImage;
    }

    return p;
});

// Write back to products.js
const newContent = `export const products = ${JSON.stringify(products, null, 4)};\n`;
fs.writeFileSync(productsPath, newContent);

console.log('\n✓ Products updated');
console.log(`Total products: ${products.length}`);
console.log(`Unique images used: ${usedImages.size}`);
console.log(`Total available images: ${allImages.length}`);
