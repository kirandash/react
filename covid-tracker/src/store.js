import { 
    createStore, // Helps creating a store using reducer
    combineReducers // Helps combining multiple reducers in a form that the result can be passed to createStore fn
} from 'redux';

import { countries } from './countries/reducers';

const reducers = {
    countries,
}; // will contain list of all reducers to use in our App

const rootReducer = combineReducers(reducers); // Combines all our reducers in a form that can be passed to createStore fn

export const configureStore = () => createStore(rootReducer); // Create configureStore: The root centralized store of our App