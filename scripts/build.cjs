const fs=require('fs'),path=require('path');
fs.mkdirSync('public',{recursive:true});
for(const f of ['index.html','sw.js','manifest.webmanifest','icono-ajedrez.svg','icon-192.png','icon-512.png'])fs.copyFileSync(f,path.join('public',f));
const root=path.dirname(require.resolve('stockfish/package.json'));
for(const f of ['stockfish-19-lite-single.js','stockfish-19-lite-single.wasm'])fs.copyFileSync(path.join(root,'bin',f),path.join('public',f));
fs.copyFileSync(path.join(root,'Copying.txt'),'public/LICENCIA_STOCKFISH_GPL3.txt');
fs.writeFileSync('public/FUENTE_STOCKFISH.txt','Stockfish.js 19.0.0, sin modificaciones. GPL v3. Código fuente y compilación: https://github.com/nmrugg/stockfish.js/tree/v19.0.0\nPaquete exacto: https://registry.npmjs.org/stockfish/-/stockfish-19.0.0.tgz\n');
