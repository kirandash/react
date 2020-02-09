import C from './constants';
import { goal } from './store/reducers';
import { skiDay } from './store/reducers';
import { errors } from './store/reducers';
import { allSkiDays } from './store/reducers';
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

// 2.2 Simple reducer
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

// 2.3 Object Reducer
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

// 2.4 Array Reducer - Add Error
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

// 2.5 Compose reducer - All Ski days
const allSkiDaysState = [
    {
        "resort": "Kirkwood",
        "date": "2019-18-02",
        "powder": true,
        "backcountry": false
    },
    {
        "resort": "China",
        "date": "2020-18-02",
        "powder": true,
        "backcountry": false
    }
];

const addskiDayAction = {
    type: C.ADD_DAY,
    payload: {
        "resort": "Boreal",
        "date": "2020-11-08",
        "powder": true,
        "backcountry": false
    }
}

// Do not add a day if any other ski day is already present
const addskiDayAction2 = {
    type: C.ADD_DAY,
    payload: {
        "resort": "Boreal",
        "date": "2019-18-02",
        "powder": true,
        "backcountry": false
    }
}

const nextAllSkiState = allSkiDays(allSkiDaysState, addskiDayAction); // Add a ski day and return all ski days
const nextAllSkiState2 = allSkiDays(allSkiDaysState, addskiDayAction2); // Add a ski day if doesn't exist already

console.log(`
    initial All ski days: ${JSON.stringify(allSkiDaysState)},
    action: ${JSON.stringify(addskiDayAction)},
    new all ski days: ${JSON.stringify(nextAllSkiState)}
`);

console.log(`
    initial All ski days: ${JSON.stringify(allSkiDaysState)},
    action: ${JSON.stringify(addskiDayAction2)},
    new all ski days: ${JSON.stringify(nextAllSkiState2)}
`);

// Remove a ski day
const removeskiDayAction = {
    type: C.REMOVE_DAY,
    payload: "2019-18-02"
}

const nextAllSkiState3 = allSkiDays(allSkiDaysState, removeskiDayAction); // Remove a ski day and return all ski days

console.log(`
    initial All ski days: ${JSON.stringify(allSkiDaysState)},
    action: ${JSON.stringify(removeskiDayAction)},
    new all ski days: ${JSON.stringify(nextAllSkiState3)}
`);