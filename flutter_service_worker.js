'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d6604d231a95b5404f377a670a515c7f",
".git/config": "1ebed81ca0f6c0fb3fba796c610f6703",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2a8907fafbd4372375cbbb0c59c77685",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-checkout": "16474c16e5897d51d06b47b8fa90dd0c",
".git/hooks/post-commit": "9fd1b6d912aa3d1af7deddbe4ea7d6f5",
".git/hooks/post-merge": "a85c9daf64402ba63a52f0dfb7ce453c",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push": "7729531036b5ad3853c6b0f2ce5cfb54",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a75e6605a02666086c195ac12660cf42",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/lfs/cache/locks/refs/heads/main/verifiable": "91188ef767ae3a3a42e92f1706f161d0",
".git/lfs/objects/a5/24/a524b1646ba22af52e710568ef65e7b956dede033e8660b2ad62cf56fcc99f8d": "657d5b161c35a96ef177480c6967663b",
".git/logs/HEAD": "104d4f4ff3deacab9ea539737d55f462",
".git/logs/refs/heads/main": "428300608e06e446af87a932b74b2a2c",
".git/logs/refs/remotes/origin/main": "6c25cfa75648733ddc429add28e76fb5",
".git/objects/00/21e541a2bf5f6fcea5d2ce3b7067123c2348a9": "a6fe84ba38c7b35b4160fe9dbf6bb742",
".git/objects/01/77c1afa0ff90ee6c09ca99d4b33f239dded441": "aaa8328fd907aab1f404b64ed33ba997",
".git/objects/02/e6d68da587b568531f089f6e8b822e764fdff6": "487f072d00487bd20e3c21d2ddcfe70b",
".git/objects/06/711561c97faf0e5b76ef2000c184e28c60efc7": "bda39a830fa7c056aaf1a84a6c5ef42d",
".git/objects/09/6542d418447c17e77baca5e02e5a631f61a925": "db1027eed6854b5c2e2fa3fad0dd528d",
".git/objects/0a/0b97bf283e3e1a97476a8de9775abdc3b45331": "93487b750d4f1ad2061e3ac70c7982c7",
".git/objects/0c/88c753fc830656f8a961df2be41050f38d9e2c": "c1bc9f580ad3cd961e83380750dcb18b",
".git/objects/13/61d636311499dbd9f082480b7cfcd2ddaaae22": "83156af6ea717de46a43617e2216af4a",
".git/objects/13/f269852a82406a69040d67fcfc64b16906a930": "5b3eecd4f4a10928760c04b77ba5d116",
".git/objects/14/78f9d31712832060bbdb18cb36bf7a096a4cc9": "d59c57704c73ddf59dd91272b8b5b3ed",
".git/objects/14/9ca0c7a1be79bebae2e8be9ff2b71624e163ad": "f3e087f46d954cf1f6f06f36e7189371",
".git/objects/17/670cf20e55a90a6803b3ac59464ab42fcf23e4": "a4586c2aae88869140bdd4a4ed3a73fb",
".git/objects/18/993b9c6cca59e3b1889b4f1926c41dc19a9394": "cca03fc943e067cb9a6ed5916c9292b4",
".git/objects/1c/e34b90ff1e2be245ae1978da28449272b65b15": "a8905e075d9fb300f68596d90f31b03e",
".git/objects/1d/c47e4be95caa759fb0f1eec0dfdd2d4d83ecbb": "f8a2259701e9bd91a1bf923dbcd594db",
".git/objects/1d/c9f20b286956cfb590ed03efd55321f249f15c": "8fdd5b42994a14dd5e05b4691af72b2a",
".git/objects/1e/e0f03eeb015e443ec4edac945238a1f7071f69": "9c667f93d77a5b151742a05bb27832ec",
".git/objects/21/e7315be64804bf6f8d53971ef7e8e01d579b21": "6613dbf914bc103f78aac1fab522daa7",
".git/objects/22/4b3d27f15b45e80665b2ba774a2f22cacf86e0": "520fd930e687b9bc86d152c7d311a6e7",
".git/objects/23/71f4ce9367e82e43686354cdab1c81a22a1db3": "68c5d2a918016e99ebad7bfe2b3160f3",
".git/objects/2b/e57a54a70166beef3291e51dcd50efa3cda4ab": "7f380a4b07a5938d74069302371f4ef8",
".git/objects/2f/4d7df1522c79caa22c2ba5a30474701bf71bfc": "178430a01f49cab2151ebb7cac8c8c58",
".git/objects/2f/626936f93f4a17df980c696594f06ab63c2f8d": "0f7be5e0266dfd5137f7f48465674f14",
".git/objects/2f/7168473b2e9fd1666805d78aafc3ad1cc1ccad": "d6e03dd3701f81cc026f3148ef9a7aae",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/38/aa93849e11e76481b9bb61157fc55a8743b923": "12882deb995b802f8379d84f9d373b49",
".git/objects/41/e502a05cd0a994b71aaf3231c9e1da1c6288fc": "ea0c99c7ae138868b55090e42e4c709d",
".git/objects/43/0b3fbba75ebcf7b77b59a7f3cc2f9d6945433e": "eaca306364e18fbed79f52a989fe44bf",
".git/objects/44/d241180f86b98c78694f24145231e539b6254a": "8107ae5fb57d5c336064a0657c52a035",
".git/objects/45/5fbd4bfadebb1d672f941773c2889b6ec12b94": "add66ff1fbf6b5718da583eb14d94efd",
".git/objects/48/ca48016fde156592aaf60d804cb4faece36ce6": "790e88333b4193555409e535659ed5cb",
".git/objects/4a/e79e6c46ffde78a9044740c298d02eb6fe29a9": "b440e7eb1d70ce37d9ef551e6ae87378",
".git/objects/4b/b7f925ec5d53750ff05f81e7dfa890a3015fb8": "943fde957e455101732e2191e9bd7c2a",
".git/objects/4d/35afd24c1679f9a3cb14a233b20672725b0d47": "c702bbe13b3b669bcb1bcb59711cfa83",
".git/objects/57/1d186ad637afa30c6d05a8fe3af1b289fdbc22": "a910fe9d37a820b52fff7ec535a671c0",
".git/objects/57/d821c5c9d2a215ad06187a34a9d08e0035cd3d": "30e7027c7244f93d11af5d8aa03c3297",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/326d2f1ada1a23c54dd4b8594eab17c4c9e653": "7260700d1febfb67fb9fb9c7b1cd9016",
".git/objects/5d/8f9c367a8366a1450043c1d2f300e2fbcc83b3": "a21f088c4f28f0b0f0a2a72cd5b815ae",
".git/objects/5f/61b0015b5e1868fa08c3082ead2ec5d8672831": "c09c9ef3147d30b1e452297669ae4834",
".git/objects/67/b1247c2ec932264438e47936f77f3a07cf11ac": "35b61482c0aa1a21c6f7c956d8f327a8",
".git/objects/6a/64652c7ba2c8e9166c298056ac68a71f78cf29": "d61b186c8398e615ea22c4af62153eb6",
".git/objects/6b/3f666fed680b9fafbbb04f86d0a83ca6979e6e": "532b1a1babec83bbaa45ae8e8646f9fb",
".git/objects/70/377fb4887b612442df71f56e7501ca95d19792": "15fe27e17abf1cdb565fb47b4547d423",
".git/objects/77/3e4ae0531005381c19e2f7240cdde539de9ced": "c656f7fc7b6298145174060312cf5b4f",
".git/objects/79/e527f02a063356355dec66b96c3fba8596a41c": "322a7389a7e6e6cb736f2b4742fac0d8",
".git/objects/7c/3ab3b65d960edf0b0ee4de17888cfae80ca42a": "2cc9adf53a15c347c8e2408966bb9bd4",
".git/objects/7c/aa55f06b32395f168b3189ac62c9925c7efc3c": "090d0cb0722008d028cfc652a22efc0b",
".git/objects/82/999235e77f70d3482dc9afeb10711291b67c4c": "81fd1f08fa673575dea3712d447be6d2",
".git/objects/83/4888269f747fe17e0bd4e0b7fce8785b742a83": "3e4ed03dcb4af6b2cb62c56ee2df58b3",
".git/objects/85/84e2ae3031a9948fd4352f6af7bb9ce02bc486": "8d58c549c0ef1c31a62151d309782319",
".git/objects/85/cd397d24b1dd9953e0bb54544ea2c967a4be54": "ee56ce8f4b28eb39e13f516eda7715b9",
".git/objects/89/79520ceeed4800559c6a6ff4f0aca380e69607": "62083e2fb41e42d14986a7dc4551dcc9",
".git/objects/91/9f8fd53a8486ac47989cc61e65ca6b677f733c": "0013b106224ae0a2136d2df157b007e8",
".git/objects/93/0808c2aa986785dcc52d7c1a2fa06999d036ab": "dd581e57d43dfe2519a570d92b92ab3f",
".git/objects/93/584260aa8faead33e4880463b1c6f5be514049": "219fa090c294c1f31cffd15c47b2bd9a",
".git/objects/99/2f91f6e91691bcffe3393e423d0f4a1b80fc0d": "7d227b1911dae51dfb2ea47f2ead7d6a",
".git/objects/9b/e6f645980527637afd00b7dbbc56157c008400": "ee9e257aea38b100512b0e5dd1a5fb48",
".git/objects/9c/ae0f79232492ce1e281c5f51724389f67904f9": "a03637402f8cbe14c19a44cc35234c6e",
".git/objects/9c/ca3740e238d51a5a42513f706403045b482caa": "29a08f32a3d3b7d95f9fdb1b3326563f",
".git/objects/a5/70a0eb20427c8883babc1a31d335295237d812": "a9e70ada75a25b74d79e6d7e769d33a5",
".git/objects/a5/7f9438b4bcc9cde30eb5116c1a73455dddb9e0": "068a6b6a975371102b6ce6c4b0e04cc1",
".git/objects/a5/b5e08716bdc3029602ce6bc63e99230b26584f": "c44c3c5e78e2ca4920f65951b84f6b03",
".git/objects/a6/2e5585a0f611e9b77abdf3a2ad4ac0704077d4": "06f28a739802bbe6d07a7ef9f10ba0ae",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ac/ff92c26d43a9afd935be0fabd6c5957c8dfe0d": "4109ebeb8f938af8c79ef6ddc8cfbfc5",
".git/objects/ad/f7a8470c9e15527a6615a18659d4b572b0febf": "0711d53d2759fcb24b3622edf26df543",
".git/objects/b3/7c3b951f851dd39b8bbb529c386e9f22c9edbc": "fa5be079962d70de1a0ac7e190b2837e",
".git/objects/b4/d3d339b7c4b0894412f029468856fb451b8b7a": "3d37831e587007bbbcb3004b768cb5b8",
".git/objects/b6/808c06b8f71c4d6589625df47e8ce57d5ec083": "3bd8d77184302232f6a12763d7f32746",
".git/objects/b7/527b60283573a9736992efbc610eee14412c7c": "fb088d032d096848a4c7a80fd3e8b3a7",
".git/objects/b8/0e0eea94c3cbb9d8486f055de113914c6de264": "4090caca257f552ac0a1cadc031106cb",
".git/objects/bb/9cb916006d6183c5ff3133e7cda1cdb6c8b082": "4bf06945e0cc77619b4a8e5aa2245b36",
".git/objects/bc/3ac1af00fa08f5b307855f2cd2a550f96fe5e7": "cd1a76a0dca9a2e68294258d36f0a413",
".git/objects/bd/300b4b3101cbbb5de550d7ca83eb867f1db149": "71c399d6b31f2233a8744edd86daeede",
".git/objects/c3/47ff9880f2ebeb5895329eef805d4a6390fa29": "03ae39e4773f9cbc24eaccfb14387fd2",
".git/objects/c4/025bf09f250385075ffa81978a54f3ecc5f643": "fe8e782704a06dbe0954311a2180607a",
".git/objects/c5/3c4fbe126f35415cf1d5bf05c7f0b1c67b62fe": "d4261b95b2f4ff823326b25aa9ff3003",
".git/objects/c7/b8d3aa2ae241be279a9d2e8dccf924243c11c0": "9f58698aa694d37dd6292f45fd1948a4",
".git/objects/ca/3d5bbb5c8089529a833b9ca394ebddb8375e5c": "a0e1cc5065f0cd5a571fcbbe7449918c",
".git/objects/cc/a8f0a3f5d170d22257c8673f3ccec5fba5a9f6": "513bb24b7e5254621e18697787f856de",
".git/objects/d6/3f7d049cc49cc6e2f17d52847b19a61091c558": "653d62aa1bcfcd34246ac0626b3257b5",
".git/objects/df/40d4eb67809da66953a44b00455f61142e6709": "8fc1600f7896edbe32f9ef912c5cc0d0",
".git/objects/e4/087c43422db4484a231967ff4e7ceaff5bbada": "ef82374427a22e8100553a20b55b0b29",
".git/objects/e5/489d1fb2074a849b1ae81c3767f043c4e904f3": "7e95c2b7825748b8361e90ff96e6bc20",
".git/objects/ec/d0b7afb4c1d53fc6dc72ec18356013e1fec9f9": "9a658aeedc5cab85df7d6482e88c0354",
".git/objects/f2/88702d2fa16d3cdf0035b15a9fcbc552cd88e7": "5793ea2dc29a103a0b9e8d9420726c5a",
".git/ORIG_HEAD": "72c440ec994004f944e85503aa5b25a2",
".git/refs/heads/main": "72c440ec994004f944e85503aa5b25a2",
".git/refs/remotes/origin/main": "72c440ec994004f944e85503aa5b25a2",
"assets/AssetManifest.json": "55df4e1bb21ce98066a1b14a488269e8",
"assets/assets/fonts/OpenSans.ttf": "996d0154a25c63500dee2ae91e4f2ea7",
"assets/assets/images/github.png": "8bed0a70ac82a85e1ead196903627189",
"assets/assets/images/linkedin.png": "fdd56650691bfe3d25eb79b4621b1935",
"assets/assets/images/placeholder.png": "da670bdbfaad71909e1317e23f26d919",
"assets/assets/images/profile.png": "89eb0e757996d1e7224522b5341fa656",
"assets/assets/images/tiles/compiler.png": "c66591813618863ad85ce833b59bd0f7",
"assets/assets/images/tiles/dart.png": "36895c946a754737ad13d67b6820e301",
"assets/assets/images/tiles/dbsecurity.png": "8d815a1bf7d2ce1a30f1304a321951ab",
"assets/assets/images/tiles/desescape.png": "70166f489783c0ae486d75acaa7871e4",
"assets/assets/images/tiles/ezhotel.png": "8c7aa82d997108588337e61f3b8b7abe",
"assets/assets/images/tiles/ezscripts.png": "cf8e7de3b0235d05efeede3f181acb7a",
"assets/assets/images/tiles/ezvpn.png": "5220bec2379770ebb69a948740792d78",
"assets/assets/images/tiles/genderdetection.png": "17721c78ae53ac76594144f7741681ad",
"assets/assets/images/tiles/gtex.png": "94ccace021a826c4d56fc50a0bb3b639",
"assets/assets/images/tiles/hotelsql.png": "7764470b3b2cb98039de4e0bcb8597ab",
"assets/assets/images/tiles/memalloc.png": "3c8062e5de3cdf5a32546bb9cba8a81b",
"assets/assets/images/tiles/networksim.png": "fbca32c1dd26c8a3248b4e56611fd47f",
"assets/assets/images/tiles/rtxdlss.png": "2b84105eb119a4ba6e39956b436f7863",
"assets/assets/images/tiles/ssevown.png": "3be1d53c858dbbfe428a266120112fac",
"assets/assets/images/tiles/trafficlights.png": "0ad1969de11e3af923a68aa0acc1e641",
"assets/FontManifest.json": "597576c9d77d4e91215871e3b2f880b0",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "f1dc30b0d3762165106579907b18766d",
"files/bsc.pdf": "127aa3512e2af59edf8fecdef02dac31",
"files/bscs.pdf": "ff32754b5b279267906634cc60f11527",
"files/cv.pdf": "1f706274f0fca483202eb0ec9b16e213",
"files/dart.pptx": "804a1081026f7a2ae927b94dff32cff2",
"files/dbsecurity.pptx": "5d98138830b4f1602e5e1dbaf2d6686c",
"files/desescape.zip": "bea9c70f90ad6594c1f663225360562c",
"files/hotel.sql": "8b67033ae18c9266f106c61d2bf3f4d8",
"files/hsd.pdf": "4d9ef83e231b49e23f674870db71e2a6",
"files/ielts.pdf": "de258733bebe2392eaf06a66d7287b61",
"files/memalloc.pptx": "fd2bd3e701cbfa6989b72b37118fc6b0",
"files/ner.pdf": "66bb3b4b010d8ac8fbd1c6f4ab355df7",
"files/networkssim.zip": "68009530eb6dca15d558019854151b13",
"files/puc.pdf": "1a4240b8adf8dc9e36c9673651d5f7d1",
"files/rtxdlss.pptx": "657d5b161c35a96ef177480c6967663b",
"files/ssevown.zip": "4956b09f6bd1e139fc6b7f2dcda186e2",
"files/trafficlights.pdsprj": "889d5782f6d76773813cdaad757ce4c5",
"files/ur.pdf": "dad02ce1ada83d560a1e13199f1a5a6d",
"index.html": "b76d115628a95d436fdf16b21e65858f",
"/": "b76d115628a95d436fdf16b21e65858f",
"LICENSE.md": "e62637ea8a114355b985fd86c9ffbd6e",
"main.dart.js": "d4d4a42dd21cb448f720f6503e8c09fd",
"manifest.json": "6d3feaad4b1767289ab91e533bc4c568",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
