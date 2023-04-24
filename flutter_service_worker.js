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
".git/index": "3cdff4a5d657fe7468943e57d235136a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "712efdad1631008184ea74a11a72ce65",
".git/logs/refs/heads/master": "712efdad1631008184ea74a11a72ce65",
".git/logs/refs/remotes/origin/master": "6734caa5e1582fe75fb93ed9f89af5c9",
".git/objects/01/97cf1580775b048f8aaa586e4cd0c8126d2204": "20ceeafd1e8a01e370b193b27c894cf9",
".git/objects/02/73912ae3f3b5408cf9d6b5d47bdf17f9afb440": "e32cf523e0dd02c62ef7d223db3dfa0d",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/c9f6d90c903722bc17206aeb1ae4347aa99eb9": "16b6c7b119504d4a5c126e0bb226472e",
".git/objects/08/c5b8cd30c7485d23856f9be83593c31168af1f": "adf0b3e97d9092825dd6c3f2bdac619b",
".git/objects/09/19aa7e4fb116120b16f7fa80b8f1a6cd0fff27": "d5c531e5723234a3974128506881ee56",
".git/objects/0a/4d61b367116c90e18ed9cd20f06fb5d0934633": "59ef9c47e45c571a0b8eb973192fa422",
".git/objects/0f/22aeb20ec9226685ca62b1361f608f7ed728ae": "78b3d10d6b151a72c73eeae0aa6d60a1",
".git/objects/11/fd2105989871a4d9ea9c5ce471336b9498c99a": "b6ef692f0744ffd886ccb90dd0dc4e76",
".git/objects/12/508b5ead4878c38058e2213ead13ed86598634": "f5943e39d032bb52375e22ae9cdfaea2",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/13/957eaede4654c13fa6833c3520799e5071224a": "53998b07b7e0a3e9eda0dcaeaff229ad",
".git/objects/13/c555e430e3ae4bc4a079fd3ff1b473b8d6b1e7": "11af7a9a557739528ee4fe81410eaee9",
".git/objects/1a/d2234ac7a62257564f16cedb7a16524c511a6e": "25b74e79d289d5c59559286c91e29b6d",
".git/objects/1b/01245d30860b7df7816a0eaeb0ee11d6338207": "f5c91640688cf97c71b092afd2a769c8",
".git/objects/1f/5cf4442d2c62e9410783c2c33fc36869680ae2": "b0019ce549196155b4cf8dca03cb63b3",
".git/objects/25/a12766b871a4726ae852a84927f5341e644554": "d7845fd7e119217fa8cef118cbf0bf62",
".git/objects/25/bb07e57129c49bd8bec086025556d202c7b2d3": "aa33ba15bb75f7e20e4e65ebb12c0f02",
".git/objects/28/dcf9dd2bb110cd187cda1587319a98e975566b": "6d0a22022afbc8ee4a6fe83f0e63a166",
".git/objects/29/0cb3e1b1f41ba4bb9504901862f33005a559bf": "7e6dcc9ecc1a25112f347147f1a366ae",
".git/objects/2a/ab6c0ac3c9ceb1addf92e2302ed2bda6dcc510": "eda6f38dd5b110ec6ade8af334f31dd6",
".git/objects/2b/1753d28ad4d516bb26dfca29f8ed7772fb8d4a": "10b92ee52a86bd63d17dc2bbaeaf5830",
".git/objects/2b/c7d2628f5806d47b8c40027ff67ededa8de87e": "d990a6c4340ad6956e8e830f547f61b0",
".git/objects/2d/ff29f3674fe114816bf4f7b1e29658166e6295": "dec265a050627369997b717f42e5a023",
".git/objects/2e/4edaadd3ccd60d67d230707bb033d52d5f26fa": "7778e7e1d1aac6ad5b77d4b4adec0629",
".git/objects/2f/d0862c69c6b5720495782b322c9d0142f506c4": "39d953b26c7e0ffde19be05ebd7e72f4",
".git/objects/33/2b5f129220e2dbefdd7763ff1fe8fe95b85bb1": "f96e351da715dfc07b74dcfff8113f20",
".git/objects/34/f92b1a41b4868dff89b44332db512287b217eb": "afe56743d4519891097efb4ad0b5ed52",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/39/b7111c2ac7c04d1d54bb78ef909d4492ed2edc": "342f9b5d79aae4c8218499302d196f1a",
".git/objects/3b/9f6057555b243440afacd2bcf5249fb53b8a49": "2427a699fce26075ded7734dd5371809",
".git/objects/3c/020f1ff0c6779498038ae76a8073896a010cc7": "25bdaf50025c38cc96148d44e11e39dd",
".git/objects/3d/5fc7dad6278077ca742b8d4c0802fb7a3d4d75": "4c325af12dd03b25e7f73a80fe051973",
".git/objects/3d/8a5f9e9b2ad236d9f1fbdaf26f238c2eb28b3b": "f689e86d69b81c989400433db2f6c7c6",
".git/objects/40/1fe0b5b03eb0788b99fe4344d7af55af3be54e": "8fb6fc2a7b6e5cde0d93bd6cd683f94a",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/44/fb97a36bacd891008117143b58a47feb3e6e47": "5d759b97e48f6a55917c46637a3a6115",
".git/objects/45/efb8cfd2f8ffc0108f57b8d921dc44c9ed3445": "0e8a07e54578a43e4c6544b535cc5e32",
".git/objects/46/0985ee406534c13d173259f37c39e4100ae4b8": "f3e1f0c4d94d798d57dbcb3ee4edbb1c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/176daf655712ae1b49a46e561f81088ed17695": "a50ceb11c798b647dbcb44bdada3d912",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/50/b7cf35555d64cdae1c5cb762707385c5ca37e1": "12685ef9b3511f8e7d82a8ce7077c027",
".git/objects/51/e789ee7434d79473f830bb19b34fa9d73e3715": "87e5f37bc70fadab3d10aa66bba839a0",
".git/objects/52/73e39e24c0079afc45622ec0839666b32fcdae": "c53132964154c6c207e8fc39b76b996f",
".git/objects/53/d93cfb5a5d6e21037e2a750ce8a2eac44dd30f": "1e9922a38330a418aa6af56e5d3f8f2c",
".git/objects/54/b2375cca56b36aab3a10eea6212ccf6de7cbb9": "caa6b2ad315a40087893465cacd0b90b",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/55/970039211bdc4676317cc64b1dd6bc28156b4a": "0f2632f016e8f731f7970d9f5ccbdc75",
".git/objects/5c/e0a411d4910ab3905cc1ab627446625cbbc601": "f6484a6dfa7c09cbbd1d6228a06aa2bc",
".git/objects/60/08fd4bd1003553c61dd1e99868e714e603ede0": "f7323785e8f2d83a6195dae71ab4cb78",
".git/objects/61/80582111e16eba7c7fc476dad659cc4775e040": "efe53584782d0af2d0e0c779da2139e5",
".git/objects/61/9391693f8da6518a9166ebc0abb9e0fe31f545": "5b4edb50924afcdd056004eb3d079d32",
".git/objects/68/702b15b7efb3fd8847040369cf7e17760fe26a": "765cacf40ae3584dbc360bd1686c6236",
".git/objects/69/04c2cfc3c72bf84a636af52b372fd3f0e08998": "19da63efa8875cd3621ca7ded8443264",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6c/e03489f98c90148e46bb6552d57179a69c9672": "54787d65af04a16f47188f263e42d63b",
".git/objects/6d/1f5c13b5879a45fec80831f96346c655fbe086": "a371686a3d6e1d88bc51a363864c035c",
".git/objects/6f/0fa82f5d6cc1bbb5278a9406855e40c9e54e4a": "ee544e9cc06a2b42cd2cbc54e2e0d7b4",
".git/objects/72/609fb29c5ba63f11134e5338a54f2ec9f8fdb0": "5c1b3500cde97fb18e1bb2ed12f790d8",
".git/objects/72/71f6e55b6805734c3e3f4ecccaed7dcfa36bd8": "724f64edf92a3db98e0d1e6e9d94278f",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/c81a0018d919d67e4331ed5a266517ea951681": "eeb438fcde8054738ee68c24322da62f",
".git/objects/79/15411bb535eccfe13d6d2596fc379689403853": "862e090ae91674fc9a8d966ace9e376b",
".git/objects/79/79d96bd7b899b7da90ae721e5db17bd663e74d": "c200292e0543eca3f41d9c8274439bec",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/2c31609d6b3deb4e1b0c3527634ebe1a88dd34": "8eb9fd8a65a3a7dd7328a1f160be249f",
".git/objects/7e/ea266e341449d1bb1a3f3f00504863bb10caa7": "c5ec3c9bafd94749385a078544fe8240",
".git/objects/82/e673bb2793311cab9a6805740ab88dd4c5926f": "59eac1d4a4884f6277e59da413e53eea",
".git/objects/82/fcfa397c0b59458e353425d29f68f9bb1b0d97": "addd3adf9026f79b6c19db8f6d4867dd",
".git/objects/83/33437e76d28873e227039d9df2c014dd53170f": "16323be220e15da2906cc3060196e9ac",
".git/objects/87/89f84e3810aa810a48f3676b814e8ac0b75019": "201bfd8838e840fa569b26d0a4ec1435",
".git/objects/87/c24728199dfce0bb97e51ace160510a2db813f": "bc2a2c55ff20a4d035f921af045ca1c7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/3469fa138b5aa0724b88c46f480a46d232c1f7": "8f299e8674fa20fc920f5f0baa50bd22",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/5e4932216b8be4e9ad6972f702962865fd09e3": "b921e30fc78b7f48e7469e20501567fa",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/541a11ff540dae9bf300d08e8f8e1daff66faa": "3b749f88bdd3793684e4af146b859bf2",
".git/objects/8d/65846cf59f642dfc8da5b3b8c203a6c2b8a5aa": "21a6f8f5cef37de14d9ee9ea04c2e886",
".git/objects/8e/fa396334a6b55c352be4434278fe679f2ed551": "bae387355045626eef383279a9f510d4",
".git/objects/90/983e96988efbb2e4cf30648f5f96317d5e3b09": "b7ba8b1a40463f7eb5c49f1257dea0be",
".git/objects/91/2cec9bed07f24206ef9254d4111ffd12afafe0": "d8a3a9bbf9184fae440a8cc85ef19eab",
".git/objects/95/eadef840484c6e53fccc9fd18aa4f702e64b73": "8e84a23c7f49da2c38c2f05815dcce1d",
".git/objects/96/75c5c1dffed1e0720ca8f491aa92d91059dd84": "726f3333bb8c060b2d11ae8d9972044c",
".git/objects/96/9981ac6c94bd8f3c35001d49e01f4c10d4b101": "a06ac2f1d1821f555543b01386a76c40",
".git/objects/96/db08608e6f2df5f4345a6eb301af7b1475fffd": "116f6e5a18b990927b8a84691dff3dc4",
".git/objects/9a/08a55d4c3186c0ec19f5d8325c6c337bb9609e": "35fa62031fb21ca337c523d9ab431736",
".git/objects/9a/488c7f2f095b6d54a6ef320ddfdc41b57dd4e5": "40e6be0708a7d7b25bae7f6eaa1ef8a4",
".git/objects/9b/b3aafb1b24631a9e2ab71c2c0b9b984a1aee38": "3452255cd6b25d6eec98a3222a19e946",
".git/objects/9d/b78cb4b0542357e83d1b06ed446f2475382025": "3c96689a1bf6923fd4503229041f363e",
".git/objects/9e/9a0dff912cac6b0f5d9bdd184b11077e3cdbdb": "5adca14dc8ca51ee0c8bce10acc312a9",
".git/objects/9f/41cc7285fe3f416c82354b989e6cfb293cdd93": "b31284f469550e06b91bde3ea43ed13e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/7738b75f49125380bc3b537bbc4256120e897a": "8acfe722854c2049f80f016dd15b5c35",
".git/objects/a3/deae361bac0648741e53d5b1dcaf96d18c0e81": "ad918dd445a9646398c5ab94ada7ca1c",
".git/objects/a7/18bd89be7fe9716a503b979ee99eb59c2e49cb": "f68c64fcc026a62ecfe8bee60ae9a24a",
".git/objects/aa/442d71c965081d4332dd2c7e1791551ea8c665": "78e4db6ee3df904854850bb6626251b7",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/5ea27daabf0be97ad1ae0da819e2bf6e45a6ce": "124ad1fd2f8148106b274c6a5989afcb",
".git/objects/ad/9aba07aad6a0b742b76a427d681ae582e2e813": "d60c9711c196b4c1d6ccdb0dd402c5bc",
".git/objects/af/0c76e39642433c911ca4da146e8b77ffd1730b": "978efb65ef08c96c7e3b06065db35934",
".git/objects/b2/d2723d9478b0a13c2f075fcc37f80038718e35": "c9b12a9a398fa6629f7959514b6a5a1e",
".git/objects/b3/97611864a652f339ece32b9a26b90f5790b112": "480fbd33558b24e784a06bf34d7378b5",
".git/objects/b5/894413e7ac99433503e678ab1ed67bcc2b6647": "a86daeb88e5e3e361d438ac60798a3cf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/12c9a4800edbc06dcebbb60b971da494534b45": "5738384c27687e26790975726cd75672",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/a9965aae6bec1e37da42027aa7e530420a3192": "ab741632abcfc14bc40e0f8a8a08a917",
".git/objects/be/48dfe544cc2eed0fb608abe051ee9777036d06": "6b3ee3d1039907917c704b8b5d01e2c2",
".git/objects/c1/e988c53d8bd39aca6400f8b93129e333a62d5f": "0365e8a5cd441a8f7283598a04ad6153",
".git/objects/c2/6985bf475ff92755b14d001fb2f390498fbdc2": "2a2b4aa154847932c32d12357ce5eb7f",
".git/objects/c2/c2d1e92053d0ac052a0c847a6f35a31e75760a": "1f7524457bfba78b522b6859806c0674",
".git/objects/c5/7410d4baaeb2fc3e5011074350edf3f10d6538": "4d7beb8bf6a96ed45f3d1a695f73dafc",
".git/objects/c6/26356aec8830fe90a42dd4b0e815ff76759845": "57a30487213142f0dae045221ded4449",
".git/objects/c6/40805ee0adfabb9376c13b44c1778c92a4a3ee": "6e15cfaf433653d1c690ac3b4936ddae",
".git/objects/c6/bd02c115dde45334a43205b1c362ee37e1244d": "df4cbed9a4644890f4d63e4dc2d99e1e",
".git/objects/c8/65d57c740a4d517a15861993496d7ed5644bd1": "f2433412b1935a6c44ec5f689186dd45",
".git/objects/ca/dcaccbefb418119d19c8a540bb4be109a29b93": "3979d82299e523acfca3e99a2bad1497",
".git/objects/cc/a1172acbc5fd3a961721c8bc152ec1da08ad76": "3b7c66ae44962c983d038c888db3a760",
".git/objects/d0/5d0673c0db84c467313e58049e4d0104819833": "1044512324cbfa48d7b228cdf5682a0d",
".git/objects/d2/fcd9786888ecf8e2fd15bba969ba0717fe1f3e": "bdc44a5e5eaedf3b78476a17bc1e32b0",
".git/objects/d4/447ae5bb516eb5463329977bb2615489da5ade": "b391a2d44b3cc117aadd0695513386ca",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/30ce447c41c7f3434b45b2d16a05eebafef063": "5c3eca7135a53527fd6cbf19a781b6f0",
".git/objects/de/0b5d201dbad7541f5fd04fd616e42e95d6a3f6": "cea0f19184c1d4a546f2ba3194d2c046",
".git/objects/e2/03985a7f68a1f38f64a15a0dd3c09f4315085c": "4a684d819f2314efd749ca7c5ba92292",
".git/objects/e2/76561f85fdf4f23bae617dfbd41536f8c769cf": "693bb7af9fcd4f12ae76f2738f50b516",
".git/objects/e4/48e6327dd90dcb40f3f050ca5f5f14dceb1de1": "681f0323855a43d26995e1526eeac42f",
".git/objects/e4/508168618fa4243edddc471b2c7bb17e5f3c2c": "ba686a156ddd6705a450f84f506ac370",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/82c2b7828857e183087adfad454a694de75c71": "3ebb72d533288c84ff004e6a4145f870",
".git/objects/ea/0d43bc19db831d94ca94ee35c13eced5c5fdff": "afd986d9b1ae71391c5ee028449a44b9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/0bd3519467c4aea289ba6ef49bb5bcaedab41d": "0d9fd482f9219854e9450b4fb7985d5b",
".git/objects/ec/2d2edefeb003dc9dc9f95441dfdca29cbb504e": "4add869c16ceaff50995685d85bc6939",
".git/objects/ee/8451c7ce3def190fef437fc841b22ee353051e": "b1d8176ee74dce5aa9fb4bc30dee11b8",
".git/objects/ee/dfffbe3fc1dc38bf741f8faa9ae9f198d38135": "2e72e5fbeaceb0f697c9d87436a60c20",
".git/objects/f3/4ec9b0b24ee8f505deba664de0331cba6bd8f0": "0a2ceafb056503a0e5d575db5b2f8a04",
".git/objects/f6/99efb073dc6048914b19afbad7774cf5add230": "e1c57cbee756e57fe8ea2ce12a7e1c40",
".git/objects/fd/95bfb240cc0a3334c91d84939f5433a064bf3d": "8c009b8c44c1adbaa840d1a68d58a3f2",
".git/objects/fe/edd9ca6f0ca009a3c22b84e2a832eb5c318828": "b99ae797a4cf86051c9edbaae78cc837",
".git/objects/ff/4e8dd9ad148bd01b151b2ad893fd8ce4de2930": "37bdcbbee92bd503510e473b3973f703",
".git/refs/heads/master": "cf86a2ea5b35999b9defbaf29a496d7f",
".git/refs/remotes/origin/master": "cf86a2ea5b35999b9defbaf29a496d7f",
"assets/AssetManifest.json": "ab1a315e86e520d080c96fe618458412",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/loading.gif": "f4404720ece11355df318a0acf525cb1",
"assets/NOTICES": "71f4ea2850c1ab6b29b1085fd5af7f22",
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
"index.html": "ad189c1ce262c5e7b643a2bf40d25564",
"/": "ad189c1ce262c5e7b643a2bf40d25564",
"main.dart.js": "ba9b6e99d4ad7adfc2f144cd532a3a88",
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
