import C from './constants';
import { goal } from './store/reducers';
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