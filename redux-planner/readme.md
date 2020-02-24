# Redux
Redux is a JS library to manage client data within our app. Redux is based on flux i.e. a design pattern for developers as an alternative to MVC. It is designed to tackle data changes during application flow.

## 1. Intro to Redux
### 1.1 History of Redux
1. Redux was developed in 2015 by Dan Abramov after a talk on dev tools.
2. Andrew Clark joined Redux.

Flux:
1. Not a library. A design pattern by FB. Which can be implemented with JS.
2. An alternative to MVC, MVP or MVVM.
3. Variations of MVC design pattern.
4. Problem with MVC: One model might have control over many views. Thus, changing data in one model might affect other views. Thus, definitely intemidating to change model for large scale projects with bigger teams. Thus FB developed Flux.
5. Flux: Data flows in one direction. And changes are initiated with actions.
6. Flow: Action ---> Dispatcher(s) ---> Store(s) ---> View(s) ---> User. Now if user interacts with the view. A new Action is generated and the flow starts all over again. While data flow is always redirectional.

Flux JS libraries:
1. Reflux, Flummox, Fluxxor, Alt, Redux, Marty.js, McFly, DeLorean, Lux, Fluxy, Material Flux
2. Redux is simpler and thus a winner.

### 1.2 What is Redux
1. Not exactly same as Flux. Data still flows in one direction but the big difference is there is only one store. Since only one store, there is no need of a dispatcher. Store will dispatch the actions directly. 
Action ---> Store ---> View ---> User
2. So all data in just one store. Easier to access and debug. But modularity seems difficult. But it is achieved by using fns to control data in an idividual store. e.g. users() to manage users array and so on.

Functional Programming needed for Redux:
1. Pure Functions: fns that do not have side effects. i.e. fns that use data to create new results. Bt do not modify it's arguments or global variables.
2. Immutability: Don't change data but produce new ones.
3. Composition: Ability to put fns in a way that o/p of one fn is i/p to next. And the final fn returns expected o/p.
Ex: getPercent() = i/p ---> convertToDecimal() ---> decimalToPercent() ---> addPercentSign() ---> o/p
In redux, composition is used in store. (Reducer1, Reducer2, Reducer3, Reducer4) etc.

### 1.3 Plan a redux app.
Unlike OOPS, where we are much interested in Nouns/Objects. Redux is a Functional Approach so we are more interested in verbs/Actions.
1. Start with Actions: ADD_DAY, REMOVE_DAY, SET_GOAL, ADD_ERROR, CLEAR_ERROR, FETCH_RESORT_NAMES, CANCEL_FETCHING, CHANGE_SUGGESTIONS, CLEAR_SUGGESTIONS
2. Create a constants.js file to store all constants. Benefits: IDE will autosuggest. Also JS will throw an error if we have any typo.
3. States: Identify the variables/states impacted by actions.
4. allSkiDays -> [], skiDay -> {resort, date, powder, backcountry}, goal -> number, errors -> [], resortNames.fetching -> boolean, resortNames.suggestions -> []
5. Create a initialState.json file which will be a snapshot of our app data/state at any given time.

## 2. Understanding Reducers
### 2.1 Run redux with babel-node
1. node -v (12.13.1)
2. https://babeljs.io/ (For latest JS code: import, export, spread operator etc)
3. npm init: To create package.json file
4. npm install babel-cli --save-dev (Installs babel and babel cli) - babel-node folder from node_modules/.bin/babal-node helps us run babel commands
5. npm install babel-preset-latest --save-dev and npm install babel-preset-stage-0 --save-dev (deprecated) Now, use npm install babel-preset-env --save-dev
6. Create .babelrc file.
7. Run babel-node from npm start script.

### 2.2 Build your first reducer
Reducers are pure functions designed to manage specific parts of ur state object.
1. Create your reducer and run npm start (babel-node)
2. Tips: Create a const arrow fn and export it

### 2.3 Create Object Reducer
For skiDays

### 2.4 Create Array Reducer
For Errors

### 2.5 Composing Reducers
Add/Remove a ski day and Fetch all ski days

### 2.6 Fetch Resort Names
1. `npm i expect`
2. `npm run fetch-resorts`

### 2.7 Cancel Fetching Resort Names
1. `npm run cancel-fetch`

### 2.8 Clear Suggestions
1. `npm run clear-suggestions`

### 2.9 Change Suggestions
1. `npm run change-suggestions`

### 2.10 Combine all reducers
1. Install Redux: npm i redux --save
2. npm run combine-reducers

## 3. The Store
### 03.01 Create a static build with webpack
1. npm i webpack --save-dev (webpack to help us create bundle file)
2. npm i webpack-dev-server --save-dev (to run dev server locally) - uses an express server
3. npm i babel-loader --save-dev (to convert ES5 to supported code)
4. npm i json-loader --save-dev (to get any JSON documents inside of our bundle) (deprecated) Don't install anymore
5. npm i babel-core --save-dev (comes with babel cli but still install in case you don't have babel cli installed) - includes core functionalities reqd by babel
6. npm start will fail for webpack config. Need to install webpack-cli as well to fix this
7. npm i webpack-cli --save-dev
Note: use @babel/core and @babel/preset-env since the older ones have deprecated.
8. Working webpack configuration:
`{
    "webpack": "^4.41.5",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.10.3",
    "html-webpack-plugin": "^3.2.0"
}`

### 03.02 Create a Store (createStore, getState and dispatch)
1. store = createStore(reducer); create state
2. store.getState(); read state
3. store.dispatch({}); mutate state