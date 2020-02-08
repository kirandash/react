import C from './constants';
import { goal } from './store/reducers';
import { skiDay } from './store/reducers';
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
    initial goal: ${skiDayState},
    action: ${JSON.stringify(addDayAction)},
    new goal: ${JSON.stringify(nextSkiDayState)}
`);