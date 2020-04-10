import { CREATE_TODO, REMOVE_TODO, MARK_TODO_AS_COMPLETED } from './actions';

export const todos = (state = [], action) => { // Default state is mentioned as an empty array to avoid any error in case, the state passed is not having any data
    const { type, payload } = action; // Get Action Type and payload from the action (By destructuring)
    switch (type) {
        case CREATE_TODO: { // Note: We could use 'CREATE_TODO' string but it is better to import the constants we created in actions.js file. Since there will be less chance of making a typo
            const { text } = payload;
            const newTodo = {
                text,
                isCompleted: false,
            };
            return state.concat(newTodo); // Note: Concat does not mutate the original state. It is important to remember that in reducers, we should not mutate the original state. Always return a new copy
        }
        case REMOVE_TODO: {
            const { text } = payload;
            return state.filter(todo => todo.text !== text); // Remove todo with text received in payload
        }
        case MARK_TODO_AS_COMPLETED: {
            const { text } = payload;
            return state.map(todo => {
                if(todo.text === text) {
                    return { ...todo, isCompleted: true };
                }
                return todo;
            });
        }
        default: {
            return state;
        } // We will call Todos reducer for all actions. So if the action is not defined in our switch case block, default block will return the state as is
    }
}