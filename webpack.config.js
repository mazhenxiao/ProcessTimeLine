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
        vendor: ["babel-polyfill", 'react', 'react-dom','react-router-dom','redux','react-redux','axios']
    },
    output: {
        path: path.join(__dirname,"/public/dist/js/"),
        filename: '[name]-es5.js',
        publicPath: "/public/dist/js/",////此处决定了chunkFilename要加载的路径，此处为坑

    },
    module: {
      rules: [
           {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
              ]
           },
           {
            test: /\.(js|jsx)$/,
            exclude:"/node_modules/",
            loader: 'babel-loader' ,
            query: {
                presets: ['es2015','react','stage-1'],
                plugins: ['transform-decorators-legacy','transform-decorators']
            }
           }
           /* {
               test:/\.js$/,
               loader: "babel-loader",
               options: {
                  //  presets: ["es2015"]
                presets: ['env', 'stage-0', 'react']
              }
           } */
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
            },
            "env":process.env.NODE_ENV=="iis" ? '"iss"' : '"development"'
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
      devtool: "source-map", // enum
      resolve:{
        mainFiles: ["index"],
        extensions: [".js", ".scss"],
       //modules:[path.resolve(__dirname,"/public/")],
       alias:{
          "@js":path.join(__dirname,"/public/js/"),
          "@css":path.join(__dirname,"/public/css/"),
          "@view":path.join(__dirname,"/public/view/"),
          "@image":path.join(__dirname,"/public/image/"),
          "@service":path.join(__dirname,"/public/service/")
        }
      },
     
      
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