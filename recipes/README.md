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
1. Write and mount React root component
2. Difference b/w Functional and Class component
3. React Component
4. Network Request
5. State API of React Component

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
5. Syntax: `fetch(<url>, {
    method: <string>, // Get, Put, Post, Delete, Patch
    body: <object>,
    ...otherOptions
}).then(res=>res.json());`
6. Add dotenv: yarn add dotenv --dev
It will search for .env file in the project folder and if found, it will make all its content accessible via process.env
7. require('dotenv').config(); (In webpack.config)
8. webpack.DefinePlugin to avoid repeating variable
9. IMPORTANT NOTE: in Other Projects, ADD .env to .gitignore as .env is automatically added to process.env
10. Fetch is not supported in older browsers. 
Polyfill: `yarn add whatwg-fetch`
webpack.config.js:
`entry: ['whatwg-fetch', './index.js']`

### 02.06 Use the state to make your components dynamic
1. Using Component Lifecycle hooks
1.1 Mounting: componentWillMount, componentDidMount
1.2 Mounted: componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate, componentDidUpdate
1.3 Unmounting: componentWillMount
2. Using Component state API
2.1 State API: Data needed by the component that it can change over time (while props are readonly)
2.2 Intitialize with state `this.state ={...}`, Accessing state with `variable = this.state`, Editing state with `this.setState({...})`
3. Handling Zero state of components
4. Tobe able to use arrow functions use the plugin plugin-proposal-class-properties.
`yarn add @babel/plugin-proposal-class-properties`
Add it to .babelrc presets plugin list

## Styling
Module Summary:
1. Styling a component with Functional CSS
2. Post CSS and CSSNext
3. Configure Basscss in your project
4. Functional CSS 
5. Code styling
6. Linter and ESLint
### 03.01 Component styling: Different approaches
Different ways of styling:
1. Plain CSS: main.css --- Old school styling when pages were documents instead of apps. Hard to maintain in large scale: global naming, monolithic files, high coupling b/w components
2. Inline styling: Use the style prop of React elements. Pro: CSS in JS. Cons: No CSS reusage, High coupling b/w markup and styles. Huge components.
3. CSS Modules: Treat a CSS files as one module using webpack. Pro: Isolated CSS per component. No more global naming or monolithic files. Cons: Huge amount of files. (1 per component). No CSS reusage
It is normal to use CSS modules with other CSS preprocessor such as SASS or LESS.
4. Styled Components: CSS in JS solution that uses ES^ backtick syntax. Pro: CSS and JS altogether, Easy to define styles based on props, Good for animations. Cons: Odd syntax at first. Hard to style components with too many nested elements.
5. Functional CSS: CSS toolkit with extensible predefined class Pro: Almost zero repitition, Enforce styleguide. Quick to prototype, PostCSS and CSSNext. Cons: Hard to apply scientific styles, Long Class names
6. Other styling options: Radium, Aphrodite, Styletron, JSS

### 03.02 Functional CSS:
1. The real way to scale CSS is to stop writing CSS
2. An overwhelming majority of CSS you would need for your site has already been written.

Functional CSS is a CSS toolkit of predefined classes to add CSS to our app. Ex: `<p class="h1">This is h1</p>`
Two main libraries:
1. Basscss,
2. Tachyons

Pros of Functional CSS:
1. Rarely write new CSS
2. %99.99 reusable styles
3. Team understanding
4. Small CSS bundle ---> Faster load time
5. Forces style guide
6. No styles definition inside JS
7. No component.scss

Cons:
1. Less semantic names
2. Learn proprietary class names
3. Fixed units for margin, padding etc
4. Hacky when you need a custom style
5. Find and replace problem

### 03.03 Set up PostCSS and Basscss
PostCSS:
1. Tool for transforming styles with JS plugins
2. PostCSS is to CSS what is babel is to JS
3. 200+ plugins
4. Webpack integration via a loader
5. Enables us to write CSSNext

CSSNext:
1. Plugin helps you to use latest CSS syntax today
2. CSSNext is to CSS, what ES6 to JS
3. Features: 
3.1 Automatic vendor prefixer
3.2 Custom properties and var()
3.3 Nesting
3.4 Many color fns (grey, rgba, color etc)

Basscss:
1. Functional CSS implementation
2. One core package (basscss)
3. Many addons: basscss-btn, basscss-btn-primary, basscss-colors, basscss-background-colors
4. Core and addons are extensible and configurable by editing some root variables
5. yarn add style-loader --dev
6. yarn add postcss --dev
7. yarn add postcss-cssnext --dev
8. yarn add postcss-import --dev (So that we can use @import statements in .css files)
9. yarn add css-loader --dev
10. yarn add postcss-loader --dev (will take all the files and transpile them, which will feed them to css-loader i.e. helps in resolving the require statements)
11. yarn add basscss basscss-colors basscss-background-colors

### 03.04 Adapt Basscss to our site style guide
1. Override basscss with `:root {}`
2. px4: padding of 4 spaces on x axis : left and right not top and bottom
3. py2: padding y axis : top and bottom
4. `yarn add classnames` to handle classnames. As ``className={`p2 bg-white ${props.className}`}>`` has chances where props.className might become null
Syntax: `className={classNames('p2 bg-white', props.className)}` This won't render if one of the value ie. props.className is null

### 03.05 Code styling: Following a style guide
1. Linter: Tool that detects and flags errors in programming languages without executing them.

