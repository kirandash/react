import { loadTodosInProgress, loadTodosSuccess, loadTodosFailure } from './actions';

export const loadTodos = () => async (dispatch, getState) => {
    try {
        dispatch(loadTodosInProgress()); // dispatch in progress action
        const response = await fetch('http://localhost:8080/todos'); // calling todos api
        const todos = await response.json(); // Get the response in JSON format (Mandatory with fetch calls. Not required when we use addons like Axios to do API calls)
        await new Promise(resolve => setTimeout(resolve, 1000)); // creating delay to check isLoading functionality
        dispatch(loadTodosSuccess(todos)); // dispatch success action
    } catch (e) {
        dispatch(loadTodosFailure()); // on error, dispatch failure action
        dispatch(displayAlert(e)); // on error, dispatch alert action with error message
    } // try catch block to catch any error
}

export const displayAlert = text => () => {
    alert(text);
};