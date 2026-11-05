/* Portale IIS "Remo Brindisi" – funzionamento senza rete.
   Strategia: prima la rete (così le modifiche a config.js arrivano subito), se manca si usa la copia salvata. */
var CACHE = 'portale-brindisi-v2';
var FILE = ['./', 'index.html', 'stile.css', 'app.js', 'config.js', 'offline.html', 'aiuto.html', 'privacy.html', 'manifest.webmanifest',
  'icone/logo.png', 'icone/icona-192.png', 'icone/icona-512.png', 'icone/favicon-32.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILE); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (k) {
    return Promise.all(k.filter(function (n) { return n !== CACHE; }).map(function (n) { return caches.delete(n); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== self.location.origin) return;   // le app Google non passano di qui
  e.respondWith(fetch(r).then(function (risp) {
    if (risp && risp.ok) { var copia = risp.clone(); caches.open(CACHE).then(function (c) { c.put(r, copia); }); }
    return risp;
  }).catch(function () {
    return caches.match(r).then(function (m) { return m || (r.mode === 'navigate' ? caches.match('offline.html') : undefined); });
  }));
});