Benefits of linter:
1. Warns about code syntax (ex: missing closing bracket) before running the code
2. Enforce good practices
3. Quick debugging
4. Follow a styleguide b/w team members

ESLint:
Open Source JS Lint library
1. You can configure own set of code rules
2. Every rule is standalone, and can be individually plugged on or off, set as warning or error.
3. ESLint does not promote any particular coding style
4. Rules are usually shipped in plugins that you can plug into your ESLint config
5. You can also extend from predefined style guides, so you don't have to setup all rules every time.

### 03.06 Setup ESLint
Install ESLint and use airbnb guide
1. yarn add eslint --dev
2. package.json: "lint": "./node_modules/.bin/eslint ./src"
3. yarn lint
4. ./node_modules/.bin/eslint --init
5. yarn lint : will throw all errors (Not all are syntax errors)
6. yarn add babel-eslint --dev
7. eslintrc.json: "parser": "babel-eslint", (This will not show all errors. And filter out only syntax errors)
8. yarn add prop-types

### 03.07 Set up Prettier
1. Tool for building and enforcing a style guide.
2. Prettier transforms your code to match your style guide
3. `yarn add prettier --dev`
4. Run prettier on every js file in src folder: `./node_modules/.bin/prettier ./src/*.js --write`
5. Avoid conflict with ESlint on Double quote, single quote:
`{
    "singleQuote": true
}`
6. `./node_modules/.bin/prettier ./src/components/*.js --write`
7. `yarn add eslint-config-prettier --dev`
8. Now everything is properly set up. So, let's run eslint and prettier. `./node_modules/.bin/prettier ./src/*.js --write` and `yarn lint`

### 03.08 Wrap everything up with a git hook
Flow: Pre-Commit ---> Lint ---> Fail? ---> Show Errors ---> Success? ---> Prettier ---> Persist
1. `yarn add husky --dev` : Helps us execute precommit command. Add precommit to scripts in package.json file
2. `yarn add lint-staged --dev` : Helps to run a set of commands and the commit will fail if there is any error

## 4. Routing
Module Summary:
1. react routers
2. creating route
3. Handling 404 requests with Switch
4. Handling redirects
5. Sharing state b/w diff routes
6. Get data from URLs

### 04. 01 React router to create basic routing
React Router:
1. Declarative routing for React
2. Available for both DOM and native environments
3. React-Router v3.x !== v4.x

Keywords:
1. BrowserRouter: Component that uses the HTML5 history API to keep your UI in sync with the URL.
2. Route: To render some UI when a location matches the route's path

Steps:
1. `yarn add react-router-dom`
2. `yarn start`
3. To load the route properly on dev server: modify webpack.config.js: 
`devServer: {
    historyApiFallback: true,
}`
It will make sure that 404s will fall back to index.html file and thus loading the routes properly on webpack server

### 04.02 Handle 404 requests
Switch
1. React-router helper component
2. Renders the first child <Route> that matches the location. Thus order is important.
3. If no matches are found then the last Route component will be displayed.

### 04.03 Handle redirects
React-router-dom helps us handle redirects in a declarative way. Using "Redirect"
Redirect:
1. React-router helper
2. If the from value match the current location, the router will handle the redirection to the to value.

### 04.04 Add links to different routes with NavLink
1. NavLink component to navigate through routes
2. activeClassName, from, to, children and ...props

### 04.05 Implement favorites

### 04.06 Share state between routes
1. States can be shared only b/w siblings from parent. So better to manage all your state at parent level.

### 04.07 Get parameters from URLs
1. http://localhost:8080/recipe/2 will throw an error recipe/bundle.js not found. To fix this, modify your webpack configuration. `publicPath: '/'`
2. `const { id } = this.props.match.params` match props has all the info related to URL visited by user in react application
3. Use a Link from react-router-dom to navigate to details page.

## 5. Components Testing
### 05.01 Configure Jest
JEST:
1. JS Testing engine
2. Fast and sandboxed
3. Built-in coverage reports
4. Snapshot testing support
5. Automatic integration with babel
6. Easy to configure

JEST Test API:
1. The describe fn creates a block that groups together several realted tests in one suite.
`describe('Test module name', () => {});`
2. Test fn also called it, defines a new test to be run.
`test('Test name', () => {})`
3. Callbacks that can be configured in certain moments of the tests execution: beforeEach, beforeAll, afterEach, afterAll.

Installation:
1. `yarn add jest --dev`
2. `yarn add eslint-plugin-jest --dev`: To avoid eslint warnihngs for jest
3. After adding script: run `yarn test` which will automatically identify the jest.config.js file and perform accordingly.

### 05.02 Use snapshots to test React components
Snapshot Testing:
1. Easy way of creating unit tests of components
2. Consists of creating a file and saving the test's success o/p on it
3. Every time test runs, compare i/p with file content: --> If same: Test succeded. If diff ---> Test failed

How?
1. The `toMatchSnapshot` fn does all the job:
---> If it's the first time the test runs, takes the JSON tree and saves it.
---> If snapshot exists, it compares it with the i/p JSON & check if matches
`test('Test name', () => { expect(json).toMatchSnapshot(); })`
2. React Test renderer: React official renderer to create representations of a component.
`component = renderer.create(<Component/>); tree = component.toJSON()`
3. `yarn add react-test-renderer --dev`
4. While testing always think of Component as i/p o/p fns. What i/ps it will eg props, states etc and what o/p it will generate using that.
5. yarn test