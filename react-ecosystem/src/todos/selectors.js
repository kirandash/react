// Get Todos selector
export const getTodos = state => state.todos.data; // if structure of state changes, we don't have to change the mapping in mapStateToProps for every component. All we have to do is just change the code in selectors.js file here and the fns will handle everything else

// Get Todos Loading selector
export const getTodosLoading = state => state.todos.isLoading;