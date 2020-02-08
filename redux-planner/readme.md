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