import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

import './index.css';
import App from './App';

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return state + 1
        default:
            return state
    }
}

let store = createStore(counterReducer)
console.log('state initial', store.getState())
store.dispatch({
    type: 'INCREMENT_COUNTER'
})
console.log('state after dispatch', store.getState())



ReactDOM.render(<App />, document.getElementById('root'));