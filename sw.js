// Service Worker for Сингулярность
// Стратегия: network-first — всегда пробуем свежую версию с хостинга,
// кэш используется только при недоступности сети (офлайн).
// Свежая версия, полученная с хостинга, автоматически закэшируется
// и будет отдаваться офлайн, пока не выйдет новая.
const CACHE_NAME = 'singularity-v1';

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(['./']);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.map(function(key) {
        if (key !== CACHE_NAME) return caches.delete(key);
      }));
    }).then(function() {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function(e) {
  if (e.request.method !== 'GET') return;
  // обрабатываем только запросы со своего origin (страницу и свои файлы)
  if (new URL(e.request.url).origin !== self.location.origin) return;

  e.respondWith(
    // cache: 'no-cache' — браузер сначала проверит у хостинга,
    // изменился ли файл (по ETag/Last-Modified): если нет, получит лёгкий 304,
    // если да — скачает свежую версию и она уйдёт в кэш
    fetch(e.request, { cache: 'no-cache' }).then(function(response) {
      if (response && response.status === 200) {
        var clone = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(e.request, clone);
        });
      }
      return response;
    }).catch(function() {
      // сеть недоступна — отдаём кэшированную копию
      return caches.match(e.request).then(function(cached) {
        return cached || Response.error();
      });
    })
  );
});
