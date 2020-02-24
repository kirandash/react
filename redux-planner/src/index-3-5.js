import C from './constants';
import storeFactory from './store';

const initialState = localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : {}; // Setting initial state from prev store data from local Storage

const saveState = () => {
    const state = JSON.stringify(store.getState());
    localStorage['redux-store'] = state;
} // save store data into local storage

const store = storeFactory(initialState);

store.subscribe(saveState);

store.dispatch({
    type: C.ADD_DAY,
    payload: {
        "resort": "Mt Shasta",
        "date": "2020-10-28",
        "powder": true,
        "backcountry": true
    }
})

store.dispatch({
    type: C.ADD_DAY,
    payload: {
        "resort": "Squa Valley",
        "date": "2020-08-18",
        "powder": true,
        "backcountry": true
    }
})

store.dispatch({
    type: C.ADD_DAY,
    payload: {
        "resort": "Hyderabad",
        "date": "2020-09-11",
        "powder": false,
        "backcountry": true
    }
})