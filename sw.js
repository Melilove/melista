// Melista — service worker (funciona sin conexión)
const VERSION = "melista-v1.0.1";
const CORE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon.svg",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "./apple-touch-icon.png",
  "./favicon-32.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Páginas: primero la red (para recibir actualizaciones), si no hay conexión usa la copia guardada
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put("./index.html", copy)); return res; })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  // Archivos propios y tipografías de Google: primero la copia guardada
  if (url.origin === location.origin || url.hostname.endsWith("fonts.googleapis.com") || url.hostname.endsWith("fonts.gstatic.com")) {
    e.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(res => {
        if (res.ok || res.type === "opaque") { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
        return res;
      }))
    );
  }
});
