import C from './constants';
import appReducer from './store/reducers';
import { createStore } from 'redux';

const store = createStore(appReducer);

const unsubscribeGoalLogger = store.subscribe(() => console.log(` Goal: ${store.getState().goal}`))

setInterval(() => {
    store.dispatch({
        type: C.SET_GOAL,
        payload: Math.floor(Math.random() * 100)
    }) // Action dispatched every 1/4th second
}, 250);

setTimeout(() => {
    unsubscribeGoalLogger(); // Calling the subscribe callback again will unsubscribe the store
}, 3000);