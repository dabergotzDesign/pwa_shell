/* // Cache aufbauen
let cacheName = 'pwa-shell';
let filesToCache = [
  './',
  './index.html',
  './css/app.css',
  './js/app.js'
];

self.addEventListener('install', function(pEvent) {
  console.log('[Service Worker] Installation wird gestartet');
  pEvent.waitUntil(
    caches.open(cacheName).then(function(pCache) {
      console.log('[Service Worker] Dateien werden gecacht');
      return pCache.addAll(filesToCache);
    })
  );
});

// Anfragen aus dem Cache beantworten
self.addEventListener('fetch', function(pEvent) {
  console.log('[Service Worker] Angeforderte URL', pEvent.request.url);
  pEvent.respondWith(
    caches.match(pEvent.request).then(function(pResponse) {
      if (pResponse) {
        console.log('[Service Worker] Ressource konnte aus dem Cache geladen werden', pEvent.request.url);
        return pResponse;
      } else {
        console.log('[Service Worker] Ressource wird aus dem Netzwerk geladen', pEvent.request.url);
        return fetch(pEvent.request);
      }
    })
  );
}); */