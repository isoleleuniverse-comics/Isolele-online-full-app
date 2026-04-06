#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Project Optimization...\n');

const optimizations = [
  {
    name: 'Remove unused devDependencies',
    check: () => {
      const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
      return Object.keys(pkg.devDependencies || {}).length;
    }
  },
  {
    name: 'Verify Next.js config optimizations',
    check: () => {
      const config = fs.readFileSync('next.config.js', 'utf-8');
      const hasImageFormats = config.includes('formats');
      const hasTurbopack = config.includes('turbopack');
      return hasImageFormats && hasTurbopack ? '✓' : 'needs review';
    }
  },
  {
    name: 'Check for unused console.log in production',
    check: () => {
      let found = 0;
      const walkDir = (dir) => {
        try {
          const files = fs.readdirSync(dir);
          files.forEach(file => {
            const fullPath = path.join(dir, file);
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
              walkDir(fullPath);
            } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
              const content = fs.readFileSync(fullPath, 'utf-8');
              const matches = content.match(/console\.log\(/g) || [];
              found += matches.length;
            }
          });
        } catch (e) {}
      };
      walkDir('.');
      return found;
    }
  },
  {
    name: 'Verify image optimization',
    check: () => {
      const config = JSON.parse(fs.readFileSync('next.config.js', 'utf-8').replace(/\/\/.*$/gm, '').replace(/export default|module\.exports =/, ''));
      const hasRemotePatterns = config.images?.remotePatterns?.length > 0;
      return hasRemotePatterns ? '✓ Remote patterns configured' : 'needs setup';
    }
  }
];

optimizations.forEach(opt => {
  try {
    const result = opt.check();
    console.log(`✓ ${opt.name}: ${result}`);
  } catch (err) {
    console.log(`⚠ ${opt.name}: Check failed - ${err.message}`);
  }
});

console.log('\n✓ Optimization checks completed!');
console.log('\nRecommendations:');
console.log('1. Build: npm run build');
console.log('2. Deploy: Vercel deployment');
console.log('3. Monitor: Check Vercel Analytics and Speed Insights');
