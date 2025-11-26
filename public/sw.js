// public/sw.js
const CACHE_NAME = "good-news-v1";
const OFFLINE_URLS = ["/", "/course", "/questions", "/records"];

// 설치 단계에서 기본 페이지 캐시
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(OFFLINE_URLS);
    })
  );
});

// 오래된 캐시 정리(선택)
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// 요청이 들어오면: 캐시에 있으면 캐시, 없으면 네트워크
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).catch(() => {
        // 네트워크 실패 시, 루트 페이지 정도만 fallback
        if (req.mode === "navigate") {
          return caches.match("/");
        }
      });
    })
  );
});
