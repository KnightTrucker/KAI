const CACHE='torasuite-v0.3-fullscreen-exec';
const ASSETS=[
  './','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png',
  './assets/suite/home-a51.png','./assets/suite/title-premium-tora-suite.png','./assets/suite/icon-master-ts.png',
  './assets/suite/stemma-originale.png','./assets/suite/powered-by-andrea-zollet-source.jpg'
];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  const url=new URL(e.request.url);
  if(url.origin!==self.location.origin) return;
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request,{cache:'no-store'}).catch(()=>caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{if(resp&&resp.ok){const copy=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{});} return resp;})));
});
