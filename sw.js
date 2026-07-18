// Boş bile olsa fiziksel olarak sunucuda bulunması PWA standartları için zorunludur
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Uygulamanın çevrimdışı da stabil çalışabilmesini sağlar
  e.respondWith(
    fetch(e.request).catch(() => {
      return caches.match(e.request);
    })
  );
});
