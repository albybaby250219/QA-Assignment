const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        quality: resolve(__dirname, 'views/quality_assurance.html'),
        security: resolve(__dirname, 'views/security.html'),
        badexample: resolve(__dirname, 'views/bad_example.html')  
      }
    }
  }
}