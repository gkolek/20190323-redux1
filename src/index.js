import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

import './index.css';
import App from './App';

//Action types
const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

//Actions
const inc = ()=>({
    type: INCREMENT_COUNTER
})
const dec = ()=>({
    type: DECREMENT_COUNTER
})

//Reducer
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return state + 1
        case DECREMENT_COUNTER:
            return state - 2
        default:
            return state
    }
}

//Store
const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.inc = () => store.dispatch(inc())

window.dec = () => store.dispatch(dec())



ReactDOM.render(<App />, document.getElementById('root'));