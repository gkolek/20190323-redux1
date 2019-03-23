import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'

// import {inc, dec, counterReducer} from './store/counter'
import counterReducer, { inc, dec, } from './store/counter'
import todosReducer, { add } from './store/todos'
// import todosReducer, { del } from './store/todos'

import './index.css';
import App from './App';


//Store
const store = createStore(
    combineReducers({
        counter: counterReducer,
        todos: todosReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.inc = () => store.dispatch(inc())
window.dec = () => store.dispatch(dec())
window.add = (text) => store.dispatch(add(text))
// window.del = () => store.dispatch(del())


ReactDOM.render(<App />, document.getElementById('root'));