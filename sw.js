// ==========================================================================
// 🛰️ AETHERIX OFFLINE-FIRST ARCHITECTURE - LOCAL STORAGE PROXY LINK
// ==========================================================================
const STORAGE_VAULT_NAME = "aetherix-cache-v1";
const CORE_TACTICAL_ASSETS = [
    "/AETHERIX/index.html",
    "/AETHERIX/style.css",
    "/AETHERIX/app.js",
    "/AETHERIX/manifest.json",
    "/AETHERIX/data-science.png"
];

// Installs cache structures on client browser memory space
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(STORAGE_VAULT_NAME).then((cache) => {
            console.log("💾 Bundling resource layers into device disk storage...");
            return cache.addAll(CORE_TACTICAL_ASSETS);
        })
    );
});

// Intercepts requests to pull from local sandbox storage if network is absent
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});
