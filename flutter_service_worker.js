'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "cd24fdd65474c1be0866800c7f4029bb",
".git/config": "896e7bf6a34ddff37ad65f1b8c93cd67",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "058b2c571e020cc0d05e8d90e963125b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9b188b5903d0326b48a4de164cb88c7f",
".git/logs/refs/heads/master": "9b188b5903d0326b48a4de164cb88c7f",
".git/logs/refs/remotes/origin/master": "d8af9c1a7dc7de174b5d3f93db7097a3",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/09/19aa7e4fb116120b16f7fa80b8f1a6cd0fff27": "d5c531e5723234a3974128506881ee56",
".git/objects/0a/4d61b367116c90e18ed9cd20f06fb5d0934633": "59ef9c47e45c571a0b8eb973192fa422",
".git/objects/12/508b5ead4878c38058e2213ead13ed86598634": "f5943e39d032bb52375e22ae9cdfaea2",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/13/957eaede4654c13fa6833c3520799e5071224a": "53998b07b7e0a3e9eda0dcaeaff229ad",
".git/objects/2b/1753d28ad4d516bb26dfca29f8ed7772fb8d4a": "10b92ee52a86bd63d17dc2bbaeaf5830",
".git/objects/2e/4edaadd3ccd60d67d230707bb033d52d5f26fa": "7778e7e1d1aac6ad5b77d4b4adec0629",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3d/8a5f9e9b2ad236d9f1fbdaf26f238c2eb28b3b": "f689e86d69b81c989400433db2f6c7c6",
".git/objects/40/1fe0b5b03eb0788b99fe4344d7af55af3be54e": "8fb6fc2a7b6e5cde0d93bd6cd683f94a",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/50/b7cf35555d64cdae1c5cb762707385c5ca37e1": "12685ef9b3511f8e7d82a8ce7077c027",
".git/objects/53/d93cfb5a5d6e21037e2a750ce8a2eac44dd30f": "1e9922a38330a418aa6af56e5d3f8f2c",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6c/e03489f98c90148e46bb6552d57179a69c9672": "54787d65af04a16f47188f263e42d63b",
".git/objects/6f/0fa82f5d6cc1bbb5278a9406855e40c9e54e4a": "ee544e9cc06a2b42cd2cbc54e2e0d7b4",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/79/15411bb535eccfe13d6d2596fc379689403853": "862e090ae91674fc9a8d966ace9e376b",
".git/objects/79/79d96bd7b899b7da90ae721e5db17bd663e74d": "c200292e0543eca3f41d9c8274439bec",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/87/89f84e3810aa810a48f3676b814e8ac0b75019": "201bfd8838e840fa569b26d0a4ec1435",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/3469fa138b5aa0724b88c46f480a46d232c1f7": "8f299e8674fa20fc920f5f0baa50bd22",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/65846cf59f642dfc8da5b3b8c203a6c2b8a5aa": "21a6f8f5cef37de14d9ee9ea04c2e886",
".git/objects/96/75c5c1dffed1e0720ca8f491aa92d91059dd84": "726f3333bb8c060b2d11ae8d9972044c",
".git/objects/96/9981ac6c94bd8f3c35001d49e01f4c10d4b101": "a06ac2f1d1821f555543b01386a76c40",
".git/objects/96/db08608e6f2df5f4345a6eb301af7b1475fffd": "116f6e5a18b990927b8a84691dff3dc4",
".git/objects/9f/41cc7285fe3f416c82354b989e6cfb293cdd93": "b31284f469550e06b91bde3ea43ed13e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/18bd89be7fe9716a503b979ee99eb59c2e49cb": "f68c64fcc026a62ecfe8bee60ae9a24a",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/5ea27daabf0be97ad1ae0da819e2bf6e45a6ce": "124ad1fd2f8148106b274c6a5989afcb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/a9965aae6bec1e37da42027aa7e530420a3192": "ab741632abcfc14bc40e0f8a8a08a917",
".git/objects/c2/c2d1e92053d0ac052a0c847a6f35a31e75760a": "1f7524457bfba78b522b6859806c0674",
".git/objects/c5/7410d4baaeb2fc3e5011074350edf3f10d6538": "4d7beb8bf6a96ed45f3d1a695f73dafc",
".git/objects/c6/26356aec8830fe90a42dd4b0e815ff76759845": "57a30487213142f0dae045221ded4449",
".git/objects/c6/40805ee0adfabb9376c13b44c1778c92a4a3ee": "6e15cfaf433653d1c690ac3b4936ddae",
".git/objects/c6/bd02c115dde45334a43205b1c362ee37e1244d": "df4cbed9a4644890f4d63e4dc2d99e1e",
".git/objects/d2/fcd9786888ecf8e2fd15bba969ba0717fe1f3e": "bdc44a5e5eaedf3b78476a17bc1e32b0",
".git/objects/d4/447ae5bb516eb5463329977bb2615489da5ade": "b391a2d44b3cc117aadd0695513386ca",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/30ce447c41c7f3434b45b2d16a05eebafef063": "5c3eca7135a53527fd6cbf19a781b6f0",
".git/objects/e2/76561f85fdf4f23bae617dfbd41536f8c769cf": "693bb7af9fcd4f12ae76f2738f50b516",
".git/objects/e4/508168618fa4243edddc471b2c7bb17e5f3c2c": "ba686a156ddd6705a450f84f506ac370",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/82c2b7828857e183087adfad454a694de75c71": "3ebb72d533288c84ff004e6a4145f870",
".git/objects/ea/0d43bc19db831d94ca94ee35c13eced5c5fdff": "afd986d9b1ae71391c5ee028449a44b9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/2d2edefeb003dc9dc9f95441dfdca29cbb504e": "4add869c16ceaff50995685d85bc6939",
".git/objects/f3/4ec9b0b24ee8f505deba664de0331cba6bd8f0": "0a2ceafb056503a0e5d575db5b2f8a04",
".git/refs/heads/master": "4da08f1edace680c8975045edee0dff1",
".git/refs/remotes/origin/master": "4da08f1edace680c8975045edee0dff1",
"assets/AssetManifest.json": "ab1a315e86e520d080c96fe618458412",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/loading.gif": "f4404720ece11355df318a0acf525cb1",
"assets/NOTICES": "103f9bdcc412cdacc3680d7a5e708681",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/web/assets/loading.gif": "f4404720ece11355df318a0acf525cb1",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d9d99fee2fb6437c09219ad3eefeab7e",
"/": "d9d99fee2fb6437c09219ad3eefeab7e",
"main.dart.js": "e263169f95afb1dc194d6dededc19894",
"manifest.json": "ac0e634aa81772bd0a4a529f5dd673fc",
"version.json": "68ecec00a7497651334db4916070c791"
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
