import { createStore, combineReducers } from 'redux';
import { todos } from './todos/reducers';

const reducers = {
    todos,
}; // Will contain all reducers

const rootReducer = combineReducers(reducers); // Combines all our reducers in a form that can be passed to createStore fn

export const configureStore = () => createStore(rootReducer); // Create root store of our app