
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 12172, hash: '659e28fc558928b6df448ea5ccef7b74af154f515953251a761efb32a31a3b2c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1560, hash: '525c636c3148bba5cc7a42e579ada8f47d8b00935994eb4dbcc05f4144f2d383', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20407, hash: '1d2cf86f3239c5633947ef923f242e526605299cd334eb7bd86e705515d29919', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-EYJ353Q2.css': {size: 330224, hash: 'Sg2vaBNy45E', text: () => import('./assets-chunks/styles-EYJ353Q2_css.mjs').then(m => m.default)}
  },
};
