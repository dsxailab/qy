'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "46e4c73a5dfd32b532bb590c8ad78e0f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/tutorial/commandmaskrange/1.jpg": "e5754054794ae8ed895d9aab336ba6bc",
"assets/tutorial/commandmaskrange/10.jpg": "638b721f888a7dcab69355cbf12e3900",
"assets/tutorial/commandmaskrange/11.jpg": "2ba32cefb2ec2fc079b4854e5ff92f1a",
"assets/tutorial/commandmaskrange/2.jpg": "40226cd29d84f18d66f274e817b28876",
"assets/tutorial/commandmaskrange/3.jpg": "c2017d23c582b9fb7760cf66628b4709",
"assets/tutorial/commandmaskrange/4.jpg": "ce57b260885b9d0ad6b46c0a8767285e",
"assets/tutorial/commandmaskrange/5.jpg": "9a51d653035b7f70ba4f3a9f82839358",
"assets/tutorial/commandmaskrange/6.jpg": "4a1994caf068d43ee37f42cafe0e4151",
"assets/tutorial/commandmaskrange/7.jpg": "fe82e802236a8b396d6ed9080f7a3d2f",
"assets/tutorial/commandmaskrange/8.jpg": "1b00d3c750d84184239d581233acb354",
"assets/tutorial/commandmaskrange/9.jpg": "1094a929904e59707805b5e78ea7f157",
"assets/tutorial/drawmask/1.jpg": "036a2650e1a1d4fd146a217baa94205a",
"assets/tutorial/drawmask/10.jpg": "c8f2ff9eeeec1aca1efffbba4c0f9587",
"assets/tutorial/drawmask/11.jpg": "5bb6aef7829fbf2ef0236fba112b9835",
"assets/tutorial/drawmask/12.jpg": "07451b9f564cc577e93ccc9ad36f3ade",
"assets/tutorial/drawmask/13.jpg": "7eb6c3218e9d432810e7f2883b17e93f",
"assets/tutorial/drawmask/14.jpg": "38b3108ce4f1eb81338efe7a4ef00fdd",
"assets/tutorial/drawmask/2.jpg": "5c56f91ea918da2d8a5910ed03f5e25f",
"assets/tutorial/drawmask/3.jpg": "43b4b60048a002a1213fe967f24ec0a3",
"assets/tutorial/drawmask/4.jpg": "1572a163866bf5ee825b0d3efbce8b8f",
"assets/tutorial/drawmask/5.jpg": "b3f43f88db13a72a92a6b47759cdef9f",
"assets/tutorial/drawmask/6.jpg": "beb53ed0180714e1bbf025855aa621a2",
"assets/tutorial/drawmask/7.jpg": "62badfbcd9be72784c5987f445d6de17",
"assets/tutorial/drawmask/8.jpg": "da62a5bb2066aaa5654ed36f2557f60a",
"assets/tutorial/drawmask/9.jpg": "75d55e5ddc0cf90e61d757eb35105be6",
"assets/tutorial/sendimgwithcaption/1.jpg": "c7ec5260db9ef39f93235542cb79cacd",
"assets/tutorial/sendimgwithcaption/2.jpg": "28a241e05ed5637c0daff809094070ba",
"assets/tutorial/sendimgwithcaption/3.jpg": "06fe594370097e38431f0c43bafc7064",
"assets/tutorial/sendimgwithcaption/4.jpg": "901248a3014399baf77e4f3ab41fe4ba",
"assets/tutorial/sendimgwithcaption/5.jpg": "5a3e69de122f9ce72bb9becf19a297f7",
"assets/tutorial/theend.jpg": "6c47e6b8cb4f4356fd974bf85a165400",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"CNAME": "ad4c8dffccdf8767828d7c58388cd177",
"favicon.png": "84ee6613f9fc5a78c89cadb252c19e44",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/apple-touch-icon.png": "5aec24f1f36724510cafed6c0017a60f",
"icons/favicon-16x16.png": "84ee6613f9fc5a78c89cadb252c19e44",
"icons/favicon-32x32.png": "733d5ba3adb992b46956c3b95943a761",
"icons/favicon.ico": "bad550c4e9b64e08d2e56362a78db31c",
"icons/Icon-192.png": "f455524da0a95e61604f10443e95c995",
"icons/Icon-512.png": "717b953a7b301920ef210a72958633ba",
"icons/Icon-maskable-192.png": "f455524da0a95e61604f10443e95c995",
"icons/Icon-maskable-512.png": "717b953a7b301920ef210a72958633ba",
"index.html": "1e87f66ae06ce2221c7006e8c3e12d93",
"/": "1e87f66ae06ce2221c7006e8c3e12d93",
"main.dart.js": "640aee42f8c95d943a836736e5be115d",
"manifest.json": "ac0e634aa81772bd0a4a529f5dd673fc",
"version.json": "875beda4bbda2574bb3bd3f0db8dd52b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
