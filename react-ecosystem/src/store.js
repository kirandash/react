import { createStore, combineReducers } from 'redux';

const reducers = {}; // Will contain all reducers

const rootReducer = combineReducers(reducers); // Combines all our reducers in a form that can be passed to createStore fn

export const configureStore = () => createStore(rootReducer); // Create root store of our app