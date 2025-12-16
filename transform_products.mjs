import fs from 'fs';
import path from 'path';

// Read the file content
const productsFilePath = path.join(process.cwd(), 'src/data/products.js');
const fileContent = fs.readFileSync(productsFilePath, 'utf-8');

// Extract the array content (hacky but works for this simple file structure)
// We assume the file starts with "export const products = [" and ends with "];"
const arrayContentMatch = fileContent.match(/export const products = (\[[\s\S]*\]);/);

if (!arrayContentMatch) {
    console.error("Could not find products array");
    process.exit(1);
}

// Evaluate the array content to get the actual array
// Note: This is safe-ish here because we know the content, but generally eval is bad.
const products = eval(arrayContentMatch[1]);

// Dictionaries
const dict = {
    categories: {
        "Necklaces": { ar: "قلائد", fr: "Colliers" },
        "Earrings": { ar: "أقراط", fr: "Boucles d'oreilles" },
        "Rings": { ar: "خواتم", fr: "Bagues" },
        "Bracelets": { ar: "أساور", fr: "Bracelets" }
    },
    materials: {
        "Gold": { ar: "ذهب", fr: "Or" },
        "Silver": { ar: "فضة", fr: "Argent" },
        "Pearl": { ar: "لؤلؤ", fr: "Perle" },
        "Diamond": { ar: "ماس", fr: "Diamant" },
        "Gemstone": { ar: "أحجار كريمة", fr: "Pierre précieuse" }
    },
    words: {
        "Modern": { ar: "عصري", fr: "Moderne" },
        "Classic": { ar: "كلاسيكي", fr: "Classique" },
        "Vintage": { ar: "عتيق", fr: "Vintage" },
        "Elegant": { ar: "أنيق", fr: "Élégant" },
        "Luxury": { ar: "فاخر", fr: "Luxe" },
        "Statement": { ar: "بارز", fr: "Statement" },
        "Timeless": { ar: "خالد", fr: "Intemporel" },
        "Minimalist": { ar: "بسيط", fr: "Minimaliste" },
        "Dainty": { ar: "رقيق", fr: "Délicat" },
        "Bold": { ar: "جريء", fr: "Audacieux" },
        "Unique": { ar: "فريد", fr: "Unique" },
        "Handcrafted": { ar: "مصنوع يدوياً", fr: "Fait main" },
        "Premium": { ar: "متميز", fr: "Premium" },
        "Exclusive": { ar: "حصري", fr: "Exclusif" },
        "Collection": { ar: "مجموعة", fr: "Collection" },
        "Design": { ar: "تصميم", fr: "Design" },
        "Style": { ar: "أسلوب", fr: "Style" },
        "Look": { ar: "مظهر", fr: "Look" },
        "Creation": { ar: "إبداع", fr: "Création" },
        "Adornment": { ar: "زينة", fr: "Parure" },
        "Jewel": { ar: "جوهرة", fr: "Bijou" },
        "Treasure": { ar: "كنز", fr: "Trésor" },
        "Accessory": { ar: "إكسسوار", fr: "Accessoire" },
        "Piece": { ar: "قطعة", fr: "Pièce" },
        "Cuff": { ar: "سوار عريض", fr: "Manchette" },
        "Pendant": { ar: "قلادة", fr: "Pendentif" },
        "Choker": { ar: "طوق", fr: "Ras de cou" },
        "Hoops": { ar: "حلقات", fr: "Créoles" },
        "Studs": { ar: "أقراط صغيرة", fr: "Clous" },
        "Dangles": { ar: "أقراط متدلية", fr: "Pendants" },
        "Band": { ar: "خاتم", fr: "Alliance" },
        "Bangle": { ar: "سوار", fr: "Jonc" },
        "Solitaire": { ar: "سوليتير", fr: "Solitaire" },
        "Eternity": { ar: "خلود", fr: "Éternité" },
        "Promise": { ar: "وعد", fr: "Promesse" },
        "Artisan": { ar: "حرفي", fr: "Artisan" },
        "Engraved": { ar: "منقوش", fr: "Gravé" },
        "Royal": { ar: "ملكي", fr: "Royal" },
        "Sapphire": { ar: "ياقوت أزرق", fr: "Saphir" },
        "Ethereal": { ar: "أثيري", fr: "Éthéré" },
        "Opulent": { ar: "فخم", fr: "Opulent" },
        "Radiant": { ar: "مشرق", fr: "Radiant" },
        "Elite": { ar: "نخبة", fr: "Élite" },
        "Signature": { ar: "توقيع", fr: "Signature" },
        "Luxe": { ar: "فاخر", fr: "Luxe" }
    }
};

function translate(text, type) {
    if (!text) return { en: "", ar: "", fr: "" };

    const en = text;
    let ar = text;
    let fr = text;

    if (type === 'category' && dict.categories[text]) {
        ar = dict.categories[text].ar;
        fr = dict.categories[text].fr;
    } else if (type === 'material' && dict.materials[text]) {
        ar = dict.materials[text].ar;
        fr = dict.materials[text].fr;
    } else {
        // Simple word replacement for names
        // This is very basic and won't be perfect grammar, but better than English
        let arWords = [];
        let frWords = [];

        text.split(' ').forEach(word => {
            // Remove numbers for lookup but keep them in result
            const cleanWord = word.replace(/[0-9]/g, '');
            const number = word.match(/[0-9]+/);

            let arWord = word;
            let frWord = word;

            // Check dictionaries
            for (const d of [dict.categories, dict.materials, dict.words]) {
                if (d[cleanWord]) {
                    arWord = d[cleanWord].ar;
                    frWord = d[cleanWord].fr;
                    break;
                }
            }

            if (number) {
                arWord = arWord.replace(cleanWord, '') + number[0];
                frWord = frWord.replace(cleanWord, '') + number[0];
            }

            arWords.push(arWord);
            frWords.push(frWord);
        });

        ar = arWords.join(' ');
        fr = frWords.join(' ');
    }

    return { en, ar, fr };
}

const newProducts = products.map(p => {
    return {
        ...p,
        name: translate(p.name, 'name'),
        description: {
            en: p.description,
            ar: p.description, // Placeholder, description translation is too complex for simple script
            fr: p.description  // Placeholder
        },
        category: translate(p.category, 'category'),
        material: translate(p.material, 'material')
    };
});

const newContent = `export const products = ${JSON.stringify(newProducts, null, 4)};`;

fs.writeFileSync(productsFilePath, newContent);
console.log("Successfully transformed products.js");
