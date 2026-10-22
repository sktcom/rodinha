self.addEventListener('install',function(e){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(clients.claim())});
self.addEventListener('fetch',function(e){var r=e.request;if(r.method!=='GET'||r.url.indexOf(self.location.origin)!==0)return;
e.respondWith(fetch(r).then(function(res){var c=res.clone();caches.open('rodinha-v1').then(function(ch){ch.put(r,c)});return res}).catch(function(){return caches.match(r)}))});
