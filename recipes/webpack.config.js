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
                exclude: /node_modules/, // To exclude babel from compiling JS files from node_modules folder and limit it to only our code (No more warning during yarn start compilation)
                loader: 'babel-loader', // A loader transforms modules during bundling eg babel
                query: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.css/,
                loader: ['style-loader', 'css-loader', 'postcss-loader'] // A loader transforming CSS modules and injects it into head of index.html file during bundling
            }, // Note that webpack applies loader from last one to first one
            {
                test: /\.(png|jpeg)$/,
                loader: 'file-loader' // A loader transforms modules during bundling eg file loader to process images
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
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