/* Ajedrez Inclusivo: disponibilidad básica sin conexión, sin modificar datos de partidas. */
const CACHE = 'ajedrez-inclusivo-pwa-v9-rc1';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icono-ajedrez.svg', './stockfish-19-lite-single.js', './stockfish-19-lite-single.wasm'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)));
  // Keep the previous version in open games until all old tabs are closed.
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(names => Promise.all(names.filter(name => name.startsWith('ajedrez-inclusivo-pwa-') && name !== CACHE).map(name => caches.delete(name)))));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  if (!request.url.startsWith(self.registration.scope)) return;
  event.respondWith(caches.open(CACHE).then(async cache => {
    const cached=await cache.match(request,{ignoreSearch:true});
    if(cached)return cached;
    if(request.mode==='navigate')return (await cache.match('./index.html'))||fetch(request);
    return fetch(request);
  }));
});
