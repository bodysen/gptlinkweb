
const {
    createProxyMiddleware
  } = require('http-proxy-middleware')
  
  module.exports = (req, res) => {
    let target = ''
  
    if (req.url.startsWith('/backend')) {
      target = 'http://43.136.45.112'
    }

    createProxyMiddleware({
      target,
      changeOrigin: true,
      pathRewrite: {
        '^/backend/': '/api/'
      }
    })(req, res)
  }
