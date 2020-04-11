import { 
    CREATE_TODO,
    REMOVE_TODO,
    MARK_TODO_AS_COMPLETED,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE,
} from './actions';

export const isLoading = (state = false, action) => {
    const { type } = action;

    switch (type) {
        case LOAD_TODOS_IN_PROGRESS:
            return true;
        case LOAD_TODOS_SUCCESS:
        case LOAD_TODOS_FAILURE:
            return false; // false for both success and failure actions
        default:
            return state;
    }
} // Reducer to return true or false based on actions occuring in our app

export const todos = (state = [], action) => { // Default state is mentioned as an empty array to avoid any error in case, the state passed is not having any data
    const { type, payload } = action; // Get Action Type and payload from the action (By destructuring)
    switch (type) {
        case CREATE_TODO: { // Note: We could use 'CREATE_TODO' string but it is better to import the constants we created in actions.js file. Since there will be less chance of making a typo
            const { todo } = payload;
            // const newTodo = {
            //     text,
            //     isCompleted: false,
            // };
            return state.concat(todo); // Note: Concat does not mutate the original state. It is important to remember that in reducers, we should not mutate the original state. Always return a new copy
        }
        case REMOVE_TODO: {
            const { todo: todoToRemove } = payload; // todo destructured from payload and nick named with todoToRemove as alias
            return state.filter(todo => todo.id !== todoToRemove.id); // Remove todo with id received in payload
        }
        case MARK_TODO_AS_COMPLETED: {
            const { todo: updatedTodo } = payload; // todo destructured from payload and nick named with updatedTodo as alias
            return state.map(todo => {
                // if(todo.text === text) {
                //     return { ...todo, isCompleted: true };
                // }
                if(todo.id === updatedTodo.id) {
                    return updatedTodo;
                }
                return todo;
            });
        }
        case LOAD_TODOS_SUCCESS: {
            const { todos } = payload;
            return todos;
        }
        case LOAD_TODOS_IN_PROGRESS:
        case LOAD_TODOS_FAILURE:
        default: {
            return state;
        } // We will call Todos reducer for all actions. So if the action is not defined in our switch case block, default block will return the state as is
    }
}