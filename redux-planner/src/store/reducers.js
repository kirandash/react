import C from '../constants';

export const goal = (state=10, action) => 
// { // const to make sure that we don't manipulate it, // ES6 default implementation for state = 10
//     if(action.type === C.SET_GOAL){
//         return parseInt(action.payload) // parseInt to make sure goal is always a number
//     } else {
//         return state
//     }
// } // exporting so that it can be destructured in index.js or other files.
    (action.type === C.SET_GOAL) ?
        parseInt(action.payload) // parseInt to make sure goal is always a number
        : state

export const skiDay = (state=null, action) =>
    (action.type === C.ADD_DAY) ? 
        action.payload
        : state