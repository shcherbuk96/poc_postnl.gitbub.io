'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "e1dd4759f6f376c8d29be65d452257f3",
"index.html": "f214e370378b9613774934e7595edd8c",
"/": "f214e370378b9613774934e7595edd8c",
"main.dart.js": "b300ffe3adb9d958f53c57e6e750f229",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d42bdaf0836323ac900cccf7d8b0a067",
".git/config": "0ece4bd5b0e1b3d0c635c2db7f3d7cba",
".git/objects/61/e84a463b5230fd8d2237e3c65e6c501c6efcc7": "50477554fe7206d390e15739ae9b4ee5",
".git/objects/66/8cf9eaf8ed81fb5542db98f31b061939913779": "b68648923623901bcae7d13d5444c711",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/9c/5c6d22ae6a1452fb1c97009367590ac19ea5ca": "f567ab717fc11b9d3e5b15d31a75f445",
".git/objects/a3/e7ec71154f61d27b80163c6e1c40015afaa4bb": "be7c4fd001dacf9b5d6a4656cdbcbafe",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/572fa6ee80e83cf3aa54255d6f68bd534bac39": "b61caf461742bec280aae6d73b727974",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/bff596c9db3002c58614bbeab4252bc4dab1a5": "7124edd0fd6a4244529e94c82c3a5105",
".git/objects/bd/ef9fe54661e18a0c76a6a37937e39bdd80a376": "3050f4d89e2e442d9b4d4084cdc301fd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/4475c48fc72c667ac5b825b93a5c6e44704cac": "fb50349b8c0c9cc8349dd37fe4a36863",
".git/objects/d8/7d7cdc7ce65122ab37ed49b364b0ded458bf56": "e8352ce3134eaff539dbfc9e6d47c5fe",
".git/objects/ab/335f3726b702e7da69b064c58bac2a8ef84545": "994f033da30a1a9ce7bbc532a3ef6fdc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/02271d40f6678c4a2274ef4fed161f81cdb947": "691b938d5128391e18717a4c4525d6b8",
".git/objects/e3/597adbf4c9f8cc1620551b546196d37d7f9f5d": "27dbb1d19a97341eb575982beb0635c9",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/80/ecb2bd607dd11ac8c1cb63292997a9a8ad0828": "837947b0e39ab42e246a15fab95809ee",
".git/objects/1a/c978f304797cfab06c2da33e66ac1fc7d743ac": "5006d4372653d47f6b94a21bcb6ddbaf",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/4320fcbb61c6dbab379c9e189b837185429195": "c21f23fe3bd99492623560a62e795b70",
".git/objects/26/c646356b5515f24010828260a7996b3597a240": "4efa805d9840600fbf029784494b0d7b",
".git/objects/2f/0257f07f412f1933a006fa7cebd37721451538": "09391e5c1f9b877c92b39f93328ba27e",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/9a8ce5f5309e5dd6ad50dc8f1bbeb2408e582b": "46c4d791d9c1d570eeea5aedb423aa56",
".git/objects/6e/734f368a211ec6f98b52b24791bf7c76fa63a8": "e9b62d8714eefe6d9452b63ae18945d2",
".git/objects/53/d08038901be3384d64fa0488a9645ac30da789": "161ed22fd51eecbce94492da7ecc85be",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5e/69f56bd90efb134641633170bace2891873b99": "d767a92db1c2e82599aa3270bda2c3de",
".git/objects/99/6978c337a68e3781cff81b207a2e53ebe3ab74": "a2b9a5acca07f163a281806ca666b42e",
".git/objects/52/b8d2ee7cbfc9396a54b24aad421c44492830cf": "771b2987ec149b35699056f54d01711f",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/dd/64beec1f46af5cf4d55d8c371e04ddb87a351b": "d17df67534d41c32c297de6a8704d5f2",
".git/objects/dc/82f9ccd4e962980126a57bcad56c173d25ce4c": "ba507bbf8d2bf6bab80349b45ceeea48",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a6/cffcbd98cb8ffb990162091d82a36a290663a1": "501dadb5896fcb173740918df783fc4d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/c2035c585ea095475eaa7d8f20dfdf3979b839": "39920fe8f2e90ac7404c6e5211d61ab1",
".git/objects/cc/a1e16947affbfc8e333d093a7012a6d1548eca": "e29ee96db50a6363ad34c4e608e0865c",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f9/217c9fa598b041cb6561c3055ae1f0bc6135b3": "516ca84057e7b080ad6be1627441ac2a",
".git/objects/ff/57bef532a52552423bae4fbc1036209211f404": "508ede20a16e077412ba70cc97d393a2",
".git/objects/cb/11ccb85f80c6690e6e02fdeaba007d10e6ef3a": "2218bdcce399faa81eed481026e0fe05",
".git/objects/ce/a7d72cedf33a775152b34ddd327b38f0d20ee6": "ec271256ef2ed2b051b40f5fc3225e4c",
".git/objects/46/83b691b662d3c9e59eb2c3a0ab00ca7b7770a5": "5938e8795f4b390d591a5bc3d5f6e8df",
".git/objects/83/56a3f53b79bb4c9ef47503da42ab1990043619": "5e1f18cd488a2808db90c167fc34a755",
".git/objects/83/c525054c0baea96313fb6e5d8eb5418343b67d": "17b444d527216c9b47067138d611cebd",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/1e/e474b2e6331af02487dcce3f9ac217aee4eb28": "d06cf3f97c17eebc29ca74a0681d7693",
".git/objects/4f/354201c5b694e09da0d48ed704d08044de63e5": "7318807caf1108f1b4d889bcf94e067a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/49/31b52171e54dea356e4fbd9e250624a388edae": "366f5482f327c94285d3cbb20e1afb71",
".git/objects/2e/29a9a907fab0ebe5be3a56fd93763c9ad68b9f": "48aecd35a98ec3936cb5409770647706",
".git/objects/2e/b600fd2ff93fe2005039ae7b69fe596e79817f": "a4195547fff78074be7e25d90e57df51",
".git/objects/7a/a43fa171fe11308a84afa8063fe4f6c7ad99d8": "f4c8900eb10a41a57e6d2386db44d9ba",
".git/objects/7a/c519ec4cffbba0c5ea21ad0601502db41d941d": "632272b0748b24537edcf647a4e7d709",
".git/objects/14/99210b54007750a63effb45bade154554f841e": "18ab1c8647990b1a9888793f1095ed7a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "862b17b5bfec48cb90b838aae2530f2e",
".git/logs/refs/heads/main": "d8abb0286185cd94da1fb2ee309fd9cd",
".git/logs/refs/remotes/origin/main": "dbd5f857c77a512f0d93c431d4f33ec5",
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
".git/refs/heads/main": "5a126ebdc9f2733a9cfbb311e0779fdb",
".git/refs/remotes/origin/main": "5a126ebdc9f2733a9cfbb311e0779fdb",
".git/index": "de8c7e39f889f535fc4fcf5e37208e0e",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "0aaab84db92a46f9b84dc308eefc1a44",
"assets/NOTICES": "0a020fb927d3dccf29c2ea3fee6a2c71",
"assets/FontManifest.json": "21b757eca4227fb837f9b82e7505e4d9",
"assets/AssetManifest.bin.json": "7a7bd808d1344530b4802923d0a755a1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/easy_stepper/assets/loading_black.json": "d412b17ec906f03090996d68abab4eca",
"assets/packages/easy_stepper/assets/loading_white.json": "92623d18291ed579cf8bfe3f5fc74213",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "3276c4cfc305a61dd25188d42942dac5",
"assets/fonts/MaterialIcons-Regular.otf": "dfcc1a4579497f3c4d4148da489ca7fb",
"assets/assets/icons/chevron.svg": "763693d45aab36bee2c7d23134946379",
"assets/assets/icons/homeNeighbors.svg": "26fa7c46e089504dacf3d4c48f3d2cab",
"assets/assets/icons/home.svg": "cb71d8b429f812846523a57a8fc2cbda",
"assets/assets/icons/delivery.svg": "aaf1f3ca0ec7f481433c7b49cfc05669",
"assets/assets/icons/homeCheck.svg": "0b1fa4bc60a2ba6a0ce8abf5044cbbb2",
"assets/assets/icons/packageMedium.svg": "49d5f623acf6a8014ba65d244e7a1f94",
"assets/assets/icons/check.svg": "9c252f4ffe7255772713a71ea407bd7b",
"assets/assets/icons/warning.svg": "ac6d59309ca26a6b99f82763acd4a1ca",
"assets/assets/icons/packagePostbox.svg": "b5a602aa5a199297d811b7c583d398c5",
"assets/assets/icons/box.svg": "4cbd1338b0806062cf27e847de6d1dfe",
"assets/assets/icons/postnl.svg": "32f7c55cef228340f90107b3999c24cb",
"assets/assets/icons/success.svg": "e2703ac821f971ec3175ad25f98f3f98",
"assets/assets/icons/profile.svg": "72f2e967f450a3d942e56d5415866cce",
"assets/assets/icons/paperPen.svg": "bfb651a6e23ea752ba4a05b93e5033b8",
"assets/assets/fonts/Namdhinggo-Bold.ttf": "0a0f6676feb340da80a664b722638174",
"assets/assets/fonts/PostNL-Italic.woff2": "622958455b42f5e8db77b0cd65cb8d55",
"assets/assets/fonts/Hanken-Grotesk.woff2": "c0e10bde6c3ff0761ec3c4a1045db295",
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
