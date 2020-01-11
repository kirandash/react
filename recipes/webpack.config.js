const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config(); // will search for .env file

module.exports = {
    context: path.resolve(__dirname, 'src'), // Defines the root of the project - which is src
    entry: ['whatwg-fetch', './index.js'], // starting point of app (src/index.js) // First load polyfill for fetch API and then build the dependency graph for index.js file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js'
    }, // output path and file name after processing entry file with loader and plugins (dist/bundle.js)
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader', // A loader transforms modules during bundling eg babel
                query: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.(png|jpeg)$/,
                loader: 'file-loader' // A loader transforms modules during bundling eg file loader to process images
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src') + '/index.html',
            inject: 'body'
        }), // htmlwebpackplugin for creating bundle.js and index.html files
        new webpack.DefinePlugin({
            API_URL: JSON.stringify(process.env.API_URL)
        }) // Define Plugin helps searching entire code and replacing API_URL with process.env.API_URL
    ] // A plugin transforms output eg htmlwebpackplugin for creating bundle.js and index.html files
}