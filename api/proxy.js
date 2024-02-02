
const {
    createProxyMiddleware
  } = require('http-proxy-middleware')

export const BACKEND_HOST = import.meta.env.API_HOST;

  module.exports = (req, res) => {
    let target = ''
  
    if (req.url.startsWith('/backend')) {
      target = `http://${BACKEND_HOST}`;
    }

    createProxyMiddleware({
      target,
      changeOrigin: true,
      pathRewrite: {
        '^/backend/': '/api/'
      }
    })(req, res)
  }
