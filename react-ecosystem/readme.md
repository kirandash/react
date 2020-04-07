# Modern React Project with React Ecosystem
## 1. Intro
### 1.1 Project Summary
1. Building more maintainable and robust React applications
2. Installing React and other tools
3. Adding Redux
4. Dealing with side effects
5. Libraries for dealing with side effects
6. Styling React apps more effectively with styled-components
7. Using React hooks
8. React fragments
9. Testing Redux, Redux-Thunk, Reselect, and styled-components

### 1.2 Why React ecosystem?
1. Problem with Basic/Vanilla React: Vanila React was designed to be efficient for modular, performant UI. So it was designed to mainly control the View part of MVC. However not designed to handle Model and Controller efficiently.
2. React is purposefully designed to allow developers to make their own data management decisions.
3. Most developers don't pay attention to data management and end up building huge tangled components. Thus hard to expand and maintain.
4. React ecosystem helps with data management and building a maintainable code base.

### 1.3 React Ecosystem summary
1. React Redux: Most popular Addon. Helps with state management using Flux architecture.
2. Redux Thunk: Side-effect management. (Network requests etc)
3. Reselect: A selector library for redux. Abstract away the state's architecture.
4. Styled Components: Better way of styling our components rather than using separate css files. Particularly when style of a component depends on state.

## 2. Project Setup
### 2.1 React Project from scratch
1. Make sure nodejs is installed. And then run the command : `npx create-react-app my-app`. create-react-app is a tool used for creating a react app easily. Note, with npx command we don't have to install create-reacta-app.
2. We will not use the tool and create the app from scratch.
3. Files needed to create React App from scratch:
    - index.html (The file that will be sent to client and where React will render our app)
    - Support for ES6
    - webpack (This will take care of building our app and also handle use of css modules to style our app. Also to serve our app during dev)
    - Root component (Base of Container Tree. So, basically a container that holds rest of our components)
    - react-hot-loader (will reload the app immediately)

### 2.2 The React entry point
1. create folder `react-ecosystem` ---> `cd react-ecosystem`
2. `npm init -y`: initialize your project with package.json file.
3. create folders:
    - **public**: to hold publicly accessible resources of our app
    - **src**: will hold actual react code
4. create **index.html** file inside public folder. This file is going to be sent to the client when react app loads. (HTML Boilerplate code: http://htmlshell.com/)
5. Add code to index.html file with a div of id `root` which is the target where our react app is going to load. 
6. Add a noscript tag if JS is disabled for client browser.
7. Add bundle.js to index.html.

### 2.3 Supporting ES6 and JSX with babel
1. Add support for ES6 syntax and JSX
2. In react-ecosystem project run: `npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react`
3. Create a **.babelrc** file: It will tell the babel transpiler what plugins and presets to use while transpiling our code.
4. Add presets to .babelrc file:
    - **@babel/preset-env**: transpiles ES6 into common JS
    - **@babel/preset-react**: handles JSX and converts it into browser compatible code.

### 2.4 The index.js file and App component
1. First install React and ReactDOM to our project react-ecosystem: `npm install react react-dom`
2. We will create 3 files for our react code in src/ folder
    - **index.js**: Code in this will help us insert our React App into index.html with `ReactDOM.render()`
    - **App.js**: Holds JS code for our root React component
    - **App.css**: Holds CSS code for our root React component

### 2.5 Building and Serving with Webpack
1. Webpack will do the following action: transpile react code in src/ directory. And after transpiling, host our public/ directory in browser for viewing. Webpack helps bundle our project with the help of dependency graph. Settings in **webpack.config.js**:
    - Entry: Starting point of the graph. From here, webpack starts following the imports to form the rest of the graph.
    - Output: Explicit path where to save the output bundle
    - Module: Any file (JS, JSX, CSS, img, font, markdown etc)
    - Loaders: Apply transformations to modules through the bundling process
    - Plugins: Apply transformations on parts of the bundle output
2. Install reqd packages: `npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader`
3. Create **webpack.config.js** file to tell webpack what to do with our source code. webpack code is written in plain JS.
    - Mention entry, output, module with rules to apply loaders for js, jsx and css files.devServer config, add hotreload plugin.
4. After adding webpack code, run webpack dev server: `npx webpack-dev-server --mode development` and app will start running at http://localhost:3000/

### 2.6 Hot reloading with react-hot-loader
1. As of now, changing codw won't reflect in browser instantly. Install react-hot-loader: `npm install --save-dev react-hot-loader`
2. Export App component through hot loader in App.js `export default hot(module)(App)`
3. Create a script to run webpack-dev-server in package.json file: `npm run dev`
4. Now changing code will change brwoser content immediately
5. Note that webpack-dev-server creates the dist folder in memory and serves the output in browser. In order to create dist folder, we must create another build command in package.json file. `npx webpack --mode development`
6. Run `npm run build`. It will create dist/ folder

## 3. Creating Components
### 3.1 Create TodoList component
1. create src/todos/TodoList.js
2. Create ToDoList.css