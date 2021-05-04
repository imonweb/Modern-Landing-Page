const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'myBundle.js'
  },
  devServer: {
    before: function(src,server){
      server._watch('./src/*.html')
    },
    contentBase: path.resolve(__dirname, 'src'),
    hot: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(gif|jpg|jpeg|svg|png)$/i,
        type: 'asset/resource',
      }
    ]
  }
}