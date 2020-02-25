import expect from 'expect';
import storeFactory from './store';

import { addError, clearError, changeSuggestions, clearSuggestions } from './actions';

const store = storeFactory();

store.dispatch(
    addError("something went wrong")
)

expect(store.getState().errors).toEqual(["something went wrong"])

console.log(`addError() Action Creator Works!`);

store.dispatch(
    clearError(0) // Index of error to clear
)

expect(store.getState().errors).toEqual([])

console.log(`clearError() Action Creator Works!`);