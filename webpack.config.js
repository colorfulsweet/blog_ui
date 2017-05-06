const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var extraCss = new ExtractTextPlugin("./css/extra.css");
var baseCss = new ExtractTextPlugin("./css/cnblog.css");
module.exports = {
  entry: {
    main : './index.js',
    app : "./src/js/app.js"
  },
  output: {
    path: __dirname+"/dist",
    filename: 'js/[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loaders:
        extraCss.extract({fallback:"style-loader",use:"css-loader?minimize=true"})},
      //图片大于20KB的交给file-loader处理, 以 文件名-8位hash.扩展名 命名
      { test: /\.(png|jpe?g|gif|ico)$/, loader: "url-loader" ,query :{limit:20000,name:"[name]-[hash:8].[ext]",publicPath:"../",outputPath:"images/"}},
      { test: /\.scss$/, loaders :
         baseCss.extract({fallback:"style-loader",use:["css-loader","postcss-loader","sass-loader?outputStyle=compressed"]})
       },
      { test: /\.(svg|eot|ttf|woff2?|otf)$/, loader: "file-loader", query :{name:"[name]-[hash:8].[ext]",publicPath:"../",outputPath:"file/"}},
    ]
  },
  plugins : [
  //压缩打包之后的js
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),

    //将打包后的css单独写入文件, 而不是嵌入js代码当中
    extraCss,
    baseCss
  ]
};
