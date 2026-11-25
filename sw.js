/* 安裝到手機桌面用：不快取任何檔案（更新遊戲後重新打開就是新版），只在完全沒有網路時顯示提示。 */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request).catch(() => new Response(
    '<!DOCTYPE html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>台灣十六張麻將</title>' +
    '<body style="margin:0;min-height:100vh;display:grid;place-items:center;background:#17704f;color:#f6f1e2;font:18px sans-serif;text-align:center">' +
    '<div><p style="font-size:24px;font-weight:700">沒有網路</p><p>連上網路後再打開一次就可以了。</p><button onclick="location.reload()" style="font:inherit;padding:10px 20px;border-radius:12px;border:0">重新整理</button></div></body>',
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
});
