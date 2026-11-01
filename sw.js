var CACHE = 'testapp-v1';
var DATEIEN = [
  './',
  'index.html',
  'style.css',
  'app.js',
  'manifest.json',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/apple-touch-icon.png'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) { return cache.addAll(DATEIEN); })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; })
        .map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(function (treffer) {
      if (treffer) return treffer;
      return fetch(event.request).then(function (antwort) {
        if (antwort && antwort.ok && new URL(event.request.url).origin === self.location.origin) {
          var kopie = antwort.clone();
          caches.open(CACHE).then(function (cache) { cache.put(event.request, kopie); });
        }
        return antwort;
      }).catch(function () {
        if (event.request.mode === 'navigate') return caches.match('index.html');
      });
    })
  );
});
