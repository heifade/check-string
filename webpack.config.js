var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./test/main.ts",
  output: {
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist")
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" }

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      // { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  //     "react": "React",
  //     "react-dom": "ReactDOM"
  // },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "manifest"],
      minChunks: Infinity
      //name: 'vendor',
      // minChunks: function (module) {
      //     // 该配置假定你引入的 vendor 存在于 app 目录中
      //     return module.context && module.context.indexOf('app') !== -1;
      // }
    }),
    //new webpack.HotModuleReplacementPlugin(),// 开启全局的模块热替换（HMR）
    //new webpack.NamedModulesPlugin(),// 当模块热替换（HMR）时在浏览器控制台输出对用户更友好的模块名字信息

    new HtmlWebpackPlugin({
      title: "Hellow",
      filename: "index.html"
    })
    // new ScriptExtHtmlWebpackPlugin({
    //     defaultAttribute: 'sync'
    // }),
    //devtool: "inline-source-map"
    // new ExtractTextPlugin('styles.css'),
  ]
};
