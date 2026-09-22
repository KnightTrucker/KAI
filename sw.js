const CACHE='torasuite-v0.4-image-hotfix';
const CORE=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
const OPTIONAL=[
  './assets/suite/home-a51.png',
  './assets/suite/cockpit-a51.webp',
  './assets/suite/title-premium-tora-suite.png',
  './assets/suite/icon-master-ts.png',
  './assets/suite/stemma-originale.png',
  './assets/suite/powered-by-andrea-zollet-source.jpg'
];
self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE);
    await cache.addAll(CORE);
    await Promise.allSettled(OPTIONAL.map(async url=>{
      const response=await fetch(url,{cache:'reload'});
      if(response&&response.ok) await cache.put(url,response.clone());
    }));
  })());
  self.skipWaiting();
});
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin) return;
  if(event.request.mode==='navigate'){
    event.respondWith(fetch(event.request,{cache:'no-store'}).then(async response=>{
      if(response&&response.ok){const cache=await caches.open(CACHE);cache.put('./index.html',response.clone()).catch(()=>{})}
      return response;
    }).catch(()=>caches.match('./index.html')));
    return;
  }
  if(/\.(?:png|webp|jpg|jpeg)$/i.test(url.pathname)){
    event.respondWith(fetch(event.request,{cache:'reload'}).then(async response=>{
      if(response&&response.ok){const cache=await caches.open(CACHE);cache.put(event.request,response.clone()).catch(()=>{})}
      return response;
    }).catch(()=>caches.match(event.request)));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)));
});
