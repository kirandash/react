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
5. Note: If during build it throws babel compatibility issue, use the babel upgrade tool to get the right set of versions for your project.
https://github.com/babel/babel-upgrade
Run the command `npx babel-upgrade --write`. It will change the version numbers to correct configuration.

### 2.6 Hot reloading with react-hot-loader
1. As of now, changing codw won't reflect in browser instantly. Install react-hot-loader: `npm install --save-dev react-hot-loader`
2. Export App component through hot loader in App.js `export default hot(module)(App)`
3. Create a script to run webpack-dev-server in package.json file: `npm run dev`
4. Now changing code will change brwoser content immediately
5. Note that webpack-dev-server creates the dist folder in memory and serves the output in browser. In order to create dist folder, we must create another build command in package.json file. `npx webpack --mode development`
6. Run `npm run build`. It will create dist/ folder

## 3. Creating Components
### 3.1 Create TodoList component
It will hold list of all todos
1. create src/todos/TodoList.js
2. Create ToDoList.css

### 3.2 Create TodoListItem component
This is to hold individual todo list item data

### 3.3 Create NewToDoForm component - with useState hook
This is to hold form using which user can create new to do items
1. create functional component to hold form data and then use react hook `useState` to store todo input value

### 3.4 Putting the App together
1. Add TodoList to App.js
2. Add NewTodoForm to TodoList.js and make sure to have default todos to avoid error. `todos = []`

## 4. Adding Redux
### 4.1 Why do we need Redux?
1. Let's have a look at ways to manage state:
    - **A single state**: Creating state for root component and using that for all child components following a prop chain. **Cons**: Not suitable for large applications. As lots of props get attached to root state. And we will have to deal with **props drilling**. For example: App ---> Page ---> Section ---> List ---> ListItem. Ugly and difficult to troubleshoot. Prone to errors if we break the prop chain by mistake.
    - **Components manageing their own state**: Creating state for each component. Pros: No Props drilling. **Cons**: Difficult to share data between two components.
    - **Global State Management**: A single centralized state, With all child components having unlimited access to it. **Pros**: No Props drilling. Easy to share state data b/w components. **Cons**: No rules/organizations on how to create state and use it. Thus leads to inconsistency b/w developers. And hard to recreate bugs for troubleshooting. Thus, unrestricted global state is not an ideal choice.
    - **Redux** solves this problem by adding rules/orgnaizations to global state management.

### 4.2 How redux works?
1. Works on global state management concept. Thus have a centralized state called **Store**.
2. **The redux store** is basically a JSON object that can hold any type of data we want. Ex: `{ user: {...}, products: {...} }`
3. How redux controls the global state?: The main problem with global state is there is no rules/restrictions. Redux solves this problem by adding some rules.
4. Other pieces of Redux: 
    - **{ Redux Store }**: JSON object that contains current state of our app
    - **Redux actions**: JSON object consisting of two things: `{ type, payload }`. It defines different actions that can occur in our app. Ex: `USER_DATA_LOADED`, `ITEM_ADDED_TO_CART`
    - **Reducers**: This defines what changes to do with Redux Store when a Redux action occurs. Ex: When `ITEM_ADDED_TO_CART` action occurs, we take all the data in payload and store it in shoppingcart prop in redux store.
5. Summary: Components can only interact with the state by triggering Redux actions.
6. Thus Redux follows a **Unidirectional Data Flow**: UI Triggers action ---> State is updated ---> Components see updated State

### 4.3 Adding redux to a React App
1. Install redux: `npm install redux react-redux`
2. Create src/store.js: will hold logic for redux store
    - Create root store by combining all reducers
3. In index.js: wrap `App`with `Provider`. Ex: `<Provider store={configureStore()}><App/></Provider>`

### 4.4 Creating Redux Actions
1. Create src/todos/actions.js file.
2. Create Action type constant and Action creator function for CREATE_TODO and REMOVE_TODO actions.

