# COVID-19 Tracker
## 1. Intro and Setup
This is a web application using which we will be able to track covid-19 reports for any specific country and also monitor global stats. We will also be able to pin specific countries so that the results will always show at the top.

### 1.1 Create app with create-react-app
1. Create react app is a tool that helps us create a react app quickly so that we don't have to setup the project from scrathc. Run the command: `npx create-react-app covid-tracker`.

### 1.2 Understanding Project structure
1. The project created by create-react-app has 2 main folders
    - **public**: to hold publicly accessible resources of our app
    - **src**: will hold actual react code
2. **public folder - public/index.html**:
    - index html file is present inside public folder. This file is going to be sent to the client when react app loads.
    - **div with id root**: index.html file has a div with id `root` which is the target where our react app is going to load.
    - There is a **noscript** tag which will execute if JS is disabled for client browser. So if client's browser has JS disabled, client will get the message written in noscript tag.
3. **src folder**:
    - **index.js**: Code in this will help us insert our React App into index.html with `ReactDOM.render()`. ReactDOM is an extension of React that helps us with rendering react components on to DOM.
    - **index.css**: Holds global css for our app. All styles written here will be applied to all the components in our App.
    - **App.js**: Holds JS code for our root React component
    - **App.css**: Holds CSS code for our root React component
4. **package.json**:
    - Holds details of all the packages that are used so far.
    - Also holds the scripts for starting dev server, creating a build and testing our app.
5. Run the command `npm run start` to run the project on localhost:3000
6. Change app title to COVID-19 Tracker in index.html file.

## 2. Building the App View by Creating Components
### 2.1 Create SearchCountryForm component
1. This component will hold the form which we will use to search covid report for a specific country.
2. Create src/countries/SearchCountryForm.js and src/countries/SearchCountryForm.css.
3. Add component code to .js file. Add the component to root component App.js file
4. Copy css to SearchCountryForm.css file. And add styles to App.css, index.css file.

### 2.2 Create CountriesList component
1. This functinoal component will hold the list of all countries we are tracking.
2. Create src/countries/CountriesList.js and CountriesList.css files.
3. Add CountriesList to App.js.

### 2.3 Create CountryDetail component
1. This functional component will hold the individual country details.
2. Create src/countries/CountryDetail.js and .css file.

### 2.4 Create sample countries and add to App.js
1. Create sample-countries.js and send that as props to CountriesList component in App.js file.

## 3. Managing State of the App with Redux
### 3.1 Why do we need Redux?
1. Let's have a look at ways to manage state:
    - **A single state**: Creating state for root component and using that for all child components following a prop chain. **Cons**: Not suitable for large applications. As lots of props get attached to root state. And we will have to deal with **props drilling**. For example: App ---> Page ---> Section ---> List ---> ListItem. Ugly and difficult to troubleshoot. Prone to errors if we break the prop chain by mistake.
    - **Components managing their own state**: Creating state for each component. Pros: No Props drilling. **Cons**: Difficult to share data between two components.
    - **Global State Management**: A single centralized state, With all child components having unlimited access to it. **Pros**: No Props drilling. Easy to share state data b/w components. **Cons**: No rules/organizations on how to create state and use it. Thus leads to inconsistency b/w developers. And hard to recreate bugs for troubleshooting. Thus, unrestricted global state is not an ideal choice.
    - **Redux** solves this problem by adding rules/orgnaizations to global state management.

### 3.2 How redux works?
1. Works on global state management concept. Thus have a centralized state called **Store**.
2. **The redux store** is basically a JSON object that can hold any type of data we want. Ex: `{ user: {...}, products: {...} }`
3. How redux controls the global state?: The main problem with global state is there is no rules/restrictions. Redux solves this problem by adding some rules.
4. Other pieces of Redux: 
    - **{ Redux Store }**: JSON object that contains current state of our app
    - **Redux actions**: JSON object consisting of two things: `{ type, payload }`. It defines different actions that can occur in our app. Ex: `USER_DATA_LOADED`, `ITEM_ADDED_TO_CART`
    - **Reducers**: This defines what changes to do with Redux Store when a Redux action occurs. Ex: When `ITEM_ADDED_TO_CART` action occurs, we take all the data in payload and store it in shoppingcart prop in redux store.
5. Summary: Components can only interact with the state by triggering Redux actions.
6. Thus Redux follows a **Unidirectional Data Flow**: UI Triggers action ---> State is updated ---> Components see updated State

### 3.3 Adding redux to our React App
1. Install redux to handle redux tasks and react-redux to integrate redux with react: `npm install redux react-redux`
2. Create src/store.js: will hold logic for redux store - centralized global store. Thus kept in src folder.
    - Create root store by combining all reducers
3. In index.js: wrap `App`with `Provider`. Ex: `<Provider store={configureStore()}><App/></Provider>`

