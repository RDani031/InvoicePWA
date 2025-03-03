self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('invoice-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json'
        // If you have additional assets like CSS, JS, or images, add their paths here.
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
