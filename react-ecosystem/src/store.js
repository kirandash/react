import { createStore, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import { todos } from './todos/reducers';

const reducers = {
    todos,
}; // Will contain all reducers

const persistConfig = {
    key: 'root',
    storage, // defaults to localstorage on web
    stateReconciler: autoMergeLevel2, // autoMergeLevel2 tells app how to consider current and stored state of our app
}

const rootReducer = combineReducers(reducers); // Combines all our reducers in a form that can be passed to createStore fn

const persistedReducer = persistReducer(persistConfig, rootReducer); // Wraps root reducer witih persistReducer configuration

export const configureStore = () => createStore(persistedReducer); // Create root store of our app