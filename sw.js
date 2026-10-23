const CACHE_NAME = 'cohub-v1';
const ASSETS = [
  './PWA%20-%20PC%20app.html',
  './manifest.json'
];

// Cài đặt và lưu cache các file cần thiết
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Phản hồi từ cache khi offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
