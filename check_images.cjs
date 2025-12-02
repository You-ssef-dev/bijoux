const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, 'src/data/products.js');
const publicDir = path.join(__dirname, 'public');

// Read products.js
const content = fs.readFileSync(productsFile, 'utf8');

// Extract image paths using regex
// Looking for "image": "..."
const imageRegex = /"image":\s*"([^"]+)"/g;
let match;
const referencedImages = [];

while ((match = imageRegex.exec(content)) !== null) {
    referencedImages.push(match[1]);
}

console.log(`Found ${referencedImages.length} image references in products.js`);

// Scan public directory recursively
function getFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            getFiles(filePath, fileList);
        } else {
            // Store relative path from public
            fileList.push(path.relative(publicDir, filePath));
        }
    });
    return fileList;
}

const actualFiles = getFiles(publicDir);
// Normalize paths for comparison (remove leading slash if present in reference)
const normalizedActualFiles = actualFiles.map(f => '/' + f.replace(/\\/g, '/')); // Ensure forward slashes and leading slash

const missingImages = [];
const correctImages = [];

referencedImages.forEach(ref => {
    // ref usually starts with /images/...
    if (normalizedActualFiles.includes(ref)) {
        correctImages.push(ref);
    } else {
        missingImages.push(ref);
    }
});

console.log(`\n--- Analysis ---`);
console.log(`Correctly linked images: ${correctImages.length}`);
console.log(`Missing/Broken images: ${missingImages.length}`);

if (missingImages.length > 0) {
    console.log(`\nList of missing images:`);
    missingImages.forEach(img => console.log(img));
}

// Check for duplicates (same filename in different directories)
const filenameMap = {};
normalizedActualFiles.forEach(f => {
    const name = path.basename(f);
    if (!filenameMap[name]) {
        filenameMap[name] = [];
    }
    filenameMap[name].push(f);
});

console.log(`\n--- Duplicate Check ---`);
let duplicatesFound = false;
for (const [name, paths] of Object.entries(filenameMap)) {
    if (paths.length > 1) {
        console.log(`Duplicate filename '${name}' found at:`);
        paths.forEach(p => console.log(`  - ${p}`));
        duplicatesFound = true;
    }
}
if (!duplicatesFound) {
    console.log("No duplicate filenames found.");
}

// Check for potential matches for missing images (e.g. moved files)
if (missingImages.length > 0) {
    console.log(`\n--- Potential Fixes ---`);
    missingImages.forEach(missing => {
        const missingName = path.basename(missing);
        // Find files with the same name in actualFiles
        const candidates = normalizedActualFiles.filter(f => path.basename(f) === missingName);
        if (candidates.length > 0) {
            console.log(`Missing: ${missing}`);
            console.log(`  Found similar files:`);
            candidates.forEach(c => console.log(`    -> ${c}`));
        } else {
            console.log(`Missing: ${missing} (No file with same name found)`);
        }
    });
}
