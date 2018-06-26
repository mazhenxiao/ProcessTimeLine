const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpackdevserver = require('webpack-dev-server');
const DashboardPlugin = require('webpack-dashboard/plugin');
const process = require("process");
const fs = require("fs");
const devServer = require("./server");
const isDev = process.env.NODE_ENV ==='development' ;

let config={
    mode:process.env.NODE_ENV||"development",//process.env.NODE_ENV,production
    entry: {
        index: "./public/js/index.js",
        vendor: ["babel-polyfill", 'react', 'react-dom','react-router-dom']
    },
    output: {
        path: path.join(__dirname,"/public/dist/js/"),
        filename: '[name]-es5.js',
        publicPath: "/public/dist/js/",////此处决定了chunkFilename要加载的路径，此处为坑

    },
    module: {
      rules: [
           {
            test: /\.sass$/,
            use: [
                MiniCssExtractPlugin.loader,
                "sass-loader"
              ]
           },
           {
               test:/\.js$/,
               loader: "babel-loader",
               options: {
                  //  presets: ["es2015"]
                presets: ['env', 'stage-0', 'react']
              }
           }
        ]
    },
    plugins: [

          // webpack-dev-server 强化插件
        new DashboardPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new webpack.optimize.SplitChunksPlugin({
            chunk:"all",
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            minSize: 30000,
            minChunks:2,
            minimizer: [
              new UglifyJsPlugin({ cache:true,sourceMap:true })
            ]
        })
      ],
      resolve:{
        extensions: [".js", ".sass"],
        alias:{
          "@js":path.resolve(__dirname,"/pubic/js"),
          "@css":path.resolve(__dirname,"/pubic/css"),
          "@view":path.resolve(__dirname,"/pubic/view"),
          "@image":path.resolve(__dirname,"/pubic/image")
        }
      }
     
      
}
Object.assign(config,devServer);

if(process.env.NODE_ENV ==='production'){
 
  config.plugins.concat([
    new UglifyJsPlugin({
      cache:true,
      sourceMap:true, 
      parallel:true,
      extractComments:{
        banner:"${filename}.js=>mazhenxiao开发",
        sourceMap:true
      }
    })
]);
}
module.exports= config;