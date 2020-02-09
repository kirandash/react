import C from './constants';
import { goal } from './store/reducers';
import { skiDay } from './store/reducers';
import { errors } from './store/reducers';
// import { allSkiDays, goal } from './initialState.json';

// console.log(`
//     Sik Day Counter
//     ===============
//     The goal is ${goal}.
//     Initially there are ${allSkiDays.length} ski days in state.

//     Constants (actions)
//     ---------
//     ${Object.keys(C).join('\n    ')}
// `);

// Simple reducer
const state = 10; // const, Never change the state. Produce new values from given state
const action = {
    type: C.SET_GOAL, // type of action (mandatory)
    payload: 15 // desired goal
} // Action obj must have atleast the type and all then can have all other infos reqd to change the state

const nextState = goal(state, action);

console.log(`
    initial goal: ${state},
    action: ${JSON.stringify(action)},
    new goal: ${nextState}
`);

// Object Reducer
const skiDayState = null; // initialize object state
const addDayAction = {
    type: C.ADD_DAY, // type of action (mandatory)
    payload: {
        "resort": "Changi Resort",
        "date": "2019-19-04",
        "powder": true,
        "backcountry": false
    } // desired ski day
} // Action obj

const nextSkiDayState = skiDay(skiDayState, addDayAction);

console.log(`
    initial ski days: ${skiDayState},
    action: ${JSON.stringify(addDayAction)},
    new ski days: ${JSON.stringify(nextSkiDayState)}
`);

// Array Reducer - Add Error
const errorsState = [
    "user not authorized",
    "server feed not found"
];

const addErrorAction = {
    type: C.ADD_ERROR,
    payload: "cannot connect to server"
}

const nextErrorsState = errors(errorsState, addErrorAction);

console.log(`
    initial errors: ${JSON.stringify(errorsState)},
    action: ${JSON.stringify(addErrorAction)},
    new errors: ${JSON.stringify(nextErrorsState)}
`);

// Array Reducer - Remove an Error

const removeErrorAction = {
    type: C.REMOVE_ERROR,
    payload: 0
}

const nextErrorsRemState = errors(errorsState, removeErrorAction);

console.log(`
    initial errors: ${JSON.stringify(errorsState)},
    action: ${JSON.stringify(removeErrorAction)},
    new errors: ${JSON.stringify(nextErrorsRemState)}
`);