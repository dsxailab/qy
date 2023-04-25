'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMITMESSAGE": "d41d8cd98f00b204e9800998ecf8427e",
".git/COMMIT_EDITMSG": "cd24fdd65474c1be0866800c7f4029bb",
".git/config": "f19341086a93fcc123fddb239924c5fc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "788ed644b7b1ac1f6a68c87cebd58436",
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
".git/index": "f9d52902396f79c290e834743849b385",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "af72f60dd303d0363fe138bf62684e24",
".git/logs/refs/heads/master": "af72f60dd303d0363fe138bf62684e24",
".git/logs/refs/heads/wip": "d130dde008ee71bbc320e091c419144d",
".git/logs/refs/heads/working": "42b385b397366d9398e3c180c8f7f387",
".git/logs/refs/remotes/origin/master": "46016237a37ec53a041f819f929e11c9",
".git/logs/refs/remotes/test/master": "4aea20d901a9bb4a444e547563ab3e6b",
".git/objects/01/0ea3a08aad783bdddd25154c77f923a6e8ea28": "7ef8426164cfe170fc370d8e2574a2b6",
".git/objects/01/97cf1580775b048f8aaa586e4cd0c8126d2204": "20ceeafd1e8a01e370b193b27c894cf9",
".git/objects/02/1bf015070049f83b39d004df9445d465c5fa50": "8300748043c5a4fc2f52b5a2e1fe0cc7",
".git/objects/02/73912ae3f3b5408cf9d6b5d47bdf17f9afb440": "e32cf523e0dd02c62ef7d223db3dfa0d",
".git/objects/03/02134073dfcf38d61c609d7a630195d8c45648": "f980bef3de75f8242727e1baa26dbba2",
".git/objects/03/b47cc2365d5f4402ba9b22aa2675e6815f00cc": "42fcc959691a8517e58e600d974467f6",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/5e5cdbff87c5150546d460ab3c0ba27b1fa141": "db195bbcc04f1d8dbd165f4395f4f002",
".git/objects/06/0d7495643747f100cbd050654e4742c5f14fbb": "af173ccfad56bd98fc680d7031d567ed",
".git/objects/06/c9f6d90c903722bc17206aeb1ae4347aa99eb9": "16b6c7b119504d4a5c126e0bb226472e",
".git/objects/07/8464713b4deb15528e3df631e5cff96815bbdf": "5ac1c39c054bba0d924c31c107fa3fc8",
".git/objects/08/7b06b71e18a6ba57588f39e969536b2a5c5fc5": "eb3170d9604c24531dd30b5fc7d38108",
".git/objects/08/c5b8cd30c7485d23856f9be83593c31168af1f": "adf0b3e97d9092825dd6c3f2bdac619b",
".git/objects/09/00038424d1a779d50824631180f0be456bb460": "dec77415677124355560738ad790d78b",
".git/objects/09/19aa7e4fb116120b16f7fa80b8f1a6cd0fff27": "d5c531e5723234a3974128506881ee56",
".git/objects/09/2d540cb4348f0f904b153688ccf6a829227fbc": "24e347ea8921db2a87bfcd937fd6295f",
".git/objects/0a/4996479ef560111c86609897ae88117e56b667": "57e14bf58c04e618d2de5cb387a5cd66",
".git/objects/0a/4d61b367116c90e18ed9cd20f06fb5d0934633": "59ef9c47e45c571a0b8eb973192fa422",
".git/objects/0d/404c42bae3fe01d87741c50de457d619528ed5": "f69405dd634ed1c3c663f15128992fbd",
".git/objects/0d/9abcd64b2ec109bcb4cb67eb6a019593d96ba3": "ff362ce58bcc9225bde9149ba4ec25d3",
".git/objects/0d/e029864761e08e3763ae277fa68fce14381daa": "8697628314bdbebe554a0403a0f3e1b3",
".git/objects/0d/ecf743be7e206dbe50ee241d867ac97a6e7fc1": "4bcda92426391e41baf7843d39296719",
".git/objects/0f/22aeb20ec9226685ca62b1361f608f7ed728ae": "78b3d10d6b151a72c73eeae0aa6d60a1",
".git/objects/10/f02da689a68b0a48ad49ae79a008b2fc537c32": "495be72a0663b7488c5557ebb53f28e3",
".git/objects/11/b2135b97afffe0f621039df4c1469a1b0e386c": "146e82c729fffde1f859912b12bd8d87",
".git/objects/11/fd2105989871a4d9ea9c5ce471336b9498c99a": "b6ef692f0744ffd886ccb90dd0dc4e76",
".git/objects/12/508b5ead4878c38058e2213ead13ed86598634": "f5943e39d032bb52375e22ae9cdfaea2",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/13/957eaede4654c13fa6833c3520799e5071224a": "53998b07b7e0a3e9eda0dcaeaff229ad",
".git/objects/13/987f801959d178bc86a665465816effa468122": "0697a19ee6359f809da3f0d7d2494e94",
".git/objects/13/c555e430e3ae4bc4a079fd3ff1b473b8d6b1e7": "11af7a9a557739528ee4fe81410eaee9",
".git/objects/14/d80d65f90f36135e7d7c141bf4648f4b72011c": "8174091de0806c419326c0c65f312b67",
".git/objects/15/aa7b24abfd24ee529cf41c294d65dac748a591": "b7d7012a18d69f840c12f178bd89c67e",
".git/objects/17/f3d92bd9f34b753460a96a2c9dae9a9d385b53": "3815d22224a6c0031c8cb6f8f965ffd5",
".git/objects/19/22035e08ce27b2b8c864a0b3f18f1918a12622": "b189b6e966078a51afe7664254e434ef",
".git/objects/1a/d2234ac7a62257564f16cedb7a16524c511a6e": "25b74e79d289d5c59559286c91e29b6d",
".git/objects/1b/01245d30860b7df7816a0eaeb0ee11d6338207": "f5c91640688cf97c71b092afd2a769c8",
".git/objects/1c/98aaa955e9a203997f54be137ebcd0fb2fce00": "ddf51316747dc4e09206991df6bc424d",
".git/objects/1e/15618c082f60eaa265a6beca6b4d2058b34085": "01f83d4820faef593d4e9ec1b481621a",
".git/objects/1f/5cf4442d2c62e9410783c2c33fc36869680ae2": "b0019ce549196155b4cf8dca03cb63b3",
".git/objects/23/289bfb4ca438da9076149c83c922c09bc8849b": "d053e86a56797eb242a1b5f2f7a0a449",
".git/objects/24/25e53beba7dccb6acbfe7269ea0acb66a9face": "a13d03dbbc1a5930bdaa9804cc0e1f42",
".git/objects/25/61bfb5cdcf22ad76011dcf237a4db56b37b9b0": "fa05376ddad1d02d83c38730a9833717",
".git/objects/25/a12766b871a4726ae852a84927f5341e644554": "d7845fd7e119217fa8cef118cbf0bf62",
".git/objects/25/bb07e57129c49bd8bec086025556d202c7b2d3": "aa33ba15bb75f7e20e4e65ebb12c0f02",
".git/objects/25/dc216507362e6d49ed1e9262ea9874edfb495b": "2f40fcc1ce723d73b780b1bebcf71a79",
".git/objects/26/abf70a7a8c76a6c6c24c9d2be27b9f6b0d4aac": "8373cc8fc3f25fe69f79bdae79ede3fd",
".git/objects/27/7377dce2836e20ce526b678dd62dba880d0872": "77afc841738506dce5f619ca62abe188",
".git/objects/27/f5c4bae24cdff4baad4d85b24169496191f1b6": "b1f4ca279cdd1c51d33d7717c94c9d7b",
".git/objects/28/dcf9dd2bb110cd187cda1587319a98e975566b": "6d0a22022afbc8ee4a6fe83f0e63a166",
".git/objects/29/0cb3e1b1f41ba4bb9504901862f33005a559bf": "7e6dcc9ecc1a25112f347147f1a366ae",
".git/objects/2a/ab6c0ac3c9ceb1addf92e2302ed2bda6dcc510": "eda6f38dd5b110ec6ade8af334f31dd6",
".git/objects/2b/1753d28ad4d516bb26dfca29f8ed7772fb8d4a": "10b92ee52a86bd63d17dc2bbaeaf5830",
".git/objects/2b/72a3698c068863b1a6626271b46b635ca6895c": "add2262c171bbbf62be9fc665cb1b534",
".git/objects/2b/c7d2628f5806d47b8c40027ff67ededa8de87e": "d990a6c4340ad6956e8e830f547f61b0",
".git/objects/2c/909e94a1737f2b4c256a3a5334b6759e48b13e": "b75b6c4c49ba0e46a9ff79460a549be2",
".git/objects/2d/ff29f3674fe114816bf4f7b1e29658166e6295": "dec265a050627369997b717f42e5a023",
".git/objects/2e/4edaadd3ccd60d67d230707bb033d52d5f26fa": "7778e7e1d1aac6ad5b77d4b4adec0629",
".git/objects/2f/2948b4192d336035bed9c172a2f3d5011f6865": "14f9b994cec314c90be095a009e3279e",
".git/objects/2f/d0862c69c6b5720495782b322c9d0142f506c4": "39d953b26c7e0ffde19be05ebd7e72f4",
".git/objects/30/3d0a724dfe624aa9d3c1ed157db3fbd3eface7": "6320ff939543632dd219bb1b129bbc93",
".git/objects/32/a1ebd107fc867b0a20115830b89353029d3e27": "d6b387a5d4cccfd31350db65cd3939bd",
".git/objects/33/2b5f129220e2dbefdd7763ff1fe8fe95b85bb1": "f96e351da715dfc07b74dcfff8113f20",
".git/objects/34/f92b1a41b4868dff89b44332db512287b217eb": "afe56743d4519891097efb4ad0b5ed52",
".git/objects/35/6baa20dea3ffb52ba62779dc8040f4a744eedb": "8fabec0f85182e7b2899fcb1ebe92808",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/fe63a921b77cc8834cb37ce13e820df78049b5": "abea9142c9532c504f317966f38a0fc9",
".git/objects/39/b7111c2ac7c04d1d54bb78ef909d4492ed2edc": "342f9b5d79aae4c8218499302d196f1a",
".git/objects/39/e6fe2e86b1d5083882f54e8d80f28e846e0068": "10590c44e47871234f007232744c57b2",
".git/objects/3a/790df2386af8fe191eafe9a33a44c98234df25": "5611c840b1d86925feb4a387974ce82f",
".git/objects/3b/9f6057555b243440afacd2bcf5249fb53b8a49": "2427a699fce26075ded7734dd5371809",
".git/objects/3c/020f1ff0c6779498038ae76a8073896a010cc7": "25bdaf50025c38cc96148d44e11e39dd",
".git/objects/3c/d3680366538a9dd95feb98e551fe046a9e596f": "d0f468ff683bde1db0f35b3dcff495e4",
".git/objects/3d/5fc7dad6278077ca742b8d4c0802fb7a3d4d75": "4c325af12dd03b25e7f73a80fe051973",
".git/objects/3d/8a5f9e9b2ad236d9f1fbdaf26f238c2eb28b3b": "f689e86d69b81c989400433db2f6c7c6",
".git/objects/3e/2c69abd8290010dba16ea87f3bb8898697833c": "21f42ebebbf86ab02f7b9fa9dd385d85",
".git/objects/3e/70836b8042c8e1653d17a121dd90da2b9f0e3e": "d050b319754409ff13d20a3e59765a06",
".git/objects/40/1fe0b5b03eb0788b99fe4344d7af55af3be54e": "8fb6fc2a7b6e5cde0d93bd6cd683f94a",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/43/02249d88776742f1e976180d447e1e3d4bd772": "80a6c0cf0a1774ebbe7c19814fac584c",
".git/objects/44/31cbc3f0e73a945e4512debfe36147fd30e100": "7f32c1b893549aa4a57f2dc2e67120b4",
".git/objects/44/a42d3b1065e80101e981c11b7968c683d1b202": "44259fa011949782281357fb9623ccbc",
".git/objects/44/cec377be6c04f71e7b9cfb5a09778adcb77112": "796d66dd3d7f88b8b7838d7f49f5e003",
".git/objects/44/fb97a36bacd891008117143b58a47feb3e6e47": "5d759b97e48f6a55917c46637a3a6115",
".git/objects/45/efb8cfd2f8ffc0108f57b8d921dc44c9ed3445": "0e8a07e54578a43e4c6544b535cc5e32",
".git/objects/46/0985ee406534c13d173259f37c39e4100ae4b8": "f3e1f0c4d94d798d57dbcb3ee4edbb1c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/da25522f077dfe247eeaf28693bb0b8e67d07a": "b9fc32283be708aa8fc1d777cdb3dadd",
".git/objects/47/176daf655712ae1b49a46e561f81088ed17695": "a50ceb11c798b647dbcb44bdada3d912",
".git/objects/4b/0549133b58bf061bb4abc90b07bad50fc58806": "9d865995f1a5599564d908fa4f386fc3",
".git/objects/4b/5608dddef276ac786d2c29d096c976ae7ce936": "a136fc782899cd31e0e0859f2d2399fc",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4e/72a42a5a6e829a11d3cee2d5579dbb09657edf": "19ae0ffe3ddf54f98379871a07f48eb4",
".git/objects/4e/e223b1e4a5f3e55aa5a88af3a92a1a28a28bbf": "a07ea8e94f8cb96406d8927fe31ce03c",
".git/objects/50/b7cf35555d64cdae1c5cb762707385c5ca37e1": "12685ef9b3511f8e7d82a8ce7077c027",
".git/objects/50/cb8a5f7a9f5547fcb19e1e3bdb5dfc4d7f2806": "19e0fa5db1e36f3104296a74b404fa55",
".git/objects/51/e789ee7434d79473f830bb19b34fa9d73e3715": "87e5f37bc70fadab3d10aa66bba839a0",
".git/objects/52/73e39e24c0079afc45622ec0839666b32fcdae": "c53132964154c6c207e8fc39b76b996f",
".git/objects/52/a317fc17743cde8d06cfcd9524d75395d091b3": "395579328e846ba9401d3f621a3bf1cc",
".git/objects/53/d93cfb5a5d6e21037e2a750ce8a2eac44dd30f": "1e9922a38330a418aa6af56e5d3f8f2c",
".git/objects/53/df6dceac0083b59f6df3e8a5a1628d20bb727c": "9a7e35bddd427dd43ba9d7cd88ea9e2f",
".git/objects/54/b2375cca56b36aab3a10eea6212ccf6de7cbb9": "caa6b2ad315a40087893465cacd0b90b",
".git/objects/55/22db38748baa14fcac59ed760115f8506c8618": "4d837ffd40a5a97c7654876e138b09ae",
".git/objects/55/4bd638fef4ab0d8902d48150675cd1ec5cadea": "7e2b154bc5107ef4f517487cbac4d30e",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/55/970039211bdc4676317cc64b1dd6bc28156b4a": "0f2632f016e8f731f7970d9f5ccbdc75",
".git/objects/56/4aee75a1eb43eea1f0603671710b4fa346f30a": "fcf06ae3bc9bc4650dcdf0fcb32f3e94",
".git/objects/56/96adbe4d72ac29e4a6e696613b6feb55186fb4": "6edb0aa470971fb4468cb6d5de7febde",
".git/objects/57/ec2144ad71a85f5f7cd87b534ff6f61ef22d84": "4ecaef7234a77e83bcd423bc11721746",
".git/objects/59/8600e449c98031592f353aa04b53295b157bd8": "84120bcb95324b102d8b064e93c379c2",
".git/objects/5a/bc69a425330f55077dbca38d1d5a7e1ad973d2": "ba3af06a7d78f9e39f864828f2b086df",
".git/objects/5b/5cb3b653648de6a31300d3e3f34182b63bff80": "eca07d52ccf6d34fe7fc98d7cee5605f",
".git/objects/5c/e0a411d4910ab3905cc1ab627446625cbbc601": "f6484a6dfa7c09cbbd1d6228a06aa2bc",
".git/objects/5e/0af69fb0b453f32596e1d0609e4382be3ab602": "e7674c35a1f84f53335e177f69ba964d",
".git/objects/60/08fd4bd1003553c61dd1e99868e714e603ede0": "f7323785e8f2d83a6195dae71ab4cb78",
".git/objects/60/5578d2620215af819b0ec4653555fed7edce52": "a9e2125596f124b455cb71d6e0c00ab1",
".git/objects/61/0e426c6ee5c7485d554a0ab649f35292452bfb": "f1728cdc1cd37036374a087444191a9b",
".git/objects/61/80582111e16eba7c7fc476dad659cc4775e040": "efe53584782d0af2d0e0c779da2139e5",
".git/objects/61/9391693f8da6518a9166ebc0abb9e0fe31f545": "5b4edb50924afcdd056004eb3d079d32",
".git/objects/62/0827734bdcae7d8ae15df7391e3274bae7f6e3": "9fdd95a757d37aa33ee08d184339ed5d",
".git/objects/62/4ecbbf69a59619397b0e24a7903a56e3bfdc81": "cc5dad2e19d576d4c0de2f05daf923eb",
".git/objects/62/d7a9f2aa726fcb256a940b61432bd7ce3f198c": "fbada93386f72dac28c28555b9e4d333",
".git/objects/62/fd0b3bf1b90bd40545f057698912eceeb36af6": "c9f3e6cad3fb159c08d2e605ffe8607c",
".git/objects/63/42aefdcedb94e5cf889d305c38b97ab2428cc2": "85550bde5508dc41e6cc774788ed4614",
".git/objects/63/5c0018d1070bcce16160ffee3278ccb1c8e854": "de1dd90d18aaf5c12718e8e380faa30c",
".git/objects/64/3e0632ec3833f27bba7187046c115e6103a61a": "15bf1e06aec65e56f7a7ec366442cbbd",
".git/objects/64/4198a00636c98d623490b2bd19a6340500a045": "cbc94ac80d722cd30b71c75b610cc4ac",
".git/objects/68/702b15b7efb3fd8847040369cf7e17760fe26a": "765cacf40ae3584dbc360bd1686c6236",
".git/objects/68/8e32aeca4f231152a59f06115d15637b73fe2b": "b33838b7872b2981824484275f595e70",
".git/objects/69/04c2cfc3c72bf84a636af52b372fd3f0e08998": "19da63efa8875cd3621ca7ded8443264",
".git/objects/69/42372b5366b6ed9da63fba029ea38e844d6152": "dd19b0a65a20f214158b32e283142364",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6c/e03489f98c90148e46bb6552d57179a69c9672": "54787d65af04a16f47188f263e42d63b",
".git/objects/6d/1f5c13b5879a45fec80831f96346c655fbe086": "a371686a3d6e1d88bc51a363864c035c",
".git/objects/6d/244cf5a5a0af6b357417432a10d7f6c587f7e2": "cb6f991d99d61ca8b9b14c97fcbc6b58",
".git/objects/6d/4bb7c9a6d6db5bd2bb17d54ff7e9893f4bf660": "3788e25e37abc32a7be431e1b60aaed6",
".git/objects/6e/e0d18ed400ebcdc547154c20f3a18a905de750": "b942b76b66eacd1aeb2d196c4d582ae3",
".git/objects/6f/0fa82f5d6cc1bbb5278a9406855e40c9e54e4a": "ee544e9cc06a2b42cd2cbc54e2e0d7b4",
".git/objects/6f/375ef8b99737545bdbbc263cd064b2f0377cbe": "d2cf08f1b93da6510f1bdca36cc11721",
".git/objects/6f/e678c117447524271fb18b1f922258522d8cec": "ffcf1e668befa30782b8758820aa5a18",
".git/objects/72/3d3d4c000456f1f7efb977b6c776a541cb14ad": "df08270c97753f6b36614b7d39048199",
".git/objects/72/609fb29c5ba63f11134e5338a54f2ec9f8fdb0": "5c1b3500cde97fb18e1bb2ed12f790d8",
".git/objects/72/71f6e55b6805734c3e3f4ecccaed7dcfa36bd8": "724f64edf92a3db98e0d1e6e9d94278f",
".git/objects/72/9dabeab89c526f601dbe12fac6fcafd069c28b": "0b67706b75e151537546cd27fa2d2e41",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/c81a0018d919d67e4331ed5a266517ea951681": "eeb438fcde8054738ee68c24322da62f",
".git/objects/75/8feca7de9a25761ad4ae47b5d99bd501509d39": "12ef51fd429530395b25052ba5a8f499",
".git/objects/76/3e951e3656a1b492388b49f531291826c409ef": "8f666be914e201fb0c3282439012f80f",
".git/objects/78/4f23bf9e463e471e70c5c189a6cd730c44ff9f": "ab22f160636bde9e8a9d57a02cec3f34",
".git/objects/79/15411bb535eccfe13d6d2596fc379689403853": "862e090ae91674fc9a8d966ace9e376b",
".git/objects/79/79d96bd7b899b7da90ae721e5db17bd663e74d": "c200292e0543eca3f41d9c8274439bec",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/1b4a45931c94bd1dff81c821c4dba7c48a134e": "7c89429885c472236147a6c6426a090c",
".git/objects/7a/2c31609d6b3deb4e1b0c3527634ebe1a88dd34": "8eb9fd8a65a3a7dd7328a1f160be249f",
".git/objects/7a/3af65dfcfcda7fc86d62730dbcd9ca6b3e93cf": "52fbd973e9aac2d9393298ebaaeb9777",
".git/objects/7e/37bb93b0c1f8e56ad9258bd1e55db4ecb0434c": "03b14e045921d8ca7895ed36915be460",
".git/objects/7e/ea266e341449d1bb1a3f3f00504863bb10caa7": "c5ec3c9bafd94749385a078544fe8240",
".git/objects/81/0cc5d21ca48dd8190a5488dfc68af992b36e16": "344a826356b76407eb3511db17a35548",
".git/objects/81/baf10b005935fabb80d3a8818cd595b370bc80": "d52dd3f7fe3c97696b1e1cbbcf232908",
".git/objects/82/597a37ca59c8d364d58606b93e5bf0c9b6745d": "9cf8b7b2b88c3c0d4194e33ea6d15aa2",
".git/objects/82/e673bb2793311cab9a6805740ab88dd4c5926f": "59eac1d4a4884f6277e59da413e53eea",
".git/objects/82/fcfa397c0b59458e353425d29f68f9bb1b0d97": "addd3adf9026f79b6c19db8f6d4867dd",
".git/objects/83/33437e76d28873e227039d9df2c014dd53170f": "16323be220e15da2906cc3060196e9ac",
".git/objects/83/4c554da82707f0aa56396f26b38a584353e1e0": "ccbe1dfbd458a269b20d7519604b04c0",
".git/objects/86/e024c2b434ec9f82dfbf7691de1e22a4fadf8f": "0bae29361a794f47f9057196e39f306e",
".git/objects/87/89f84e3810aa810a48f3676b814e8ac0b75019": "201bfd8838e840fa569b26d0a4ec1435",
".git/objects/87/c24728199dfce0bb97e51ace160510a2db813f": "bc2a2c55ff20a4d035f921af045ca1c7",
".git/objects/87/f55c943ee59166841853b07a568bc73ab68108": "2e1e8e5e3563ac448d57cdb7d27d0955",
".git/objects/88/776e96b136cd8be58cc4b4783d29796676b022": "9112a13448712f3b08c7b9d42c180a55",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/3469fa138b5aa0724b88c46f480a46d232c1f7": "8f299e8674fa20fc920f5f0baa50bd22",
".git/objects/8a/88e29f2bb77d79051d9d8fd61714e4934bc369": "67dde2bb012921308d93ac1158575550",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/5e4932216b8be4e9ad6972f702962865fd09e3": "b921e30fc78b7f48e7469e20501567fa",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/541a11ff540dae9bf300d08e8f8e1daff66faa": "3b749f88bdd3793684e4af146b859bf2",
".git/objects/8d/65846cf59f642dfc8da5b3b8c203a6c2b8a5aa": "21a6f8f5cef37de14d9ee9ea04c2e886",
".git/objects/8d/936d3b8f8aa2f379a4fb26631a53f06f966864": "8315f9ed8d5225e7786501c97392c75c",
".git/objects/8e/cad463788eb7948073b61b65132b2bc9b7a082": "f8da4d0dc602ecdd6f33f8e4a2c74d99",
".git/objects/8e/f15b5a826deb3fdffcb4518dd17a63a155d22b": "32048bb1bdeb849a156b4e53323692e4",
".git/objects/8e/fa396334a6b55c352be4434278fe679f2ed551": "bae387355045626eef383279a9f510d4",
".git/objects/90/983e96988efbb2e4cf30648f5f96317d5e3b09": "b7ba8b1a40463f7eb5c49f1257dea0be",
".git/objects/91/2cec9bed07f24206ef9254d4111ffd12afafe0": "d8a3a9bbf9184fae440a8cc85ef19eab",
".git/objects/91/6c9a1aedbc7a75c4fdcf1187e838434fb17eca": "de63d653466fa080b781be3eca98184e",
".git/objects/92/59a2a19f9c8fbfaaea1e88e60b664954511c8b": "7e2fa27d1cde8f6c4f39e627e1f08ef6",
".git/objects/95/6cf2ed021d9a8b93187e7957ba60cbb637e52b": "71aab74e08b395ee5029c0f40e8d5f16",
".git/objects/95/eadef840484c6e53fccc9fd18aa4f702e64b73": "8e84a23c7f49da2c38c2f05815dcce1d",
".git/objects/96/38d3fad0820a66995d5bc72d3a98a06d36e6ab": "28245e3423bb34b16a24f4a9750635f1",
".git/objects/96/75c5c1dffed1e0720ca8f491aa92d91059dd84": "726f3333bb8c060b2d11ae8d9972044c",
".git/objects/96/9981ac6c94bd8f3c35001d49e01f4c10d4b101": "a06ac2f1d1821f555543b01386a76c40",
".git/objects/96/a441680133f6fba988be2ec48bab50475c13f7": "6745bc315cd4459b9e7ae28c7169322c",
".git/objects/96/db08608e6f2df5f4345a6eb301af7b1475fffd": "116f6e5a18b990927b8a84691dff3dc4",
".git/objects/97/82f0a56ab077f26c1aa372943c62b00ef1d280": "8bbf43c5b15b080821067fcc1407e409",
".git/objects/99/e866ae664caae8fee0cb42cc53879accd37ca3": "2f65f27c910b6e2c7b4d3f18d7545246",
".git/objects/9a/08a55d4c3186c0ec19f5d8325c6c337bb9609e": "35fa62031fb21ca337c523d9ab431736",
".git/objects/9a/488c7f2f095b6d54a6ef320ddfdc41b57dd4e5": "40e6be0708a7d7b25bae7f6eaa1ef8a4",
".git/objects/9b/b3aafb1b24631a9e2ab71c2c0b9b984a1aee38": "3452255cd6b25d6eec98a3222a19e946",
".git/objects/9b/c6b1dffa0356e8d2a89a81dacc57e1b0a5a827": "bfd5794af8f43457704e95535e21e62e",
".git/objects/9d/2a3f52425fc0d1bd15fb300222c8ecef59718b": "b2a46cbf4e33191e98bc76edf9491b4f",
".git/objects/9d/b78cb4b0542357e83d1b06ed446f2475382025": "3c96689a1bf6923fd4503229041f363e",
".git/objects/9e/85119f2506b8b72f001bfecc46adbb24475064": "de3e4b18abb457b7fdbeec15f017f038",
".git/objects/9e/9a0dff912cac6b0f5d9bdd184b11077e3cdbdb": "5adca14dc8ca51ee0c8bce10acc312a9",
".git/objects/9f/41cc7285fe3f416c82354b989e6cfb293cdd93": "b31284f469550e06b91bde3ea43ed13e",
".git/objects/a0/6c13dbfa4836c398e8646a567ee4ed98cdd1ea": "41880831e0af6a9f3cb5cebdad1dc2d0",
".git/objects/a0/760ae0143e728f85e46b64ed733224ebbd4190": "eea3fd0f73728e8925c4314c41db8b6a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/7738b75f49125380bc3b537bbc4256120e897a": "8acfe722854c2049f80f016dd15b5c35",
".git/objects/a1/a14589bfa039892bb08a9c529ed15c7c320733": "375c88e26c93483be83afb6d17be0d8d",
".git/objects/a1/fbae4a58234141da3bca602b5afe57ea0a5a15": "66e05101065d8ed718eef34039e595db",
".git/objects/a3/deae361bac0648741e53d5b1dcaf96d18c0e81": "ad918dd445a9646398c5ab94ada7ca1c",
".git/objects/a5/97e5c48786b1ed39d6e171bda7830e8214b6eb": "d08c4ddff4e9c76145c2309329dc0c5f",
".git/objects/a5/aba1b65ff7b7085348d003fb94c7e76ff92c05": "614d4a9f97d67b87f7b956556361d03e",
".git/objects/a5/ebc8f5eb8ef83a352c1224b25e7a2625bf8dc4": "641d3b287a2b06731d9ee97ab3676282",
".git/objects/a7/18bd89be7fe9716a503b979ee99eb59c2e49cb": "f68c64fcc026a62ecfe8bee60ae9a24a",
".git/objects/aa/442d71c965081d4332dd2c7e1791551ea8c665": "78e4db6ee3df904854850bb6626251b7",
".git/objects/aa/928f724440b6053061fac976fcd55aba9e53d1": "2724ea5355f1b861a1260e10366ed3d2",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/3150371fcbbd1fd0b947fa8030d7e63e8bd44d": "33eabc42e8df1ac9f58a95534becc0c3",
".git/objects/ac/5ea27daabf0be97ad1ae0da819e2bf6e45a6ce": "124ad1fd2f8148106b274c6a5989afcb",
".git/objects/ad/9aba07aad6a0b742b76a427d681ae582e2e813": "d60c9711c196b4c1d6ccdb0dd402c5bc",
".git/objects/ae/c7e011f5188cb1fd803daa4eb4e9ec8afe9ec6": "b0427021974727e492ab8d21b63dd8c0",
".git/objects/af/0c76e39642433c911ca4da146e8b77ffd1730b": "978efb65ef08c96c7e3b06065db35934",
".git/objects/b1/1d42a470e74aeee111f518af39a2eb6ea2d1e2": "93ad14b48a16871c4c8877249a112811",
".git/objects/b2/0119a2bf09746cd433531b3a5cd27e29f2ffa0": "5768ced89bbba4a019fe9e5995c9931f",
".git/objects/b2/d2723d9478b0a13c2f075fcc37f80038718e35": "c9b12a9a398fa6629f7959514b6a5a1e",
".git/objects/b3/97611864a652f339ece32b9a26b90f5790b112": "480fbd33558b24e784a06bf34d7378b5",
".git/objects/b3/c1812dba97c8678b78caef691477da35d71ee9": "b312cd7641308a87464601190eeb6e49",
".git/objects/b5/894413e7ac99433503e678ab1ed67bcc2b6647": "a86daeb88e5e3e361d438ac60798a3cf",
".git/objects/b6/29859620143bd4b8a7123d921abd05aedbbf3f": "3e1455c581cf3b39ceb171b6febec036",
".git/objects/b6/df31a5ae1055a24520464b83729628be8a76a4": "8ba1e8e6ab999f28508e3c2c84bb024e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/4bfb2c1df08d041fbbe81307433dbc63bc2620": "05adf8d2991a7a16cbdd5ee6b4839065",
".git/objects/b8/12c9a4800edbc06dcebbb60b971da494534b45": "5738384c27687e26790975726cd75672",
".git/objects/b8/20061d67bfd088ce0c273894374b3be8f4934d": "32e6d4dfc756cc8a8073caf76ce126bd",
".git/objects/b9/07395f8eb33952e4779bfc7d64c2231230a973": "aa46d9d8e71d8e2a70610d4651eae984",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/f0b20b67e503918ca4de37580274d4a7b75bc0": "1e456c8657c7dc8d17229d23a6b186f6",
".git/objects/bb/f23062c51bfcc2462ef5fbb6f9148fdc753be6": "169e7e351afb4496fd54ab7583831694",
".git/objects/bc/19a1141a1926aab3cc8018abbd71b76403d522": "5e281b0e5c8d68e4c964443b44e11a65",
".git/objects/bd/a9965aae6bec1e37da42027aa7e530420a3192": "ab741632abcfc14bc40e0f8a8a08a917",
".git/objects/be/48dfe544cc2eed0fb608abe051ee9777036d06": "6b3ee3d1039907917c704b8b5d01e2c2",
".git/objects/bf/759881201051b4a5c0708cfd3a252e3106cfef": "c02a7e0d39ac919d345a60c10cbf8c95",
".git/objects/c1/6d19f8558cb2c3028f95b4e2fe85534ad84520": "63d1914ea9efdc99b385299155c80cc1",
".git/objects/c1/e988c53d8bd39aca6400f8b93129e333a62d5f": "0365e8a5cd441a8f7283598a04ad6153",
".git/objects/c1/fe3d86918d3d6097e06bc6b6ac1c01dad885a3": "ca2e31c64d21e5fea35d6c32a1cfa074",
".git/objects/c2/6985bf475ff92755b14d001fb2f390498fbdc2": "2a2b4aa154847932c32d12357ce5eb7f",
".git/objects/c2/8074598f183daf6acfc300537cb9ab56b61a46": "802dad877a1ffca38d185952795daa68",
".git/objects/c2/917f6cb862678b4bb43951bc704a5ba172215c": "6859e2cba8d166a563eaa11a8f899fed",
".git/objects/c2/c2d1e92053d0ac052a0c847a6f35a31e75760a": "1f7524457bfba78b522b6859806c0674",
".git/objects/c3/105f4bd97c36f4f342f80ead65defa2d23ccee": "16dbed2b3361e99553af244ed1abaa74",
".git/objects/c3/60562e06a2bba4adb2022883f49a19cc658f00": "91ebaf66ff55b2e159dce265ab2e1a57",
".git/objects/c5/73233ec4915e507c5bfe3dd4b0af77deec2163": "1c27e59a548f5fa7b43a86d39f066232",
".git/objects/c5/7410d4baaeb2fc3e5011074350edf3f10d6538": "4d7beb8bf6a96ed45f3d1a695f73dafc",
".git/objects/c5/81277c112d83dbea72835a71ad968bcb78f33f": "935bdb99e55aad0aca9c1b6c3467b877",
".git/objects/c5/93fcaf374bf6c7b5b8a8cbe50d9dbff4919b94": "bc46b0e3cd6c47a04b80af8b79b6051e",
".git/objects/c6/26356aec8830fe90a42dd4b0e815ff76759845": "57a30487213142f0dae045221ded4449",
".git/objects/c6/40805ee0adfabb9376c13b44c1778c92a4a3ee": "6e15cfaf433653d1c690ac3b4936ddae",
".git/objects/c6/bd02c115dde45334a43205b1c362ee37e1244d": "df4cbed9a4644890f4d63e4dc2d99e1e",
".git/objects/c7/1102ad7d885f5783e1fb550e889ad3c6467c9d": "61a688ea1d2b3d395c0c3a63681c55b7",
".git/objects/c7/968606b72f70a5b9ccb8c5e0372b632b7a5079": "3aded90881cd2b154602dbec5077f99d",
".git/objects/c8/65d57c740a4d517a15861993496d7ed5644bd1": "f2433412b1935a6c44ec5f689186dd45",
".git/objects/c8/a6f82e67776b4e2d8f500a6ba2f3712ecd5d82": "6bd3bd966e3749403b2b7442b20f70e9",
".git/objects/c8/f1a489955009d117e0d9ed0ef4e2c68ee7a621": "ce56d0bb7e9e9a604030557d790160ec",
".git/objects/ca/1588915520143866a9fd2db7e6540bfae4fd5f": "3d3cc3531491bcd16588f87f9a02293d",
".git/objects/ca/288c2d6a25effacc7159e8ab0506b19205de59": "6e458cf3741534b040935ad154b25b0d",
".git/objects/ca/dcaccbefb418119d19c8a540bb4be109a29b93": "3979d82299e523acfca3e99a2bad1497",
".git/objects/cc/a1172acbc5fd3a961721c8bc152ec1da08ad76": "3b7c66ae44962c983d038c888db3a760",
".git/objects/ce/a615755110aa2a2fb9cbf8289c58b39fb2a098": "b379703711f423aac0cc9d99b91c5e99",
".git/objects/d0/5d0673c0db84c467313e58049e4d0104819833": "1044512324cbfa48d7b228cdf5682a0d",
".git/objects/d2/fcd9786888ecf8e2fd15bba969ba0717fe1f3e": "bdc44a5e5eaedf3b78476a17bc1e32b0",
".git/objects/d4/447ae5bb516eb5463329977bb2615489da5ade": "b391a2d44b3cc117aadd0695513386ca",
".git/objects/d5/0c4bf8455c434aacb2620f27129e138a9ed923": "fe935cb500c65e8b4a94e8609144eb2e",
".git/objects/d6/636c424ed923168f97d3a7c26e89db994e2207": "1ae1888ff154c68370633b582d6285a6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/9d0e3732484e01f6fb385e1c716555d3892e4a": "aa7c1d160c3a7e2f8af51ef6ca131a20",
".git/objects/d7/3e2b1d9ef1ca4f255303ae6c45b0962e526c31": "f5e50bdcfcedb24d3802baf60c4f3ff1",
".git/objects/d7/b43bdb9e1b3d3e7aabf2ab2314a12eda86c164": "978a770c0f18db12ca1856e11adf9e31",
".git/objects/d8/30ce447c41c7f3434b45b2d16a05eebafef063": "5c3eca7135a53527fd6cbf19a781b6f0",
".git/objects/da/b614aff66a03f8956fc76edc12e26eae9b8c8c": "85469691bc8062dae68bd9d1d28571fc",
".git/objects/da/e92471fbf54acdc243108343096de67c1036d3": "b9d1364bc8f631edd2a68f58f79297f7",
".git/objects/db/21d5196dd065860a8654af56dd573a8e16b1ff": "c36370b798109020de4dee4bbb85ae51",
".git/objects/dc/b0fb368c562cab71b02ca7d76368edd8706ea0": "56077a1bae4d230df33ce3c3898b90bb",
".git/objects/dd/5d4f57d4f0809d24f52928d93882c24940dea2": "c1e9a7e805cfa114f9204d37190cdaa1",
".git/objects/dd/7d8e7885b6c7a3d5c0824a77fd6577c04c5187": "fce1c3e806c6359fcb0ff65d80c2ba99",
".git/objects/de/0b5d201dbad7541f5fd04fd616e42e95d6a3f6": "cea0f19184c1d4a546f2ba3194d2c046",
".git/objects/de/24f792363501760d052af16af3fd08891edcfc": "8727faef43c1547f283e4091d9dc13ee",
".git/objects/e2/03985a7f68a1f38f64a15a0dd3c09f4315085c": "4a684d819f2314efd749ca7c5ba92292",
".git/objects/e2/76561f85fdf4f23bae617dfbd41536f8c769cf": "693bb7af9fcd4f12ae76f2738f50b516",
".git/objects/e2/7eaca6565785282b3edee64e0de06f0539ab78": "05c1c7930a7995202b4a18e696f197d2",
".git/objects/e3/bece704b58d991673c37f5869b9bc9ddbb900b": "f07295bc0fcef9acb5a72a5b0b3a8157",
".git/objects/e3/c13f4809fc23dea979ef02a953ad306da39bbe": "417368007ac1a21b05553433862da7ee",
".git/objects/e4/48e6327dd90dcb40f3f050ca5f5f14dceb1de1": "681f0323855a43d26995e1526eeac42f",
".git/objects/e4/508168618fa4243edddc471b2c7bb17e5f3c2c": "ba686a156ddd6705a450f84f506ac370",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/4badeb5a00bd4d99a1d407230531e96eab7460": "03090a2027dae3b083b448dd93503b45",
".git/objects/e6/82c2b7828857e183087adfad454a694de75c71": "3ebb72d533288c84ff004e6a4145f870",
".git/objects/e8/a3915ef64e9aec8f7ee3433988ea58394ea726": "35f0af3f61686b496b5ab8606ff87571",
".git/objects/e9/63c5593e52f5054081b2d136d50e3197586af0": "47c1c3fdc066b7ba8487e5dab283378f",
".git/objects/ea/0d43bc19db831d94ca94ee35c13eced5c5fdff": "afd986d9b1ae71391c5ee028449a44b9",
".git/objects/ea/ba17785a30ca81e8c2a8df92c0a451bc59a60f": "b8fb4136c37b080f4a31464096eacb55",
".git/objects/ea/d43ed5725a250f67ef5f12e068a680564fa58b": "e3d93fa8198cbc4ddab49edb0f9fcbfd",
".git/objects/eb/78dce1c8a5082b4f6a9d3f101d4a7e3b84ac7a": "e6c7ea8efb86bfa636324e380e3f51cf",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/0bd3519467c4aea289ba6ef49bb5bcaedab41d": "0d9fd482f9219854e9450b4fb7985d5b",
".git/objects/ec/2d2edefeb003dc9dc9f95441dfdca29cbb504e": "4add869c16ceaff50995685d85bc6939",
".git/objects/ec/58af60eb3b1f05a6d5edd2e518de50909621c5": "bcaf4777264206d48ebebaa6fe41d7b5",
".git/objects/ee/8451c7ce3def190fef437fc841b22ee353051e": "b1d8176ee74dce5aa9fb4bc30dee11b8",
".git/objects/ee/dfffbe3fc1dc38bf741f8faa9ae9f198d38135": "2e72e5fbeaceb0f697c9d87436a60c20",
".git/objects/ee/f85cc3ee8afebd81aac8af43e6e0f4dd1de587": "c2cac1ee40a1d17d4d7d889a26bc7a1f",
".git/objects/ef/d840ac716849ed053811b37c2d356bd78ca094": "a79d01e4a497816adc46330cde8c9663",
".git/objects/f3/4ec9b0b24ee8f505deba664de0331cba6bd8f0": "0a2ceafb056503a0e5d575db5b2f8a04",
".git/objects/f4/1fea665d58021577fa5c06efbed952ee2d5797": "92f9ffe939eddd10728b003cfeb583c0",
".git/objects/f4/c70703382cbdfd03c3c7f07d02b4bbae03eeb8": "e8e26ace0371be030d4216e6c41d956e",
".git/objects/f4/ff9bfb36fafd12bc3bf36b2663e7e8eccfd478": "c7589a19d889f219435e94464bb6c3c3",
".git/objects/f5/d5005cd8f6dbac4529c4f5d8acbea2ef75a961": "b7def977105ff8a22f8c08428f991a0d",
".git/objects/f6/99efb073dc6048914b19afbad7774cf5add230": "e1c57cbee756e57fe8ea2ce12a7e1c40",
".git/objects/f6/b58080366ac68fc5bff991f77058faa1c0a1e0": "4020bb3af201c282d55495545bef9ae8",
".git/objects/f7/32a8c0fb2528086d5b97d913cd8e62d1704fa5": "c9d3ca5329fcc8a9e0b3c943bb06f859",
".git/objects/fa/d4c9648a94743b4369c4b19b817fa6bd6c04f0": "f73e9f41889f657bec756cc38d146ff3",
".git/objects/fb/9ce62f8ab12d8be03d4ecf1cff825f52cbcf83": "45c6d952df56e2155ae9ac6d9137a780",
".git/objects/fb/b15eec4443a16fdf3919c914e147e6aba9dda0": "6c3e6324669fff732e1958248cdeb011",
".git/objects/fd/95bfb240cc0a3334c91d84939f5433a064bf3d": "8c009b8c44c1adbaa840d1a68d58a3f2",
".git/objects/fe/edd9ca6f0ca009a3c22b84e2a832eb5c318828": "b99ae797a4cf86051c9edbaae78cc837",
".git/objects/ff/44a35daca06f266e9265e5f4a5c0fd6d864b2e": "7442fc197cc797086136858d0456acd6",
".git/objects/ff/4e8dd9ad148bd01b151b2ad893fd8ce4de2930": "37bdcbbee92bd503510e473b3973f703",
".git/ORIG_HEAD": "bc0d4847389dff5381799ee6cf56347c",
".git/refs/heads/master": "94a086e89a1715f3e986a0470f5e6a3c",
".git/refs/heads/wip": "f5d1abec5047abc6481aaa4c90f748f9",
".git/refs/heads/working": "73ab3d8a83a91aab98323b74d15fecdb",
".git/refs/remotes/origin/master": "822efa5e940f8435d84dd37c59b5cd20",
".git/refs/remotes/test/master": "94a086e89a1715f3e986a0470f5e6a3c",
"assets/AssetManifest.json": "ab1a315e86e520d080c96fe618458412",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/loading.gif": "f4404720ece11355df318a0acf525cb1",
"assets/NOTICES": "e685cadf6e48a70595bd3a6040ddc528",
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
"index.html": "ddef941107ac66d7b31ec752cd363f0c",
"/": "ddef941107ac66d7b31ec752cd363f0c",
"main.dart.js": "4ef01949c1a004b9eb16f35835048761",
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
