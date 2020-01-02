# REACT RECIPES

## Yarn
1. npm alternative
2. Fast
3. Secure
4. Reliable
5. Works offline
6. And more...
7. Commands: npm init, yarn init, npm install, yarn install, npm install package --save, yarn add package, npm run script, yarn script

## React Project Structure
### 01.01 Start project
1. mkdir recipes
2. cd recipes, yarn init, add script in package.json file: node ./index.js, yarn start

### 01.02 Configure ES6 and babel
1. ES6 modules e.g. import path from 'path', 
2. Arrow functions, classes, Object literals e.g { foo }, Template strings eg `Hello ${world}`, Destructuring: ({ a }) => { console.log(a) }, Let and Const
3. Early browsers and Node doesn't support it
4. Thus babel will help transform our code for older browsers and node
5. Install babel: yarn add babel-cli --dev
6. Ships, two main binaries:
6.1 Babel: compiles code to stdout or output file
6.2 Babel-node: Same as node but compiles from ES6 before running it
7. After installing run babel on index.js entry point file: ./node_modules/.bin/babel index.js
The above code will not convert es6 code.
To do the transformation: run the command: ./node_modules/.bin/babel index.js --presets=es2015
8. If preset is unavailable, lets install: yarn add babel-preset-es2015
Now, run again: ./node_modules/.bin/babel index.js --presets=es2015
This will convert ES6 code to plain JS code (function and import replaced by require)
9. To save the transpiled output, pass another parameter:
./node_modules/.bin/babel index.js -o ./bundle.js --presets=es2015
10. We can define our presets in .babelrc file
Then no need to mention presets in script
./node_modules/.bin/babel index.js -o ./bundle.js

### 01.03 Understand and Configure Webpack
Webpack helps bundle our project with the help of dependency graph.
1. Entry: Starting point of the graph. From here, webpack starts following the imports to form the rest of the graph.
2. Output: Explicit path where to save the output bundle
3. Module: Any file, (JS, img, font, markdown etc)
4. Loaders: Apply transformations to modules through the bundling process
5. Plugins: Apply transformations on parts of the bundle output

Steps:
1. yarn add webpack --dev
2. Like babel, this too installs a binary folder, to run it follow below:
3. node_modules/.bin/webpack entrypoint output ex: node_modules/.bin/webpack ./index.js ./bundle.js
(This will ask us to install webpack cli as well, pls proceed)

Config:
Like babel can be configured with .babelrc file. Webpack can be configured with webpack.config.js file

After config just run the command: node_modules/.bin/webpack

Add babel loader to webpack config. And add it to package: yarn add babel-loader. So that we don't have to run babel manually
yarn add @babel/core --dev
yarn add @babel/preset-env --dev

"@babel/core": "^7.7.7",
"@babel/preset-env": "^7.7.7",
"babel-loader": "^8.0.6",
"webpack": "^4.41.5",
"webpack-cli": "^3.3.10"