### 4.5 Creating Reducers
1. A reducer is basically a fn to perform some tasks when an action is dispatched.
2. Create src/todos/reducers.ts file.
3. Reducer takes 2 args: current state, action triggered
4. Note: In reducers, we should not mutate the original state. Always return a new copy
5. After todos reducers is created in reducers.ts file. Import it and add it to the list of reducers in store.js file

### 4.6 Connecting NewTofoForm Component to the Store with connect from react-redux
1. connect is a higher order fn with 2 sets of args: `connect()()` Ex: `conneect(mapStateToProps, mapDispatchToProps)`
2. mapStateToProps is a Fn which takes the entire state of our app as input and return specific props from the state which the specific component requires. And all props defined inside mapStateToProps is automatically made available by connect as prop for the component to use.
3. mapDispatchToProps is a Fn which takes dispatch as input. A dispatch is a fn used to call an action creator.

### 4.7 Connecting TodoList component to store and Running our React - Redux application
1. src/todos/TodoList.js: Use connect witih mapStateToProps and mapDispatchToProps
2. Note: mapStateToProps and mapDispatchToProps are optional. Ex: `connect(mapStateToProps)(mycomponent)` and `connect(null, mapDispatchToProps)(mycomponent)`
3. Run: `npm run dev` and test create/delete functionality at http://localhost:3000/

### 4.8 Persisting the Redux store with redux-persist
1. Our current store gets cleared on reloading browser. To persist data in store: use **redux-persist**. `npm install redux-persist`
2. store.js file: Wrap rootReducer with persistReducer configuration.
3. index.js file: Wrap App with PersistGate
4. Now on reloading browser, the state will be still saved. In order to clear it, delete the `persist:root` data from localStorage. 

### 4.9 Redux DevTools
1. To monitor states from chrome dev tools. And also manually dispatch actions to test reducers.
2. Add Redux DevTools extension to chrome : https://chrome.google.com/webstore/detail/redux-devtools
3. Add __REDUX_DEVTOOLS_EXTENSION__ to store.js
4. Run app with `npm run dev`
5. Go to localhost and on performing some action: it will show the list of actions. The difference it makes to state and new state after the action, all in the Redux devtools extension
6. Also we can dispatch actions to test reducers from redux dev tools. Click on the dispatch icon(keyboard) at bottom panel and enter the data in JSON to dispatch `{type: 'CREATE_TODO',payload: {text: 'Gym'}}` and click dispatch btn.

### 4.10 Redux Best Practices
1. **Export both connected and unconnected version of components.** Your tests should not care whether your component is connected or not.
2. **Keep redux actions and async operations out of your reducers.**
3. **Think carefully about which components to be connected to redux.** Because connecting a component to redux makes it less reusable. Thus comes the concept of containers: It is better to use the store in a parent component or say container and then use that in child components which can be reusable.

### 4.11 Redux flow for Mark as Completed
1. Create MARK_TODO_AS_COMPLETED action in action.js and add it to the list of reducers in reducers.js
2. Dispatch the action Creator in Todolist.js and pass it as a props to child component TodoListitem.js. Note: We are not connecting redux directly to TodoListItem.js because we want to keep it reusable. Always good practice to keep our redux connection at parent level and pass to child as props.

## 5. Dealing with Side Effects
### 5.1 Why Do We need Redux-Thunk?
1. With Redux now our components size are really small as most of the state management code is moved out of component to store.js, actions.js and reducers.js file.
2. Still in our current code: component has to contain code for asnyc/API calls. This is called **Side Effects**
3. To separate it out we should use **Side effect libraries**
4. Thus: Redux ---> State Management, Components ---> View Logic, Side Effect Libraries ---> Side Effects
5. Side Effect libraries: Redux Thunk, Redux Saga, Redux Logic etc.
6. Redux saga is more popular.
7. Redux Thunk is simpler and easy to learn.

### 5.2 How Redux Thunk works?
1. UI Triggers Action ---> State is Updated ---> Component See updated State
2. Redux Thunk allows us to add a fork to the above loop after ui triggers action. For Async loading data etc. Thus removing the side effect logic from components.

