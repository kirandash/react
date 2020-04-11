import { createSelector } from 'reselect';

// Get Todos selector
export const getTodos = state => state.todos.data || []; // if structure of state changes, we don't have to change the mapping in mapStateToProps for every component. All we have to do is just change the code in selectors.js file here and the fns will handle everything else

// Get Todos Loading selector
export const getTodosLoading = state => state.todos.isLoading;

// Get Incomplete Todos selector - From getTodos with reselect
export const getIncompleteTodos = createSelector(
    getTodos,
    // getTodosLoading,
    // (todos, isLoading) => isLoading ? [] : todos.filter(todo => !todo.isCompleted)
    (todos) => todos.filter(todo => !todo.isCompleted) // The last fn will take input from all the selectors mentioned before it, in our case only one getTodos. The output of last fn is the final o/p
); // createSelector accepts multiple selectors. 

// getCompletedTodos Selector
export const getCompletedTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => todo.isCompleted)
);

// export const getCompletedTodos = state => {
//     const { data:todos } = state.todos;
//     return todos.filter (todo => todo.isCompleted);
// }; // Thi might look the same as getCompletedTodos with createSelector written above but it is not. With a normal fn, the computation will happen all over again when component rerenders. But with createSelector, it does not compute everything when our component re-renders. It computes only the prop in state which has changed from the prev state. Thus, createSelector saves a lot of resource when building large scale applications by limiting the computation to only state which is changing on component rerendering.