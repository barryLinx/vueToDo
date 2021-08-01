const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin"); //壓縮

module.exports = {
  entry: {
    app: "./src/main.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash:6].bundle.js",
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: "vendor",
          chunks: "initial",
          enforce: true,
        },
      },
    },
  },
  resolve: {
    // 設定src別名
    // alias: {
    //   '@': path.resolve(__dirname, 'src'),
    // },
    //副檔名省略,可以根據需要自由增減
    modules: [
      //path.resolve('src/scss'), // 相當於 ../scss/
      path.resolve("src"),
      path.resolve("node_modules"),
    ],
    extensions: [".js", ".vue", ".scss"],
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            // inject CSS to page
            loader: "vue-style-loader",
          },
          // {
          //   loader: 'thread-loader',

          // },
          {
            // translates CSS into CommonJS modules
            loader: "css-loader",
          },
          {
            // Run postcss actions
            loader: "postcss-loader",
            options: {
              // `postcssOptions` is needed for postcss 8.x;
              // if you use postcss 7.x skip the key
              postcssOptions: {
                // postcss plugins, can be exported to postcss.config.js
                plugins: function () {
                  return [require("autoprefixer")];
                },
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Order-f2e",
      template: "./public/index.html",
      filename: "main.html",
      minify: {
        removeComments: true, // 移除註釋
        collapseWhitespace: true,
        removeAttributeQuotes: true, // 移除空格
      },
      chunks: ["vendor", "app"],
    }),
    
    new VueLoaderPlugin(),
  ],

  devtool: "source-map",
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, "dist"),
    port: 6890,
    open: true,

    stats: {
      colors: true,
      hash: true,
      chunks:false
    },
  },
};
