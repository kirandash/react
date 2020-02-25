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

export const changeSuggestions = suggestions => 
    ({
        type: C.CHANGE_SUGGESTIONS,
        payload: suggestions
    })

export const clearSuggestions = () =>
    ({
        type: C.CLEAR_SUGGESTIONS
    })

export const randomGoals = () => (dispatch, getState) => {
    // Thunk does not return action objects directly. They return another higher order fn with args dispatch and getState which will help us control dispatching our actions or get current state
    if(!getState().resortNames.fetching) {
        dispatch({
            type: C.FETCH_RESORT_NAMES
        })
    
        setTimeout(() => {
            dispatch({
                type: C.CANCEL_FETCHING
            })
        }, 1500)
    }
}