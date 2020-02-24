import C from './constants';
import appReducer from './store/reducers'; // No need to destructure since single reducer is exported by default
import initialState from './initialState.json';
import { createStore } from 'redux'; // createStore from redux helps manage states

const store = createStore(appReducer, initialState); // 1. Creates states for every reducer - with default values, Don't pass the 2nd argument if no initial state is reqd

console.log('initial state', store.getState()); // 2. Read the state with store.getState

store.dispatch({
    type: C.ADD_DAY,
    payload: {
        "resort": "Mt Shasta",
        "date": "2020-10-12",
        "powder": false,
        "backcountry": true
    }
}) // 3. Mutate the state with store.dispatch

console.log('next state', store.getState());