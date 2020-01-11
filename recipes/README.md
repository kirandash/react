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
1. Module 1 Summary:
1.1. Create project from scratch
1.2. Initialize project using yarn
1.3. JS and ES6
1.4. Use babel to transpile code into plain JS
1.5. Webpack and Webpack Dev Server

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

### 01.04 Set up a development server
webpack-dev-server
1. Express server
2. Reads your webpack configuration file and keeps a fast in-memory bundle
3. It'll watch your source files, and recompile the bundle whenever they are changed
4. CLI or programmatic configuration
5. Only for development

Steps:
1. yarn add webpack-dev-server
2. This will install a binary in node_modules folder and can be run with the following command:
3. node_modules/.bin/webpack-dev-server

html-webpack-plugin
1. Simplifies the creation of HTML files to serve your webpack bundles
2. Injects a script tag for build.js into the target HTML, or even create the index.html if not present on the build process
3. yarn add html-webpack-plugin
4. Since this is a plugin, add it to plugin section of webpack config js file
6. Run node_modules/.bin/webpack-dev-server, it will add the script file to html and run on server

Build
1. Run yarn build to created the dist folder with index.html and bundle.js file

## Creating First Components
Module Summary:

### 02.01 Create and mount root component
1. Renderers: It manage how a React tree turns into the underlying platform calls.
2. React ----> Renderer(React-DOM, React-native, React-VR, React-PDF) ----> Underlying Platform(Browser, Apps, VR, PDF)
3. Each renderer has a mounter function
3.1. E.g. React-dom renderer: ReactDOM.render(<App />, rootEl);
3.2 Mounter function called render
3.3 Takes two arguments: React Component and DOM element
3.4 The mounter function will recursively render the component, and inject it into the DOM element
4. Add react to project: yarn add react : This project (16.12.0)
5. This will still not render HTML in render. Need to install babel-react which will convert HTML code into createElement calls
yarn add @babel/preset-react --dev
Otherwise yarn build will throw error
6. yarn add react-dom
7. yarn build
8. yarn start

### 02.02 Use functional components
1. Class Component: class App extends React.Component{ render(){ return (html...); } }
2. Functional Component: const App = () => (html...);

PROs:
2.1 More readable/Easy to understand
2.2 less boilerplate
2.3 Easy to test (I/O function)
2.4 Enforce good practices
2.5 No this keyword
2.6 Not bounded to react
2.7 Optimized for performance

CONs:
2.1 Can't use lifecycle hooks
2.2 Can't use state
2.3 Can't use refs
2.4 Need to convert to class component if any of the above is reqd

### 02.03 Import assets
1. Configure webpack to accept image modules
2. Understanding File loader (file-loader converts the import statements to render correct image path after build is done)
3. Rendering an image inside our main component
4. yarn add file-loader --dev
5. yarn start
6. yarn build (Will copy the image to dist folder)

### 02.04 Compose components to create more complex UI
Component Props:
1. Should be read-only. Do not edit them inside the component
2. Think of them as data that comes from the outside of component, no matter the source of it. (If you edit in component: you will have problem during debugging)
3. Can be any type of data: numbers, arrays, objects, strings etc...
4. In Class components: they are accessible via this.props
5. In Functional components: they are accessible as arguments

propsTypes:
1. React uses propsTypes to help check type of a prop
2. Prevent unwanted bugs in component props
3. Logs error in console. But they dont stop code execution
4. Since React 16 it comes in a different package called prop-types. Before, it was part of the React public API.

### 02.05 Make async request in the component life cycle
1. Fetch API: Promise-based mechanism for programmatically making web requests in the browser. (Included in every modern browser)
2. Set up Fetch Polyfill to support older browsers
3. Defining env variables
4. Using fetch to make async network calls
5. Syntax:
```fetch(<url>, {
    method: <string>, // Get, Put, Post, Delete, Patch
    body: <object>,
    ...otherOptions
}).then(res=>res.json());```
6. Add dotenv: yarn add dotenv --dev
It will search for .env file in the project folder and if found, it will make all its content accessible via process.env
7. require('dotenv').config(); (In webpack.config)
8. webpack.DefinePlugin to avoid repeating variable
9. IMPORTANT NOTE: in Other Projects, ADD .env to .gitignore as .env is automatically added to process.env
10. Fetch is not supported in older browsers. 
Polyfill: ```yarn add whatwg-fetch```
webpack.config.js:
```entry: ['whatwg-fetch', './index.js']```