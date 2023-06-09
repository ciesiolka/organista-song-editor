const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~@coreui': path.resolve(__dirname, 'node_modules/@coreui/coreui/'),
    }
  },
  server: {
    port: 8090,
    hot: true
  }
}