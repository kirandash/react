import C from '../constants';
import appReducer from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

// Middleware uses a higher order fn (async)
const consoleMessages = store => next => action => {
    let result; // initializing the store

    console.groupCollapsed(`dispatching action => ${action.type}`);
    console.log('ski days', store.getState().allSkiDays.length);
    // Before the dispatch
    result = next(action); // dispatching the action
    // after the dispatch

    let { allSkiDays, goal, errors, resortNames } = store.getState();

    console.log(`
        ski days: ${allSkiDays.length}
        goal: ${goal}
        fetching: ${resortNames.fetching}
        suggestions: ${resortNames.suggestions}
        errors: ${errors.length}
    `);

    console.groupEnd();

    return result; // returning the action result in store
} // This middleware helps us logging messages to console before and after an action is dispatched

export default (initialState={}) => {
    return applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, initialState); // apply middleware will return a fn to which we should pass the createStore fn with the args reducer and initial state
    // return createStore(appReducer, initialState);
} // default fn to create a store