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

export const errors = (state=[], action) => {
    switch (action.type) {
        case C.ADD_ERROR:
            // return state.push(action.payload) not recommended as it will mutate the original state
            return [
                ...state,
                action.payload
            ] // create a new state array with prev state array items and add the new payload item
        case C.REMOVE_ERROR:
            return state.filter((message, i) => i !== action.payload) // Filter returns a new array. Thus state is not mutated
        default:
            return state
    }
}

export const allSkiDays = (state=[], action) => {
    switch (action.type) {
        case C.ADD_DAY:
            // Do not add a day if any other ski day is already present
            const hasDay = state.some(skiDay => skiDay.date === action.payload.date)
            return (hasDay) ? state : [
                ...state,
                skiDay(null, action) // composing reducer
            ]
            case C.REMOVE_DAY:
                return state.filter(skiDay => skiDay.date !== action.payload)
            default:
                return state
    }
}

export const fetching = (state=false, action) => {
    switch (action.type) {
        case C.FETCH_RESORT_NAMES:
            return true;
        case C.CANCEL_FETCHING:
            return false;
        default:
            return state
    }
}