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