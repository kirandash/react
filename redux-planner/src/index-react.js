import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import C from './constants'
import sampleData from './initialState'

const initialState = (localStorage["redux-store"]) ?
    JSON.parse(localStorage["redux-store"]) :
    sampleData

const saveState = () => 
    localStorage["redux-store"] = JSON.stringify(store.getState())

ReactDOM.render(<App />, document.getElementById('react-container'));