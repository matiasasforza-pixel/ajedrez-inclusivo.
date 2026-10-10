/* Ajedrez Inclusivo: disponibilidad básica sin conexión, sin modificar datos de partidas. */
const CACHE = 'ajedrez-inclusivo-pwa-v1';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icono-ajedrez.svg'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(names => Promise.all(names.filter(name => name.startsWith('ajedrez-inclusivo-pwa-') && name !== CACHE).map(name => caches.delete(name)))));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).then(response => {
      if (response.ok) {const copy=response.clone(); caches.open(CACHE).then(cache=>cache.put('./index.html',copy));}
      return response;
    }).catch(() => caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
    if (response.ok) {const copy=response.clone(); caches.open(CACHE).then(cache=>cache.put(request,copy));}
    return response;
  })));
});