### 3.4 Creating Redux Actions for Create Country and Remove Country
1. Create src/countries/actions.js file. This is inside countries folder. Because we don't want to make one centralized list of actions. Actions can also come from different modules.
2. Create Action type constant and Action creator function for CREATE_COUNTRY and REMOVE_COUNTRY actions.

### 3.5 Creating Reducers and Connecting it to root store
1. A reducer is basically a fn to perform some tasks when an action is dispatched.
2. Create src/countries/reducers.ts file.
3. Reducer takes 2 args: current state, action triggered
4. After countries reducers is created in reducers.ts file. Import it and add it to the list of reducers in store.js file

### 3.6 Connecting SearchCountryForm Component to the Store with connect from react-redux
1. connect is a higher order fn with 2 sets of args: `connect()()` Ex: `conneect(mapStateToProps, mapDispatchToProps)`
2. mapStateToProps is a Fn which takes the entire state of our app as input and return specific props from the state which the specific component requires. And all props defined inside mapStateToProps is automatically made available by connect as prop for the component to use.
3. mapDispatchToProps is a Fn which takes dispatch as input. A dispatch is a fn used to call an action creator.
4. useState react hook is used to create a variable inputCountryCode to hold country code data and setInputCountryCode is a fn to set the variable's value

### 3.7 Connecting CountriesList component to store and Running our React - Redux application
1. src/countries/CountriesList.js: Use connect witih mapStateToProps and mapDispatchToProps
2. Note: mapStateToProps and mapDispatchToProps are optional. Ex: `connect(mapStateToProps)(mycomponent)` and `connect(null, mapDispatchToProps)(mycomponent)`
3. Remove sampleCountries from CountriesList in App.js. Since now we are populating it from state. Later we will get it from API.
4. Run: `npm run start` and test create/delete functionality at http://localhost:3000/
5. Test Adding and Removing Country on browser

### 3.8 Persisting the Redux store with redux-persist
1. Our current store gets cleared on reloading browser. To persist data in store: use **redux-persist**. `npm install redux-persist`
2. store.js file: Wrap rootReducer with persistReducer configuration.
3. index.js file: Wrap App with PersistGate
4. Now on reloading browser, the state will be still saved. In order to clear it, delete the `persist:root` data from localStorage.

### 3.9 Redux DevTools
1. To monitor states from chrome dev tools.
2. Add Redux DevTools extension to chrome : https://chrome.google.com/webstore/detail/redux-devtools
3. Add __REDUX_DEVTOOLS_EXTENSION__ to store.js createStore fn. It should highlight the redux devtools extension once our app is loaded.
4. Run app with `npm run start`
5. Go to localhost and on performing some action: it will show the list of actions. The difference it makes to state and new state after the action, all in the Redux devtools extension

### 3.10 Redux flow for Pin Country
1. Create PIN_COUNTRY action in action.js and add it to the list of reducers in reducers.js
2. Dispatch the action Creator in CountriesList.js and pass it as a props to child component CountryDetail.js. Note: We are not connecting redux directly to CountryDetail.js because we want to keep it reusable. Always good practice to keep our redux connection at parent level and pass to child as props.
3. In CountryDetail.js hide the Pin Country button once it is pinned. Later we will modify the code to show all Pinned countries at top and not pinned one's at bottom.

## 4. Handling Side Effects
### 4.1 Why Do We need Redux-Thunk?
1. With Redux now our components size are really small as most of the state management code is moved out of component to store.js, actions.js and reducers.js file.
2. Still in our current code: component has to contain code for asnyc/API calls. This is called **Side Effects**
3. To separate it out we should use **Side effect libraries**
4. Thus: Redux ---> State Management, Components ---> View Logic, Side Effect Libraries ---> Side Effects
5. Side Effect libraries: Redux Thunk, Redux Saga, Redux Logic etc.
6. Redux saga is more popular.
7. Redux Thunk is simpler and easy to learn.

### 4.2 Understanding Redux Thunk Flow
1. UI Triggers Action ---> Redux Thunk is executed to make Async/API calls ---> State is Updated ---> Component See updated State.

### 4.3 Adding Redux Thunk to React
1. `npm install redux-thunk redux-devtools-extension @babel/runtime`
    - redux-thunk is the main thunk library to be used in our app
    - redux-devtools-extension is used for adding redux-thunk to our devtools middleware.
    - @babel/runtime: is used so that async thunks can work in our app
2. `npm install --save-dev @babel/plugin-transform-runtime`
    - Dev version of @babel/runtime: used for async thunks to work in our app
3. Add thunk to store.js file
4. thunk is used with applyMiddleware from redux.
5. The result is passed through composeWithDevTools for dev tools support
5. After adding Thunks throw applyMiddleware, test on chrome if every thing working as before - action dispatch in dev tool.
