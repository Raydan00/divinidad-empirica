self.addEventListener("install", e => {
    console.log("Service Worker instalado");
    self.skipWaiting();
});

self.addEventListener("fetch", event => {});
