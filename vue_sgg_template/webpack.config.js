const path = require('path')
module.exports = {
  // 开发模式
  mode: 'development',
  // 入口文件
  entry: './src/index.js',
  // 输出文件
  output: {
    filename: 'bundle.js'
  },
  // 配置webpack-dev-server
  devServer: {
    // 静态根目录
    contentBase: path.join(__dirname, 'www'),
    compress: false,
    port: 8080,
    publicPath: '/xuni/'
  }
}