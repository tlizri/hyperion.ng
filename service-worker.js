/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "402b87cfa2c17af4eab1a2bf6826f7da"
  },
  {
    "url": "assets/css/0.styles.83e9b54b.css",
    "revision": "7e79518fc38022b193001d03e78fb6af"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.deb989d3.js",
    "revision": "62389e465e373785d5413f0b224d8440"
  },
  {
    "url": "assets/js/11.898ad007.js",
    "revision": "6c496433aa5e60819b6631436e2eba12"
  },
  {
    "url": "assets/js/12.d089833a.js",
    "revision": "a741c9624f3d8a0e411b643afff76835"
  },
  {
    "url": "assets/js/13.2a361842.js",
    "revision": "7e9199cdbdbd0e802dfed1b220c9eaa4"
  },
  {
    "url": "assets/js/14.479db1c2.js",
    "revision": "7a64e71e655c114aa5fc29f46df8dc64"
  },
  {
    "url": "assets/js/15.c0189512.js",
    "revision": "d206206d396a3841605bf44c6bad0727"
  },
  {
    "url": "assets/js/16.5f700cc7.js",
    "revision": "f3bfff2ac6b9e3bca5070d8fbf05bc70"
  },
  {
    "url": "assets/js/17.aa237108.js",
    "revision": "3daaff475b530ea894a475f759113277"
  },
  {
    "url": "assets/js/18.bc1873c6.js",
    "revision": "8a0e104c54a8707fa386e8c441edf4c7"
  },
  {
    "url": "assets/js/19.8b4b7fd7.js",
    "revision": "7fd976f1d40ff6bd29974ab8a8e79f86"
  },
  {
    "url": "assets/js/2.16f09a8a.js",
    "revision": "a504f9f01bc0d3179efde3b3981f4aad"
  },
  {
    "url": "assets/js/20.0328b633.js",
    "revision": "1e8246a96630c5613ed0d64e6738c52c"
  },
  {
    "url": "assets/js/21.128cc2e3.js",
    "revision": "b152b69f1e787425a7d8519aaa590765"
  },
  {
    "url": "assets/js/22.4aefa64f.js",
    "revision": "3403a4f7a75cab785e6a5db2aeb53941"
  },
  {
    "url": "assets/js/23.f93b9616.js",
    "revision": "1594734229a1633f918f4d2ca27a661b"
  },
  {
    "url": "assets/js/24.42e74286.js",
    "revision": "c250ea83303ab588d8f686d381a20a64"
  },
  {
    "url": "assets/js/25.4563c1cc.js",
    "revision": "2a39b84e286d4c2b3e96be5af520dd29"
  },
  {
    "url": "assets/js/26.edc2a867.js",
    "revision": "e6ecd81d96136e1aae5309cabc1c9ac4"
  },
  {
    "url": "assets/js/27.9f9c2bea.js",
    "revision": "c610188bf7a9949b2234d8683cb1c31e"
  },
  {
    "url": "assets/js/28.6af3c074.js",
    "revision": "67d5af5e203f2e676b7825f149df7d61"
  },
  {
    "url": "assets/js/29.e3a34eb5.js",
    "revision": "dbbaf77c857cf0eaa1195e03c9208e38"
  },
  {
    "url": "assets/js/3.d2a9a079.js",
    "revision": "ea74496abc2f6e3640be769782209858"
  },
  {
    "url": "assets/js/30.3bca66c3.js",
    "revision": "f51780e9019c46eb18aac319e8d289e0"
  },
  {
    "url": "assets/js/31.983dc35c.js",
    "revision": "0e46fb81e274470dcbe72a336b3ddd1f"
  },
  {
    "url": "assets/js/32.48c0800f.js",
    "revision": "9c0042519a6494ede311d0e65c83878d"
  },
  {
    "url": "assets/js/4.a333783b.js",
    "revision": "128f774d010919dc013857a7047074af"
  },
  {
    "url": "assets/js/5.47840f41.js",
    "revision": "a5d6b56f09fd5a5b1268be5c75fe4f48"
  },
  {
    "url": "assets/js/6.9367514b.js",
    "revision": "8a995a5da7354f5f14e80fefd9f13cf1"
  },
  {
    "url": "assets/js/7.b7ccec3b.js",
    "revision": "b3b28897d718335993b9c941ef122c30"
  },
  {
    "url": "assets/js/8.926dd2a7.js",
    "revision": "246ae2298ac408cc28d222180b5e93fa"
  },
  {
    "url": "assets/js/9.131f33d8.js",
    "revision": "76db65c8f4fc644723a12eb0b9006869"
  },
  {
    "url": "assets/js/app.0d1ef13a.js",
    "revision": "e19415f557fc008fe1897fcee2a66218"
  },
  {
    "url": "de/index.html",
    "revision": "c942f95d24bdfc64f24f8453ce1d8754"
  },
  {
    "url": "en/addons/API.html",
    "revision": "3e4716380070d0e93f4d9505ca1afe71"
  },
  {
    "url": "en/addons/index.html",
    "revision": "73a8d8675c13428db093380f9e2d269d"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "4751434218692a464753869321bf5c25"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "bc980776c5c49db656f154a3d5bc285e"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "4a12086b1c7555f063b9662f611e9255"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "2638003a7069aa9010c8cca5b3a6d9a0"
  },
  {
    "url": "en/effects/API.html",
    "revision": "27930bb23c8e5e1094f84451df20838c"
  },
  {
    "url": "en/effects/index.html",
    "revision": "af1da9fb5bfeaf7b7b615277d2c74ac2"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "854b923027607bcfaa15d49903aab341"
  },
  {
    "url": "en/json/Authorization.html",
    "revision": "56f99b1c6b183778ea00c15032e65eee"
  },
  {
    "url": "en/json/Control.html",
    "revision": "2b8b0aa3ff97f73851455a909055b861"
  },
  {
    "url": "en/json/index.html",
    "revision": "0af6c20728ed3dcc11c19abd4ca118b3"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "9df2a813a5e0d2f7b84f114e2f4495a2"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "9a066fe50329ceb5bce6ff5961e46148"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "c92ae2d5ee18982b5ac04c5b82d2a247"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "01fedd88f69777dce98dec02ff12e8fb"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "88d364741c73303fa42c9db168c8f603"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "93fa01c34d6890c951f726ea6f4c73fc"
  },
  {
    "url": "en/user/index.html",
    "revision": "513dcc3300aa8644dc9631044c48941a"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "7e1a7f454564dbdac1cd79c62ad0fd5f"
  },
  {
    "url": "en/user/LedDevices.html",
    "revision": "3ab46280492fcb70ee35e704ed66153a"
  },
  {
    "url": "hyperion-logo.png",
    "revision": "a61c2897f7c473e2eb50bb0df30a2bc6"
  },
  {
    "url": "icons/apple-icon-120x120.png",
    "revision": "63f00e195c64cda121c7d2330c99a5d9"
  },
  {
    "url": "icons/apple-icon-152x152.png",
    "revision": "b3f85243493b66283e9b211f77f71a07"
  },
  {
    "url": "icons/apple-icon-167x167.png",
    "revision": "4ea88cc5726dd7315e5a473e56687228"
  },
  {
    "url": "icons/apple-icon-180x180.png",
    "revision": "f8bba7d61a5cab951fe066623c02741c"
  },
  {
    "url": "icons/apple-launch-1125x2436.png",
    "revision": "ffb1e20b518568ed59261a42f87e4f99"
  },
  {
    "url": "icons/apple-launch-1242x2208.png",
    "revision": "9738032cfb23a0c736e6b5fccc9da1b0"
  },
  {
    "url": "icons/apple-launch-1242x2688.png",
    "revision": "0193da5b17e7c3d57b19f3e08f9d359f"
  },
  {
    "url": "icons/apple-launch-1536x2048.png",
    "revision": "8f778d6bdbc67ff34a353ae9e3756447"
  },
  {
    "url": "icons/apple-launch-1668x2224.png",
    "revision": "4be8be4f5c91fbbadcc9a7a9fe637c67"
  },
  {
    "url": "icons/apple-launch-1668x2388.png",
    "revision": "c6efb8bc9dc6730e43279465694fb52e"
  },
  {
    "url": "icons/apple-launch-2048x2732.png",
    "revision": "84da7f152d3da667016e3d249b5c98f6"
  },
  {
    "url": "icons/apple-launch-640x1136.png",
    "revision": "ca0fa8f49e407353d74fdc385e626e51"
  },
  {
    "url": "icons/apple-launch-750x1334.png",
    "revision": "b8c5a50ec54f7c5cfec32526caaec2d7"
  },
  {
    "url": "icons/apple-launch-828x1792.png",
    "revision": "d3a480406c6d8dc0434bc2b902f08743"
  },
  {
    "url": "icons/favicon-128x128.png",
    "revision": "0b314f289997f6f5489c646b6237daf2"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "167d760fcaaab2e1721103ea5f870d20"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "2e72cabfbdb490eb07e9e495c44e7864"
  },
  {
    "url": "icons/favicon-96x96.png",
    "revision": "e3dffb3e2a42e995586ecaf06028cf1c"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "0b314f289997f6f5489c646b6237daf2"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "07073a715397b8b990a943eb33787bc4"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "8927ae62b9fd820ce2a2ddbc45bef300"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "15e8f17118fc38ea636003eb6588ace1"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "e22610c473148f53d8237252cd333e98"
  },
  {
    "url": "icons/ms-icon-144x144.png",
    "revision": "bd3afe00b914d0768c7a398bc0062eb7"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "146f0e1ea346388f72176e58d5f68177"
  },
  {
    "url": "images/en/avahi-browse.jpg",
    "revision": "17a5d14a7fdc7ac22f0d0932763b1ecc"
  },
  {
    "url": "images/en/http_jsonrpc.jpg",
    "revision": "62d9e3005e7459a2ec04cb21d8b53b78"
  },
  {
    "url": "images/en/owneff_1.jpg",
    "revision": "42df0877dec353c8928386585e8b29b5"
  },
  {
    "url": "images/en/owneff_2.jpg",
    "revision": "95b8085101c2786b888e4ed29482dac5"
  },
  {
    "url": "images/en/owneff_3.gif",
    "revision": "94cd6cf07479827a49482b8c66fb66d8"
  },
  {
    "url": "images/en/owneff_4.gif",
    "revision": "86b86b1d3c2fb754c6c9b2ead9ea43a0"
  },
  {
    "url": "images/en/user_bbmodes.jpg",
    "revision": "e9c2447c1192cb239ba701ae90144624"
  },
  {
    "url": "images/en/user_config_access.jpg",
    "revision": "9eb2bcea2c51f1096998341c10cd82ca"
  },
  {
    "url": "images/en/user_config_dash.jpg",
    "revision": "caa761bb871f030e674b6e8122bf3449"
  },
  {
    "url": "images/en/user_config_lang.jpg",
    "revision": "daadcaae67af7419fb737ecbd558408d"
  },
  {
    "url": "images/en/user_gammacurve.png",
    "revision": "1bc6325ef5dd3cafa09d40d0e4f65d8b"
  },
  {
    "url": "images/en/user_hyperbian_ssh.jpg",
    "revision": "294a39092c04a7880011cfd796e3b194"
  },
  {
    "url": "images/en/user_hyperbian_wpa_suppli1.jpg",
    "revision": "0c8f576283244a8e8eb5ec01d9b4c3ae"
  },
  {
    "url": "images/en/user_hyperbian_wpa_suppli2.jpg",
    "revision": "928f049e2b9e69a159be4a9bd54d4bc4"
  },
  {
    "url": "images/en/user_hyperbian_wpa_suppli3.jpg",
    "revision": "4dfa192aac47e5fc899d5b47434ed036"
  },
  {
    "url": "images/en/user_ledlayout.jpg",
    "revision": "2815e5ab254a09a7c24af33d169c0e66"
  },
  {
    "url": "images/en/user_ledlayout1.jpg",
    "revision": "6da17c4ff33ca70b66709f4d924ae865"
  },
  {
    "url": "images/en/user_ledlayout2.jpg",
    "revision": "fa9d66601d016ac2ed520b93eff35bee"
  },
  {
    "url": "images/en/user_ledlayout3.jpg",
    "revision": "dcbaae37bc6bf1c23cf57a43d3bef19c"
  },
  {
    "url": "index.html",
    "revision": "0fa9827d908e541153d2daba9fbc0daf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
