import C from './constants';
import appReducer from './store/reducers';
import { createStore } from 'redux';
const initialState = localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : {}; // Setting initial state from prev store data from local Storage

const store = createStore(appReducer, initialState);

window.store = store; // exposing store object to global level (Only for debugging - not prod)

store.subscribe(() => console.log(store.getState())) // subscribe is called everytime state changes or an action dispatches

store.subscribe(() => {
    const state = JSON.stringify(store.getState());
    localStorage['redux-store'] = state;
}) // save store data into local storage

// can manipulate store from console window, store.dispatch({ type: "SET_GOAL", payload: 12 })