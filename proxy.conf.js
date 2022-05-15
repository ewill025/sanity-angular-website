const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://zxvren4q.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;