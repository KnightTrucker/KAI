const CACHE='torasuite-v0.10-timecalc-real';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png',
'./assets/suite/home-points.webp','./assets/suite/flux-capacitor-real.webp',
'./assets/suite/time-calculator-panel.webp','./assets/suite/powered-by-andrea-zollet.webp'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=new URL(e.request.url);if(u.origin!==self.location.origin)return;
if(e.request.mode==='navigate'){e.respondWith(fetch(e.request,{cache:'no-store'}).catch(()=>caches.match('./index.html')));return}
e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
