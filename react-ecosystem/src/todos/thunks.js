import { createTodo, removeTodo, loadTodosInProgress, loadTodosSuccess, loadTodosFailure } from './actions';

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

// POST thunk
export const addTodoRequest = text => async (dispatch, getState) => {
    try {
        const body = JSON.stringify({ text }); // Get todo data
        const response = await fetch('http://localhost:8080/todos', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body,
        }); // Make POST call
        const todo = await response.json(); // Get response data from POST API call
        dispatch(createTodo(todo)); // dispatch create to do action
    } catch (e) {
        dispatch(displayAlert(e)); // on error, dispatch alert action with error message
    }
}

// DELETE Thunk
export const removeTodoRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}`, {
            method: 'delete',
        }); // Make DELETE call
        const removedTodo = await response.json(); // Get response data in JSON format from DELETE API call
        dispatch(removeTodo(removedTodo)); // dispatch remove to do action
    } catch (e) {
        dispatch(displayAlert(e)); // on error, dispatch alert action with error message
    }
}

export const displayAlert = text => () => {
    alert(text);
};