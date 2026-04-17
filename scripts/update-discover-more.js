const fs = require('fs');
const path = require('path');

// Read the translations file
const translationsPath = path.join(__dirname, '../lib/translations.ts');
let content = fs.readFileSync(translationsPath, 'utf-8');

// English
content = content.replace(
  /(\s+back_to_home: "Back to Home",)/,
  `    discover_more: "DISCOVER MORE",\n$1`
);

// French
content = content.replace(
  /(\s+back_to_home: "Retour à l'Accueil",)/,
  `    discover_more: "DÉCOUVRIR PLUS",\n$1`
);

// Portuguese
content = content.replace(
  /(\s+back_to_home: "Voltar ao Início",)/,
  `    discover_more: "DESCUBRIR MAIS",\n$1`
);

// Spanish
content = content.replace(
  /(\s+back_to_home: "Volver al Inicio",)/,
  `    discover_more: "DESCUBRIR MÁS",\n$1`
);

// Zulu
content = content.replace(
  /(\s+back_to_home: "Buya Emuva",)/,
  `    discover_more: "THOLA OKUNYE",\n$1`
);

// Xhosa
content = content.replace(
  /(\s+back_to_home: "Buyela Ekhaya",)/,
  `    discover_more: "THOLA OKUNYE",\n$1`
);

// Swahili
content = content.replace(
  /(\s+back_to_home: "Kurudi Nyumbani",)/,
  `    discover_more: "JIFUNZE ZAIDI",\n$1`
);

// Lingala
content = content.replace(
  /(\s+back_to_home: "Buza na Bisika",)/,
  `    discover_more: "TALA MONGA",\n$1`
);

// Write back
fs.writeFileSync(translationsPath, content, 'utf-8');
console.log('✓ Updated discover_more translations');
