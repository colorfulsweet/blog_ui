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
      //sass-loader?outputStyle=compact
      { test: /\.scss$/, loaders : ExtractTextPlugin.extract({fallback:"style-loader",use:["css-loader","postcss-loader","sass-loader?outputStyle=expanded"]})}
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
    new ExtractTextPlugin("css/[name].css")
  ]
};
