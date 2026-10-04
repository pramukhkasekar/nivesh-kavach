// Builds ONE self-contained index.html (engine + styles + app inlined).
// Usage: node build.js
const fs = require('fs');
const path = require('path');
const root = __dirname;
const engine = fs.readFileSync(path.join(root, 'src', 'engine.js'), 'utf8');
const tpl = fs.readFileSync(path.join(root, 'src', 'template.html'), 'utf8');
if (engine.includes('</script')) throw new Error('engine.js must not contain a closing script tag');
const out = tpl.replace('/*__ENGINE__*/', () => engine);
fs.writeFileSync(path.join(root, 'index.html'), out);
console.log('Built index.html (' + out.length + ' bytes)');
