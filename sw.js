// CrumbCraft Lightweight Service Worker for Offline Kitchen Use
const CACHE_NAME = 'crumbcraft-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/ddt-calculator.html',
  '/starter-feeding-schedule.html',
  '/fermentation-calculator.html',
  '/flour-protein-calculator.html',
  '/yeast-converter.html',
  '/loaf-pan-calculator.html',
  '/seo-dashboard.html',
  '/assets/css/style.css',
  '/assets/js/calculators.js',
  '/assets/js/app.js',
  '/assets/img/favicon.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).then(response => {
        return response;
      });
    }).catch(() => caches.match('/index.html'))
  );
});
