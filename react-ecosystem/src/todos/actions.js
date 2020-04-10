// CREATE_TODO Action
export const CREATE_TODO = 'CREATE_TODO'; // Action Type
export const createTodo = text => ({
    type: CREATE_TODO,
    payload: { text }
}); // Action Creator

// REMOVE_TODO Action
export const REMOVE_TODO = 'REMOVE_TODO'; // Action Type
export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text }
}); // Action Creator