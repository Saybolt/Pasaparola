const CACHE_NAME = 'kelime-cemberi-pwa-v11';
const APP_FILES = [
  './index.html',
  './pasaparola.html',
  './word-bank.js',
  './word-overrides.json',
  './word-overrides.js',
  './word-focus.js',
  './account.js',
  './WORD-DATA-LICENSE.txt',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(key => key.startsWith('kelime-cemberi-pwa-') && key !== CACHE_NAME)
      .map(key => caches.delete(key))
  )));
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(fetch(request).catch(() => Response.error()));
    return;
  }

  event.respondWith(fetch(request).then(response => {
    if (response.ok) {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
    }
    return response;
  }).catch(async () => {
    const cached = await caches.match(request);
    if (cached) return cached;
    if (request.mode === 'navigate') return caches.match('./index.html') || caches.match('./pasaparola.html');
    return Response.error();
  }));
});
