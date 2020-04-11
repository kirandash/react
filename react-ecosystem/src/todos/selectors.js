import { createSelector } from 'reselect';

// Get Todos selector
export const getTodos = state => state.todos.data; // if structure of state changes, we don't have to change the mapping in mapStateToProps for every component. All we have to do is just change the code in selectors.js file here and the fns will handle everything else

// Get Todos Loading selector
export const getTodosLoading = state => state.todos.isLoading;

// Get Incomplete Todos selector - From getTodos with reselect
export const getIncompleteTodos = createSelector(
    getTodos,
    // getTodosLoading,
    // (todos, isLoading) => isLoading ? [] : todos.filter(todo => !todo.isCompleted)
    (todos) => todos.filter(todo => !todo.isCompleted) // The last fn will take input from all the selectors mentioned before it, in our case only one getTodos. The output of last fn is the final o/p
); // createSelector accepts multiple selectors. 