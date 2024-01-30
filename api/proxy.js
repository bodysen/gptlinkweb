
const {
    createProxyMiddleware
  } = require('http-proxy-middleware')
  
  module.exports = (req, res) => {
    let target = ''
  
    if (req.url.startsWith('/backend')) {
      target = 'http://65.49.198.13'
    }

    createProxyMiddleware({
      target,
      changeOrigin: true,
      pathRewrite: {
        '^/backend/': '/api/'
      }
    })(req, res)
  }
