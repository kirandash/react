// CREATE_TODO Action
export const CREATE_TODO = 'CREATE_TODO'; // Action Type
export const createTodo = todo => ({
    type: CREATE_TODO,
    payload: { todo }
}); // Action Creator

// REMOVE_TODO Action
export const REMOVE_TODO = 'REMOVE_TODO'; // Action Type
export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text }
}); // Action Creator

// MARK_TODO_AS_COMPLETED Action
export const MARK_TODO_AS_COMPLETED = 'MARK_TODO_AS_COMPLETED'; // Action Type
export const makrTodoAsCompleted = text => ({
    type: MARK_TODO_AS_COMPLETED,
    payload: { text }
}); // Action Creator

/* Todos API Actions Start */

// LOAD_TODOS_IN_PROGRESS Action
export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS'; // Action Type
export const loadTodosInProgress = () => ({
    type: LOAD_TODOS_IN_PROGRESS,
}); // Action Creator

// LOAD_TODOS_SUCCESS Action
export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS'; // Action Type
export const loadTodosSuccess = todos => ({
    type: LOAD_TODOS_SUCCESS,
    payload: { todos }
}); // Action Creator

// LOAD_TODOS_FAILURE Action
export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE'; // Action Type
export const loadTodosFailure = () => ({
    type: LOAD_TODOS_FAILURE,
}); // Action Creator

/* Todos API Actions End */
