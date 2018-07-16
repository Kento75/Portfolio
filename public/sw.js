const CACHE_NAME = 'riot_animation_version1.0.0'
const urlsToCache = [
  "/",
  "/stylesheets/font.css",
  "/stylesheets/style.css",
  "/scripts/app.min.js",
  "https://use.fontawesome.com/releases/v5.0.10/css/all.css",
  "./images/load-view/hoge.svg",  // more ...
  "./images/motion-part/hoge.svg", // more ...
  "./images/developer-page/hoge.svg",  // more ...
  "./images/gallery-page/hoge.svg",  // more ...
  "./images/top-page/hoge.svg",  // more ...
]

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
      })
  )
})

self.addEventListener('activate', e => {})

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if(res) return res
        return fetch(e.request)
      })
  )
})
