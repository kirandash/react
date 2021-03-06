import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux' // A component that we can wrap around any component tree and it will pass sthe redux store in context

import App from './components/App';
import C from './constants'
import sampleData from './initialState'
import storeFactory from './store'
import { addError } from './actions'

const initialState = (localStorage["redux-store"]) ?
    JSON.parse(localStorage["redux-store"]) :
    sampleData // We will load initial state from localStorage or from sampleData

const saveState = () => 
    localStorage["redux-store"] = JSON.stringify(store.getState())

const handleError = error => {
    store.dispatch(
        addError(error.message)
    )
} // To record errors happening globally

const store = storeFactory(initialState)
store.subscribe(saveState)

// Only for dev purpose
window.React = React; // Globally exposing react
window.store = store; // Globally exposing store. So can interact with store from JS console

window.addEventListener("error", handleError)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-container')); // Rendering App Component to DOM

// foo = bar // random error to test error generating