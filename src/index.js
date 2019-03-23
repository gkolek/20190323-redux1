import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

import './index.css';
import App from './App';

const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return state + 1
        case DECREMENT_COUNTER:
            return state - 1
        default:
            return state
    }
}

let store = createStore(counterReducer)
console.log('state initial', store.getState())
store.dispatch({
    type: INCREMENT_COUNTER
})
console.log('state after incr. dispatch', store.getState())

store.dispatch({
    type: DECREMENT_COUNTER
})
console.log('state after decr. dispatch', store.getState())

store.dispatch({
    type: DECREMENT_COUNTER
})
console.log('state after 2nd decr. dispatch', store.getState())



ReactDOM.render(<App />, document.getElementById('root'));