import fs from 'fs';
import { products } from './src/data/products.js';

const exclusionList = [
    'silver-cuff.jpg',
    'classic-pearl-studs.jpg',
    'statement-gold-dangles.jpg',
    'gold-necklace.jpg',
    'royal-sapphire-pendant.jpg',
    'diamond-ring.jpg',
    'hero-silver-cuff.png', // Hero images often used in banners, might want to exclude if they match "reference" quality or specific request to exclude Home/About. User said "Home Page (banners, hero images)".
    'hero-gold-necklace.png',
    'hero-necklace-2.png',
    'hero-earrings-2.png',
    'hero-bracelet-2.png',
    'hero-ring.png',
    'hero-necklace.png',
    'hero-earrings.png',
    'hero-bracelet.png'
];

// User also said "Exclude... The Home Page (banners, hero images)".
// The filenames starting with 'hero-' seem to be these.
// Let's filter those out too.

const targets = products.filter(p => {
    const filename = p.image.split('/').pop();
    if (exclusionList.includes(filename)) return false;
    if (filename.startsWith('hero-')) return false; // Heuristic for hero images
    return true;
}).map(p => ({
    name: p.name.en,
    material: p.material.en,
    imagePath: p.image
}));

console.log(JSON.stringify(targets, null, 2));