### 5.3 Adding Redux Thunk to React
1. `npm install redux-thunk redux-devtools-extension @babel/runtime`
    - redux-devtools-extension is used for adding redux-thunk to our devtools middleware.
    - @babel/runtime: is used so that async thunks can work in our app
2. `npm install --save-dev @babel/plugin-transform-runtime`
    - Dev version of @babel/runtime: used for async thunks to work in our app
3. Add @babel/plugin-transform-runtime to .babelrc file
4. Add thunk to store.js file

### 5.4 Creating a sample thunk
1. Create src/todos/thunks.js file
2. A thunk is a fn which calls another fn which performs a particular task
3. Create a sample Thunk to test

### 5.5 Setting up Node Server for REST API calls
1. `cd react-ecosystem-server`
2. `npm install`
3. `npm start`
4. server will start at port 8080

### 5.6 Async thunks - for Todos API
1. Create actions for in progress, success and failure state in actions.js file.
2. Create thunk `loadTodos` in thunks.js file.

### 5.7 Adding isLoading reducer
1. Create reducer in reducers.js file.
2. Add it to list of reducers in store.js file.
3. Call loadTodos thunk in TodoList.js file.

### 5.8 Refactoring the todos reducer to show todos from API response
1. Update the todos in state with data from API.

### 5.9 Using Thunks to create POST API call - with addTodoRequest thunk
1. Create addTodoRequest thunk in thunks.js file
2. modify CREATE_TODOS case in todos reducer
3. Modify CREATE_TODOS action
4. Call thunk addTodoRequest from NewTodoForm.js file

### 5.10 Using Thunks for DELETE API call - with removeTodoRequest thunk
1. Create removeTodoRequest thunk in thunks.js file
2. Modify REMOVE_TODO in action and reducer to receive todo instead of text
3. call removeTodoRequest from TodoList.js file and send id from TodoListItem.js file.

### 5.11 Using Thunks for UPDATE API call - with markTodoAsCompletedRequest thunk
1. Create markTodoAsCompletedRequest thunk in thunks.js file
2. Modify MARK_TODO_AS_COMPLETED in action and reducer to receive todo instead of text
3. call markTodoAsCompletedRequest from TodoList.js file and send id from TodoListItem.js file.

## 6. Selectors
### 6.1 Why do we need selectors?
1. Till now we have handled **separation of concerns** for the following: 
    - Component ---> Display Data
    - Reducers ---> Manage State
    - Thunks ---> Side effect logic
2. Currently, we are mapping data from state directly to mapStateToProps. But what if we need to modify the data from state before assigning to mapStateToProps.
3. **Selectors** gives us a place to put logic for combining, filtering, transforming storing data.
4. If JSON data structure of state changes, we don't have to change the mapping in mapStateToProps for every component. All we have to do is just change the code in selectors.js file.

### 6.2 Creating selector - getTodos and getTodosLoading
1. Create src/todos/selectors.js file
2. Add getTodos and getTodosLoading selectors in selectors.js
3. Modify todos reducer with new todos structure: `{ isLoading: false, dat: {text: 'some text'}}`
4. control isLoading prop with LOAD_TODOS_SUCCESS, IN_PROGRESS and FAILURE. Remove isLoading reducer from the app.
5. **IMPORTANT:** The beauty of selectors is: now if structure of state changes, we don't have to change the mapping in mapStateToProps for every component. All we have to do is just change the code in selectors.js file.

### 6.3 Combining selectors with Reselect
1. Create selector to get separate list of todos: completed and incomplete todos in selectors.js
2. We will use getTodos selector to create getIncompleteTodos selector. For this we will use a tool called **reselect** used for combining selectors / modifying them.
3. `npm install reselect`
4. **createSelector**: It accepts multiple args. The last fn will take input from all the selectors mentioned before it. The output of last fn is the final o/p

