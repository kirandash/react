const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index-4-3.js",
    output: {
        path: path.resolve(__dirname, 'dist'), // This is where the o/p should be kept
        filename: "./bundle.js",
        publicPath: "/" // This is for dev server to find the bundle.js file
    },
    devServer: {
        inline: true, // Tells webpack dev server to use a client entry point. So we can browse our file on localhost:3000
        contentBase: "./dist", // where to serve the content from
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/, // All js files
                exclude: /(node_modules)/, // except from node_modules folder
                loader: 'babel-loader', // run babel-loader to transpile ES6 code to supported JS
                query: {
                    // presets: ['latest', 'stage-0'] (deprecated)
                    presets: ['@babel/preset-env']
                } // which presets to run while transpiling: same as config in babelrc file
            }
            // ,
            // {
            //     test: /\.json$/, // All json files
            //     exclude: /(node_modules)/, // except from node_modules folder
            //     loader: 'json-loader' // run json-loader to add JSON files to o/p bundle
            // } // json-loader is not reqd anymore in latest webpack
        ] // Apply transformations to modules through the bundling process
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src') + '/index.html',
            inject: 'body'
        })
    ] // A plugin transforms output eg htmlwebpackplugin for creating bundle.js and index.html files
}