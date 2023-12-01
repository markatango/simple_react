const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports= {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
           template: "src/index.html",
       }),
    ],
    devServer: {
      port: 3030,
      allowedHosts: "all",
    },
    module: {
       rules: [
         {
           test: /\.(js|jsx)$/,
           exclude: /node_modules/,
           use: {
              loader: 'babel-loader',
           },
         },
         {
           test: /\.(sa|sc|c)ss$/,
           use: ['style-loader', 'css-loader'],
         },
         {
           test: /\.(png|woff|woff2|eot|tff|svg|jpg)$/,
           loader: 'url-loader',
           options: { limit: false },
         },
       ],
    },
 }; 