### 6.4 Creating getCompletedTodos selector - And Computation saving
1. Create getCompletedTodos in selectors.js
2. **Imp Note**: The benefit of using createSelector is it does not compute everything when our component re-renders. It computes only the prop in state which has changed from the prev state. Thus, createSelector saves a lot of resource when building large scale applications by limiting the computation to only state which is changing on component rerendering.

### 6.5 Adding getCompletedTodos and getIncompletedTodos to components
1. Add both the selectors to mapStateToProps of TodoList.js
2. Note: If any issue comes in loading the app, it might be bcoz of the localStorage, so clear the localStorage data. Make sure the defaults are set to empty array and reload the app.

## 7. Styled Components
### 7.1 Why do we need styled components?
1. So far we have handled the **Separation of concerns** as follows:
    - Components ---> Display data
    - Reducers ---> Manage state
    - Thunks ---> Side Effect Logic
    - Selectors ---> Abstracting the state's format, transforming state data
2. For handling CSS: we are currently using separate .css file aka **css modules**. Ex: component.js and component.css file. This is not ideal to have extra css file or modules for every component.
    - It will clutter our folder structure.
    - If .css file is separate, then we will need additional classes to change css as per state. Ex: 'selected' or 'active' class needs to be added to the item in component if active style is needed. But with styled components, we don't need these additional classes.
3. **Styled Component:** Allows us to define styles inside our JS files. Ex: Instead of using `<Item className={item.isSelected ? "selected" : "not-selected"}`, we can just use: `<Item selected={true}>`
4. More Benefit: can pass props to them and thus can dynamically change styles

### 7.2 Creating a Styled Component
1. Install: `npm install styled-components`
2. Create styled components in TodoList.js using tagged fns. styled.div or styled.h1 or styled.button etc
3. Organizing styled components: 
    - If the component is unique and there is less amount of code then keep it in js file. 
    - If amount of code is more, create separate styled component js file. 
    - If component is common and can be reused, create seaparate file and store all styled components in src/todos/user-interface folder.

### 7.3 Converting CSS modules to Styled components
1. Move code from .css modules to .js files and delete the css files.
2. Ex: copy styles of list-wrapper from TodoList.css file to TodoList.js file with styled.div and replace `<div className="list-wrapper">` with `<ListWrapper>`

### 7.4 Passing props to Styled Components
1. The main benefit of styled components is we can pass props to them and thus can dynamically change styles. Thus condition for styling is moved to styled tagged fns and JSX is much more cleaner.
2. Ex: `border-top: ${props => props.completed === true ? 'none' : '2px solid red'};`

### 7.5 Extending Styled Components
1. Will take all styles from ToDoItemContainer and add border-top on top of that

## 8. Testing
### 8.1 Testing React Eco System
1. Testing React Eco System tools are easy.
2. `npm install --save-dev mocha chai`: testing libraries: mocha and chai. Mocha is used to run the test files while chai helps with the syntax ex: `expect`
3. `npm install --save-dev @babel/register`: so that our tests can run model babel code
4. Add test command to package.json `"test": "mocha \"src/**/*.test.js\" --require @babel/register --recursive"`

### 8.2 Testing Reducers
1. Important. And easy to test, since a reducer is basically a fn. So we just have to pass some args and write what is the expected output.
2. To test reducer we will need 2 things: 1. Fake state, 2. Fake action
3. Add code in src/todos/tests/reducers.test.js and run `npm run test`

### 8.3 Testing Redux Thunks
1. create src/todos/tests/thunks.test.js. We need to test 2 important thins
    - All dispatch actions are sent in proper order inside our thunk
    - All fetch API calls are made successfully
    - Thus, In our app we have to test 3 things: dispatch loadTodosInProgress, fetch todos api call, dispatch loadTodosSuccess
2. `npm install --save-dev sinon node-fetch fetch-mock`
3. **sinon**: helps to create a fake fn and keep track of what args it was called with. To mock the async dispatch fn used in loadTodos thunk.
4. **node-fetch fetch-mock**: helps to creake fake fetch api calls. Since we don't want to make API calls to server while running test scripts.

### 8.4 Testeing Selectors
1. create src/todos/tests/selectors.test.js
