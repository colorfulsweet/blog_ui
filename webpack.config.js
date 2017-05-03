const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var baseCss = new ExtractTextPlugin("css/cnblog.css");
var fontCss = new ExtractTextPlugin("css/font.css");
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
      { test: /\.css$/, loaders: fontCss.extract({fallback:"style-loader",use:"css-loader?minimize=true"})},
      //图片大于20KB的交给file-loader处理, 以 文件名-8位hash.扩展名 命名
      { test: /\.(png|jpe?g|gif)$/, loader: "url-loader" ,query :{limit:20000,name:"[name]-[hash:8].[ext]",publicPath:"../",outputPath:"images/"}},
      { test: /\.scss$/, loaders : baseCss.extract({fallback:"style-loader",use:["css-loader","postcss-loader","sass-loader?outputStyle=compressed"]})},
      { test: /\.(eot|svg|ttf|woff2?|otf)$/, loader : "file-loader" , query :{name:"[name]-[hash:8].[ext]",publicPath:"../",outputPath:"fonts/"} }
    ]
  },
  plugins : [
  //压缩打包之后的js
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
  //写入的文件
    baseCss, fontCss
  ]
};
