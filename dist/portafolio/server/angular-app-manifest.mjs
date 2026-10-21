
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portafolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portafolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5054, hash: 'b613771bdcef2d9be1e0a69a58331a64fd8a5e8e258fc1835a512ea75a623e8d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1175, hash: '2ed82874f81e65bdcb1c0a03c99038878f0eb558a2f3a4f36297ab6f596a40eb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 13135, hash: 'b1750064b8c62e7dbe8ecc384384f3dc52293ea33b5e546bbdc9397d3f09c0ed', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-TOLBBZK3.css': {size: 322661, hash: '4cprWWn3rZI', text: () => import('./assets-chunks/styles-TOLBBZK3_css.mjs').then(m => m.default)}
  },
};
