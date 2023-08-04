import { Configuration } from "webpack";
import { resolve } from "node:path"
const path = require('path');
//import CopyPlugin from "copy-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
module.exports = [
  {
    entry: {
      index: "./src/web-server/client-side/react/src/index.tsx",
    },
    devtool: "cheap-module-source-map",
    resolve: {
      extensions: [".ts", ".js", ".tsx"],
    },
    plugins: [
      new CleanWebpackPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/, exclude: /node_modules/, use: [
            , "ts-loader",
          ]
        },
        { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"], },
        { test: /\.css$/, use: ["style-loader", "css-loader"], },
      ],
    },
    output: {
      filename: "[name].js",
      path: resolve(__dirname, "./src/web-server/client-side/react/dist/"),
      //library: 'Calc',//ライブラリとして外部に公開する場合はここを指定する。この場合はwindows.Calc って変数に公開される って感じらしい
      // (types in, 'module', 'assign', 'assign-properties', 'this', 'window', 'self', 'global', 'commonjs', 'commonjs2', 'commonjs-module', 'commonjs-static', 'amd', 'amd-require', 'umd', 'umd2', 'jsonp', 'system', but others might be added by plugins).
      libraryTarget: "umd",
      //globalObject: 'typeof self !== \'undefined\' ? self : this'
    },
  }] satisfies Configuration[];
