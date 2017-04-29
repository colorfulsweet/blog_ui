var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: {
    entry : './index.js'
  },
  output: {
    path: __dirname+"/dist",
    filename: 'js/[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loaders: ["style-loader","css-loader"]},
      //图片大于20KB的交给file-loader处理, 以 文件名-8位hash.扩展名 命名
      { test: /\.(png|jpg|jpeg|gif)$/, loader: "url-loader" ,query :{limit:20000,name:"[name]-[hash:8].[ext]",publicPath:"../",outputPath:"images/"}},
      { test: /\.scss$/, loaders : ExtractTextPlugin.extract({fallback:"style-loader",use:["css-loader","postcss-loader","sass-loader?outputStyle=compressed"]})}
    ]
  },
  plugins : [
  //压缩打包之后的js
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  //写入的文件
    new ExtractTextPlugin("css/cnblog.css")
  ]
};
