import C from './constants';

export function addDay(resort, date, powder=false, backcountry=false) {
    // Add App logic here...
    return {
        type: C.ADD_DAY,
        payload: {resort, date, powder, backcountry}
    }
}

export function removeDay(date) {
    // Add App logic here...
    return {
        type: C.REMOVE_DAY,
        payload: date
    }
}

export const setGoal = (goal) => 
    ({
        type: C.SET_GOAL,
        payload: goal
    })

export function addError(message) {
    return {
        type: C.ADD_ERROR,
        payload: message
    }
}

export const clearError = idx => 
    ({
        type: C.CLEAR_ERROR,
        payload: idx
    })