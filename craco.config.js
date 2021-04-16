const CracoLessPlugin = require("craco-less");
const path = require("path");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const SimpleProgressWebpackPlugin = require("simple-progress-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const resolve = dir => path.join(__dirname, '.', dir);
var webpack = require('webpack');
module.exports = {
  webpack: {
    alias: {
      "@": resolve("./src"),
      "@common": resolve("./src/common"),
      "@components": resolve("./src/components"),
      "@pages": resolve("./src/pages"),
      "@store": resolve("./src/store"),
      "@utils": resolve("./src/utils"),
    },
    plugins: [
      // 打压缩包
      new CompressionWebpackPlugin({
        algorithm: "gzip",
        test: new RegExp("\\.(" + ["js", "css"].join("|") + ")$"),
        threshold: 1024,
        minRatio: 0.8,
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new SimpleProgressWebpackPlugin(), // 查看打包进度
      // 打包忽略console,debugger
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true,
          },
        },
        sourceMap: false,
        parallel: true,
      }),
    ],
  },
  babel: {
    plugins: [
      ["import", { libraryName: "antd", style: true }],
      ["@babel/plugin-proposal-decorators", { legacy: true }],
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        // 此处根据 less-loader 版本的不同会有不同的配置，详见 less-loader 官方文档
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {}, // 设置主题颜色
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  //  配置代理解决跨域
  //   devServer: {
  //     proxy: {
  //       "/api": {
  //         target: "http://baidu.com",
  //         changeOrigin: true,
  //         pathRewrite: {
  //           "^/api": "",
  //         },
  //       },
  //     },
  //   },
};
