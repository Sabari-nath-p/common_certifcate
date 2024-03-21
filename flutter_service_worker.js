'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "892419127283102a8c2faeb69776d3d0",
"index.html": "11805084dd04885931780c67100fda08",
"/": "11805084dd04885931780c67100fda08",
"main.dart.js": "1a7f1a96a0489035341fbca1d085747e",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"README.md": "aff8e17c457b627b1e84ef913e4f7ed9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "36e718ccfcb50999e423ec344b8922b9",
".git/config": "c1ade0c0e43867f6e92e65f1f14a784f",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/93/c30a6ee02414477998a50ee535755ca33de16a": "580991678ab5d4aca3909a703778bd69",
".git/objects/93/0c09d7330833d605c2eb30188cfbd00bb452d9": "157ffc3cefe302401716eddeb0846cb1",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/b5/5d7fdaf5142b81e392fbcd4951752342039782": "7a45bac1e7adaebf176d9a6d64d4d278",
".git/objects/b2/f797fa6f41d890082f3171a9a282f16c0acc3d": "7389ee8cad1974ee7ddbe1a3b76771a5",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d1/3ca48637b374351b30a644fd3699ece5363935": "85a3814071435c52990a22dc96dae588",
".git/objects/d6/45510e974b5dbbecd6cc7d900b77d3dd9f0ced": "95705cbfc3c900c40f077bbca6c09ad6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/4c6fac16d26da51653a4b32b6f7e693f24a42b": "bcfe94d82deafd56a4c64d2677ae2204",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/1f/b194bd03b93dbf44f8bdfe1eeea3f6bdf2e066": "2cc4b7fa012fe9395301998286a807eb",
".git/objects/73/d2bf483ba0a822ee5af80cefd688bab53e7cc1": "9075dceeaed45beebbf30a3ebdf61710",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/3b60f2f0b4a04ae9ddbad7d9ddb4901d8f33d7": "3f098594ccf99c6ab477d32f2dac085f",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/5c/ebca849024c52b3ef15cba396b86e6439e5e51": "1522731e3282598c5ee388cd8385477d",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/62/4122d94cb20a1ee3a68f222af5dfab6068c8c3": "4490747b6f84d3f5ec9c5ee979c90116",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/6c/a5ee04e13c06ae54d9770bc21bdcb4efdf8f9f": "3dea0a06a451c082885b91969b718623",
".git/objects/52/17132ba5da3ae50c31b6363313e834921c0d48": "9c1298b0cab4ec00bb7af52aebd4f4ab",
".git/objects/55/9d5f2b0e39c65d5c6994fe3fef4e9596d998e5": "263a19f1a0c242478693da7f874001f5",
".git/objects/90/5ce5dad6ed89b40495f4bd8f7d18922352d1a1": "97c068c0e01bb691123610467af2df04",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/fd959afd289b60e8c9724e37affcc8714ddb44": "a0a082852086f78fe808274b32092d30",
".git/objects/a0/b3da4ddadbe09ec0e42279b8b4ce64457af2ad": "d2319c779149ae69f68cb0d8ce7caf19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a6/68733e11e2d5f9876e832cf485ec6d43131ca8": "9c1942487802cc6808475f2618ab2e8c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e0/f00406081500cb800b64e380b6e43ad469f537": "601048882e90a3d93938200f0c27a429",
".git/objects/46/effd7eeb3b0e8bfe2d95c0f02a1fccb40bb34a": "bfc22681b6d73e56bba396057d956cdb",
".git/objects/2d/2acaf2976a1c19abf7a52fb5439f5c87e35f0f": "825778bdeba48ebe29548ad304042e6a",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/23/6b292fc95c9ce87c868e493c1a85d926a18e63": "a3b0ff81af6d646e2668b80307d34dfc",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/4f/403c6524e313bb476dd789b631b0715b5f0168": "c23e10fe56624571c8a635853aa75fbe",
".git/objects/1d/30160f01cfed85f76d3bad2dcc308a125485fc": "6584d77f89c14bc53ab38521a9cab149",
".git/objects/2e/ef450816571fe55c9697b23efe4b012d6f40de": "4dd8c40c87da91fc654f48fe506f57aa",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2b/0b4f546e352fd8822b6541578f27ed94ff01ce": "ade8d1dbbcb086fe756bc066aa9d3df5",
".git/objects/13/6049913ef0b8c6863d3d9a6837be35ca4103fa": "e8ada62a85004076372e29656e926cbe",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7fb3e41c82e7ed41470b657cc6f62ec2",
".git/logs/refs/heads/main": "efaf1c4a076f80122df984975858ab40",
".git/logs/refs/remotes/origin/main": "c9014e34e8702ba90a498b0f7fd82ec8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "94a25ec277f602577cdcabeba0c8341e",
".git/refs/remotes/origin/main": "94a25ec277f602577cdcabeba0c8341e",
".git/index": "68876a67862d136ffee38ce9cdf35b1b",
".git/COMMIT_EDITMSG": "794a806ea14d95966600d2fbb01c646f",
"assets/AssetManifest.json": "3772c0d8bb8787d9faa8af4a93adf996",
"assets/NOTICES": "6558b4883f055eb54c8552edb4d94543",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "679c84087708c45db0126a4f9c205016",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "dd110dd9f4dc672fd1d1f29d781d8627",
"assets/fonts/MaterialIcons-Regular.otf": "182d1a0a7b5de821f2b0d3bfd7a9d93c",
"assets/assets/download.png": "775724489d6d0c3511b261eea91877d8",
"assets/assets/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/background.png": "20bfb168863f2337d5bb7d58370b94c5",
"assets/assets/nithin.png": "c677886a98586e4e1c6d917ea3b8bc65",
"assets/assets/line.png": "f3dbc5d1c06f76c2ade921b41e14370c",
"assets/assets/StyleScript-Regular.ttf": "0a26c77fd3a6859651e4b4dbf62cd130",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
